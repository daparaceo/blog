(function () {
  const body = document.querySelector('[data-glossary-body]');
  if (!body) return;

  const source = body.dataset.glossarySource;
  if (!source) return;

  const excludedSelector = 'a, button, code, pre, script, style, .glossary-tip';
  const maxTotal = 20;
  const maxPerTerm = 2;
  let activeTooltip = null;

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function makePattern(term) {
    return new RegExp(`(^|[^A-Za-z0-9])(${escapeRegExp(term)})(?![A-Za-z0-9])`, 'i');
  }

  function closeTooltip() {
    activeTooltip?.remove();
    activeTooltip = null;
  }

  function openTooltip(trigger, item) {
    closeTooltip();

    const tooltip = document.createElement('div');
    tooltip.className = 'glossary-tooltip';
    tooltip.setAttribute('role', 'dialog');
    tooltip.innerHTML = `
      <strong>${item.title}</strong>
      <p>${item.description}</p>
      ${item.example ? `<p class="glossary-tooltip-example">${item.example}</p>` : ''}
    `;
    document.body.appendChild(tooltip);

    const rect = trigger.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const left = Math.min(
      Math.max(12, rect.left + window.scrollX),
      window.scrollX + document.documentElement.clientWidth - tooltipRect.width - 12
    );
    const top = rect.bottom + window.scrollY + 8;

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    activeTooltip = tooltip;
  }

  function createTrigger(item) {
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'glossary-tip';
    trigger.setAttribute('aria-label', `${item.title} 설명`);
    trigger.textContent = 'ⓘ';
    trigger.addEventListener('click', (event) => {
      event.stopPropagation();
      openTooltip(trigger, item);
    });
    return trigger;
  }

  function markTerm(node, item, pattern) {
    const text = node.nodeValue;
    const match = text.match(pattern);
    if (!match) return false;

    const prefix = match[1] || '';
    const matchedTerm = match[2];
    const start = match.index + prefix.length;
    const end = start + matchedTerm.length;
    const parent = node.parentNode;
    const fragment = document.createDocumentFragment();

    fragment.append(document.createTextNode(text.slice(0, end)));
    fragment.append(createTrigger(item));
    fragment.append(document.createTextNode(text.slice(end)));
    parent.replaceChild(fragment, node);
    return true;
  }

  function shouldSkip(node) {
    const parent = node.parentElement;
    return !parent || parent.closest(excludedSelector);
  }

  function applyGlossary(items) {
    const terms = items
      .flatMap((item) => [item.term, ...(item.aliases || [])].map((term) => ({ ...item, term })))
      .sort((a, b) => b.term.length - a.term.length);
    const counts = new Map();
    let total = 0;

    for (const item of terms) {
      const pattern = makePattern(item.term);
      const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT);
      const nodes = [];

      while (walker.nextNode()) {
        if (!shouldSkip(walker.currentNode)) nodes.push(walker.currentNode);
      }

      for (const node of nodes) {
        if (total >= maxTotal) return;
        const count = counts.get(item.title) || 0;
        if (count >= maxPerTerm) break;

        if (markTerm(node, item, pattern)) {
          counts.set(item.title, count + 1);
          total += 1;
        }
      }
    }
  }

  const style = document.createElement('style');
  style.textContent = `
    .glossary-tip {
      margin-left: 0.15em;
      border: 0;
      background: transparent;
      color: #0284c7;
      cursor: pointer;
      font-size: 0.8em;
      line-height: 1;
      padding: 0 0.05em;
      vertical-align: super;
    }
    .glossary-tooltip {
      position: absolute;
      z-index: 40;
      max-width: min(320px, calc(100vw - 24px));
      border: 1px solid #bae6fd;
      border-radius: 8px;
      background: #fff;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.14);
      color: #334155;
      font-size: 14px;
      line-height: 1.6;
      padding: 12px 14px;
    }
    .glossary-tooltip strong {
      display: block;
      color: #0f172a;
      margin-bottom: 4px;
    }
    .glossary-tooltip p {
      margin: 0;
    }
    .glossary-tooltip-example {
      color: #64748b;
      margin-top: 6px !important;
    }
    @media (max-width: 640px) {
      .glossary-tooltip {
        bottom: 12px;
        left: 12px !important;
        position: fixed;
        right: 12px;
        top: auto !important;
        max-width: none;
      }
    }
  `;
  document.head.appendChild(style);

  fetch(source)
    .then((res) => (res.ok ? res.json() : []))
    .then(applyGlossary)
    .catch(() => {});

  document.addEventListener('click', closeTooltip);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeTooltip();
  });
})();
