import { Graph } from '../graph/graph';
import { Store } from '../state/store';
import type { GraphNode } from '../graph/types';

export function initDetailPanel(graph: Graph, store: Store): void {
  const panel = document.getElementById('detail-panel');
  if (!panel) {
    console.error('Detail panel element not found');
    return;
  }

  // Subscribe to selection events
  store.subscribe('node:selected', (state) => {
    if (state.selectedNodeId) {
      const node = graph.getNode(state.selectedNodeId);
      if (node) {
        renderDetailPanel(node, graph, store, panel);
        panel.classList.remove('hidden');
      }
    }
  });

  store.subscribe('node:deselected', () => {
    panel.classList.add('hidden');
    panel.innerHTML = '';
  });
}

function renderDetailPanel(
  node: GraphNode,
  graph: Graph,
  store: Store,
  panel: HTMLElement
): void {
  panel.innerHTML = '';

  // Create container
  const container = document.createElement('div');
  container.className = 'detail-panel-content';

  // Close button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'detail-panel-close';
  closeBtn.innerHTML = '&times;';
  closeBtn.setAttribute('aria-label', 'Close detail panel');
  closeBtn.onclick = () => store.deselectNode();
  container.appendChild(closeBtn);

  // Render content based on entity type
  switch (node.type) {
    case 'problem':
      renderProblemDetail(node, graph, store, container);
      break;
    case 'model':
      renderModelDetail(node, graph, store, container);
      break;
    case 'mechanism':
      renderMechanismDetail(node, graph, store, container);
      break;
    case 'meta_challenge':
      renderMetaChallengeDetail(node, graph, store, container);
      break;
    case 'foundation':
      renderFoundationDetail(node, graph, store, container);
      break;
    case 'implication':
      renderImplicationDetail(node, graph, store, container);
      break;
    case 'claim':
      renderClaimDetail(node, graph, store, container);
      break;
    case 'source':
      renderSourceDetail(node, graph, store, container);
      break;
    case 'cluster':
      renderClusterDetail(node, graph, store, container);
      break;
  }

  panel.appendChild(container);
}

