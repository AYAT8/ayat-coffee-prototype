const APP_CONFIG = {
  brandName: 'AYAT COFFEE',
  whatsappNumber: '+212767283637',
  whatsappNumberDigits: '212767283637',
  instagramHandle: '@ayatcoffee',
  instagramUrl: 'https://instagram.com/ayatcoffee',
  websiteUrl: 'https://ayat8.github.io/ayat-coffee-prototype/',
  locationLabel: 'Agadir, Morocco',
  locationUrl: 'https://maps.google.com/?q=Agadir%20Morocco',
  hours: 'Monday — Sunday • 08:00 — 22:00',
  openHour: 8,
  closeHour: 22,
  // Frais de livraison (DH) — change here, it updates everywhere.
  deliveryFee: 15,
  pickupReadyMinutes: 15,
  deliveryMinutes: '30–45'
};

const products = [
  {
    id: 'pack-breakfast',
    category: 'PACKS',
    name: 'Breakfast Pack',
    description: 'Your morning, sorted. Pick a coffee, a pastry and a fresh drink.',
    includes: ['1 Coffee', '1 Pastry', '1 Fresh drink'],
    price: 39,
    originalPrice: 48,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Coffee', type: 'pick', values: [
        { label: 'Cappuccino', productId: 'cappuccino', price: 0, selected: true },
        { label: 'Latte', productId: 'latte', price: 2 },
        { label: 'Americano', productId: 'americano', price: 0 },
        { label: 'Espresso', productId: 'espresso', price: 0 }
      ] },
      { name: 'Pastry', type: 'pick', values: [
        { label: 'Croissant', productId: 'croissant', price: 0, selected: true },
        { label: 'Cookies', productId: 'cookies', price: 0 }
      ] },
      { name: 'Fresh drink', type: 'pick', values: [
        { label: 'Fresh Orange Juice', productId: 'orange-juice', price: 0, selected: true },
        { label: 'Strawberry Smoothie', productId: 'strawberry-smoothie', price: 5 }
      ] }
    ]
  },
  {
    id: 'pack-sweet-break',
    category: 'PACKS',
    name: 'Sweet Break',
    description: 'A coffee and a slice of something good.',
    includes: ['1 Coffee', '1 Dessert'],
    price: 38,
    originalPrice: 45,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Coffee', type: 'pick', values: [
        { label: 'Latte', productId: 'latte', price: 0, selected: true },
        { label: 'Cappuccino', productId: 'cappuccino', price: 0 },
        { label: 'Mocha', productId: 'mocha', price: 2 },
        { label: 'Iced Latte', productId: 'iced-latte', price: 2 }
      ] },
      { name: 'Dessert', type: 'pick', values: [
        { label: 'Chocolate Cake', productId: 'chocolate-cake', price: 0, selected: true },
        { label: 'Cheesecake', productId: 'cheesecake', price: 3 },
        { label: 'Cookies', productId: 'cookies', price: 0 }
      ] }
    ]
  },
  {
    id: 'pack-lunch',
    category: 'PACKS',
    name: 'Lunch Pack',
    description: 'Something savoury, a cold drink and a sweet finish.',
    includes: ['1 Food', '1 Cold drink', '1 Dessert'],
    price: 59,
    originalPrice: 72,
    image: 'https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Food', type: 'pick', values: [
        { label: 'Chicken Sandwich', productId: 'chicken-sandwich', price: 0, selected: true },
        { label: 'Chicken Toast', productId: 'chicken-toast', price: 0 },
        { label: 'Avocado Toast', productId: 'avocado-toast', price: 0 }
      ] },
      { name: 'Cold drink', type: 'pick', values: [
        { label: 'Iced Latte', productId: 'iced-latte', price: 0, selected: true },
        { label: 'Fresh Orange Juice', productId: 'orange-juice', price: 0 },
        { label: 'Passion Fruit Mojito', productId: 'passion-mojito', price: 0 },
        { label: 'Iced Matcha', productId: 'iced-matcha', price: 3 }
      ] },
      { name: 'Dessert', type: 'pick', values: [
        { label: 'Cookies', productId: 'cookies', price: 0, selected: true },
        { label: 'Chocolate Cake', productId: 'chocolate-cake', price: 5 }
      ] }
    ]
  },
  {
    id: 'pack-duo',
    category: 'PACKS',
    name: 'Duo Pack',
    description: 'Made for two: two coffees and two pastries to share.',
    includes: ['2 Coffees', '2 Pastries'],
    price: 49,
    originalPrice: 60,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'First coffee', type: 'pick', values: [
        { label: 'Cappuccino', productId: 'cappuccino', price: 0, selected: true },
        { label: 'Latte', productId: 'latte', price: 2 },
        { label: 'Americano', productId: 'americano', price: 0 },
        { label: 'Espresso', productId: 'espresso', price: 0 }
      ] },
      { name: 'Second coffee', type: 'pick', values: [
        { label: 'Cappuccino', productId: 'cappuccino', price: 0, selected: true },
        { label: 'Latte', productId: 'latte', price: 2 },
        { label: 'Americano', productId: 'americano', price: 0 },
        { label: 'Espresso', productId: 'espresso', price: 0 }
      ] },
      { name: 'Pastries', type: 'pick', values: [
        { label: '2 Croissants', productId: 'croissant', price: 0, selected: true },
        { label: '2 Cookies', productId: 'cookies', price: 0 },
        { label: 'Croissant + Cookie', productId: 'cookies', price: 0 }
      ] }
    ]
  },
  {
    id: 'espresso',
    category: 'COFFEE',
    name: 'Espresso',
    description: 'A bold, aromatic shot with rich crema and warm roasted depth.',
    price: 12,
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Size', type: 'radio', values: [{ label: 'Regular', price: 0, selected: true }, { label: 'Large', price: 5 }] },
      { name: 'Sugar', type: 'radio', values: [{ label: 'Normal', price: 0, selected: true }, { label: 'Less sugar', price: 0 }, { label: 'No sugar', price: 0 }] }
    ]
  },
  {
    id: 'cappuccino',
    category: 'COFFEE',
    name: 'Cappuccino',
    description: 'Silky milk foam, balanced espresso and a softly sweet finish.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Size', type: 'radio', values: [{ label: 'Regular', price: 0, selected: true }, { label: 'Large', price: 5 }] },
      { name: 'Milk', type: 'radio', values: [{ label: 'Regular milk', price: 0, selected: true }, { label: 'Oat milk', price: 5 }, { label: 'Almond milk', price: 5 }] },
      { name: 'Sugar', type: 'radio', values: [{ label: 'Normal', price: 0, selected: true }, { label: 'Less sugar', price: 0 }, { label: 'No sugar', price: 0 }] },
      { name: 'Extra', type: 'checkbox', values: [{ label: 'Extra shot', price: 5 }, { label: 'Caramel', price: 4 }, { label: 'Vanilla', price: 4 }] }
    ]
  },
  {
    id: 'latte',
    category: 'COFFEE',
    name: 'Latte',
    description: 'Creamy and comforting with a smooth espresso base and silky texture.',
    price: 20,
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Size', type: 'radio', values: [{ label: 'Regular', price: 0, selected: true }, { label: 'Large', price: 5 }] },
      { name: 'Milk', type: 'radio', values: [{ label: 'Regular milk', price: 0, selected: true }, { label: 'Oat milk', price: 5 }, { label: 'Almond milk', price: 5 }] },
      { name: 'Sugar', type: 'radio', values: [{ label: 'Normal', price: 0, selected: true }, { label: 'Less sugar', price: 0 }, { label: 'No sugar', price: 0 }] }
    ]
  },
  {
    id: 'iced-latte',
    category: 'COFFEE',
    name: 'Iced Latte',
    description: 'Cold, smooth and bright with a clean espresso finish.',
    price: 22,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Size', type: 'radio', values: [{ label: 'Regular', price: 0, selected: true }, { label: 'Large', price: 5 }] },
      { name: 'Milk', type: 'radio', values: [{ label: 'Regular milk', price: 0, selected: true }, { label: 'Oat milk', price: 5 }, { label: 'Almond milk', price: 5 }] },
      { name: 'Sugar', type: 'radio', values: [{ label: 'Normal', price: 0, selected: true }, { label: 'Less sugar', price: 0 }, { label: 'No sugar', price: 0 }] },
      { name: 'Extra', type: 'checkbox', values: [{ label: 'Extra ice', price: 0 }, { label: 'Vanilla', price: 4 }] }
    ]
  },
  {
    id: 'americano',
    category: 'COFFEE',
    name: 'Americano',
    description: 'A clean and finished espresso experience with a longer, gentle body.',
    price: 15,
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Size', type: 'radio', values: [{ label: 'Regular', price: 0, selected: true }, { label: 'Large', price: 5 }] },
      { name: 'Sugar', type: 'radio', values: [{ label: 'Normal', price: 0, selected: true }, { label: 'Less sugar', price: 0 }, { label: 'No sugar', price: 0 }] }
    ]
  },
  {
    id: 'mocha',
    category: 'COFFEE',
    name: 'Mocha',
    description: 'Cocoa, espresso and soft cream blended into a comforting sip.',
    price: 22,
    image: 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Size', type: 'radio', values: [{ label: 'Regular', price: 0, selected: true }, { label: 'Large', price: 5 }] },
      { name: 'Milk', type: 'radio', values: [{ label: 'Regular milk', price: 0, selected: true }, { label: 'Oat milk', price: 5 }, { label: 'Almond milk', price: 5 }] },
      { name: 'Sugar', type: 'radio', values: [{ label: 'Normal', price: 0, selected: true }, { label: 'Less sugar', price: 0 }, { label: 'No sugar', price: 0 }] },
      { name: 'Extra', type: 'checkbox', values: [{ label: 'Extra chocolate', price: 4 }, { label: 'Caramel', price: 4 }] }
    ]
  },
  {
    id: 'orange-juice',
    category: 'COLD DRINKS',
    name: 'Fresh Orange Juice',
    description: 'Bright citrus freshness with a naturally sweet finish.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Size', type: 'radio', values: [{ label: 'Regular', price: 0, selected: true }, { label: 'Large', price: 5 }] },
      { name: 'Extra', type: 'checkbox', values: [{ label: 'Mint', price: 2 }, { label: 'Sparkling', price: 3 }] }
    ]
  },
  {
    id: 'strawberry-smoothie',
    category: 'COLD DRINKS',
    name: 'Strawberry Smoothie',
    description: 'Silky and vibrant with ripe berry flavor and a creamy finish.',
    price: 25,
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Size', type: 'radio', values: [{ label: 'Regular', price: 0, selected: true }, { label: 'Large', price: 5 }] },
      { name: 'Extra', type: 'checkbox', values: [{ label: 'Banana', price: 3 }, { label: 'Yogurt', price: 3 }] }
    ]
  },
  {
    id: 'passion-mojito',
    category: 'COLD DRINKS',
    name: 'Passion Fruit Mojito',
    description: 'Refreshing citrus mint with tropical passion fruit sparkle.',
    price: 22,
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Size', type: 'radio', values: [{ label: 'Regular', price: 0, selected: true }, { label: 'Large', price: 5 }] },
      { name: 'Sugar', type: 'radio', values: [{ label: 'Normal', price: 0, selected: true }, { label: 'Less sugar', price: 0 }, { label: 'No sugar', price: 0 }] },
      { name: 'Extra', type: 'checkbox', values: [{ label: 'Extra mint', price: 2 }, { label: 'Lime', price: 2 }] }
    ]
  },
  {
    id: 'iced-matcha',
    category: 'COLD DRINKS',
    name: 'Iced Matcha',
    description: 'A mellow green tea blend with a fresh, lightly sweet finish.',
    price: 25,
    image: 'https://images.unsplash.com/photo-1582785513054-8d1bf9d69c1a?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Size', type: 'radio', values: [{ label: 'Regular', price: 0, selected: true }, { label: 'Large', price: 5 }] },
      { name: 'Milk', type: 'radio', values: [{ label: 'Regular milk', price: 0, selected: true }, { label: 'Oat milk', price: 5 }, { label: 'Almond milk', price: 5 }] },
      { name: 'Sugar', type: 'radio', values: [{ label: 'Normal', price: 0, selected: true }, { label: 'Less sugar', price: 0 }, { label: 'No sugar', price: 0 }] }
    ]
  },
  {
    id: 'chicken-toast',
    category: 'FOOD',
    name: 'Chicken Toast',
    description: 'Grilled chicken, cream cheese and greens on artisan sourdough.',
    price: 30,
    image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Add-on', type: 'checkbox', values: [{ label: 'Avocado', price: 5 }, { label: 'Egg', price: 4 }] }
    ]
  },
  {
    id: 'chicken-sandwich',
    category: 'FOOD',
    name: 'Chicken Sandwich',
    description: 'A generous, gently spiced chicken sandwich with crisp greens.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Add-on', type: 'checkbox', values: [{ label: 'Cheese', price: 4 }, { label: 'Extra sauce', price: 3 }] }
    ]
  },
  {
    id: 'avocado-toast',
    category: 'FOOD',
    name: 'Avocado Toast',
    description: 'Creamy avocado, herb seasoning and toasted brioche elegance.',
    price: 32,
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Add-on', type: 'checkbox', values: [{ label: 'Poached egg', price: 4 }, { label: 'Tomatoes', price: 3 }] }
    ]
  },
  {
    id: 'croissant',
    category: 'FOOD',
    name: 'Croissant',
    description: 'Buttery, flaky and perfectly golden from the oven.',
    price: 12,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Add-on', type: 'checkbox', values: [{ label: 'Jam', price: 3 }, { label: 'Butter spread', price: 2 }] }
    ]
  },
  {
    id: 'chocolate-cake',
    category: 'DESSERTS',
    name: 'Chocolate Cake',
    description: 'Rich, airy and deeply indulgent with a soft bitter finish.',
    price: 25,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Add-on', type: 'checkbox', values: [{ label: 'Strawberry', price: 3 }, { label: 'Cream', price: 2 }] }
    ]
  },
  {
    id: 'cheesecake',
    category: 'DESSERTS',
    name: 'Cheesecake',
    description: 'Creamy with a delicate biscuit base and a lingering vanilla note.',
    price: 28,
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Add-on', type: 'checkbox', values: [{ label: 'Berries', price: 4 }, { label: 'Caramel', price: 4 }] }
    ]
  },
  {
    id: 'cookies',
    category: 'DESSERTS',
    name: 'Cookies',
    description: 'Warm, buttery cookies baked for a crisp edge and soft center.',
    price: 15,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Add-on', type: 'checkbox', values: [{ label: 'Chocolate drizzle', price: 3 }, { label: 'Extra cookie', price: 8 }] }
    ]
  }
];

