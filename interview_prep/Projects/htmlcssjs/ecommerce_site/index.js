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

  function updateTrack() {
    if (!minInput || !maxInput) return;

    let min = parseInt(minInput.value);
    let max = parseInt(maxInput.value);
    const maxLimit = parseInt(minInput.max);

    if (max - min < priceGap) {
      if (this === minInput) {
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
  const applyFilterBtn = document.querySelector(".filter-btn");

  if (filterPanel && mobileTrigger) {
    // Open action
    mobileTrigger.addEventListener("click", () => {
      filterPanel.classList.add("open");
    });

    // Close action via 'X' element click event
    if (mobileClose) {
      mobileClose.addEventListener("click", () => {
        filterPanel.classList.remove("open");
      });
    }

    // Close action automatically on form evaluation completion
    if (applyFilterBtn) {
      applyFilterBtn.addEventListener("click", () => {
        filterPanel.classList.remove("open");
      });
    }
  }
});

// ==========================================================================
// product api
// ==========================================================================
// Use the correct ID selector matching your HTML
const productContainer = document.getElementById("products-container");

fetch("https://api.escuelajs.co/api/v1/products")
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then((products) => {
    // Clear out placeholder template cards before rendering
    if (productContainer) productContainer.innerHTML = "";

    // Create the fragment in memory
    const fragment = document.createDocumentFragment();

    // Loop through the actual array returned by the API
    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";

      // Use your exact HTML template layout structure
      card.innerHTML = `
        <div class="product-img-container">
          <img src="${product.images[0] || "https://placeholder.com"}" alt="${product.title}" class="product-img" />
        </div>
        <div class="product-info">
          <p class="product-name">${product.title}</p>
          <p class="product-price">$${product.price}</p>
        </div>
      `;

      fragment.appendChild(card);
    });

    // Append to live DOM exactly once at the end
    if (productContainer) {
      productContainer.appendChild(fragment);
    }
  })
  .catch((error) => console.error("Error loading products:", error));