function renderProblemDetail(
  node: GraphNode,
  graph: Graph,
  store: Store,
  container: HTMLElement
): void {
  // Header
  const header = document.createElement('div');
  header.className = 'detail-header';

  const title = document.createElement('h2');
  title.textContent = node.displayName;
  header.appendChild(title);

  const badge = createBadge(node.secondaryId, 'secondary-id');
  header.appendChild(badge);

  container.appendChild(header);

  const attrs = node.attributes;

  // Scores
  if (attrs.scores) {
    const scoresSection = createSection('Scores');
    const scoresList = document.createElement('div');
    scoresList.className = 'scores-grid';

    const scoreItems = [
      { label: 'Frequency', value: attrs.scores.frequency, max: 5 },
      { label: 'Differentiation', value: attrs.scores.differentiation, max: 5 },
      { label: 'Connectedness', value: attrs.scores.connectedness, max: 5 },
      { label: 'Total', value: attrs.scores.total, max: 15 }
    ];

    scoreItems.forEach(item => {
      const scoreItem = document.createElement('div');
      scoreItem.className = 'score-item';
      scoreItem.innerHTML = `<span class="score-label">${item.label}</span><span class="score-value">${item.value}/${item.max}</span>`;
      scoresList.appendChild(scoreItem);
    });

    scoresSection.appendChild(scoresList);
    container.appendChild(scoresSection);
  }

  // Classification
  const classSection = createSection('Classification');
  const classContent = document.createElement('div');
  classContent.className = 'classification-content';

  if (attrs.evidence_tier !== undefined) {
    const tierBadge = createBadge(`Tier ${attrs.evidence_tier}`, 'evidence-tier');
    classContent.appendChild(tierBadge);
  }

  if (attrs.role) {
    const roleBadge = createBadge(attrs.role, 'role');
    classContent.appendChild(roleBadge);
  }

  if (attrs.cluster) {
    const clusterNode = graph.getNode(attrs.cluster);
    if (clusterNode) {
      const clusterLink = createEntityLink(clusterNode, store);
      classContent.appendChild(clusterLink);
    }
  }

  classSection.appendChild(classContent);
  container.appendChild(classSection);

  // Mechanisms
  const mechanismEdges = graph.getEdgesFrom(node.id, 'explained_by');
  if (mechanismEdges.length > 0) {
    const mechSection = createSection('Mechanisms');
    const mechList = document.createElement('ul');
    mechList.className = 'entity-list';

    mechanismEdges.forEach(edge => {
      const mechNode = graph.getNode(edge.target);
      if (mechNode) {
        const li = document.createElement('li');
        li.appendChild(createEntityLink(mechNode, store));
        mechList.appendChild(li);
      }
    });

    mechSection.appendChild(mechList);
    container.appendChild(mechSection);
  }

  // Claims (evidenced_by edges)
  const claimEdges = graph.getEdgesFrom(node.id, 'evidenced_by');
  if (claimEdges.length > 0) {
    const claimsSection = createSection('Claims');
    const claimsList = document.createElement('ul');
    claimsList.className = 'entity-list';

    claimEdges.forEach(edge => {
      const claimNode = graph.getNode(edge.target);
      if (claimNode) {
        const li = document.createElement('li');
        const claimType = claimNode.attributes.type || 'observation';
        const typeBadge = createBadge(claimType, `claim-type-${claimType}`);
        li.appendChild(typeBadge);
        li.appendChild(createEntityLink(claimNode, store));
        claimsList.appendChild(li);
      }
    });

    claimsSection.appendChild(claimsList);
    container.appendChild(claimsSection);
  }

  // Description
  if (attrs.plain_language) {
    const descSection = createSection('Description');
    const descText = document.createElement('p');
    descText.className = 'description-text';
    descText.textContent = attrs.plain_language;
    descSection.appendChild(descText);
    container.appendChild(descSection);
  }
}

