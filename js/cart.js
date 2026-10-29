// Cart page: list cart lines, change quantities and send the order on WhatsApp
const itemsBox = document.querySelector("#cart-items");
const summary = document.querySelector("#summary");

function render() {
  // Drop lines whose laptop no longer exists in the catalogue
  const cart = readCart().filter((i) => getLaptop(i.id));

  if (!cart.length) {
    summary.hidden = true;
    itemsBox.innerHTML = `
      <div class="panel empty">
        <p>السلة فاضية</p>
        <a href="index.html#laptops" class="btn"><i class="fa-solid fa-laptop"></i> تصفح اللابات</a>
      </div>`;
    return;
  }

  summary.hidden = false;
  itemsBox.innerHTML = cart
    .map((item, index) => {
      const l = getLaptop(item.id);
      return `
        <div class="cart-item">
          <a href="product.html?id=${l.id}"><img src="${l.images[0]}" alt="${l.name}" /></a>
          <div>
            <a href="product.html?id=${l.id}"><h3>${l.name}</h3></a>
            ${item.variant ? `<div class="variant">${item.variant}</div>` : ""}
            <div class="price">${formatPrice(linePrice(item))}</div>
          </div>
          <div class="end">
            <div class="qty">
              <button type="button" data-plus="${index}">+</button>
              <span>${item.qty}</span>
              <button type="button" data-minus="${index}">−</button>
            </div>
            <button class="remove" data-remove="${index}"><i class="fa-solid fa-trash"></i> حذف</button>
          </div>
        </div>`;
    })
    .join("");

  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + linePrice(i) * i.qty, 0);
  document.querySelector("#sum-count").textContent = count;
  document.querySelector("#sum-total").textContent = formatPrice(total);
}

itemsBox.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const cart = readCart();
  if (btn.dataset.plus) cart[btn.dataset.plus].qty++;
  if (btn.dataset.minus && cart[btn.dataset.minus].qty > 1) cart[btn.dataset.minus].qty--;
  if (btn.dataset.remove) cart.splice(btn.dataset.remove, 1);
  saveCart(cart);
  render();
});

document.querySelector("#checkout").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = new FormData(e.target);
  const cart = readCart();
  const lines = cart.map((i) => {
    const l = getLaptop(i.id);
    return `- ${l.name}${i.variant ? ` (${i.variant})` : ""} × ${i.qty} = ${formatPrice(linePrice(i) * i.qty)}`;
  });
  const total = cart.reduce((s, i) => s + linePrice(i) * i.qty, 0);
  const msg = [
    "طلب جديد من موقع Ammar Tech",
    ...lines,
    `الإجمالي: ${formatPrice(total)}`,
    "",
    `الاسم: ${form.get("name")}`,
    `الموبايل: ${form.get("phone")}`,
    `العنوان: ${form.get("address")}`,
  ].join("\n");
  window.open(whatsappLink(msg), "_blank");
});

render();
