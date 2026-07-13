/* -------------------------------------------------------------
 * 逢甲大學福星宿舍資訊指南 - 邏輯控制 (app.js)
 * ------------------------------------------------------------- */

// 宿舍資料結構
const dormData = [
  {
    id: "A2",
    name: "四人雅房 (H棟北)",
    priceYear: 39800,
    priceSem: 29850,
    priceMonth: 4103,
    type: "shared",
    size: "7.6",
    capacity: 4,
    bathroom: "public",
    image: "H.jpg",
    desc: "福星 H 棟及 I 棟 雅房。房內配置個人小冰箱、冷氣、化妝盥洗台，衛浴設備位於各樓層公共區域。I棟床位採膠囊拉簾設計，增加隱私性。",
    links: [  { label: " H 棟實景", url: "https://dormitory.fcu.edu.tw/%e7%a6%8f%e6%98%9f%e5%a5%b3%e5%ae%bf/" }  ]
  },

   {
    id: "A",
    name: "四人雅房 (I棟)",
    priceYear: 39800,
    priceSem: 29850,
    priceMonth: 4103,
    type: "shared",
    size: "5.3",
    capacity: 4,
    bathroom: "public",
    image: "I.jpg",
    desc: "福星 H 棟及 I 棟 雅房。房內配置個人小冰箱、冷氣、化妝盥洗台，衛浴設備位於各樓層公共區域。I棟床位採膠囊拉簾設計，增加隱私性。",
    links: [    { label: " I 棟實景", url: "https://dormitory.fcu.edu.tw/%e7%a6%8f%e6%98%9f%e7%94%b7%e5%ae%bf/" } ]
  },
  {
    id: "GF",
    name: "四人套房A (12 – 14坪)",
    priceYear: 79200,
    priceSem: 59400,
    priceMonth: 6828,
    type: "suite",
    size: "12 - 14",
    capacity: 4,
    bathroom: "private",
    image: "四人套房A.jpg",
    desc: "精采學舍(G棟)四人套房A。設有獨立衛浴、簡易廚房料理區（含微波爐、烤箱、電陶爐）。環境溫馨，採高床/書桌配置，附設陽台。",
    links: [{ label: "精采學舍 G 棟實景", url: "https://dormitory.fcu.edu.tw/%e7%b2%be%e9%87%87%e5%ad%b8%e8%88%8d/" }]
  },
      {
    id: "GE",
    name: "雙人套房B (7 – 10坪)",
    priceYear: 84000,
    priceSem: 63000,
    priceMonth: 7241,
    type: "suite",
    size: "7 - 10",
    capacity: 2,
    bathroom: "private",
    image: "I.jpg",
    desc: "精采學舍(G棟)雙人套房B。設有獨立衛浴、簡易料理區（含微波爐、烤箱、電陶爐）。適合喜愛單純、安靜空間之住宿生選擇。",
    links: [{ label: "精采學舍 G 棟實景", url: "https://dormitory.fcu.edu.tw/%e7%b2%be%e9%87%87%e5%ad%b8%e8%88%8d/" }]
  },
  {
    id: "GG",
    name: "四人套房B (16 – 21坪)",
    priceYear: 91200,
    priceSem: 68400,
    priceMonth: 7862,
    type: "suite",
    size: "16 - 21",
    capacity: 4,
    bathroom: "private",
    image: "四人套房B.jpg",
    desc: "精采學舍(G棟)四人套房B。比A款擁有更寬敞的室內起居空間，同樣配備獨立衛浴與完整小廚房（微波爐、電陶爐、烤箱）。",
    links: [{ label: "精采學舍 G 棟實景", url: "https://dormitory.fcu.edu.tw/%e7%b2%be%e9%87%87%e5%ad%b8%e8%88%8d/" }]
  },
  {
    id: "G2",
    name: "五人家庭房A -雙人房(28 – 29坪)",
    priceYear: 93000,
    priceSem: 69750,
    priceMonth: 8017,
    type: "family",
    size: "28 - 29",
    capacity: 2,
    bathroom: "private",
    image: "五人家庭式.jpg",
    desc: "精采學舍(G棟)四人家庭房。格局包含專屬起居客廳、廚房中島、衛浴及獨立臥室空間。如家一般的溫馨同儕共享環境。",
    links: [{ label: "精采學舍 G 棟實景", url: "https://dormitory.fcu.edu.tw/%e7%b2%be%e9%87%87%e5%ad%b8%e8%88%8d/" }]
  },
  {
    id: "GH",
    name: "四人套房C (17 – 18坪)",
    priceYear: 98400,
    priceSem: 73800,
    priceMonth: 8483,
    type: "suite",
    size: "17 - 18",
    capacity: 4,
    bathroom: "private",
    image: "四人套房C.jpg",
    desc: "精采學舍(G棟)四人套房C。坪數較大、採光極佳，內部配有獨立衛浴、微波爐、電陶爐、烤箱等基本家電與沙發起居區。",
    links: [{ label: "精采學舍 G 棟實景", url: "https://dormitory.fcu.edu.tw/%e7%b2%be%e9%87%87%e5%ad%b8%e8%88%8d/" }]
  },
  {
    id: "GI",
    name: "四人套房D (20坪)",
    priceYear: 100800,
    priceSem: 75600,
    priceMonth: 8690,
    type: "suite",
    size: "20",
    capacity: 4,
    bathroom: "private",
    image: "四人套房d.jpg",
    desc: "精采學舍(G棟)四人套房D。大坪數寬裕套房，獨立衛浴、完整電器廚房配備，給予四位室友更完美的獨立學習與生活環境。",
    links: [{ label: "精采學舍 G 棟實景", url: "https://dormitory.fcu.edu.tw/%e7%b2%be%e9%87%87%e5%ad%b8%e8%88%8d/" }]
  },
  {
    id: "GB",
    name: "四人家庭房A-雙人房 (28坪)",
    priceYear: 102000,
    priceSem: 76500,
    priceMonth: 8793,
    type: "family",
    size: "28",
    capacity: 2,
    bathroom: "private",
    image: "四人家庭房A.jpg",
    desc: "精采學舍(G棟)四人家庭房A。寬敞客廳格局與廚房配置，衛浴獨立，室友間彼此擁有舒適的共同交誼空間與獨立睡眠區。",
    links: [{ label: "精采學舍 G 棟實景", url: "https://dormitory.fcu.edu.tw/%e7%b2%be%e9%87%87%e5%ad%b8%e8%88%8d/" }]
  },
  {
    id: "G1",
    name: "五人家庭房-單人房 (28 – 29坪)",
    priceYear: 108000,
    priceSem: 81000,
    priceMonth: 9310,
    type: "family",
    size: "28 - 29",
    capacity: 1,
    bathroom: "private",
    image: "五人家庭式.jpg",
    desc: "精采學舍(G棟)五人家庭房（特色樓中樓格局）。配有大型家庭客廳、共用廚房設施、獨立衛浴、以及寬敞明亮的臥室。",
    links: [{ label: "精采學舍 G 棟實景", url: "https://dormitory.fcu.edu.tw/%e7%b2%be%e9%87%87%e5%ad%b8%e8%88%8d/" }]
  }
];