const REVEAL_SELECTOR = [
  '.info-tile',
  '.quote-band__inner',
  '.section-heading',
  '.menu-card',
  '.contact-card',
  '.page-hero__inner > *',
  '.menu-toolbar',
  '.category-nav',
  '.cart-panel',
  '.order-card',
  '.qr-card',
  '.site-footer .footer-grid'
].join(',');
let revealObserver = null;
const FEATURED_IDS = ['cappuccino', 'iced-latte', 'croissant', 'cheesecake'];
const CUSTOMER_KEY = 'ayat-customer';

const state = {
  activeCategory: 'ALL',
  searchTerm: '',
  cart: loadCart(),
  modalProduct: null,
  modalQuantity: 1,
  lastWhatsAppUrl: ''
};

const categoryOrder = ['ALL', 'PACKS', 'COFFEE', 'COLD DRINKS', 'FOOD', 'DESSERTS'];

initialize();

function initialize() {
  setupRevealObserver();
  setupNavigation();
  bindSearchInputs();
  state.searchTerm = (new URLSearchParams(window.location.search).get('q') || '').trim().toLowerCase();
  syncSearchInputs();

  if (document.getElementById('category-nav')) {
    renderCategoryNav();
    renderMenu();
  }

  renderFeatured();

  if (document.getElementById('cart-items')) {
    renderCart();
  }

  if (document.getElementById('checkout-form')) {
    bindCheckoutEvents();
  }

  // One delegated listener for every "open product" trigger (cards, images, featured items).
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-open-product]');
    if (!trigger) return;
    const product = getProductById(trigger.dataset.openProduct);
    if (product) openProductModal(product);
  });

  setupPlayfulCollage();
  setupQuoteEffects();
  bindModalEvents();
  renderOpenStatus();
  observeReveal(document);
  fillDeliveryFeeLabels();
  updateCartIndicators();
  updateQrCode();
  updateScrollState();
  document.addEventListener('scroll', updateScrollState, { passive: true });
}

