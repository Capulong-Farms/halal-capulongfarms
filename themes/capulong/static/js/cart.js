// Cart Management System for Capulong Farms
const CART_KEY = 'capulong_cart';

function getCart() {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productName, productPrice) {
  const cart = getCart();
  const existingItem = cart.find(item => item.name === productName);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: productName, price: productPrice, quantity: 1 });
  }
  
  saveCart(cart);
  alert(productName + ' added to cart!');
}

function addToCartWithQuantity(productName, productPrice, productId) {
  const quantityInput = document.getElementById('qty-' + productId);
  const quantity = parseInt(quantityInput.value) || 1;
  
  const cart = getCart();
  const existingItem = cart.find(item => item.name === productName);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ name: productName, price: productPrice, quantity: quantity });
  }
  
  saveCart(cart);
  alert(quantity + 'x ' + productName + ' added to cart!');
  
  // Reset quantity to 1 after adding
  quantityInput.value = 1;
}

function changeQuantity(productId, change) {
  const quantityInput = document.getElementById('qty-' + productId);
  let currentValue = parseInt(quantityInput.value) || 1;
  let newValue = currentValue + change;
  
  // Ensure value stays within bounds
  if (newValue < 1) newValue = 1;
  if (newValue > 9999) newValue = 9999;
  
  quantityInput.value = newValue;
}

function validateQuantity(productId) {
  const quantityInput = document.getElementById('qty-' + productId);
  let value = quantityInput.value.trim();
  
  // If empty or invalid, set to 1
  if (value === '' || isNaN(value) || value <= 0) {
    quantityInput.value = 1;
    return;
  }
  
  let numValue = parseInt(value);
  
  // Ensure value stays within bounds
  if (numValue < 1) numValue = 1;
  if (numValue > 9999) numValue = 9999;
  
  quantityInput.value = numValue;
}

function validateQuantityInput(productId) {
  const quantityInput = document.getElementById('qty-' + productId);
  let value = quantityInput.value;
  
  // Remove any non-numeric characters
  value = value.replace(/[^0-9]/g, '');
  
  // If empty after cleaning, don't set to 1 immediately (let user continue typing)
  if (value === '') {
    quantityInput.value = '';
    return;
  }
  
  // Convert to number and validate bounds
  let numValue = parseInt(value);
  if (numValue < 1) numValue = 1;
  if (numValue > 9999) numValue = 9999;
  
  quantityInput.value = numValue;
}

function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  // Allow: backspace, delete, tab, escape, enter
  if (charCode == 46 || charCode == 8 || charCode == 9 || charCode == 27 || charCode == 13) {
    return true;
  }
  // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
  if (charCode == 65 && evt.ctrlKey === true || 
      charCode == 67 && evt.ctrlKey === true || 
      charCode == 86 && evt.ctrlKey === true ||
      charCode == 88 && evt.ctrlKey === true) {
    return true;
  }
  // Ensure that it is a number and stop the keypress
  if (charCode < 48 || charCode > 57) {
    return false;
  }
  return true;
}

function updateCartCount() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartBadge = document.getElementById('cart-count');
  if (cartBadge) {
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? 'inline' : 'none';
  }
}

function orderProduct(productName, productPrice) {
  addToCart(productName, productPrice);
}