function renderModelDetail(
  node: GraphNode,
  graph: Graph,
  store: Store,
  container: HTMLElement
): void {
  // Header
  const header = document.createElement('div');
  header.className = 'detail-header';

  const title = document.createElement('h2');
  title.textContent = node.displayName;
  header.appendChild(title);

  const badge = createBadge(node.secondaryId, 'secondary-id');
  header.appendChild(badge);

  container.appendChild(header);

  const attrs = node.attributes;

  // Description
  if (attrs.plain_language) {
    const descSection = createSection('Description');
    const descText = document.createElement('p');
    descText.className = 'description-text';
    descText.textContent = attrs.plain_language;
    descSection.appendChild(descText);
    container.appendChild(descSection);
  }

  // Dimensions
  if (attrs.dimensions) {
    const dimSection = createSection('Dimensions');
    const dimGrid = document.createElement('div');
    dimGrid.className = 'dimensions-grid';

    const dimensions = [
      { label: 'Initiation', value: attrs.dimensions.initiation },
      { label: 'Effort', value: attrs.dimensions.effort },
      { label: 'Timing', value: attrs.dimensions.timing },
      { label: 'Continuity', value: attrs.dimensions.continuity }
    ];

    dimensions.forEach(dim => {
      const dimItem = document.createElement('div');
      dimItem.className = 'dimension-item';
      dimItem.innerHTML = `<span class="dim-label">${dim.label}</span><span class="dim-value">${dim.value}</span>`;
      dimGrid.appendChild(dimItem);
    });

    dimSection.appendChild(dimGrid);
    container.appendChild(dimSection);
  }

  // Retention risk & habit burden
  const metaSection = createSection('Behavioral Characteristics');
  const metaContent = document.createElement('div');
  metaContent.className = 'meta-content';

  if (attrs.retention_risk) {
    const riskItem = document.createElement('div');
    riskItem.innerHTML = `<strong>Retention Risk:</strong> ${attrs.retention_risk}`;
    metaContent.appendChild(riskItem);
  }

  if (attrs.habit_burden) {
    const burdenItem = document.createElement('div');
    burdenItem.innerHTML = `<strong>Habit Burden:</strong> ${attrs.habit_burden}`;
    metaContent.appendChild(burdenItem);
  }

  metaSection.appendChild(metaContent);
  container.appendChild(metaSection);

  // Compatible problems
  const compatEdges = graph.getEdgesTo(node.id, 'compatible_with');
  if (compatEdges.length > 0) {
    const probSection = createSection('Compatible Problems');
    const probList = document.createElement('ul');
    probList.className = 'entity-list';

    compatEdges.forEach(edge => {
      const probNode = graph.getNode(edge.source);
      if (probNode) {
        const li = document.createElement('li');
        const rating = edge.attributes.rating;
        if (rating) {
          const ratingBadge = createBadge(rating, `rating-${rating}`);
          li.appendChild(ratingBadge);
        }
        li.appendChild(createEntityLink(probNode, store));
        probList.appendChild(li);
      }
    });

    probSection.appendChild(probList);
    container.appendChild(probSection);
  }

  // Meta-challenge vulnerabilities
  const vulnEdges = graph.getEdgesFrom(node.id, 'vulnerable_to');
  if (vulnEdges.length > 0) {
    const vulnSection = createSection('Vulnerabilities');
    const vulnList = document.createElement('ul');
    vulnList.className = 'entity-list';

    vulnEdges.forEach(edge => {
      const mcNode = graph.getNode(edge.target);
      if (mcNode) {
        const li = document.createElement('li');
        const rating = edge.attributes.rating;
        if (rating) {
          const ratingBadge = createBadge(rating, `severity-${rating}`);
          li.appendChild(ratingBadge);
        }
        li.appendChild(createEntityLink(mcNode, store));
        if (edge.attributes.narrative) {
          const narrative = document.createElement('span');
          narrative.className = 'narrative-text';
          narrative.textContent = ` — ${edge.attributes.narrative}`;
          li.appendChild(narrative);
        }
        vulnList.appendChild(li);
      }
    });

    vulnSection.appendChild(vulnList);
    container.appendChild(vulnSection);
  }

  // Required foundations
  const reqEdges = graph.getEdgesFrom(node.id, 'requires');
  if (reqEdges.length > 0) {
    const reqSection = createSection('Required Foundations');
    const reqList = document.createElement('ul');
    reqList.className = 'entity-list';

    reqEdges.forEach(edge => {
      const fdnNode = graph.getNode(edge.target);
      if (fdnNode) {
        const li = document.createElement('li');
        const strength = edge.attributes.strength;
        if (strength) {
          const strengthBadge = createBadge(strength, 'foundation-strength');
          li.appendChild(strengthBadge);
        }
        li.appendChild(createEntityLink(fdnNode, store));
        reqList.appendChild(li);
      }
    });

    reqSection.appendChild(reqList);
    container.appendChild(reqSection);
  }
}