/* ---------- Scroll reveal animations ---------- */


function setupRevealObserver() {
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('js-anim');
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
}

function observeReveal(root) {
  if (!revealObserver || !root) return;
  root.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
    if (el.classList.contains('reveal')) return;
    // Stagger siblings that appear together (tiles, cards).
    const siblings = Array.from(el.parentElement ? el.parentElement.children : []);
    const index = Math.max(0, siblings.indexOf(el)) % 4;
    el.style.setProperty('--reveal-delay', `${index * 90}ms`);
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
}

/* ---------- Playful hero collage: drag, throw, bounce ---------- */

function setupPlayfulCollage() {
  const collage = document.querySelector('.hero-collage');
  if (!collage) return;

  const photos = Array.from(collage.querySelectorAll('.collage-photo'));
  const hint = collage.querySelector('.collage-hint');
  const PAD = 24; // how far a photo may poke outside the collage
  let zCounter = 10;

  photos.forEach((photo) => {
    const img = photo.querySelector('img');
    if (img) img.draggable = false;

    const s = { x: 0, y: 0, vx: 0, vy: 0, bounds: null, dragging: false, raf: 0, lastX: 0, lastY: 0, lastT: 0, startX: 0, startY: 0 };

    const apply = () => {
      const tilt = Math.max(-14, Math.min(14, s.vx * 0.9));
      photo.style.translate = `${s.x}px ${s.y}px`;
      photo.style.rotate = `${tilt}deg`;
    };

    const measureBounds = () => {
      const c = collage.getBoundingClientRect();
      const r = photo.getBoundingClientRect();
      const baseLeft = r.left - s.x;
      const baseTop = r.top - s.y;
      return {
        minX: c.left - baseLeft - PAD,
        maxX: c.right - (baseLeft + r.width) + PAD,
        minY: c.top - baseTop - PAD,
        maxY: c.bottom - (baseTop + r.height) + PAD
      };
    };

    // Rubber band: past the limit, movement gets heavier.
    const rubber = (value, min, max) => {
      if (value < min) return min - (min - value) * 0.3;
      if (value > max) return max + (value - max) * 0.3;
      return value;
    };

    const glide = () => {
      const b = s.bounds;
      s.x += s.vx;
      s.y += s.vy;
      s.vx *= 0.93;
      s.vy *= 0.93;

      // Bounce off the edges.
      if (s.x < b.minX) { s.x = b.minX; s.vx = Math.abs(s.vx) * 0.55; }
      if (s.x > b.maxX) { s.x = b.maxX; s.vx = -Math.abs(s.vx) * 0.55; }
      if (s.y < b.minY) { s.y = b.minY; s.vy = Math.abs(s.vy) * 0.55; }
      if (s.y > b.maxY) { s.y = b.maxY; s.vy = -Math.abs(s.vy) * 0.55; }

      apply();
      if (Math.abs(s.vx) > 0.15 || Math.abs(s.vy) > 0.15) {
        s.raf = requestAnimationFrame(glide);
      } else {
        s.vx = 0;
        s.vy = 0;
        apply();
      }
    };

    photo.addEventListener('pointerdown', (event) => {
      if (event.button !== undefined && event.button !== 0) return;
      cancelAnimationFrame(s.raf);
      // Hand control from the CSS entrance/float animation to the pointer.
      photo.style.animation = 'none';
      photo.style.opacity = '1';
      s.bounds = measureBounds();
      s.dragging = true;
      s.startX = event.clientX - s.x;
      s.startY = event.clientY - s.y;
      s.lastX = event.clientX;
      s.lastY = event.clientY;
      s.lastT = performance.now();
      s.vx = 0;
      s.vy = 0;
      photo.style.zIndex = String(++zCounter);
      photo.classList.add('is-dragging');
      collage.classList.add('is-playing');
      if (hint) hint.classList.add('is-hidden');
      photo.setPointerCapture(event.pointerId);
    });

    photo.addEventListener('pointermove', (event) => {
      if (!s.dragging) return;
      const now = performance.now();
      const dt = Math.max(16, now - s.lastT);
      // Velocity in px per frame (~16ms), smoothed.
      s.vx = s.vx * 0.6 + ((event.clientX - s.lastX) / dt) * 16 * 0.4;
      s.vy = s.vy * 0.6 + ((event.clientY - s.lastY) / dt) * 16 * 0.4;
      s.lastX = event.clientX;
      s.lastY = event.clientY;
      s.lastT = now;

      const b = s.bounds;
      s.x = rubber(event.clientX - s.startX, b.minX, b.maxX);
      s.y = rubber(event.clientY - s.startY, b.minY, b.maxY);
      apply();
    });

    const release = () => {
      if (!s.dragging) return;
      s.dragging = false;
      photo.classList.remove('is-dragging');
      // A pause before letting go means no throw.
      if (performance.now() - s.lastT > 90) {
        s.vx = 0;
        s.vy = 0;
      }
      s.raf = requestAnimationFrame(glide);
    };

    photo.addEventListener('pointerup', release);
    photo.addEventListener('pointercancel', release);

    // Double-click / double-tap: return home.
    photo.addEventListener('dblclick', () => {
      cancelAnimationFrame(s.raf);
      s.x = 0;
      s.y = 0;
      s.vx = 0;
      s.vy = 0;
      photo.classList.add('is-returning');
      apply();
      setTimeout(() => photo.classList.remove('is-returning'), 600);
    });
  });
}

