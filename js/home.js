// Home page: render laptop cards with search, brand filter and sorting
const grid = document.querySelector("#laptops-grid");
const searchInput = document.querySelector("#search");
const sortSelect = document.querySelector("#sort");
const chipsBox = document.querySelector("#brand-chips");

let activeBrand = "all";

function cardHTML(l) {
  const q = l.quick;
  const spec = (icon, val) => (val ? `<li><i class="fa-solid ${icon}"></i><span>${val}</span></li>` : "");
  return `
    <div class="card">
      <a href="product.html?id=${l.id}" class="thumb">
        <img src="${l.images[0]}" alt="${l.name}" loading="lazy" />
        <span class="badge">${l.brand}</span>
      </a>
      <div class="body">
        <a href="product.html?id=${l.id}"><h3>${l.name}</h3></a>
        <ul class="mini-specs">
          ${spec("fa-microchip", q.cpu)}
          ${spec("fa-memory", q.ram)}
          ${spec("fa-hard-drive", q.storage)}
          ${spec("fa-display", q.screen)}
        </ul>
        <div class="foot">
          <div class="price">${l.variants.length ? "<small>يبدأ من</small><br>" : ""}${formatPrice(l.price)}</div>
          <button class="btn icon-btn" title="أضف للسلة" data-add="${l.id}">
            <i class="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>`;
}

function render() {
  const term = searchInput.value.trim().toLowerCase();
  let list = LAPTOPS.filter((l) => {
    const text = (l.name + " " + Object.values(l.quick).join(" ")).toLowerCase();
    return (activeBrand === "all" || l.brand === activeBrand) && text.includes(term);
  });
  if (sortSelect.value === "low") list.sort((a, b) => a.price - b.price);
  if (sortSelect.value === "high") list.sort((a, b) => b.price - a.price);

  grid.innerHTML = list.length
    ? list.map(cardHTML).join("")
    : `<p class="empty">مفيش لابات مطابقة للبحث</p>`;
}

// Brand chips are built from the data so new brands show up automatically
const brands = ["all", ...new Set(LAPTOPS.map((l) => l.brand))];
chipsBox.innerHTML = brands
  .map((b) => `<button class="chip${b === "all" ? " active" : ""}" data-brand="${b}">${b === "all" ? "الكل" : b}</button>`)
  .join("");

chipsBox.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  activeBrand = chip.dataset.brand;
  chipsBox.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === chip));
  render();
});

grid.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-add]");
  if (!btn) return;
  const laptop = getLaptop(btn.dataset.add);
  // Cheapest variant is the default when adding from the card
  addToCart(laptop.id, laptop.variants.length ? laptop.variants[0].title : null, 1);
});

searchInput.addEventListener("input", render);
sortSelect.addEventListener("change", render);

document.querySelector("#count-laptops").textContent = LAPTOPS.length;
document.querySelector("#min-price").textContent = formatPrice(Math.min(...LAPTOPS.map((l) => l.price)));
render();