function renderMechanismDetail(
  node: GraphNode,
  graph: Graph,
  store: Store,
  container: HTMLElement
): void {
  // Header
  const header = document.createElement('div');
  header.className = 'detail-header';

  const title = document.createElement('h2');
  title.textContent = node.displayName;
  header.appendChild(title);

  const badge = createBadge(node.secondaryId, 'secondary-id');
  header.appendChild(badge);

  container.appendChild(header);

  const attrs = node.attributes;

  // Description
  if (attrs.plain_language) {
    const descSection = createSection('Description');
    const descText = document.createElement('p');
    descText.className = 'description-text';
    descText.textContent = attrs.plain_language;
    descSection.appendChild(descText);
    container.appendChild(descSection);
  }

  // Affects problems (reverse of explained_by)
  const explainEdges = graph.getEdgesTo(node.id, 'explained_by');
  if (explainEdges.length > 0) {
    const probSection = createSection('Affects Problems');
    const probList = document.createElement('ul');
    probList.className = 'entity-list';

    explainEdges.forEach(edge => {
      const probNode = graph.getNode(edge.source);
      if (probNode) {
        const li = document.createElement('li');
        li.appendChild(createEntityLink(probNode, store));
        probList.appendChild(li);
      }
    });

    probSection.appendChild(probList);
    container.appendChild(probSection);
  }

  // Favours models
  const favoursEdges = graph.getEdgesFrom(node.id, 'favours');
  if (favoursEdges.length > 0) {
    const favoursSection = createSection('Favours Models');
    const favoursList = document.createElement('ul');
    favoursList.className = 'entity-list';

    favoursEdges.forEach(edge => {
      const modelNode = graph.getNode(edge.target);
      if (modelNode) {
        const li = document.createElement('li');
        li.appendChild(createEntityLink(modelNode, store));
        favoursList.appendChild(li);
      }
    });

    favoursSection.appendChild(favoursList);
    container.appendChild(favoursSection);
  }

  // Disfavours models
  const disfavoursEdges = graph.getEdgesFrom(node.id, 'disfavours');
  if (disfavoursEdges.length > 0) {
    const disfavoursSection = createSection('Disfavours Models');
    const disfavoursList = document.createElement('ul');
    disfavoursList.className = 'entity-list';

    disfavoursEdges.forEach(edge => {
      const modelNode = graph.getNode(edge.target);
      if (modelNode) {
        const li = document.createElement('li');
        li.appendChild(createEntityLink(modelNode, store));
        disfavoursList.appendChild(li);
      }
    });

    disfavoursSection.appendChild(disfavoursList);
    container.appendChild(disfavoursSection);
  }

  // Evidence claims
  const claimEdges = graph.getEdgesFrom(node.id, 'evidenced_by');
  if (claimEdges.length > 0) {
    const claimsSection = createSection('Evidence');
    const claimsList = document.createElement('ul');
    claimsList.className = 'entity-list';

    claimEdges.forEach(edge => {
      const claimNode = graph.getNode(edge.target);
      if (claimNode) {
        const li = document.createElement('li');
        li.appendChild(createEntityLink(claimNode, store));
        claimsList.appendChild(li);
      }
    });

    claimsSection.appendChild(claimsList);
    container.appendChild(claimsSection);
  }
}