function proceedToBuy() {
  const cart = getCart();
  
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  
  // Close cart modal immediately
  closeCartModal();
  
  // Build message
  let message = 'I would like to order the following items:\n\n';
  let total = 0;
  
  cart.forEach(item => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
    message += `• ${item.name} (${item.price}) x ${item.quantity}\n`;
    total += price * item.quantity;
  });
  
  message += `\nTotal: ₱${total.toFixed(2)}\n\nPlease confirm availability and delivery.`;
  const encoded = encodeURIComponent(message);

  // Get WhatsApp number from global variable set in HTML
  const whatsappNumber = window.WHATSAPP_NUMBER || '966542761620';
  
  // First send to WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encoded}`;
  window.open(whatsappUrl, '_blank');

  // Create and show custom dialog
  const dialog = document.createElement('div');
  dialog.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    z-index: 1000;
    text-align: center;
  `;
  
  dialog.innerHTML = `
    <p>Your order has been sent to WhatsApp!</p>
    <p>Click the Messenger button below to also send via Messenger:</p>
    <div style="margin-top: 15px;">
      <a href="#" class="floating-messenger" style="
        display: inline-block;
        padding: 10px 20px;
        background: #0084FF;
        color: white;
        border-radius: 5px;
        text-decoration: none;
        font-weight: bold;
      ">
        <i class="fab fa-facebook-messenger"></i> Send to Messenger
      </a>
    </div>
  `;

  // Create overlay
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 999;
  `;

  // Add click handler to messenger button in dialog
  dialog.querySelector('.floating-messenger').addEventListener('click', (e) => {
    e.preventDefault();

    // Get the message for messenger
    const messengerId = '61582708015159';
    const m = 'https://m.me/' + messengerId + '?text=' + encoded;
    
    // Open Messenger directly
    window.open(m, '_blank');

    // Remove dialog and overlay after short delay
    setTimeout(() => {
      document.body.removeChild(dialog);
      document.body.removeChild(overlay);
      
      // Clear cart and show confirmation after messenger opens
      localStorage.removeItem(CART_KEY);
      updateCartCount();
      alert('Cart has been cleared!');
    }, 500);
  });

  // Add click handler to overlay for closing
  overlay.addEventListener('click', () => {
    document.body.removeChild(dialog);
    document.body.removeChild(overlay);
    
    // Clear cart when dialog is closed
    localStorage.removeItem(CART_KEY);
    updateCartCount();
    alert('Cart has been cleared!');
  });

  // Add to page
  document.body.appendChild(overlay);
  document.body.appendChild(dialog);
  
  // Auto-clear cart after 10 seconds if user doesn't interact
  setTimeout(() => {
    if (document.body.contains(dialog)) {
      document.body.removeChild(dialog);
      document.body.removeChild(overlay);
      localStorage.removeItem(CART_KEY);
      updateCartCount();
      alert('Cart has been cleared!');
    }
  }, 10000);
}

function openCartModal() {
  const modal = document.getElementById('cart-modal');
  renderCartItems();
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeCartModal() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
}

function renderCartItems() {
  const cart = getCart();
  const cartItemsContainer = document.getElementById('cart-items');
  const cartEmptyContainer = document.getElementById('cart-empty');
  const cartTotalElement = document.getElementById('cart-total-amount');
  
  if (cart.length === 0) {
    cartItemsContainer.style.display = 'none';
    cartEmptyContainer.style.display = 'block';
    cartTotalElement.textContent = 'Total: ₱0.00';
    return;
  }
  
  cartItemsContainer.style.display = 'block';
  cartEmptyContainer.style.display = 'none';
  
  let total = 0;
  let cartHTML = '';
  
  cart.forEach((item, index) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
    const itemTotal = price * item.quantity;
    total += itemTotal;
    
    cartHTML += `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p class="cart-item-price">${item.price} each</p>
        </div>
        <div class="cart-item-controls">
          <div class="cart-quantity-controls">
            <button class="cart-qty-btn" onclick="updateCartQuantity(${index}, ${item.quantity - 1})">-</button>
            <span class="cart-qty-display">${item.quantity}</span>
            <button class="cart-qty-btn" onclick="updateCartQuantity(${index}, ${item.quantity + 1})">+</button>
          </div>
          <div class="cart-item-total">₱${itemTotal.toFixed(2)}</div>
          <button class="cart-remove-btn" onclick="removeFromCart(${index})" title="Remove item">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    `;
  });
  
  cartItemsContainer.innerHTML = cartHTML;
  cartTotalElement.textContent = `Total: ₱${total.toFixed(2)}`;
}

function updateCartQuantity(index, newQuantity) {
  const cart = getCart();
  
  if (newQuantity <= 0) {
    cart.splice(index, 1);
  } else if (newQuantity > 9999) {
    cart[index].quantity = 9999;
  } else {
    cart[index].quantity = newQuantity;
  }
  
  saveCart(cart);
  renderCartItems();
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCartItems();
}

function clearCart() {
  if (confirm('Are you sure you want to clear your cart?')) {
    localStorage.removeItem(CART_KEY);
    updateCartCount();
    renderCartItems();
    alert('Cart cleared!');
  }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
  const modal = document.getElementById('cart-modal');
  if (event.target === modal) {
    closeCartModal();
  }
});

// Add mobile-friendly event listeners
function addMobileEventListeners() {
  const cartButton = document.getElementById('cart-button');
  if (cartButton) {
    // Remove any existing onclick
    cartButton.removeAttribute('onclick');
    
    // Add both touch and click events for better mobile compatibility
    cartButton.addEventListener('touchstart', function(e) {
      e.preventDefault();
      openCartModal();
    }, { passive: false });
    
    cartButton.addEventListener('click', function(e) {
      e.preventDefault();
      openCartModal();
    });
  }
}