/* ---------- Quote effects: parallax, word reveal, typewriter ---------- */

function setupQuoteEffects() {
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Parallax photo
  const parallaxImages = Array.from(document.querySelectorAll('[data-parallax]'));

  // Word-by-word reveal tied to scroll
  const wordBlocks = Array.from(document.querySelectorAll('[data-word-reveal]'));

  const onScroll = () => {
    const vh = window.innerHeight;

    parallaxImages.forEach((img) => {
      const r = img.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const progress = (r.top + r.height / 2 - vh / 2) / vh; // -1 .. 1
      img.style.transform = `translateY(${progress * -60}px) scale(1.15)`;
    });

    wordBlocks.forEach((block) => {
      const words = block.querySelectorAll('.qv-word');
      const r = block.getBoundingClientRect();
      // 0 when the block enters at the bottom, 1 when it reaches 40% from top
      const progress = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.6)));
      const lit = Math.round(progress * words.length);
      words.forEach((w, i) => w.classList.toggle('is-lit', i < lit));
      block.classList.toggle('is-complete', lit >= words.length);
    });
  };

  if (reduceMotion) {
    wordBlocks.forEach((block) => {
      block.querySelectorAll('.qv-word').forEach((w) => w.classList.add('is-lit'));
      block.classList.add('is-complete');
    });
  } else if (parallaxImages.length || wordBlocks.length) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
    }, { passive: true });
    onScroll();
  }

  // Typewriter, starts when visible
  document.querySelectorAll('[data-typewriter]').forEach((el) => {
    const lines = el.dataset.typewriter.split('|');
    const targets = el.querySelectorAll('.qv-type__line');
    const cursor = el.querySelector('.qv-type__cursor');

    const finish = () => targets.forEach((t, i) => (t.textContent = lines[i] || ''));
    if (reduceMotion || !('IntersectionObserver' in window)) {
      finish();
      el.classList.add('is-done');
      return;
    }

    const type = () => {
      let line = 0;
      let char = 0;
      const step = () => {
        if (line >= lines.length) {
          el.classList.add('is-done');
          return;
        }
        targets[line].textContent = lines[line].slice(0, ++char);
        if (cursor) targets[line].appendChild(cursor);
        if (char >= lines[line].length) {
          line += 1;
          char = 0;
          setTimeout(step, 380);
        } else {
          setTimeout(step, 55 + Math.random() * 60);
        }
      };
      step();
    };

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        io.disconnect();
        setTimeout(type, 250);
      }
    }, { threshold: 0.6 });
    io.observe(el);
  });
}

/* ---------- Navigation & search ---------- */

function setupNavigation() {
  const mobileCartToggle = document.getElementById('mobile-cart-toggle');
  if (mobileCartToggle) {
    mobileCartToggle.addEventListener('click', () => {
      window.location.href = 'cart.html';
    });
  }
}

function bindSearchInputs() {
  const searchInputs = [document.getElementById('global-search-input'), document.getElementById('menu-search-input')];
  const clearButton = document.getElementById('clear-search-button');

  searchInputs.forEach((input) => {
    if (!input) return;
    input.addEventListener('input', (event) => {
      state.searchTerm = event.target.value.trim().toLowerCase();
      syncSearchInputs();
      if (document.getElementById('menu-grid')) {
        renderMenu();
      }
    });
  });

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      state.searchTerm = '';
      syncSearchInputs();
      if (document.getElementById('menu-grid')) renderMenu();
    });
  }
}

