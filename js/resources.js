// Resources page — fetch manifest.json, render cards, filter by type
(async function() {
  const container = document.getElementById('resources-list');
  const tabsContainer = document.getElementById('filter-tabs');
  if (!container) return;

  const typeLabels = {
    mindmap: '心智圖',
    chart: '數據圖表',
    flowchart: '流程圖',
    tool: '互動工具'
  };

  let allResources = [];
  let activeFilter = 'all';

  try {
    const resp = await fetch('manifest.json');
    const data = await resp.json();
    allResources = data.resources || [];
  } catch(e) {
    container.innerHTML = '<div class="empty-state"><p>無法載入資源列表</p></div>';
    return;
  }

  // Build filter tabs from available types
  const types = [...new Set(allResources.map(r => r.type))];

  function renderTabs() {
    const tabs = [{ key: 'all', label: '全部' }];
    types.forEach(t => tabs.push({ key: t, label: typeLabels[t] || t }));

    tabsContainer.innerHTML = tabs.map(tab =>
      `<button class="filter-tab${tab.key === activeFilter ? ' active' : ''}" data-filter="${tab.key}">${tab.label}</button>`
    ).join('');

    tabsContainer.querySelectorAll('.filter-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;
        renderTabs();
        renderCards();
      });
    });
  }

  function renderCards() {
    const filtered = activeFilter === 'all'
      ? allResources
      : allResources.filter(r => r.type === activeFilter);

    if (filtered.length === 0) {
      container.innerHTML = '<div class="empty-state"><p>這個類別還沒有資源</p><p>資源庫持續更新中，追蹤 Threads 第一時間收到通知</p></div>';
      return;
    }

    container.innerHTML = filtered.map(r => `
      <a class="resource-card" href="resources/${r.date}/${r.slug}/${r.file}">
        <div class="resource-card-meta">
          <span class="resource-type">${typeLabels[r.type] || r.type}</span>
          <span class="resource-date">${r.date}</span>
        </div>
        <div class="resource-card-title">${r.title}</div>
        <div class="resource-card-desc">${r.description}</div>
        <div class="resource-card-arrow">→</div>
      </a>
    `).join('');
  }

  renderTabs();
  renderCards();
})();