function renderMetaChallengeDetail(
  node: GraphNode,
  graph: Graph,
  store: Store,
  container: HTMLElement
): void {
  // Header
  const header = document.createElement('div');
  header.className = 'detail-header';

  const title = document.createElement('h2');
  title.textContent = node.displayName;
  header.appendChild(title);

  const badge = createBadge(node.secondaryId, 'secondary-id');
  header.appendChild(badge);

  container.appendChild(header);

  const attrs = node.attributes;

  // Severity
  if (attrs.severity) {
    const sevBadge = createBadge(attrs.severity, 'severity');
    container.appendChild(sevBadge);
  }

  // Description
  if (attrs.plain_language) {
    const descSection = createSection('Description');
    const descText = document.createElement('p');
    descText.className = 'description-text';
    descText.textContent = attrs.plain_language;
    descSection.appendChild(descText);
    container.appendChild(descSection);
  }

  // Vulnerable models (reverse of vulnerable_to)
  const vulnEdges = graph.getEdgesTo(node.id, 'vulnerable_to');
  if (vulnEdges.length > 0) {
    const modelsSection = createSection('Affects Models');
    const modelsList = document.createElement('ul');
    modelsList.className = 'entity-list';

    vulnEdges.forEach(edge => {
      const modelNode = graph.getNode(edge.source);
      if (modelNode) {
        const li = document.createElement('li');
        const rating = edge.attributes.rating;
        if (rating) {
          const ratingBadge = createBadge(rating, `severity-${rating}`);
          li.appendChild(ratingBadge);
        }
        li.appendChild(createEntityLink(modelNode, store));
        modelsList.appendChild(li);
      }
    });

    modelsSection.appendChild(modelsList);
    container.appendChild(modelsSection);
  }

  // Amplifies other meta-challenges
  const amplifiesEdges = graph.getEdgesFrom(node.id, 'amplifies');
  if (amplifiesEdges.length > 0) {
    const ampSection = createSection('Amplifies');
    const ampList = document.createElement('ul');
    ampList.className = 'entity-list';

    amplifiesEdges.forEach(edge => {
      const mcNode = graph.getNode(edge.target);
      if (mcNode) {
        const li = document.createElement('li');
        li.appendChild(createEntityLink(mcNode, store));
        ampList.appendChild(li);
      }
    });

    ampSection.appendChild(ampList);
    container.appendChild(ampSection);
  }

  // Amplified by other meta-challenges
  const amplifiedByEdges = graph.getEdgesTo(node.id, 'amplifies');
  if (amplifiedByEdges.length > 0) {
    const ampBySection = createSection('Amplified By');
    const ampByList = document.createElement('ul');
    ampByList.className = 'entity-list';

    amplifiedByEdges.forEach(edge => {
      const mcNode = graph.getNode(edge.source);
      if (mcNode) {
        const li = document.createElement('li');
        li.appendChild(createEntityLink(mcNode, store));
        ampByList.appendChild(li);
      }
    });

    ampBySection.appendChild(ampByList);
    container.appendChild(ampBySection);
  }

  // Claims
  const claimEdges = graph.getEdgesFrom(node.id, 'evidenced_by');
  if (claimEdges.length > 0) {
    const claimsSection = createSection('Claims');
    const claimsList = document.createElement('ul');
    claimsList.className = 'entity-list';

    claimEdges.forEach(edge => {
      const claimNode = graph.getNode(edge.target);
      if (claimNode) {
        const li = document.createElement('li');
        li.appendChild(createEntityLink(claimNode, store));
        claimsList.appendChild(li);
      }
    });

    claimsSection.appendChild(claimsList);
    container.appendChild(claimsSection);
  }
}

function renderFoundationDetail(
  node: GraphNode,
  graph: Graph,
  store: Store,
  container: HTMLElement
): void {
  // Header
  const header = document.createElement('div');
  header.className = 'detail-header';

  const title = document.createElement('h2');
  title.textContent = node.displayName;
  header.appendChild(title);

  const badge = createBadge(node.secondaryId, 'secondary-id');
  header.appendChild(badge);

  container.appendChild(header);

  const attrs = node.attributes;

  // Purpose
  if (attrs.purpose) {
    const purposeSection = createSection('Purpose');
    const purposeText = document.createElement('p');
    purposeText.className = 'description-text';
    purposeText.textContent = attrs.purpose;
    purposeSection.appendChild(purposeText);
    container.appendChild(purposeSection);
  }

  // Complexity & Build/Buy
  const metaSection = createSection('Characteristics');
  const metaContent = document.createElement('div');
  metaContent.className = 'meta-content';

  if (attrs.complexity) {
    const complexityBadge = createBadge(attrs.complexity, 'complexity');
    metaContent.appendChild(complexityBadge);
  }

  if (attrs.build_or_buy) {
    const buildBuyBadge = createBadge(attrs.build_or_buy, 'build-buy');
    metaContent.appendChild(buildBuyBadge);
  }

  metaSection.appendChild(metaContent);
  container.appendChild(metaSection);

  // Required by models (reverse of requires)
  const requiredByEdges = graph.getEdgesTo(node.id, 'requires');
  if (requiredByEdges.length > 0) {
    const requiredModels = requiredByEdges.filter(e => e.attributes.strength === 'required');
    const optionalModels = requiredByEdges.filter(e => e.attributes.strength !== 'required');

    if (requiredModels.length > 0) {
      const reqSection = createSection('Required By');
      const reqList = document.createElement('ul');
      reqList.className = 'entity-list';

      requiredModels.forEach(edge => {
        const modelNode = graph.getNode(edge.source);
        if (modelNode) {
          const li = document.createElement('li');
          li.appendChild(createEntityLink(modelNode, store));
          reqList.appendChild(li);
        }
      });

      reqSection.appendChild(reqList);
      container.appendChild(reqSection);
    }

    if (optionalModels.length > 0) {
      const optSection = createSection('Optional For');
      const optList = document.createElement('ul');
      optList.className = 'entity-list';

      optionalModels.forEach(edge => {
        const modelNode = graph.getNode(edge.source);
        if (modelNode) {
          const li = document.createElement('li');
          li.appendChild(createEntityLink(modelNode, store));
          optList.appendChild(li);
        }
      });

      optSection.appendChild(optList);
      container.appendChild(optSection);
    }
  }

  // Specific capabilities
  if (attrs.capabilities && Array.isArray(attrs.capabilities)) {
    const capSection = createSection('Capabilities');
    const capList = document.createElement('ul');
    capList.className = 'capabilities-list';

    attrs.capabilities.forEach((cap: string) => {
      const li = document.createElement('li');
      li.textContent = cap;
      capList.appendChild(li);
    });

    capSection.appendChild(capList);
    container.appendChild(capSection);
  }
}