// 中文化映射表
const typeMap = {
  shared: "雅房 (Shared Room)",
  suite: "套房 (Suite)",
  family: "家庭房 (Family Room)"
};

const bathroomMap = {
  public: "公共衛浴",
  private: "獨立衛浴"
};

// 狀態管理
let currentFilters = {
  search: "",
  type: "all",
  capacity: "all",
  sortBy: "priceAsc" // 預設價格低至高
};

let currentView = "card"; // 'card' 或 'table'
let compareList = []; // 儲存志願代碼

// 當 DOM 載入完畢後初始化
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderDormList();
  initCalculator();
  setupEventListeners();
});

// 主題初始化
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeButtonIcon(savedTheme);
}

// 切換主題
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeButtonIcon(newTheme);
}

function updateThemeButtonIcon(theme) {
  const icon = document.querySelector(".theme-toggle-btn i");
  const text = document.querySelector(".theme-toggle-btn span");
  if (theme === "dark") {
    if (icon) icon.className = "fas fa-sun";
    if (text) text.textContent = "淺色模式";
  } else {
    if (icon) icon.className = "fas fa-moon";
    if (text) text.textContent = "深色模式";
  }
}

// 格式化貨幣
function formatCurrency(num) {
  return new Intl.NumberFormat("zh-TW", { style: "currency", currency: "TWD", maximumFractionDigits: 0 }).format(num);
}

