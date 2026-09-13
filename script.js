const APP_CONFIG = {
  brandName: 'AYAT COFFEE',
  whatsappNumber: '+212767283637',
  whatsappNumberDigits: '212767283637',
  instagramHandle: '@ayatcoffee',
  instagramUrl: 'https://instagram.com/ayatcoffee',
  websiteUrl: 'https://ayat8.github.io/ayat-coffee-prototype/',
  locationLabel: 'Agadir, Morocco',
  locationUrl: 'https://maps.google.com/?q=Agadir%20Morocco',
  hours: 'Monday — Sunday • 08:00 — 22:00'
};

const products = [
  {
    id: 'espresso',
    category: 'COFFEE',
    name: 'Espresso',
    description: 'A bold, aromatic shot with rich crema and warm roasted depth.',
    price: 12,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1498804103079-a4f47e8bf23d?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1499636136210-6d342abf4e4f?auto=format&fit=crop&w=900&q=80',
    options: [
      { name: 'Add-on', type: 'checkbox', values: [{ label: 'Chocolate drizzle', price: 3 }, { label: 'Extra cookie', price: 8 }] }
    ]
  }
];

const state = {
  activeCategory: 'ALL',
  cart: loadCart(),
  modalProduct: null,
  modalQuantity: 1
};

const categoryOrder = ['ALL', 'COFFEE', 'COLD DRINKS', 'FOOD', 'DESSERTS'];

initialize();

function initialize() {
  setupNavigation();
  renderCategoryNav();
  renderMenu();
  renderCart();
  bindCheckoutEvents();
  bindModalEvents();
  updateQrCode();
  updateScrollState();
  document.addEventListener('scroll', updateScrollState, { passive: true });
}

