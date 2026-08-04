document.addEventListener("DOMContentLoaded", () => {
  // ==========================================================================
  // DOM ELEMENTS & GLOBAL STATE
  // ==========================================================================
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  const minInput = document.querySelector(".range-min");
  const maxInput = document.querySelector(".range-max");
  const track = document.querySelector(".slider-track");
  const minValText = document.getElementById("min-val");
  const maxValText = document.getElementById("max-val");

  const filterPanel = document.getElementById("filter");
  const mobileTrigger = document.getElementById("mobile-filter-trigger");
  const mobileClose = document.querySelector(".mobile-filter-close");

  const productContainer = document.getElementById("products-container");
  const filterCnt = document.querySelector("#filter-category-container");
  const categoryTitle = document.getElementById("category-title");
  const filterForm = document.querySelector("form");
  const searchInput = document.querySelector(".search-box input");

  const cartBtn = document.querySelector(".cart-btn");
  const cartContainer = document.querySelector(".cart-container");
  const cartCloseBtn = document.querySelector(".close-cart-btn");

  const wishlistBtn = document.querySelector(".wishlist-btn");
  const wishlistContainer = document.querySelector(".wishlist-container");
  const wishlistCloseBtn = document.querySelector(".close-wishlist-btn");

  const priceGap = 10;
  let searchTimeout = null;

  const state = {
    categoryId: null,
    title: "",
    priceMin: 0,
    priceMax: 500,
  };

  // ==========================================================================
  // LOCALSTORAGE HELPERS
  // ==========================================================================
  const getStoredData = (key) => JSON.parse(localStorage.getItem(key)) || [];
  const setStoredData = (key, data) =>
    localStorage.setItem(key, JSON.stringify(data));

  // ==========================================================================
  // UI TOGGLES (NAV, FILTERS, CART, WISHLIST)
  // ==========================================================================
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () =>
      navLinks.classList.toggle("active"),
    );
  }

  if (filterPanel && mobileTrigger) {
    mobileTrigger.addEventListener("click", () =>
      filterPanel.classList.add("open"),
    );
    if (mobileClose) {
      mobileClose.addEventListener("click", () =>
        filterPanel.classList.remove("open"),
      );
    }
  }

  if (cartBtn && cartContainer) {
    cartBtn.addEventListener("click", () => {
      renderCart();
      cartContainer.classList.add("open");
    });
  }

  if (cartCloseBtn && cartContainer) {
    cartCloseBtn.addEventListener("click", () =>
      cartContainer.classList.remove("open"),
    );
  }

  if (wishlistBtn && wishlistContainer) {
    wishlistBtn.addEventListener("click", () => {
      renderWishlist();
      wishlistContainer.classList.add("open");
    });
  }

  if (wishlistCloseBtn && wishlistContainer) {
    wishlistCloseBtn.addEventListener("click", () =>
      wishlistContainer.classList.remove("open"),
    );
  }

  // ==========================================================================
  // DUAL RANGE PRICE SLIDER
  // ==========================================================================
  function updateTrack(e) {
    if (!minInput || !maxInput) return;

    let min = parseInt(minInput.value);
    let max = parseInt(maxInput.value);
    const maxLimit = parseInt(minInput.max);

    if (max - min < priceGap) {
      if (e && e.target === minInput) {
        minInput.value = max - priceGap;
        min = max - priceGap;
      } else {
        maxInput.value = min + priceGap;
        max = min + priceGap;
      }
    }

    if (minValText) minValText.textContent = min;
    if (maxValText) maxValText.textContent = max;

    const percentMin = (min / maxLimit) * 100;
    const percentMax = (max / maxLimit) * 100;

    if (track) {
      track.style.background = `linear-gradient(to right, #f0f0f0 ${percentMin}%, #0f0f0f ${percentMin}%, #0f0f0f ${percentMax}%, #f0f0f0 ${percentMax}%)`;
    }
  }

  if (minInput && maxInput) {
    ["input", "change"].forEach((event) => {
      minInput.addEventListener(event, updateTrack);
      maxInput.addEventListener(event, updateTrack);
    });
    updateTrack();
  }

  // ==========================================================================
  // DYNAMIC RENDER FUNCTIONS (CART & WISHLIST)
  // ==========================================================================
  function renderCart() {
    let cartBody = cartContainer.querySelector(".cart-body");
    if (!cartBody) {
      cartBody = document.createElement("div");
      cartBody.className = "cart-body";
      cartContainer.appendChild(cartBody);
    }

    const cart = getStoredData("cart");
    if (cart.length === 0) {
      cartBody.innerHTML = `<p class="empty-msg">Your cart is empty.</p>`;
      return;
    }

    let total = 0;
    cartBody.innerHTML = cart
      .map((item) => {
        const itemTotal = Number(item.price) * item.quantity;
        total += itemTotal;
        return `
        <div class="cart-card" data-id="${item.id}">
          <img src="${item.img || "https://placehold.co/80x80"}" alt="${item.title}" />
          <div class="cart-data">
            <p class="cart-item-title">${item.title}</p>
            <p class="cart-item-price">$${item.price} x ${item.quantity}</p>
            <div class="qty-controls">
              <button class="btn-qty-minus" data-id="${item.id}">-</button>
              <div>
              <span>${item.quantity}</span>
              <button class="btn-qty-plus" data-id="${item.id}">+</button>
              </div>
              <div>
                <button type="button" class="remove-cart-item" data-id="${item.id}" aria-label="Remove item">🗑</button>
              </div>
               
            </div>
            
          </div>
        </div>
      `;
      })
      .join("");

    cartBody.innerHTML += `<div class="cart-total"><strong>Total:</strong> $${total.toFixed(2)}</div>`;
  }

  function renderWishlist() {
    let wishlistBody = wishlistContainer.querySelector(".wishlist-body");
    if (!wishlistBody) {
      wishlistBody = document.createElement("div");
      wishlistBody.className = "wishlist-body";
      wishlistContainer.appendChild(wishlistBody);
    }

    const wishlist = getStoredData("wishlist");
    if (wishlist.length === 0) {
      wishlistBody.innerHTML = `<p class="empty-msg">Your wishlist is empty.</p>`;
      return;
    }

    wishlistBody.innerHTML = wishlist
      .map(
        (item) => `
      <div class="wishlist-card" data-id="${item.id}">
        <img src="${item.img || "https://placehold.co/80x80"}" alt="${item.title}" />
        <div class="wishlist-data">
        <div>
          <p class="wishlist-item-title">${item.title}</p>
          <p class="wishlist-item-price">$${item.price}</p>
          </div>
          <div>
            <button type="button" class="remove-wishlist-item" data-id="${item.id}" aria-label="Remove item">🗑</button>
          </div>
        </div>
      </div>
    `,
      )
      .join("");
  }

  // ==========================================================================
  // PRODUCTS API INTEGRATION
  // ==========================================================================
  function fetchProducts() {
    if (productContainer) {
      productContainer.innerHTML = "<p>Loading products...</p>";
    }

    const url = new URL("https://api.escuelajs.co/api/v1/products");
    if (state.title.trim())
      url.searchParams.append("title", state.title.trim());
    if (state.categoryId)
      url.searchParams.append("categoryId", state.categoryId);
    if (state.priceMin !== undefined)
      url.searchParams.append("price_min", state.priceMin);
    if (state.priceMax !== undefined)
      url.searchParams.append("price_max", state.priceMax);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Can't fetch products");
        return res.json();
      })
      .then((products) => renderProducts(products))
      .catch((err) => {
        console.error("Error loading products:", err);
        if (productContainer) {
          productContainer.innerHTML = "<p>Error loading products.</p>";
        }
      });
  }

  function renderProducts(products) {
    if (!productContainer) return;
    productContainer.innerHTML = "";

    if (products.length === 0) {
      productContainer.innerHTML = "<p>No products match your criteria.</p>";
      return;
    }

    const wishlist = getStoredData("wishlist");
    const fragment = document.createDocumentFragment();

    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";

      const imgUrl = product.images?.[0]
        ? product.images[0].replace(/[\[\]"]/g, "")
        : "";

      const isWishlisted = wishlist.some(
        (item) => String(item.id) === String(product.id),
      );
      const heartClass = isWishlisted ? "fa-heart" : "fa-heart-o";

      card.innerHTML = `
        <div class="product-img-container">
          <img src="${imgUrl}" alt="${product.title}" class="product-img" onerror="this.src='https://placehold.co/300x300?text=No+Image'"/>
        </div>
        <div class="product-info">
          <p class="product-name">${product.title}</p>
          <p class="product-price">$${product.price}</p>
        </div>
        <div class="prdt-action">
          <i class="fa ${heartClass} wishlist" 
             data-id="${product.id}" 
             data-title="${product.title}" 
             data-price="${product.price}" 
             data-img="${imgUrl}" 
             aria-hidden="true"></i>
          <i class="fa fa-plus addtocart" 
             data-id="${product.id}" 
             data-title="${product.title}" 
             data-price="${product.price}" 
             data-img="${imgUrl}" 
             aria-hidden="true"></i>
        </div>
      `;

      fragment.appendChild(card);
    });

    productContainer.appendChild(fragment);
  }

  // Categories API Fetch
  fetch("https://api.escuelajs.co/api/v1/categories")
    .then((res) => {
      if (!res.ok) throw new Error("Can't fetch categories");
      return res.json();
    })
    .then((categories) => {
      if (!filterCnt) return;
      filterCnt.innerHTML = "";
      const fragment = document.createDocumentFragment();

      categories.slice(0, 5).forEach((cat) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "cat-btn";
        btn.textContent = cat.name;
        btn.dataset.id = cat.id;

        btn.addEventListener("click", () => {
          document
            .querySelectorAll(".cat-btn")
            .forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");

          state.categoryId = cat.id;
          if (categoryTitle) categoryTitle.textContent = cat.name;

          fetchProducts();
          if (filterPanel) filterPanel.classList.remove("open");
        });

        const span = document.createElement("span");
        span.appendChild(btn);
        fragment.appendChild(span);
      });

      filterCnt.appendChild(fragment);
    })
    .catch((err) => console.error("Error loading categories:", err));

  // ==========================================================================
  // EVENT DELEGATION (PRODUCTS, CART & WISHLIST ACTIONS)
  // ==========================================================================
  if (filterForm) {
    filterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (minInput && maxInput) {
        state.priceMin = parseInt(minInput.value);
        state.priceMax = parseInt(maxInput.value);
      }
      fetchProducts();
      if (filterPanel) filterPanel.classList.remove("open");
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        state.title = e.target.value;
        fetchProducts();
      }, 300);
    });
  }

  // Product Container Clicks (Add to cart & Toggle Wishlist)
  if (productContainer) {
    productContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("wishlist")) {
        const productId = e.target.dataset.id;
        let wishlist = getStoredData("wishlist");
        const existingIndex = wishlist.findIndex(
          (item) => String(item.id) === String(productId),
        );

        if (existingIndex > -1) {
          wishlist.splice(existingIndex, 1);
          e.target.classList.remove("fa-heart");
          e.target.classList.add("fa-heart-o");
        } else {
          wishlist.push({
            id: productId,
            title: e.target.dataset.title,
            price: e.target.dataset.price,
            img: e.target.dataset.img,
          });
          e.target.classList.remove("fa-heart-o");
          e.target.classList.add("fa-heart");
        }

        setStoredData("wishlist", wishlist);
      }

      if (e.target.classList.contains("addtocart")) {
        let cart = getStoredData("cart");
        const productId = e.target.dataset.id;
        const existingItem = cart.find(
          (item) => String(item.id) === String(productId),
        );

        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cart.push({
            id: productId,
            title: e.target.dataset.title,
            price: e.target.dataset.price,
            img: e.target.dataset.img,
            quantity: 1,
          });
        }

        setStoredData("cart", cart);
      }
    });
  }

  // Cart Container Delegation (Quantity Controls & Deletion)
  if (cartContainer) {
    cartContainer.addEventListener("click", (e) => {
      let cart = getStoredData("cart");
      const id = e.target.dataset.id;

      if (e.target.classList.contains("btn-qty-plus")) {
        const item = cart.find((i) => String(i.id) === String(id));
        if (item) item.quantity += 1;
      } else if (e.target.classList.contains("btn-qty-minus")) {
        const item = cart.find((i) => String(i.id) === String(id));
        if (item) {
          item.quantity -= 1;
          if (item.quantity <= 0) {
            cart = cart.filter((i) => String(i.id) !== String(id));
          }
        }
      } else if (e.target.classList.contains("remove-cart-item")) {
        cart = cart.filter((i) => String(i.id) !== String(id));
      }

      setStoredData("cart", cart);
      renderCart();
    });
  }

  // Wishlist Container Delegation (Removal)
  if (wishlistContainer) {
    wishlistContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove-wishlist-item")) {
        const id = e.target.dataset.id;
        let wishlist = getStoredData("wishlist");
        wishlist = wishlist.filter((i) => String(i.id) !== String(id));

        setStoredData("wishlist", wishlist);
        renderWishlist();
        fetchProducts(); // Refresh heart icons on grid
      }
    });
  }

  // Initial load
  fetchProducts();
});