// 設定事件監聽
function setupEventListeners() {
  // 搜尋
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentFilters.search = e.target.value.trim().toLowerCase();
      renderDormList();
    });
  }

  // 房型標籤篩選
  const typeTags = document.querySelectorAll(".filter-tag");
  typeTags.forEach(tag => {
    tag.addEventListener("click", () => {
      typeTags.forEach(t => t.classList.remove("active"));
      tag.classList.add("active");
      currentFilters.type = tag.dataset.type;
      renderDormList();
    });
  });

  // 人數篩選
  const capacitySelect = document.getElementById("capacity-select");
  if (capacitySelect) {
    capacitySelect.addEventListener("change", (e) => {
      currentFilters.capacity = e.target.value;
      renderDormList();
    });
  }

  // 排序
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentFilters.sortBy = e.target.value;
      renderDormList();
    });
  }

  // 視圖切換
  const btnCardView = document.getElementById("btn-card-view");
  const btnTableView = document.getElementById("btn-table-view");

  if (btnCardView && btnTableView) {
    btnCardView.addEventListener("click", () => {
      btnCardView.classList.add("active");
      btnTableView.classList.remove("active");
      currentView = "card";
      renderDormList();
    });

    btnTableView.addEventListener("click", () => {
      btnTableView.classList.add("active");
      btnCardView.classList.remove("active");
      currentView = "table";
      renderDormList();
    });
  }

  // 主題按鈕
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
  }

  // 關閉對比 Modal
  const modalClose = document.getElementById("modal-close");
  if (modalClose) {
    modalClose.addEventListener("click", closeCompareModal);
  }
  const modalOverlay = document.getElementById("modal-overlay");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeCompareModal();
    });
  }
}

// 獲取經過篩選與排序的資料
function getFilteredData() {
  let result = [...dormData];

  // 搜尋關鍵字 (房型名稱或代碼)
  if (currentFilters.search) {
    result = result.filter(item =>
      item.name.toLowerCase().includes(currentFilters.search) ||
      item.id.toLowerCase().includes(currentFilters.search)
    );
  }

  // 房型分類篩選
  if (currentFilters.type !== "all") {
    result = result.filter(item => item.type === currentFilters.type);
  }

  // 人數篩選
  if (currentFilters.capacity !== "all") {
    result = result.filter(item => item.capacity === parseInt(currentFilters.capacity));
  }

  // 排序
  result.sort((a, b) => {
    if (currentFilters.sortBy === "priceAsc") {
      return a.priceYear - b.priceYear;
    } else if (currentFilters.sortBy === "priceDesc") {
      return b.priceYear - a.priceYear;
    } else if (currentFilters.sortBy === "sizeAsc") {
      // 提取坪數最小值進行排序 (例如 "12 – 14" 提取 12)
      const aMinSize = parseFloat(a.size.split("-")[0]);
      const bMinSize = parseFloat(b.size.split("-")[0]);
      return aMinSize - bMinSize;
    }
    return 0;
  });

  return result;
}

