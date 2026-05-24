/* ============================================================
   CART
   ============================================================ */

function getCart() {
  return JSON.parse(localStorage.getItem('pf-cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('pf-cart', JSON.stringify(cart));
}

function addToCart(item) {
  const cart = getCart();
  cart.push(item);
  saveCart(cart);
  updateCartBadge();
  openCart();
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCartItems();
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  const count = getCart().length;
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function openCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  if (!sidebar) return;
  sidebar.classList.add('open');
  overlay.classList.add('visible');
  renderCartItems();
}

function closeCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  if (!sidebar) return;
  sidebar.classList.remove('open');
  overlay.classList.remove('visible');
}

function renderCartItems() {
  const container = document.getElementById('cart-items');
  const totalEl   = document.getElementById('cart-total');
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    totalEl.textContent = 'BWP 0';
    return;
  }

  container.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/60x60?text=PC'">
      <div class="cart-item-info">
        <div class="name">${item.name}</div>
        <div class="price">${item.price}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${i})" title="Remove">✕</button>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => {
    const num = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
    return sum + num;
  }, 0);
  totalEl.textContent = `BWP ${total.toLocaleString()}`;
}

/* ============================================================
   ON PAGE LOAD
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  document.getElementById('cart-icon')?.addEventListener('click', openCart);
  document.getElementById('close-cart')?.addEventListener('click', closeCart);
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);
});