function syncSearchInputs() {
  [document.getElementById('global-search-input'), document.getElementById('menu-search-input')].forEach((input) => {
    if (input && input !== document.activeElement) input.value = state.searchTerm;
  });

  const clearButton = document.getElementById('clear-search-button');
  if (clearButton) clearButton.classList.toggle('hidden', !state.searchTerm);
}

/* ---------- Menu ---------- */

function getVisibleProducts() {
  const query = state.searchTerm.trim().toLowerCase();

  return products.filter((product) => {
    const matchesCategory = state.activeCategory === 'ALL' || product.category === state.activeCategory;
    const matchesSearch = !query || product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
}

function renderCategoryNav() {
  const nav = document.getElementById('category-nav');
  nav.innerHTML = categoryOrder
    .map((category) => {
      const count = category === 'ALL' ? products.length : products.filter((p) => p.category === category).length;
      const active = state.activeCategory === category;
      return `
        <button type="button" class="category-pill ${active ? 'is-active' : ''}" data-category="${category}" role="tab" aria-selected="${active}">
          ${category} <sup>${count}</sup>
        </button>
      `;
    })
    .join('');

  nav.querySelectorAll('.category-pill').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeCategory = button.dataset.category;
      renderCategoryNav();
      renderMenu();
    });
  });
}

function renderMenu() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;
  const visibleProducts = getVisibleProducts();

  if (!visibleProducts.length) {
    grid.innerHTML = `
      <div class="menu-empty">
        <p class="eyebrow">No matches</p>
        <h3>Nothing matches that search yet.</h3>
        <button type="button" class="button button--secondary" id="reset-search-button">Reset search</button>
      </div>
    `;

    document.getElementById('reset-search-button').addEventListener('click', () => {
      state.searchTerm = '';
      state.activeCategory = 'ALL';
      syncSearchInputs();
      renderCategoryNav();
      renderMenu();
    });
    return;
  }

  grid.innerHTML = visibleProducts.map(renderProductCard).join('');
  observeReveal(grid);
}

function renderFeatured() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  grid.innerHTML = FEATURED_IDS.map(getProductById).filter(Boolean).map(renderProductCard).join('');
  observeReveal(grid);
}

