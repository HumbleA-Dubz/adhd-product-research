import type { EntityType } from '../graph/types';

// Escape stack action types
export type EscapeAction =
  | { type: 'close_detail' }
  | { type: 'clear_preset' }
  | { type: 'close_search' }
  | { type: 'close_matrix' }    // Phase 2
  | { type: 'exit_refocus' };   // Phase 2

export interface AppState {
  mode: 'BROWSE' | 'DETAIL' | 'REFOCUS';
  selectedNodeId: string | null;
  refocusNodeId: string | null;         // Phase 2
  activePreset: string | null;
  presetParam: string | null;
  matrixView: 'compatibility' | 'vulnerability' | 'foundation' | null;  // Phase 2
  pinnedNodeIds: string[];              // Phase 3
  breadcrumb: string[];                 // Phase 2
  visibleEntityTypes: Set<EntityType>;  // Phase 2
  clusterFilter: string | null;        // Phase 2
  viewport: { x: number; y: number; zoom: number };
  escapeStack: EscapeAction[];
  searchOpen: boolean;
  hoveredNodeId: string | null;
}

export type StateEvent =
  | 'state:changed'
  | 'node:selected'
  | 'node:deselected'
  | 'preset:activated'
  | 'preset:cleared'
  | 'mode:changed'
  | 'viewport:changed'
  | 'search:toggled'
  | 'node:hovered'
  | 'node:unhovered';

type Listener = (state: AppState) => void;

function createInitialState(): AppState {
  return {
    mode: 'BROWSE',
    selectedNodeId: null,
    refocusNodeId: null,
    activePreset: null,
    presetParam: null,
    matrixView: null,
    pinnedNodeIds: [],
    breadcrumb: [],
    visibleEntityTypes: new Set([
      'problem', 'mechanism', 'model', 'meta_challenge',
      'foundation', 'implication', 'claim', 'source', 'cluster'
    ]),
    clusterFilter: null,
    viewport: { x: 0, y: 0, zoom: 1 },
    escapeStack: [],
    searchOpen: false,
    hoveredNodeId: null,
  };
}

export class Store {
  private state: AppState;
  private listeners: Map<StateEvent | '*', Set<Listener>>;

  constructor() {
    this.state = createInitialState();
    this.listeners = new Map();
  }

  getState(): Readonly<AppState> {
    return this.state;
  }

  subscribe(event: StateEvent | '*', listener: Listener): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(listener);

    // Return unsubscribe function
    return () => {
      this.listeners.get(event)?.delete(listener);
    };
  }

  private emit(event: StateEvent) {
    const listeners = this.listeners.get(event);
    if (listeners) {
      for (const fn of listeners) fn(this.state);
    }
    // Also notify wildcard listeners
    const wildcards = this.listeners.get('*');
    if (wildcards) {
      for (const fn of wildcards) fn(this.state);
    }
  }

  private pushEscape(action: EscapeAction) {
    this.state.escapeStack = [...this.state.escapeStack, action];
  }

  private popEscape(): EscapeAction | undefined {
    const stack = [...this.state.escapeStack];
    const action = stack.pop();
    this.state.escapeStack = stack;
    return action;
  }

  // --- Actions ---

  selectNode(nodeId: string) {
    this.state.selectedNodeId = nodeId;
    this.state.mode = 'DETAIL';
    // Replace any existing close_detail on the stack
    this.state.escapeStack = this.state.escapeStack.filter(a => a.type !== 'close_detail');
    this.pushEscape({ type: 'close_detail' });
    this.emit('node:selected');
    this.emit('mode:changed');
  }

  deselectNode() {
    this.state.selectedNodeId = null;
    this.state.mode = 'BROWSE';
    this.state.escapeStack = this.state.escapeStack.filter(a => a.type !== 'close_detail');
    this.emit('node:deselected');
    this.emit('mode:changed');
  }

  activatePreset(name: string, param?: string) {
    // Clear previous preset escape action
    this.state.escapeStack = this.state.escapeStack.filter(a => a.type !== 'clear_preset');
    this.state.activePreset = name;
    this.state.presetParam = param ?? null;
    this.pushEscape({ type: 'clear_preset' });
    this.emit('preset:activated');
  }

  clearPreset() {
    this.state.activePreset = null;
    this.state.presetParam = null;
    this.state.escapeStack = this.state.escapeStack.filter(a => a.type !== 'clear_preset');
    this.emit('preset:cleared');
  }

  hoverNode(nodeId: string) {
    this.state.hoveredNodeId = nodeId;
    this.emit('node:hovered');
  }

  unhoverNode() {
    this.state.hoveredNodeId = null;
    this.emit('node:unhovered');
  }

  toggleSearch() {
    this.state.searchOpen = !this.state.searchOpen;
    if (this.state.searchOpen) {
      this.pushEscape({ type: 'close_search' });
    } else {
      this.state.escapeStack = this.state.escapeStack.filter(a => a.type !== 'close_search');
    }
    this.emit('search:toggled');
  }

  updateViewport(x: number, y: number, zoom: number) {
    this.state.viewport = { x, y, zoom };
    this.emit('viewport:changed');
  }

  escape() {
    const action = this.popEscape();
    if (!action) return;

    switch (action.type) {
      case 'close_search':
        this.state.searchOpen = false;
        this.emit('search:toggled');
        break;
      case 'close_detail':
        this.state.selectedNodeId = null;
        this.state.mode = 'BROWSE';
        this.emit('node:deselected');
        this.emit('mode:changed');
        break;
      case 'clear_preset':
        this.state.activePreset = null;
        this.state.presetParam = null;
        this.emit('preset:cleared');
        break;
      case 'close_matrix':
        this.state.matrixView = null;
        break;
      case 'exit_refocus':
        this.state.refocusNodeId = null;
        this.state.mode = this.state.selectedNodeId ? 'DETAIL' : 'BROWSE';
        this.emit('mode:changed');
        break;
    }
  }

  reset() {
    const fresh = createInitialState();
    this.state.mode = fresh.mode;
    this.state.selectedNodeId = fresh.selectedNodeId;
    this.state.refocusNodeId = fresh.refocusNodeId;
    this.state.activePreset = fresh.activePreset;
    this.state.presetParam = fresh.presetParam;
    this.state.matrixView = fresh.matrixView;
    this.state.escapeStack = fresh.escapeStack;
    this.state.searchOpen = fresh.searchOpen;
    this.state.hoveredNodeId = fresh.hoveredNodeId;
    this.emit('node:deselected');
    this.emit('preset:cleared');
    this.emit('mode:changed');
    this.emit('search:toggled');
  }
}