// 渲染主宿舍列表 (依當前視圖)
function renderDormList() {
  const filtered = getFilteredData();
  const cardContainer = document.getElementById("dorm-cards-container");
  const tableContainer = document.getElementById("dorm-table-container");

  if (!cardContainer || !tableContainer) return;

  // 清空兩個容器
  cardContainer.innerHTML = "";
  tableContainer.innerHTML = "";

  if (filtered.length === 0) {
    const emptyHtml = `
      <div class="empty-state">
        <i class="fas fa-search" style="font-size: 2.5rem; margin-bottom: 1rem; display: block; opacity: 0.5;"></i>
        <p>沒有符合當前條件的房型資訊，請嘗試調整篩選條件。</p>
      </div>
    `;
    cardContainer.innerHTML = emptyHtml;
    tableContainer.innerHTML = emptyHtml;
    return;
  }

  if (currentView === "card") {
    cardContainer.style.display = "grid";
    tableContainer.style.display = "none";
    filtered.forEach(item => {
      cardContainer.appendChild(createDormCard(item));
    });
  } else {
    cardContainer.style.display = "none";
    tableContainer.style.display = "block";
    tableContainer.appendChild(createDormTable(filtered));
  }
}

// 創建卡片 DOM
function createDormCard(item) {
  const card = document.createElement("div");
  card.className = "dorm-card";

  const isCompared = compareList.includes(item.id);
  const linkButtons = item.links.map(lnk =>
    `<a href="${lnk.url}" target="_blank" class="btn btn-outline" style="text-decoration: none; padding: 0.5rem; font-size: 0.8rem; flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 0.3rem;">
       <i class="fas fa-images"></i> <span>${lnk.label}</span>
     </a>`
  ).join("");

  card.innerHTML = `
    <div class="dorm-img-container">
      <span class="dorm-badge badge-${item.type}">${typeMap[item.type].split(" ")[0]}</span>
      <span class="code-badge">代碼 ${item.id}</span>
      <img src="${item.image}" alt="${item.name}">
    </div>
    <div class="dorm-details">
      <h3 class="dorm-name">${item.name}</h3>
      <div class="dorm-specs">
        <div class="dorm-spec-item">
          <i class="fas fa-ruler-combined"></i>
          <span>${item.size} 坪</span>
        </div>
        <div class="dorm-spec-item">
          <i class="fas fa-users"></i>
          <span>${item.capacity} 人房</span>
        </div>
        <div class="dorm-spec-item">
          <i class="fas fa-bath"></i>
          <span>${bathroomMap[item.bathroom]}</span>
        </div>
      </div>
      <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.25rem; line-height: 1.45; height: 5rem; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
        ${item.desc}
      </p>
      <div class="dorm-pricing">
        <div class="price-row">
          <span>學年定價</span>
          <span class="price-val">${formatCurrency(item.priceYear)}</span>
        </div>
        <div class="price-row">
          <span>只住上學期</span>
          <span class="price-val">${formatCurrency(item.priceSem)}</span>
        </div>
        <div class="price-row highlight">
          <span>平均月租金</span>
          <span class="price-val">${formatCurrency(item.priceMonth)}/月</span>
        </div>
      </div>
      <div class="dorm-actions" style="flex-wrap: wrap; gap: 0.5rem;">
        <button class="btn btn-outline ${isCompared ? 'active' : ''}" onclick="toggleCompare('${item.id}', this)" style="flex: 1 1 calc(50% - 0.25rem);">
          <i class="${isCompared ? 'fas' : 'far'} fa-copy"></i>
          <span>${isCompared ? '取消對比' : '對比'}</span>
        </button>
        <button class="btn btn-primary" onclick="quickCalculate('${item.id}')" style="flex: 1 1 calc(50% - 0.25rem);">
          <i class="fas fa-calculator"></i>
          <span>試算</span>
        </button>
        <div style="width: 100%; display: flex; gap: 0.5rem; margin-top: 0.1rem;">
          ${linkButtons}
        </div>
      </div>
    </div>
  `;
  return card;
}

