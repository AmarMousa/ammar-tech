// Shared helpers for every page: price formatting, cart storage, header counter
const STORE = {
  name: "Ammar Tech",
  whatsapp: "201067103305",
};

const CART_KEY = "ammar-tech-cart";

function formatPrice(n) {
  return n.toLocaleString("en-US") + " ج.م";
}

function getLaptop(id) {
  return LAPTOPS.find((l) => l.id === id);
}

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) {}
  updateCartCount();
}

function addToCart(id, variant, qty) {
  const cart = readCart();
  const line = cart.find((i) => i.id === id && i.variant === variant);
  if (line) line.qty += qty;
  else cart.push({ id, variant, qty });
  saveCart(cart);
  showToast("تمت الإضافة إلى السلة");
}

// Price of a cart line: the chosen variant's price, or the base price
function linePrice(item) {
  const laptop = getLaptop(item.id);
  const v = laptop.variants.find((v) => v.title === item.variant);
  return v ? v.price : laptop.price;
}

function updateCartCount() {
  const count = readCart().reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll(".cart-count").forEach((el) => {
    el.textContent = count || "";
  });
}

function showToast(msg) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => toast.classList.remove("show"), 2000);
}

function whatsappLink(text) {
  return `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(text)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  const year = document.querySelector(".year");
  if (year) year.textContent = new Date().getFullYear();
});
