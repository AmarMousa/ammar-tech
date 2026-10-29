// Product page: reads ?id= from the URL and fills the page from LAPTOPS
const id = new URLSearchParams(location.search).get("id");
const laptop = getLaptop(id);

if (!laptop) {
  document.querySelector("#product-page").innerHTML =
    `<p class="empty">اللاب ده مش موجود. <a href="index.html#laptops" class="btn">ارجع للابات</a></p>`;
} else {
  const $ = (sel) => document.querySelector(sel);
  const mainImg = $("#main-img");
  const variantSelect = $("#variant");
  let qty = 1;

  document.title = `${laptop.name} | Ammar Tech`;
  $("#crumb-name").textContent = laptop.name;
  $("#brand").textContent = laptop.brand;
  $("#name").textContent = laptop.name;
  $("#desc").textContent = laptop.description;
  $("#stock").textContent = laptop.available ? "✔ متوفر" : "غير متوفر حالياً";
  $("#stock").classList.toggle("out", !laptop.available);

  // Gallery
  mainImg.src = laptop.images[0];
  mainImg.alt = laptop.name;
  $("#thumbs").innerHTML = laptop.images
    .map((src, i) => `<img src="${src}" alt="${laptop.name}" class="${i === 0 ? "active" : ""}" />`)
    .join("");
  $("#thumbs").addEventListener("click", (e) => {
    if (e.target.tagName !== "IMG") return;
    mainImg.src = e.target.src;
    $("#thumbs").querySelectorAll("img").forEach((img) => img.classList.toggle("active", img === e.target));
  });

  // Variants (RAM / storage options with different prices)
  if (laptop.variants.length) {
    $("#variant-box").hidden = false;
    variantSelect.innerHTML = laptop.variants
      .map((v) => `<option value="${v.title}">${v.title} — ${formatPrice(v.price)}</option>`)
      .join("");
  }

  function currentVariant() {
    return laptop.variants.find((v) => v.title === variantSelect.value) || null;
  }

  function updatePrice() {
    const v = currentVariant();
    const unit = v ? v.price : laptop.price;
    $("#price").textContent = formatPrice(unit * qty);
    $("#qty").textContent = qty;
    const msg = `السلام عليكم، عايز أطلب من Ammar Tech:\n${laptop.name}${v ? ` (${v.title})` : ""}\nالكمية: ${qty}\nالسعر: ${formatPrice(unit * qty)}`;
    $("#order-wa").href = whatsappLink(msg);
  }

  variantSelect.addEventListener("change", updatePrice);
  $("#qty-plus").addEventListener("click", () => {
    qty++;
    updatePrice();
  });
  $("#qty-minus").addEventListener("click", () => {
    if (qty > 1) qty--;
    updatePrice();
  });
  $("#add-cart").addEventListener("click", () => {
    const v = currentVariant();
    addToCart(laptop.id, v ? v.title : null, qty);
  });

  // Specs & features
  $("#specs").innerHTML = laptop.specs.map((s) => `<tr><th>${s.label}</th><td>${s.value}</td></tr>`).join("");
  if (laptop.features.length) {
    $("#features").innerHTML = laptop.features
      .map((f) => `<li><i class="fa-solid fa-circle-check"></i><span>${f}</span></li>`)
      .join("");
  } else {
    $("#features-box").remove();
  }

  updatePrice();
}