// 創建表格 DOM
function createDormTable(items) {
  const tableWrapper = document.createElement("div");
  tableWrapper.className = "table-responsive";

  let tableRows = items.map(item => {
    const isCompared = compareList.includes(item.id);
    const linksHtml = item.links.map(lnk =>
      `<a href="${lnk.url}" target="_blank" style="font-size: 0.8rem; color: var(--primary); text-decoration: none; font-weight: 500;"><i class="fas fa-external-link-alt"></i> ${lnk.label}</a>`
    ).join(" | ");

    return `
      <tr data-id="${item.id}">
        <td style="font-weight: 700;">${item.id}</td>
        <td>
          <div style="font-weight: 600;">${item.name}</div>
          <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.25rem; line-height: 1.4; max-width: 320px;">
            ${item.desc}
          </div>
          <div style="margin-top: 0.4rem; display: flex; gap: 0.5rem;">
            ${linksHtml}
          </div>
        </td>
        <td>${item.size} 坪</td>
        <td>${item.capacity} 人</td>
        <td class="price-val" style="font-weight: 500;">${formatCurrency(item.priceYear)}</td>
        <td class="price-val" style="font-weight: 500;">${formatCurrency(item.priceSem)}</td>
        <td class="price-val" style="font-weight: 700; color: var(--accent);">${formatCurrency(item.priceMonth)} 元</td>
        <td>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-outline" style="padding: 0.4rem 0.6rem; font-size: 0.8rem;" onclick="toggleCompare('${item.id}', null); event.stopPropagation();" title="加入對比">
              <i class="${isCompared ? 'fas' : 'far'} fa-copy"></i>
            </button>
            <button class="btn btn-primary" style="padding: 0.4rem 0.6rem; font-size: 0.8rem;" onclick="quickCalculate('${item.id}'); event.stopPropagation();">
              試算
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("");

  tableWrapper.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>志願代碼</th>
          <th>房型名稱與簡介</th>
          <th>坪數估估</th>
          <th>容納人數</th>
          <th>學年定價</th>
          <th>只住上學期</th>
          <th>平均月租金 (約)</th>
          <th>快速操作</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  `;
  return tableWrapper;
}

/* -------------------------------------------------------------
 * 比較功能控制邏輯 (Compare Module)
 * ------------------------------------------------------------- */

window.toggleCompare = function (id, buttonEl) {
  const index = compareList.indexOf(id);

  if (index > -1) {
    // 已在列表中，移除
    compareList.splice(index, 1);
  } else {
    // 不在列表中，檢查上限 (最多3間)
    if (compareList.length >= 3) {
      alert("最多只能同時比較 3 個房型喔！");
      return;
    }
    compareList.push(id);
  }

  updateCompareStickyPanel();

  // 重新渲染列表以更新按鈕狀態
  renderDormList();
};

function updateCompareStickyPanel() {
  const panel = document.getElementById("compare-panel");
  const listContainer = document.getElementById("compare-bubbles-list");

  if (!panel || !listContainer) return;

  listContainer.innerHTML = "";

  if (compareList.length > 0) {
    panel.classList.add("active");

    compareList.forEach(id => {
      const dorm = dormData.find(d => d.id === id);
      if (!dorm) return;

      const bubble = document.createElement("div");
      bubble.className = "compare-bubble";
      bubble.innerHTML = `
        <span>[${dorm.id}] ${dorm.name.split(" ")[0]}</span>
        <button class="compare-bubble-remove" onclick="toggleCompare('${dorm.id}', null)">✕</button>
      `;
      listContainer.appendChild(bubble);
    });

    // 動態更新比較按鈕
    document.getElementById("btn-trigger-compare").disabled = compareList.length < 2;
  } else {
    panel.classList.remove("active");
  }
}

window.clearCompare = function () {
  compareList = [];
  updateCompareStickyPanel();
  renderDormList();
};

window.openCompareModal = function () {
  const overlay = document.getElementById("modal-overlay");
  const modalBody = document.getElementById("modal-compare-body");

  if (!overlay || !modalBody) return;

  const selectedDorms = compareList.map(id => dormData.find(d => d.id === id)).filter(Boolean);

  if (selectedDorms.length === 0) return;

  let headerCols = selectedDorms.map(d => `<th style="width: calc(75% / ${selectedDorms.length}); text-align: center;">[${d.id}] ${d.name}</th>`).join("");

  let rowImage = selectedDorms.map(d => `<td style="text-align: center;"><img src="${d.image}" style="width: 100%; max-height: 120px; object-fit: cover; border-radius: var(--radius-sm);"></td>`).join("");
  let rowType = selectedDorms.map(d => `<td>${typeMap[d.type]}</td>`).join("");
  let rowSize = selectedDorms.map(d => `<td>${d.size} 坪</td>`).join("");
  let rowCapacity = selectedDorms.map(d => `<td>${d.capacity} 人房</td>`).join("");
  let rowBathroom = selectedDorms.map(d => `<td>${bathroomMap[d.bathroom]}</td>`).join("");
  let rowYear = selectedDorms.map(d => `<td class="price-val" style="font-weight: 600;">${formatCurrency(d.priceYear)}</td>`).join("");
  let rowSem = selectedDorms.map(d => `<td class="price-val">${formatCurrency(d.priceSem)}</td>`).join("");
  let rowMonth = selectedDorms.map(d => `<td class="price-val" style="font-weight: 700; color: var(--accent); font-size: 1.1rem;">${formatCurrency(d.priceMonth)}/月</td>`).join("");
  let rowAvgPerson = selectedDorms.map(d => `<td class="price-val" style="color: var(--primary); font-weight: 600;">${formatCurrency(Math.round(d.priceYear / d.capacity))} /人 (年)</td>`).join("");

  modalBody.innerHTML = `
    <table class="compare-modal-table">
      <thead>
        <tr>
          <th style="width: 25%;">比較項目</th>
          ${headerCols}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-weight: 600;">房型外觀</td>
          ${rowImage}
        </tr>
        <tr>
          <td style="font-weight: 600;">房型類別</td>
          ${rowType}
        </tr>
        <tr>
          <td style="font-weight: 600;">房型坪數</td>
          ${rowSize}
        </tr>
        <tr>
          <td style="font-weight: 600;">入住人數</td>
          ${rowCapacity}
        </tr>
        <tr>
          <td style="font-weight: 600;">衛浴配置</td>
          ${rowBathroom}
        </tr>
        <tr>
          <td style="font-weight: 600; color: var(--text-primary);">學年定價</td>
          ${rowYear}
        </tr>
        <tr>
          <td style="font-weight: 600;">只住上學期</td>
          ${rowSem}
        </tr>
        <tr>
          <td style="font-weight: 600; color: var(--accent);">平均月租金</td>
          ${rowMonth}
        </tr>
        <tr>
          <td style="font-weight: 600; color: var(--primary);">每人平均負擔</td>
          ${rowAvgPerson}
        </tr>
      </tbody>
    </table>
  `;

  overlay.classList.add("active");
  document.body.style.overflow = "hidden"; // 鎖定背景滾動
}

function closeCompareModal() {
  const overlay = document.getElementById("modal-overlay");
  if (overlay) {
    overlay.classList.remove("active");
    document.body.style.overflow = ""; // 恢復背景滾動
  }
}

/* -------------------------------------------------------------
 * 租金計算機邏輯 (Cost Calculator)
 * ------------------------------------------------------------- */

function initCalculator() {
  const dormSelect = document.getElementById("calc-dorm-select");
  const periodSelect = document.getElementById("calc-period-select");

  if (!dormSelect || !periodSelect) return;

  // 載入宿舍選項到下拉選單
  dormSelect.innerHTML = dormData.map(d => `<option value="${d.id}">[${d.id}] ${d.name}</option>`).join("");

  // 設定事件
  dormSelect.addEventListener("change", runCalculator);
  periodSelect.addEventListener("change", runCalculator);

  // 初始試算
  runCalculator();
}

function runCalculator() {
  const dormSelect = document.getElementById("calc-dorm-select");
  const periodSelect = document.getElementById("calc-period-select");

  if (!dormSelect || !periodSelect) return;

  const selectedId = dormSelect.value;
  const period = periodSelect.value; // 'year' 或 'semester'

  const dorm = dormData.find(d => d.id === selectedId);
  if (!dorm) return;

  // 判斷棟別與住宿天數
  // A/A2 為 H/I 棟，其餘 G 開頭為 G 棟
  const isHI棟 = dorm.id === "A/A2" || dorm.name.includes("I棟") || dorm.name.includes("H棟");

  // 動態更新期選單選項文字以修正期限顯示錯誤
  const yearOption = periodSelect.options[0];
  const semOption = periodSelect.options[1];
  if (yearOption && semOption) {
    yearOption.text = `整學年方案 (約 ${isHI棟 ? '9.7' : '11.6'} 個月)`;
    semOption.text = `僅住上學期 (約 4.5 個月)`;
  }

  // 基本租金 (學年定價或上學期定價)
  const baseRent = period === "year" ? dorm.priceYear : dorm.priceSem;

  // 動態設定保證金金額與說明資訊
  let securityDeposit = 0;
  let depositDesc = "";
  if (isHI棟) {
    securityDeposit = 8000;
    depositDesc = `<strong>${formatCurrency(securityDeposit)}</strong> 元/學年，作為期末退宿檢查設備毀損扣款之用（若無損毀將無息全額退還）。`;
  } else {
    securityDeposit = 15000;
    depositDesc = `<strong>${formatCurrency(securityDeposit)}</strong> 元/學年，作為住宿期間寢室內淨水器耗材費（800元/人/學期）及期末退宿檢查設備毀損扣款之用，若有餘額將於第二學期結束後無息退款。`;
  }

  // 總金額
  const totalAmount = baseRent + securityDeposit;

  let exactDates = "";
  let durationMonths = 0;

  if (period === "semester") {
    exactDates = "2026年8月29日上午9時 至 2027年1月13日中午12時止";
    durationMonths = 4.5;
  } else {
    if (isHI棟) {
      exactDates = "2026年8月29日上午9時 至 2027年6月21日中午12時止";
      durationMonths = 9.7;
    } else {
      exactDates = "2026年8月29日上午9時 至 2027年8月16日中午12時止";
      durationMonths = 11.6;
    }
  }

  const calculatedMonthly = Math.round(baseRent / durationMonths);

  // 更新介面
  document.getElementById("calc-out-rent").textContent = formatCurrency(baseRent);
  document.getElementById("calc-out-deposit").textContent = formatCurrency(securityDeposit);
  document.getElementById("calc-out-total").textContent = formatCurrency(totalAmount);

  // 備註與分期資訊
  document.getElementById("calc-installment-desc").innerHTML = `
    * 本房型此方案之<strong>住宿期限</strong>為：<br><span style="color: var(--accent); font-weight: 600;">${exactDates}</span><br>
    * <strong>保證金說明</strong>：${depositDesc}<br>
    * <strong>平均月租參考</strong>：實際住宿約 <strong>${durationMonths}</strong> 個月，平均每月負擔約為 <strong>${formatCurrency(calculatedMonthly)}</strong> 元。
  `;
}

// 快速帶入計算機
window.quickCalculate = function (id) {
  const dormSelect = document.getElementById("calc-dorm-select");
  if (dormSelect) {
    dormSelect.value = id;
    // 滾動到計算機區塊
    const calcSection = document.getElementById("calculator-area");
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: "smooth" });
    }
    runCalculator();
  }
};
