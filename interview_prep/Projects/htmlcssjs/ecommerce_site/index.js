document.addEventListener("DOMContentLoaded", () => {
  // ==========================================================================
  // MOBILE NAVIGATION BAR TOGGLE
  // ==========================================================================
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // ==========================================================================
  // DUAL RANGE PRICE SLIDER WORKFLOW
  // ==========================================================================
  const minInput = document.querySelector(".range-min");
  const maxInput = document.querySelector(".range-max");
  const track = document.querySelector(".slider-track");
  const minValText = document.getElementById("min-val");
  const maxValText = document.getElementById("max-val");

  const priceGap = 10;

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
  // MOBILE SLIDE-UP BOTTOM SHEET FILTER TOGGLE
  // ==========================================================================
  const filterPanel = document.getElementById("filter");
  const mobileTrigger = document.getElementById("mobile-filter-trigger");
  const mobileClose = document.querySelector(".mobile-filter-close");

  if (filterPanel && mobileTrigger) {
    mobileTrigger.addEventListener("click", () => {
      filterPanel.classList.add("open");
    });

    if (mobileClose) {
      mobileClose.addEventListener("click", () => {
        filterPanel.classList.remove("open");
      });
    }
  }

  // ==========================================================================
  // DYNAMIC PRODUCT FILTERING & API INTEGRATION
  // ==========================================================================
  const productContainer = document.getElementById("products-container");
  const filterCnt = document.querySelector("#filter-category-container");
  const categoryTitle = document.getElementById("category-title");
  const filterForm = document.querySelector("form");
  const searchInput = document.querySelector(".search-box input");

  // Track active filter state
  const state = {
    categoryId: null,
    title: "",
    priceMin: 0,
    priceMax: 500,
  };

  // Fetch products with active filters
  function fetchProducts() {
    if (productContainer) {
      productContainer.innerHTML = "<p>Loading products...</p>";
    }

    const url = new URL("https://api.escuelajs.co/api/v1/products");

    if (state.title.trim() !== "") {
      url.searchParams.append("title", state.title.trim());
    }
    if (state.categoryId) {
      url.searchParams.append("categoryId", state.categoryId);
    }
    if (state.priceMin !== undefined) {
      url.searchParams.append("price_min", state.priceMin);
    }
    if (state.priceMax !== undefined) {
      url.searchParams.append("price_max", state.priceMax);
    }

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Can't fetch products");
        return res.json();
      })
      .then((products) => {
        renderProducts(products);
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        if (productContainer) {
          productContainer.innerHTML = "<p>Error loading products.</p>";
        }
      });
  }

  // Render product cards to DOM
  function renderProducts(products) {
    if (!productContainer) return;
    productContainer.innerHTML = "";

    if (products.length === 0) {
      productContainer.innerHTML = "<p>No products match your criteria.</p>";
      return;
    }

    const fragment = document.createDocumentFragment();

    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";

      // Fallback image cleanup
      const imgUrl = product.images?.[0]
        ? product.images[0].replace(/[\[\]"]/g, "")
        : "";

      card.innerHTML = `
        <div class="product-img-container">
          <img src="${imgUrl}" alt="${product.title}" class="product-img" onerror="this.src='https://placehold.co/300x300?text=No+Image'"/>
        </div>
        <div class="product-info">
          <p class="product-name">${product.title}</p>
          <p class="product-price">$${product.price}</p>
        </div>
      `;

      fragment.appendChild(card);
    });

    productContainer.appendChild(fragment);
  }

  // Fetch dynamic categories
  fetch("https://api.escuelajs.co/api/v1/categories")
    .then((res) => {
      if (!res.ok) throw new Error("Can't fetch categories");
      return res.json();
    })
    .then((categories) => {
      if (filterCnt) filterCnt.innerHTML = "";
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

  // Handle Form Submission (Price Filter & Apply Button)
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

  // Handle Search Input (Debounced)
  let searchTimeout;
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        state.title = e.target.value;
        fetchProducts();
      }, 300);
    });
  }

  // Initial load
  fetchProducts();
});