function renderProductCard(product) {
  const inCart = getQuantityInCart(product.id);
  return `
    <article class="menu-card ${product.originalPrice ? 'menu-card--pack' : ''}" aria-label="${product.name}" data-card="${product.id}">
      <button type="button" class="menu-card__image" data-open-product="${product.id}" aria-label="Choose options for ${product.name}">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="menu-card__badge">${product.category}</span>
        ${product.originalPrice ? `<span class="menu-card__save">Save ${formatCurrency(product.originalPrice - product.price)}</span>` : ''}
        <span class="menu-card__incart ${inCart ? '' : 'hidden'}" data-incart="${product.id}">${inCart} in cart</span>
      </button>
      <div class="menu-card__body">
        <div class="menu-card__header">
          <h3 class="menu-card__title">${product.name}</h3>
          <span class="menu-card__price">${product.originalPrice ? `<s>${formatCurrency(product.originalPrice)}</s>` : ''}${formatCurrency(product.price)}</span>
        </div>
        <p class="menu-card__description">${product.description}</p>
        ${renderIncludes(product)}
        <div class="menu-card__actions">
          <button type="button" class="card-button" data-open-product="${product.id}">
            <span>Add to order</span><span aria-hidden="true">+</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderIncludes(product) {
  if (!product.includes || !product.includes.length) return '';
  return `<ul class="pack-includes">${product.includes.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

/* ---------- Product modal ---------- */

function openProductModal(product) {
  state.modalProduct = product;
  state.modalQuantity = 1;

  const modal = document.getElementById('product-modal');
  const modalContent = document.getElementById('modal-content');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal__content modal-product ${product.originalPrice ? 'modal-product--pack' : ''}">
      <div class="modal-product__image">
        <img src="${product.image}" alt="${product.name}" />
        ${product.originalPrice ? `<span class="modal-product__save">You save ${formatCurrency(product.originalPrice - product.price)}</span>` : ''}
      </div>
      <div class="modal-product__body">
        <div class="modal-product__header">
          <div>
            <p class="eyebrow">${product.category}</p>
            <h3 class="modal-product__name">${product.name}</h3>
          </div>
          <span class="modal-product__price">${product.originalPrice ? `<s>${formatCurrency(product.originalPrice)}</s> ` : 'from '}${formatCurrency(product.price)}</span>
        </div>

        <p>${product.description}</p>
        ${product.originalPrice ? '' : renderIncludes(product)}

        <div class="option-groups">
          ${renderOptionGroups(product)}
        </div>

        <div class="modal-product__quantity">
          <span class="label-title">Quantity</span>
          <div class="quantity-control" aria-label="Quantity selector">
            <button type="button" id="decrease-qty" aria-label="Decrease quantity">−</button>
            <span class="quantity-value" id="modal-quantity-value">1</span>
            <button type="button" id="increase-qty" aria-label="Increase quantity">＋</button>
          </div>
        </div>

        <button type="button" class="add-to-cart-button" id="add-to-cart-action">
          <span>Add to cart</span>
          <strong id="modal-total-price">${formatCurrency(getItemPrice(product, {}))}</strong>
        </button>
      </div>
    </div>
  `;

  modalContent.querySelectorAll('.option-choice input').forEach((input) => {
    input.addEventListener('change', updateModalTotal);
  });

  document.getElementById('increase-qty').addEventListener('click', () => {
    state.modalQuantity += 1;
    updateModalQuantity();
  });

  document.getElementById('decrease-qty').addEventListener('click', () => {
    state.modalQuantity = Math.max(1, state.modalQuantity - 1);
    updateModalQuantity();
  });

  const addButton = document.getElementById('add-to-cart-action');
  addButton.addEventListener('click', () => {
    if (addButton.disabled) return; // guard against double taps
    addButton.disabled = true;
    const selectedOptions = getSelectedOptionsFromModal(product);
    const quantity = state.modalQuantity;
    addItemToCart(product, selectedOptions, quantity);
    showAddedConfirmation(product, selectedOptions, quantity);
  });

  updateModalQuantity();

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.querySelector('.modal__dialog').scrollTop = 0;
}

function showAddedConfirmation(product, selectedOptions, quantity) {
  const modalContent = document.getElementById('modal-content');
  const { count, subtotal } = getCartTotals();
  const optionsText = getFormattedOptionLines(selectedOptions).join(' • ');

  modalContent.innerHTML = `
    <div class="modal__content modal-success" role="status">
      <div class="modal-success__check" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>
      </div>
      <p class="eyebrow">Added to your order</p>
      <h3>${quantity} × ${product.name}</h3>
      <p class="modal-success__options">${optionsText}</p>
      <p class="modal-success__summary">Your cart: ${count} item${count === 1 ? '' : 's'} · ${formatCurrency(subtotal)}</p>
      <div class="modal-success__actions">
        <button type="button" class="button button--secondary" id="keep-browsing-button">Keep browsing</button>
        <a class="button button--primary" href="cart.html">View cart &amp; order</a>
      </div>
    </div>
  `;

  document.getElementById('keep-browsing-button').addEventListener('click', closeProductModal);
  showToast(`✓ ${product.name} added`);
}

function bindModalEvents() {
  const modal = document.getElementById('product-modal');
  if (!modal) return;

  document.getElementById('close-product-modal')?.addEventListener('click', closeProductModal);
  modal.querySelector('[data-close-modal="true"]')?.addEventListener('click', closeProductModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) closeProductModal();
  });
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function updateModalQuantity() {
  const quantityElement = document.getElementById('modal-quantity-value');
  if (!quantityElement) return;
  quantityElement.textContent = String(state.modalQuantity);
  updateModalTotal();
}

function updateModalTotal() {
  const totalElement = document.getElementById('modal-total-price');
  if (!totalElement || !state.modalProduct) return;

  const selectedOptions = getSelectedOptionsFromModal(state.modalProduct);
  totalElement.textContent = formatCurrency(getItemPrice(state.modalProduct, selectedOptions) * state.modalQuantity);

  document.querySelectorAll('.option-choice').forEach((label) => {
    const input = label.querySelector('input');
    label.classList.toggle('option-choice--checked', Boolean(input && input.checked));
  });
}

function renderOptionGroups(product) {
  if (!product.options || product.options.length === 0) {
    return '<p class="option-group__title">No customisation required</p>';
  }

  return product.options
    .map((group, groupIndex) => {
      const type = group.type === 'checkbox' ? 'checkbox' : 'radio';

      if (group.type === 'pick') {
        const tiles = group.values
          .map((option) => {
            const checked = option.selected ? 'checked' : '';
            const source = getProductById(option.productId);
            const image = source ? source.image.replace('w=900', 'w=300') : product.image;
            const price = option.price ? `+${option.price} DH` : 'Included';
            return `
              <label class="option-choice option-tile ${checked ? 'option-choice--checked' : ''}">
                <input type="radio" name="${toSlug(group.name)}" value="${option.label}" ${checked} />
                <span class="option-tile__img"><img src="${image}" alt="" loading="lazy" /></span>
                <span class="option-tile__name">${option.label}</span>
                <span class="option-tile__price">${price}</span>
                <span class="option-tile__check" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>
              </label>
            `;
          })
          .join('');

        return `
          <div class="option-group option-group--pick">
            <p class="option-group__step"><span>${groupIndex + 1}</span>Choose your ${group.name.toLowerCase()}</p>
            <div class="option-tiles">${tiles}</div>
          </div>
        `;
      }

      const optionMarkup = group.values
        .map((option) => {
          const checked = option.selected ? 'checked' : '';
          const price = option.price ? `<em>+${option.price} DH</em>` : '';
          return `
            <label class="option-choice ${checked ? 'option-choice--checked' : ''}">
              <input type="${type}" name="${toSlug(group.name)}" value="${option.label}" ${checked} />
              <span>${option.label} ${price}</span>
            </label>
          `;
        })
        .join('');

      return `
        <div class="option-group">
          <p class="option-group__title">${group.name}${type === 'checkbox' ? ' <small>(optional)</small>' : ''}</p>
          <div class="option-set">${optionMarkup}</div>
        </div>
      `;
    })
    .join('');
}

function getSelectedOptionsFromModal(product) {
  const selected = {};
  if (!product.options) return selected;
  const scope = document.getElementById('modal-content');

  product.options.forEach((group) => {
    const selectedValues = Array.from(scope.querySelectorAll(`input[name="${toSlug(group.name)}"]:checked`));
    if (group.type === 'checkbox') {
      selected[group.name] = selectedValues.map((input) => input.value);
    } else {
      selected[group.name] = selectedValues[0] ? selectedValues[0].value : (group.values.find((value) => value.selected) || group.values[0]).label;
    }
  });

  return selected;
}

/* ---------- Cart ---------- */

function addItemToCart(product, selectedOptions, quantity) {
  const signature = getItemSignature(product.id, selectedOptions);
  const existing = state.cart.find((item) => getItemSignature(item.productId, item.selectedOptions) === signature);

  if (existing) {
    // Same product with the same options: just increase the quantity.
    existing.quantity += quantity;
  } else {
    state.cart.push({
      id: `${product.id}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
      productId: product.id,
      name: product.name,
      image: product.image,
      category: product.category,
      quantity,
      selectedOptions,
      unitPrice: getItemPrice(product, selectedOptions)
    });
  }

  persistCart();
  refreshCartViews();
  bumpCartBadge();
}

function getItemSignature(productId, selectedOptions) {
  const normalized = Object.keys(selectedOptions || {})
    .sort()
    .map((key) => {
      const value = selectedOptions[key];
      return `${key}=${Array.isArray(value) ? [...value].sort().join('+') : value}`;
    })
    .join('|');
  return `${productId}::${normalized}`;
}