function renderImplicationDetail(
  node: GraphNode,
  graph: Graph,
  store: Store,
  container: HTMLElement
): void {
  // Header
  const header = document.createElement('div');
  header.className = 'detail-header';

  const title = document.createElement('h2');
  title.textContent = node.displayName;
  header.appendChild(title);

  const badge = createBadge(node.secondaryId, 'secondary-id');
  header.appendChild(badge);

  container.appendChild(header);

  const attrs = node.attributes;

  // Type
  if (attrs.type) {
    const typeBadge = createBadge(attrs.type, 'implication-type');
    container.appendChild(typeBadge);
  }

  // Statement
  if (attrs.statement) {
    const stmtSection = createSection('Statement');
    const stmtText = document.createElement('p');
    stmtText.className = 'description-text';
    stmtText.textContent = attrs.statement;
    stmtSection.appendChild(stmtText);
    container.appendChild(stmtSection);
  }

  // Evidence
  const evidenceEdges = graph.getEdgesFrom(node.id, 'evidenced_by');
  if (evidenceEdges.length > 0) {
    const evidenceSection = createSection('Evidence');
    const evidenceList = document.createElement('ul');
    evidenceList.className = 'entity-list';

    evidenceEdges.forEach(edge => {
      const claimNode = graph.getNode(edge.target);
      if (claimNode) {
        const li = document.createElement('li');
        li.appendChild(createEntityLink(claimNode, store));
        evidenceList.appendChild(li);
      }
    });

    evidenceSection.appendChild(evidenceList);
    container.appendChild(evidenceSection);
  }

  // Affects (generic affects edges)
  const affectsEdges = graph.getEdgesFrom(node.id, 'affects');
  if (affectsEdges.length > 0) {
    const affectsSection = createSection('Affects');
    const affectsList = document.createElement('ul');
    affectsList.className = 'entity-list';

    affectsEdges.forEach(edge => {
      const targetNode = graph.getNode(edge.target);
      if (targetNode) {
        const li = document.createElement('li');
        li.appendChild(createEntityLink(targetNode, store));
        affectsList.appendChild(li);
      }
    });

    affectsSection.appendChild(affectsList);
    container.appendChild(affectsSection);
  }
}