function setupNavigation() {
  document.getElementById('open-cart-button').addEventListener('click', () => {
    document.getElementById('cart').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('mobile-cart-toggle').addEventListener('click', () => {
    document.getElementById('cart').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function renderCategoryNav() {
  const nav = document.getElementById('category-nav');
  nav.innerHTML = categoryOrder
    .map(
      (category) => `
        <button
          type="button"
          class="category-pill ${state.activeCategory === category ? 'is-active' : ''}"
          data-category="${category}"
          role="tab"
          aria-selected="${state.activeCategory === category}"
        >
          ${category}
        </button>
      `
    )
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
  const visibleProducts = products.filter((product) => state.activeCategory === 'ALL' || product.category === state.activeCategory);

  grid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="menu-card" aria-label="${product.name}">
          <div class="menu-card__image">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            <span class="menu-card__badge">${product.category}</span>
          </div>
          <div class="menu-card__body">
            <div class="menu-card__header">
              <h3 class="menu-card__title">${product.name}</h3>
              <span class="menu-card__price">${formatCurrency(product.price)}</span>
            </div>
            <p class="menu-card__description">${product.description}</p>
            <div class="menu-card__actions">
              <button type="button" class="card-button card-button--ghost" data-product-detail="${product.id}">Details</button>
              <button type="button" class="card-button" data-product-add="${product.id}">Add</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  grid.querySelectorAll('[data-product-detail]').forEach((button) => {
    button.addEventListener('click', () => openProductModal(getProductById(button.dataset.productDetail)));
  });

  grid.querySelectorAll('[data-product-add]').forEach((button) => {
    button.addEventListener('click', () => openProductModal(getProductById(button.dataset.productAdd), true));
  });
}

function openProductModal(product, addImmediately = false) {
  state.modalProduct = product;
  state.modalQuantity = 1;

  const modal = document.getElementById('product-modal');
  const modalContent = document.getElementById('modal-content');

  modalContent.innerHTML = `
    <div class="modal__content modal-product">
      <div class="modal-product__image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="modal-product__body">
        <div class="modal-product__header">
          <div>
            <p class="eyebrow">${product.category}</p>
            <h3 class="modal-product__name">${product.name}</h3>
          </div>
          <span class="modal-product__price">${formatCurrency(product.price)}</span>
        </div>

        <p>${product.description}</p>

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

        <div class="modal-product__total">
          <span>Total</span>
          <strong id="modal-total-price">${formatCurrency(getItemPrice(product, {}))}</strong>
        </div>

        <button type="button" class="add-to-cart-button" id="add-to-cart-action">Add to cart</button>
      </div>
    </div>
  `;

  const optionInputs = modalContent.querySelectorAll('.option-choice input');
  optionInputs.forEach((input) => {
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

  document.getElementById('add-to-cart-action').addEventListener('click', () => {
    addItemToCart(product, getSelectedOptionsFromModal(product), state.modalQuantity);
    closeProductModal();
    showToast('Added to cart');
  });

  updateModalQuantity();
  updateModalTotal();

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');

  if (addImmediately) {
    document.getElementById('add-to-cart-action').click();
  }
}

function bindModalEvents() {
  document.getElementById('close-product-modal').addEventListener('click', closeProductModal);
  document.querySelector('[data-close-modal="true"]').addEventListener('click', closeProductModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.getElementById('product-modal').classList.contains('is-open')) {
      closeProductModal();
    }
  });
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
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
  const total = getItemPrice(state.modalProduct, selectedOptions) * state.modalQuantity;
  totalElement.textContent = formatCurrency(total);

  document.querySelectorAll('.option-choice').forEach((label) => {
    const input = label.querySelector('input');
    if (input && input.checked) {
      label.classList.add('option-choice--checked');
    } else {
      label.classList.remove('option-choice--checked');
    }
  });
}

function renderOptionGroups(product) {
  if (!product.options || product.options.length === 0) {
    return '<p class="option-group__title">No customisation required</p>';
  }

  return product.options
    .map((group) => {
      const optionMarkup = group.values
        .map((option) => {
          const checked = option.selected ? 'checked' : '';
          const type = group.type === 'checkbox' ? 'checkbox' : 'radio';
          const price = option.price ? `<em>+${option.price} DH</em>` : '<em>Included</em>';
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
          <p class="option-group__title">${group.name}</p>
          <div class="option-set">${optionMarkup}</div>
        </div>
      `;
    })
    .join('');
}

function getSelectedOptionsFromModal(product) {
  const selected = {};
  if (!product.options) return selected;

  product.options.forEach((group) => {
    const selectedValues = Array.from(document.querySelectorAll(`input[name="${toSlug(group.name)}"]:checked`));
    if (group.type === 'checkbox') {
      selected[group.name] = selectedValues.map((input) => input.value);
    } else {
      selected[group.name] = selectedValues[0] ? selectedValues[0].value : (group.values.find((value) => value.selected) || group.values[0]).label;
    }
  });

  return selected;
}

function addItemToCart(product, selectedOptions, quantity) {
  const item = {
    id: `${product.id}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    productId: product.id,
    name: product.name,
    image: product.image,
    category: product.category,
    quantity: quantity,
    selectedOptions,
    unitPrice: getItemPrice(product, selectedOptions)
  };

  state.cart.push(item);
  persistCart();
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');

  if (!state.cart.length) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <div>
          <p class="eyebrow">CART</p>
          <h3>Your cart is waiting for something delicious. ☕</h3>
        </div>
        <a class="button button--secondary" href="#menu">EXPLORE MENU</a>
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
              <div class="cart-item__qty">
                <button type="button" class="qty-button" data-change-qty="decrease" data-item-id="${item.id}" aria-label="Decrease quantity">−</button>
                <span>${item.quantity}</span>
                <button type="button" class="qty-button" data-change-qty="increase" data-item-id="${item.id}" aria-label="Increase quantity">＋</button>
              </div>
            </div>
            <div class="cart-item__right">
              <span class="cart-item__unit">${formatCurrency(item.unitPrice)} each</span>
              <button type="button" class="remove-button" data-remove-item="${item.id}">Remove</button>
            </div>
          </article>
        `
      )
      .join('');
  }

  bindCartControls();
  updateTotals();
  updateMobileCartSummary();
}

function bindCartControls() {
  document.querySelectorAll('[data-remove-item]').forEach((button) => {
    button.addEventListener('click', () => {
      state.cart = state.cart.filter((item) => item.id !== button.dataset.removeItem);
      persistCart();
      renderCart();
    });
  });

  document.querySelectorAll('[data-change-qty]').forEach((button) => {
    button.addEventListener('click', () => {
      const itemId = button.dataset.itemId;
      const change = button.dataset.changeQty === 'increase' ? 1 : -1;
      state.cart = state.cart
        .map((item) => {
          if (item.id !== itemId) return item;
          const nextQuantity = item.quantity + change;
          return nextQuantity > 0 ? { ...item, quantity: nextQuantity } : item;
        })
        .filter((item) => item.quantity > 0);
      persistCart();
      renderCart();
    });
  });
}

function updateTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const subtotalValue = document.getElementById('subtotal-value');
  const totalValue = document.getElementById('total-value');

  if (subtotalValue) subtotalValue.textContent = `${formatCurrency(subtotal)}`;
  if (totalValue) totalValue.textContent = `${formatCurrency(subtotal)}`;
}

function updateMobileCartSummary() {
  const count = state.cart.reduce((total, item) => total + item.quantity, 0);
  const total = state.cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const summary = document.getElementById('mobile-cart-summary');
  const badge = document.getElementById('cart-count-badge');

  if (badge) badge.textContent = String(count);
  if (summary) summary.textContent = `${count} item${count === 1 ? '' : 's'} · ${formatCurrency(total)}`;
  if (count === 0) {
    badge.style.display = 'none';
  } else {
    badge.style.display = 'grid';
  }
}

function bindCheckoutEvents() {
  const orderTypeInputs = document.querySelectorAll('input[name="order-type"]');
  const tableGroup = document.getElementById('table-group');

  orderTypeInputs.forEach((input) => {
    input.addEventListener('change', () => {
      const selectedValue = document.querySelector('input[name="order-type"]:checked')?.value;
      tableGroup.classList.toggle('hidden', selectedValue !== 'On-site');
    });
  });

  document.getElementById('whatsapp-order-button').addEventListener('click', handleWhatsAppOrder);
}

function handleWhatsAppOrder() {
  if (!state.cart.length) {
    showToast('Your cart is empty', true);
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    return;
  }

  const nameInput = document.getElementById('customer-name');
  const name = nameInput.value.trim();

  if (!name) {
    showToast('Please enter your name', true);
    nameInput.focus();
    return;
  }

  const phone = document.getElementById('customer-phone').value.trim();
  const note = document.getElementById('customer-note').value.trim();
  const orderType = document.querySelector('input[name="order-type"]:checked').value;
  const tableNumber = document.getElementById('table-number').value.trim();
  const subtotal = state.cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  const lines = [
    'Hello AYAT COFFEE 👋',
    '',
    "I'd like to place an order:",
    '━━━━━━━━━━━━━━',
    ...state.cart.flatMap((item) => {
      const details = [`${item.name} × ${item.quantity}`, ...getFormattedOptionLines(item.selectedOptions)];
      const unitLine = `Price: ${formatCurrency(item.unitPrice * item.quantity)}`;
      return [...details, unitLine, ''];
    }),
    '━━━━━━━━━━━━━━',
    `TOTAL: ${formatCurrency(subtotal)}`,
    `Customer: ${name}`,
    phone ? `Phone: ${phone}` : 'Phone: Not provided',
    `Order type: ${orderType}`,
    orderType === 'On-site' && tableNumber ? `Table number: ${tableNumber}` : '',
    note ? `Note: ${note}` : 'Note: No special requests.',
    '',
    'Thank you! ☕'
  ].filter(Boolean);

  const message = lines.join('\n');
  const url = `https://wa.me/${APP_CONFIG.whatsappNumberDigits}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
}

function updateQrCode() {
  const qrImage = document.getElementById('qr-code-image');
  if (!qrImage) return;
  const encodedUrl = encodeURIComponent(APP_CONFIG.websiteUrl);
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodedUrl}`;
}

function updateScrollState() {
  const isScrolled = window.scrollY > 12;
  document.body.classList.toggle('scrolled', isScrolled);
}

function formatSelectedOptions(selectedOptions, asLines = false) {
  const formatted = getFormattedOptionLines(selectedOptions);
  return asLines ? formatted.join('\n') : formatted.join(' • ');
}

function getFormattedOptionLines(selectedOptions) {
  if (!selectedOptions || Object.keys(selectedOptions).length === 0) {
    return ['No customisation'];
  }

  return Object.entries(selectedOptions)
    .map(([group, value]) => {
      if (Array.isArray(value)) {
        return value.length ? `${group}: ${value.join(', ')}` : '';
      }
      return value ? `${group}: ${value}` : '';
    })
    .filter(Boolean);
}

function getItemPrice(product, selectedOptions) {
  let totalPrice = product.price;

  if (!selectedOptions) return totalPrice;

  product.options?.forEach((group) => {
    const rawSelection = selectedOptions[group.name];

    if (!rawSelection) return;

    if (group.type === 'checkbox') {
      const selectedValues = Array.isArray(rawSelection) ? rawSelection : [rawSelection];
      const addOn = group.values.filter((value) => selectedValues.includes(value.label)).reduce((sum, item) => sum + item.price, 0);
      totalPrice += addOn;
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
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function persistCart() {
  localStorage.setItem('ayat-cart', JSON.stringify(state.cart));
}

function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.toggle('is-visible', true);
  toast.style.background = isError ? 'rgba(115, 42, 42, 0.92)' : 'rgba(32, 27, 26, 0.92)';
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 1800);
}

function formatCurrency(value) {
  return `${Math.round(value)} DH`;
}

function toSlug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
