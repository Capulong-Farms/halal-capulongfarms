// Main Application JavaScript for Capulong Farms
document.addEventListener("DOMContentLoaded", function() {
  // Set WhatsApp number globally for cart.js
  window.WHATSAPP_NUMBER = document.querySelector('meta[name="whatsapp-number"]')?.content || '966542761620';
  
  updateCartCount();
  addMobileEventListeners();
  initializeTabs();
  attachFloatingContactHandlers();
});

// Tab functionality
function initializeTabs() {
  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
}

// Contact button behavior: build message from cart or fallback message
function getContactMessage() {
  const cart = getCart();
  if (!cart || cart.length === 0) {
    return 'Hi, I browsed your products and I am interested to purchase. Kindly return my message for more details?';
  }

  let message = 'I would like to order the following items:\n\n';
  let total = 0;
  cart.forEach(item => {
    const price = parseFloat(String(item.price).replace(/[^0-9.-]+/g, '')) || 0;
    message += `• ${item.name} (${item.price}) x ${item.quantity}\n`;
    total += price * item.quantity;
  });
  message += `\nTotal: ₱${total.toFixed(2)}\n\nPlease confirm availability and delivery.`;
  return message;
}

// Attach click handlers to floating/contact anchors (whatsapp & messenger)
function attachFloatingContactHandlers() {
  const whatsappNumber = window.WHATSAPP_NUMBER || '966542761620';
  const messengerId = '61582708015159';

  const selectors = [
    'a[href*="wa.me"]',
    'a[href*="api.whatsapp.com"]',
    'a[href*="m.me"]',
    'a[href*="facebook.com/messages"]',
    'a.floating-whatsapp',
    'a.floating-messenger',
    'a.whatsapp',
    'a.messenger',
    'a.whatsapp-contact-link',
    'a.messenger-contact-link'
  ].join(',');

  const anchors = document.querySelectorAll(selectors);
  anchors.forEach(a => {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      
      const cart = getCart();
      const href = (a.getAttribute('href') || '').toLowerCase();
      
      // If cart has items, open cart modal instead of sending message
      if (cart && cart.length > 0) {
        openCartModal();
        return;
      }
      
      // If cart is empty, send the fallback message
      const rawMsg = 'Hi, I browsed your products and I am interested to purchase. Kindly return my message for more details?';
      const encoded = encodeURIComponent(rawMsg);

      if (href.includes('wa.me') || href.includes('api.whatsapp') || a.classList.contains('floating-whatsapp') || a.classList.contains('whatsapp') || a.classList.contains('whatsapp-contact-link')) {
        const wa = 'https://wa.me/' + whatsappNumber + '?text=' + encoded;
        window.open(wa, '_blank');
        return;
      }

      if (href.includes('m.me') || href.includes('facebook.com/messages') || a.classList.contains('floating-messenger') || a.classList.contains('messenger') || a.classList.contains('messenger-contact-link')) {
        const m = 'https://m.me/' + messengerId + '?text=' + encoded;
        window.open(m, '_blank');
        return;
      }

      // otherwise let the link behave normally
    });
  });
}