function renderClaimDetail(
  node: GraphNode,
  graph: Graph,
  store: Store,
  container: HTMLElement
): void {
  // Header
  const header = document.createElement('div');
  header.className = 'detail-header';

  const title = document.createElement('h2');
  title.textContent = node.secondaryId;
  header.appendChild(title);

  const attrs = node.attributes;

  if (attrs.type) {
    const typeBadge = createBadge(attrs.type, `claim-type-${attrs.type}`);
    header.appendChild(typeBadge);
  }

  container.appendChild(header);

  // Statement
  if (attrs.statement) {
    const stmtSection = createSection('Statement');
    const stmtText = document.createElement('p');
    stmtText.className = 'description-text';
    stmtText.textContent = attrs.statement;
    stmtSection.appendChild(stmtText);
    container.appendChild(stmtSection);
  }

  // Sources
  const sourceEdges = graph.getEdgesFrom(node.id, 'cites');
  if (sourceEdges.length > 0) {
    const sourcesSection = createSection('Sources');
    const sourcesList = document.createElement('ul');
    sourcesList.className = 'entity-list';

    sourceEdges.forEach(edge => {
      const sourceNode = graph.getNode(edge.target);
      if (sourceNode) {
        const li = document.createElement('li');
        li.appendChild(createEntityLink(sourceNode, store));
        sourcesList.appendChild(li);
      }
    });

    sourcesSection.appendChild(sourcesList);
    container.appendChild(sourcesSection);
  }

  // Supports other claims
  const supportsEdges = graph.getEdgesFrom(node.id, 'supports');
  if (supportsEdges.length > 0) {
    const supportsSection = createSection('Supports');
    const supportsList = document.createElement('ul');
    supportsList.className = 'entity-list';

    supportsEdges.forEach(edge => {
      const claimNode = graph.getNode(edge.target);
      if (claimNode) {
        const li = document.createElement('li');
        li.appendChild(createEntityLink(claimNode, store));
        supportsList.appendChild(li);
      }
    });

    supportsSection.appendChild(supportsList);
    container.appendChild(supportsSection);
  }

  // Supported by claims
  const supportedByEdges = graph.getEdgesTo(node.id, 'supports');
  if (supportedByEdges.length > 0) {
    const supportedBySection = createSection('Supported By');
    const supportedByList = document.createElement('ul');
    supportedByList.className = 'entity-list';

    supportedByEdges.forEach(edge => {
      const claimNode = graph.getNode(edge.source);
      if (claimNode) {
        const li = document.createElement('li');
        li.appendChild(createEntityLink(claimNode, store));
        supportedByList.appendChild(li);
      }
    });

    supportedBySection.appendChild(supportedByList);
    container.appendChild(supportedBySection);
  }

  // Derived from claims
  const derivedEdges = graph.getEdgesFrom(node.id, 'derived_from');
  if (derivedEdges.length > 0) {
    const derivedSection = createSection('Depends On');
    const derivedList = document.createElement('ul');
    derivedList.className = 'entity-list';

    derivedEdges.forEach(edge => {
      const claimNode = graph.getNode(edge.target);
      if (claimNode) {
        const li = document.createElement('li');
        li.appendChild(createEntityLink(claimNode, store));
        derivedList.appendChild(li);
      }
    });

    derivedSection.appendChild(derivedList);
    container.appendChild(derivedSection);
  }
}