function refreshCartViews() {
  if (document.getElementById('cart-items')) renderCart();
  updateCartIndicators();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  if (!cartItems) return;

  const layout = document.querySelector('.cart-layout');
  if (layout) layout.classList.toggle('is-empty', !state.cart.length);

  if (!state.cart.length) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <svg class="cart-empty__icon" viewBox="0 0 48 48" aria-hidden="true"><path d="M10 18h24v10a10 10 0 01-10 10h-4a10 10 0 01-10-10V18z"/><path d="M34 21h3a4 4 0 010 8h-3"/><path d="M17 8c0 3 3 3 3 6M24 8c0 3 3 3 3 6"/></svg>
        <h3>Your cart is empty</h3>
        <p>Pick something you love from the menu.</p>
        <a class="button button--secondary" href="menu.html">Browse the menu</a>
      </div>
    `;
  } else {
    cartItems.innerHTML = state.cart
      .map(
        (item) => `
          <article class="cart-item" data-cart-item="${item.id}">
            <div class="cart-item__image">
              <img src="${item.image}" alt="${item.name}" loading="lazy" />
            </div>
            <div class="cart-item__content">
              <div class="cart-item__top">
                <h3 class="cart-item__name">${item.name}</h3>
                <strong>${formatCurrency(item.unitPrice * item.quantity)}</strong>
              </div>
              <div class="cart-item__meta">${formatSelectedOptions(item.selectedOptions)}</div>
              <div class="cart-item__bottom">
                <div class="cart-item__qty">
                  <button type="button" class="qty-button" data-change-qty="decrease" data-item-id="${item.id}" aria-label="${item.quantity === 1 ? 'Remove' : 'Decrease quantity'}">${item.quantity === 1 ? '🗑' : '−'}</button>
                  <span>${item.quantity}</span>
                  <button type="button" class="qty-button" data-change-qty="increase" data-item-id="${item.id}" aria-label="Increase quantity">＋</button>
                </div>
                <span class="cart-item__unit">${formatCurrency(item.unitPrice)} each</span>
                <button type="button" class="remove-button" data-remove-item="${item.id}">Remove</button>
              </div>
            </div>
          </article>
        `
      )
      .join('') +
      `<a class="cart-add-more" href="menu.html">+ Add more items</a>`;
  }

  bindCartControls();
  updateTotals();
}

function bindCartControls() {
  document.querySelectorAll('[data-remove-item]').forEach((button) => {
    button.addEventListener('click', () => {
      state.cart = state.cart.filter((item) => item.id !== button.dataset.removeItem);
      persistCart();
      refreshCartViews();
    });
  });

  document.querySelectorAll('[data-change-qty]').forEach((button) => {
    button.addEventListener('click', () => {
      const change = button.dataset.changeQty === 'increase' ? 1 : -1;
      state.cart = state.cart
        .map((item) => (item.id === button.dataset.itemId ? { ...item, quantity: item.quantity + change } : item))
        .filter((item) => item.quantity > 0);
      persistCart();
      refreshCartViews();
    });
  });
}

function getOrderType() {
  return document.querySelector('input[name="order-type"]:checked')?.value || 'pickup';
}

function getCartTotals() {
  const count = state.cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  return { count, subtotal };
}

function getDeliveryFee() {
  return document.getElementById('checkout-form') && getOrderType() === 'delivery' && state.cart.length ? APP_CONFIG.deliveryFee : 0;
}

function updateTotals() {
  const { subtotal } = getCartTotals();
  const fee = getDeliveryFee();
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText('subtotal-value', formatCurrency(subtotal));
  setText('delivery-fee-value', formatCurrency(fee));
  setText('total-value', formatCurrency(subtotal + fee));
  setText('order-button-total', formatCurrency(subtotal + fee));
  document.getElementById('delivery-fee-row')?.classList.toggle('hidden', getOrderType() !== 'delivery');
}

function updateCartIndicators() {
  const { count, subtotal } = getCartTotals();
  const summary = document.getElementById('mobile-cart-summary');
  const badge = document.getElementById('cart-count-badge');
  const bar = document.getElementById('mobile-cart-bar');

  if (badge) {
    badge.textContent = String(count);
    badge.classList.toggle('hidden', count === 0);
  }
  if (summary) summary.innerHTML = `View cart <b>${count}</b><span class="mobile-cart-bar__total">${formatCurrency(subtotal)}</span>`;
  if (bar) bar.classList.toggle('is-visible', count > 0);
  document.body.classList.toggle('has-cart-bar', Boolean(bar) && count > 0);

  document.querySelectorAll('[data-incart]').forEach((el) => {
    const qty = getQuantityInCart(el.dataset.incart);
    el.textContent = `${qty} in cart`;
    el.classList.toggle('hidden', qty === 0);
  });
}

function getQuantityInCart(productId) {
  return state.cart.filter((item) => item.productId === productId).reduce((sum, item) => sum + item.quantity, 0);
}

function bumpCartBadge() {
  const button = document.getElementById('open-cart-button');
  if (!button) return;
  button.classList.remove('is-bumping');
  void button.offsetWidth; // restart animation
  button.classList.add('is-bumping');
}

/* ---------- Checkout ---------- */

function bindCheckoutEvents() {
  restoreCustomerDetails();

  document.querySelectorAll('input[name="order-type"]').forEach((input) => {
    input.addEventListener('change', updateOrderTypeUI);
  });

  document.getElementById('checkout-form').addEventListener('submit', (event) => {
    event.preventDefault();
    handleWhatsAppOrder();
  });

  ['customer-name', 'customer-phone', 'customer-address'].forEach((id) => {
    document.getElementById(id)?.addEventListener('input', (event) => event.target.classList.remove('is-invalid'));
  });

  document.getElementById('reopen-whatsapp-button')?.addEventListener('click', () => {
    if (state.lastWhatsAppUrl) window.open(state.lastWhatsAppUrl, '_blank', 'noopener');
  });

  document.getElementById('new-order-button')?.addEventListener('click', () => {
    state.cart = [];
    persistCart();
    document.getElementById('customer-note').value = '';
    document.getElementById('order-sent').classList.add('hidden');
    document.getElementById('checkout-form').classList.remove('hidden');
    refreshCartViews();
    window.location.href = 'menu.html';
  });

  updateOrderTypeUI();
}

function updateOrderTypeUI() {
  const isDelivery = getOrderType() === 'delivery';
  document.getElementById('delivery-group')?.classList.toggle('hidden', !isDelivery);
  document.getElementById('pickup-info')?.classList.toggle('hidden', isDelivery);

  const phoneLabel = document.getElementById('phone-label-hint');
  if (phoneLabel) phoneLabel.textContent = isDelivery ? '(required for delivery)' : '(optional)';

  updateTotals();
}

function handleWhatsAppOrder() {
  if (!state.cart.length) {
    showToast('Your cart is empty', true);
    setTimeout(() => (window.location.href = 'menu.html'), 900);
    return;
  }

  const orderType = getOrderType();
  const isDelivery = orderType === 'delivery';
  const nameInput = document.getElementById('customer-name');
  const phoneInput = document.getElementById('customer-phone');
  const addressInput = document.getElementById('customer-address');

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const address = addressInput ? addressInput.value.trim() : '';
  const note = document.getElementById('customer-note').value.trim();

  const missing = [];
  if (!name) missing.push([nameInput, 'Please enter your name']);
  if (isDelivery && phone.replace(/\D/g, '').length < 9) missing.push([phoneInput, 'Please enter a phone number for delivery']);
  if (isDelivery && !address) missing.push([addressInput, 'Please enter your delivery address']);

  if (missing.length) {
    missing.forEach(([input]) => input.classList.add('is-invalid'));
    showToast(missing[0][1], true);
    missing[0][0].focus();
    return;
  }

  saveCustomerDetails({ name, phone, address });

  const { subtotal } = getCartTotals();
  const fee = isDelivery ? APP_CONFIG.deliveryFee : 0;

  const lines = [
    `Hello ${APP_CONFIG.brandName} 👋`,
    '',
    "I'd like to place an order:",
    '━━━━━━━━━━━━━━',
    ...state.cart.flatMap((item) => [
      `• ${item.quantity} × ${item.name} — ${formatCurrency(item.unitPrice * item.quantity)}`,
      ...getFormattedOptionLines(item.selectedOptions).map((line) => `   ${line}`),
      ''
    ]),
    '━━━━━━━━━━━━━━',
    `Subtotal: ${formatCurrency(subtotal)}`,
    isDelivery ? `Delivery fee: ${formatCurrency(fee)}` : '',
    `TOTAL: ${formatCurrency(subtotal + fee)}`,
    '',
    isDelivery ? '🛵 DELIVERY' : '🛍️ PICKUP at the shop',
    `Name: ${name}`,
    phone ? `Phone: ${phone}` : '',
    isDelivery ? `Address: ${address}` : '',
    note ? `Note: ${note}` : '',
    '',
    'Thank you! ☕'
  ].filter((line, index, all) => line !== '' || (all[index - 1] !== '' && index > 0));

  const url = `https://wa.me/${APP_CONFIG.whatsappNumberDigits}?text=${encodeURIComponent(lines.join('\n'))}`;
  state.lastWhatsAppUrl = url;
  window.open(url, '_blank', 'noopener');

  document.getElementById('checkout-form').classList.add('hidden');
  const sent = document.getElementById('order-sent');
  if (sent) {
    sent.classList.remove('hidden');
    const summary = document.getElementById('order-sent-summary');
    if (summary) summary.textContent = `${isDelivery ? 'Delivery' : 'Pickup'} · ${formatCurrency(subtotal + fee)}`;
    sent.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function saveCustomerDetails(details) {
  try {
    localStorage.setItem(CUSTOMER_KEY, JSON.stringify(details));
  } catch (error) {
    /* storage unavailable */
  }
}

function restoreCustomerDetails() {
  try {
    const saved = JSON.parse(localStorage.getItem(CUSTOMER_KEY) || '{}');
    if (saved.name) document.getElementById('customer-name').value = saved.name;
    if (saved.phone) document.getElementById('customer-phone').value = saved.phone;
    if (saved.address && document.getElementById('customer-address')) document.getElementById('customer-address').value = saved.address;
  } catch (error) {
    /* ignore */
  }
}

/* ---------- Shop info ---------- */

function isShopOpen(date = new Date()) {
  const hour = date.getHours() + date.getMinutes() / 60;
  return hour >= APP_CONFIG.openHour && hour < APP_CONFIG.closeHour;
}

function renderOpenStatus() {
  const pad = (h) => `${String(h).padStart(2, '0')}:00`;
  const open = isShopOpen();
  document.querySelectorAll('[data-open-status]').forEach((el) => {
    el.classList.toggle('is-open', open);
    el.classList.toggle('is-closed', !open);
    el.innerHTML = `<span class="status-dot" aria-hidden="true"></span>${open ? `Open now · until ${pad(APP_CONFIG.closeHour)}` : `Closed · opens ${pad(APP_CONFIG.openHour)}`}`;
  });
}

function fillDeliveryFeeLabels() {
  document.querySelectorAll('[data-delivery-fee]').forEach((el) => (el.textContent = formatCurrency(APP_CONFIG.deliveryFee)));
  document.querySelectorAll('[data-pickup-minutes]').forEach((el) => (el.textContent = APP_CONFIG.pickupReadyMinutes));
  document.querySelectorAll('[data-delivery-minutes]').forEach((el) => (el.textContent = APP_CONFIG.deliveryMinutes));
}

function updateQrCode() {
  const qrImage = document.getElementById('qr-code-image');
  if (!qrImage) return;
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(APP_CONFIG.websiteUrl)}`;
}

function updateScrollState() {
  document.body.classList.toggle('scrolled', window.scrollY > 12);
}

/* ---------- Helpers ---------- */

function formatSelectedOptions(selectedOptions) {
  return getFormattedOptionLines(selectedOptions).join(' • ');
}

function getFormattedOptionLines(selectedOptions) {
  const lines = Object.entries(selectedOptions || {})
    .map(([group, value]) => {
      if (Array.isArray(value)) return value.length ? `${group}: ${value.join(', ')}` : '';
      return value ? `${group}: ${value}` : '';
    })
    .filter(Boolean);
  return lines.length ? lines : ['No customisation'];
}

function getItemPrice(product, selectedOptions) {
  let totalPrice = product.price;
  if (!selectedOptions) return totalPrice;

  product.options?.forEach((group) => {
    const rawSelection = selectedOptions[group.name];
    if (!rawSelection) return;

    if (group.type === 'checkbox') {
      const selectedValues = Array.isArray(rawSelection) ? rawSelection : [rawSelection];
      totalPrice += group.values.filter((value) => selectedValues.includes(value.label)).reduce((sum, item) => sum + item.price, 0);
      return;
    }

    const selectedValue = group.values.find((value) => value.label === rawSelection);
    if (selectedValue) totalPrice += Number(selectedValue.price || 0);
  });

  return totalPrice;
}

function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem('ayat-cart') || '[]');
    if (!Array.isArray(saved)) return [];
    // Merge any duplicate lines left over from the old double-add bug.
    const merged = [];
    saved.forEach((item) => {
      const signature = getItemSignature(item.productId, item.selectedOptions);
      const existing = merged.find((m) => getItemSignature(m.productId, m.selectedOptions) === signature);
      if (existing) existing.quantity += item.quantity;
      else merged.push({ ...item });
    });
    return merged;
  } catch (error) {
    return [];
  }
}

function persistCart() {
  try {
    localStorage.setItem('ayat-cart', JSON.stringify(state.cart));
  } catch (error) {
    /* storage unavailable */
  }
}

function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  toast.classList.toggle('is-error', isError);
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

function formatCurrency(value) {
  return `${Math.round(value)} DH`;
}

function toSlug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