function renderSourceDetail(
  node: GraphNode,
  graph: Graph,
  store: Store,
  container: HTMLElement
): void {
  // Header
  const header = document.createElement('div');
  header.className = 'detail-header';

  const title = document.createElement('h2');
  title.textContent = node.displayName;
  header.appendChild(title);

  const badge = createBadge(node.secondaryId, 'secondary-id');
  header.appendChild(badge);

  container.appendChild(header);

  const attrs = node.attributes;

  // Type & Evidence tier
  const metaSection = createSection('Classification');
  const metaContent = document.createElement('div');
  metaContent.className = 'meta-content';

  if (attrs.type) {
    const typeBadge = createBadge(attrs.type, 'source-type');
    metaContent.appendChild(typeBadge);
  }

  if (attrs.evidence_tier) {
    const tierBadge = createBadge(attrs.evidence_tier, 'evidence-tier');
    metaContent.appendChild(tierBadge);
  }

  metaSection.appendChild(metaContent);
  container.appendChild(metaSection);

  // URL
  if (attrs.url) {
    const urlSection = createSection('Link');
    const urlLink = document.createElement('a');
    urlLink.href = attrs.url;
    urlLink.target = '_blank';
    urlLink.rel = 'noopener noreferrer';
    urlLink.className = 'external-link';
    urlLink.textContent = 'View Source';
    urlSection.appendChild(urlLink);
    container.appendChild(urlSection);
  }

  // Cited in claims (reverse of cites)
  const citedInEdges = graph.getEdgesTo(node.id, 'cites');
  if (citedInEdges.length > 0) {
    const citedSection = createSection('Cited In');
    const citedList = document.createElement('ul');
    citedList.className = 'entity-list';

    citedInEdges.forEach(edge => {
      const claimNode = graph.getNode(edge.source);
      if (claimNode) {
        const li = document.createElement('li');
        li.appendChild(createEntityLink(claimNode, store));
        citedList.appendChild(li);
      }
    });

    citedSection.appendChild(citedList);
    container.appendChild(citedSection);
  }

  // Limitations
  if (attrs.limitations) {
    const limSection = createSection('Limitations');
    const limText = document.createElement('p');
    limText.className = 'description-text';
    limText.textContent = attrs.limitations;
    limSection.appendChild(limText);
    container.appendChild(limSection);
  }
}

function renderClusterDetail(
  node: GraphNode,
  graph: Graph,
  store: Store,
  container: HTMLElement
): void {
  // Header
  const header = document.createElement('div');
  header.className = 'detail-header';

  const title = document.createElement('h2');
  title.textContent = node.displayName;
  header.appendChild(title);

  const badge = createBadge(node.secondaryId, 'secondary-id');
  header.appendChild(badge);

  container.appendChild(header);

  const attrs = node.attributes;

  // Type
  if (attrs.type) {
    const typeBadge = createBadge(attrs.type, 'cluster-type');
    container.appendChild(typeBadge);
  }

  // Hub problem
  if (attrs.hub) {
    const hubNode = graph.getNode(attrs.hub);
    if (hubNode) {
      const hubSection = createSection('Hub Problem');
      const hubLink = createEntityLink(hubNode, store);
      hubSection.appendChild(hubLink);
      container.appendChild(hubSection);
    }
  }

  // Member problems (reverse of belongs_to)
  const memberEdges = graph.getEdgesTo(node.id, 'belongs_to');
  if (memberEdges.length > 0) {
    const membersSection = createSection('Member Problems');
    const membersList = document.createElement('ul');
    membersList.className = 'entity-list';

    memberEdges.forEach(edge => {
      const probNode = graph.getNode(edge.source);
      if (probNode) {
        const li = document.createElement('li');
        const role = edge.attributes.role;
        if (role) {
          const roleBadge = createBadge(role, 'role');
          li.appendChild(roleBadge);
        }
        li.appendChild(createEntityLink(probNode, store));
        membersList.appendChild(li);
      }
    });

    membersSection.appendChild(membersList);
    container.appendChild(membersSection);
  }
}

// Helper functions

function createSection(title: string): HTMLElement {
  const section = document.createElement('div');
  section.className = 'detail-section';

  const heading = document.createElement('h3');
  heading.className = 'section-heading';
  heading.textContent = title;
  section.appendChild(heading);

  return section;
}

function createBadge(text: string, className: string): HTMLElement {
  const badge = document.createElement('span');
  badge.className = `badge ${className}`;
  badge.textContent = text;
  return badge;
}

function createEntityLink(node: GraphNode, store: Store): HTMLElement {
  const link = document.createElement('button');
  link.className = 'entity-link';
  link.textContent = node.displayName;
  link.type = 'button';
  link.onclick = () => store.selectNode(node.id);
  return link;
}
