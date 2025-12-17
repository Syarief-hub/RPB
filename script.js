document.addEventListener("DOMContentLoaded", () => {
  // Nav Items Interaction
  const navItems = document.querySelectorAll(".nav-item");
  const homeView = document.getElementById("home-view");
  const financeView = document.getElementById("finance-view");
  const mainHeader = document.getElementById("main-header");

  // Header Content Templates
  const homeHeaderHTML = `
        <div class="search-container">
            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Diskon Top Up Game">
            </div>
            <div class="header-action">
                <div class="coin-badge">
                    <i class="fas fa-coins text-yellow"></i> Klaim 50RB <i class="fas fa-chevron-right"></i>
                </div>
                <div class="notification-icon">
                    <i class="far fa-bell"></i>
                    <span class="badge">24</span>
                </div>
            </div>
        </div>
    `;

  const financeHeaderHTML = `
        <div class="finance-header-content">
            <div style="display:flex; align-items:center; gap:10px;">
                 <h2>Keuangan</h2>
            </div>
            <div class="finance-icons">
                 <div class="notification-icon" style="color: black !important;">
                    <i class="far fa-bell" style="color: black;"></i>
                    <span class="badge">24</span>
                </div>
                <i class="fas fa-ticket-alt"></i>
            </div>
        </div>
    `;

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Check label text
      const label = this.querySelector("span").innerText;

      if (label === "QRIS") {
        alert("Scan QRIS Active!");
        return;
      }

      // Remove active from all
      navItems.forEach((nav) => nav.classList.remove("active"));
      // Add active to clicked
      this.classList.add("active");

      // View Switching Logic
      // View Switching Logic
      const foodView = document.getElementById("food-view");
      const profileView = document.getElementById("profile-view");

      // Hide all first
      if (homeView) homeView.style.display = "none";
      if (financeView) financeView.style.display = "none";
      if (foodView) foodView.style.display = "none";
      if (profileView) profileView.style.display = "none";

      // Reset generic header
      if (mainHeader) mainHeader.style.display = "block"; // Default show

      if (label === "Keuangan") {
        if (financeView) financeView.style.display = "block";
        // Change header style
        if (mainHeader) {
          mainHeader.classList.add("header-finance");
          mainHeader.innerHTML = financeHeaderHTML;
        }
      } else if (label === "Beranda") {
        if (homeView) homeView.style.display = "block";
        // Restore header style
        if (mainHeader) {
          mainHeader.classList.remove("header-finance");
          mainHeader.innerHTML = homeHeaderHTML;
        }
      } else if (label === "ShopeeFood") {
        if (foodView) foodView.style.display = "block";
        // Food has its own header, so hide the main generic header
        if (mainHeader) mainHeader.style.display = "none";
      } else if (label === "Saya") {
        if (profileView) profileView.style.display = "block";
        // Profile has its own header
        if (mainHeader) mainHeader.style.display = "none";
      } else {
        // Default back to home if unknown
        if (homeView) homeView.style.display = "block";
        alert("Feature " + label + " coming soon!");
      }

      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });

  // Simple service click
  const services = document.querySelectorAll(".service-item");
  services.forEach((service) => {
    service.addEventListener("click", () => {
      const serviceName = service.querySelector("span").innerText;
      console.log(`Opening service: ${serviceName}`);
    });
  });

  // --- GENERIC SLIDER LOGIC ---
  function initSlider(sliderId, controlId, controlType = "tabs") {
    const slider = document.getElementById(sliderId);
    if (!slider) return;

    let controls;
    if (controlType === "tabs") {
      controls = document.querySelectorAll(`${controlId} .tab`);
    } else {
      controls = document.querySelectorAll(`${controlId} .dot`);
    }

    // Click on controls
    controls.forEach((control, idx) => {
      control.addEventListener("click", () => {
        if (controlType === "tabs") {
          const targetId = control.getAttribute("data-target");
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "start",
            });
          }
        } else {
          // Dots logic: Scroll to index * width
          const width = slider.offsetWidth;
          slider.scrollTo({ left: idx * width, behavior: "smooth" });
        }

        // Set active class
        controls.forEach((c) => c.classList.remove("active"));
        control.classList.add("active");
      });
    });

    // Scroll Listener
    slider.addEventListener("scroll", () => {
      const scrollLeft = slider.scrollLeft;
      const width = slider.offsetWidth;
      const index = Math.round(scrollLeft / width);

      controls.forEach((c) => c.classList.remove("active"));
      if (controls[index]) controls[index].classList.add("active");
    });

    // Mouse Drag Logic
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });
  }

  // Initialize Home Slider (Tabs)
  initSlider("serviceSlider", ".menu-tabs", "tabs");

  // Initialize Finance Slider (Dots)
  initSlider("financeSlider", "#financeDots", "dots");

  // Initialize Food Slider (Dots)
  initSlider("foodSlider", "#foodDots", "dots");

  // SHOPEEPAY GOALS NAVIGATION
  const btnShopeePayGoals = document.getElementById("btn-shopeepay-goals");
  const shopeePayView = document.getElementById("shopeepay-view");
  const btnBackShopeePay = document.getElementById("btn-back-shopeepay");
  const bottomNav = document.querySelector(".bottom-nav");

  if (btnShopeePayGoals) {
    btnShopeePayGoals.addEventListener("click", () => {
      // Hide other views
      if (financeView) financeView.style.display = "none";
      if (homeView) homeView.style.display = "none";
      if (mainHeader) mainHeader.style.display = "none";
      if (bottomNav) bottomNav.style.display = "none"; // Hide bottom nav

      // Show ShopeePay View
      if (shopeePayView) {
        shopeePayView.style.display = "block";
        window.scrollTo(0, 0);
      }
    });
  }

  if (btnBackShopeePay) {
    btnBackShopeePay.addEventListener("click", () => {
      // Hide ShopeePay View
      if (shopeePayView) shopeePayView.style.display = "none";

      // Show Finance View (Parent)
      if (financeView) {
        financeView.style.display = "block";
        if (mainHeader) {
          mainHeader.style.display = "block";
          // Ensure header is in finance mode
          mainHeader.classList.add("header-finance");
          mainHeader.innerHTML = financeHeaderHTML;
        }
        if (bottomNav) bottomNav.style.display = "flex"; // Restore bottom nav
      }
    });
  }

  // CREATE GOAL NAVIGATION
  const btnCreateGoal = document.querySelector(".sp-btn-primary"); // "BUAT IMPIAN BARU" button
  const createGoalView = document.getElementById("create-goal-view");
  const btnBackCreateGoal = document.getElementById("btn-back-create-goal");

  if (btnCreateGoal) {
    btnCreateGoal.addEventListener("click", () => {
      if (shopeePayView) shopeePayView.style.display = "none";
      if (createGoalView) {
        createGoalView.style.display = "block";
        window.scrollTo(0, 0);
      }
    });
  }

  if (btnBackCreateGoal) {
    btnBackCreateGoal.addEventListener("click", () => {
      if (createGoalView) createGoalView.style.display = "none";
      if (shopeePayView) {
        shopeePayView.style.display = "block";
        // Ensure button container is visible if it was hidden (though it's part of the view)
      }
    });
  }

  // Category Selection Logic
  const catItems = document.querySelectorAll(".cg-cat-item");
  catItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove active from all
      catItems.forEach((cat) => cat.classList.remove("active"));
      // Add active to clicked
      this.classList.add("active");
    });
  });
  // FAMILY WALET NAVIGATION
  const btnFamilyWalet = document.getElementById("btn-family-walet");
  const familyWaletView = document.getElementById("family-walet-view");
  const btnBackFamilyWalet = document.getElementById("btn-back-family-walet");

  if (btnFamilyWalet) {
    btnFamilyWalet.addEventListener("click", () => {
      // Hide other views
      if (financeView) financeView.style.display = "none";
      if (homeView) homeView.style.display = "none";
      if (mainHeader) mainHeader.style.display = "none";
      if (bottomNav) bottomNav.style.display = "none"; // Hide bottom nav

      // Show Family Walet View
      if (familyWaletView) {
        familyWaletView.style.display = "block";
        window.scrollTo(0, 0);
      }
    });
  }

  if (btnBackFamilyWalet) {
    btnBackFamilyWalet.addEventListener("click", () => {
      // Hide Family Walet View
      if (familyWaletView) familyWaletView.style.display = "none";

      // Show Finance View (Parent)
      if (financeView) {
        financeView.style.display = "block";
        if (mainHeader) {
          mainHeader.style.display = "block";
          // Ensure header is in finance mode
          mainHeader.classList.add("header-finance");
          mainHeader.innerHTML = financeHeaderHTML;
        }
        if (bottomNav) bottomNav.style.display = "flex"; // Restore bottom nav
      }
    });
  }

  // TOP UP MODAL LOGIC
  const btnFwTopup = document.getElementById("btn-fw-topup");
  const modalOverlay = document.getElementById("fw-modal-overlay");
  const topupModal = document.getElementById("fw-topup-modal");
  const amountDisplay = document.getElementById("fw-amount-display");
  const numKeys = document.querySelectorAll(".num-key");
  const btnSubmit = document.getElementById("btn-fw-submit");

  let currentAmount = "";

  function updateDisplay() {
    if (currentAmount === "") {
      amountDisplay.value = "Rp0";
      btnSubmit.style.background = "#ccc";
      btnSubmit.style.cursor = "default";
      btnSubmit.disabled = true;
    } else {
      // Simple formatting for display
      const formatted = parseInt(currentAmount).toLocaleString("id-ID");
      amountDisplay.value = "Rp" + formatted;
      btnSubmit.style.background = "#ee4d2d";
      btnSubmit.style.cursor = "pointer";
      btnSubmit.disabled = false;
    }
  }

  if (btnFwTopup) {
    btnFwTopup.addEventListener("click", () => {
      // Show modal
      if (modalOverlay) modalOverlay.style.display = "block";
      if (topupModal) topupModal.style.display = "block";
      currentAmount = "";
      updateDisplay();
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", () => {
      // Hide modal
      modalOverlay.style.display = "none";
      if (topupModal) topupModal.style.display = "none";
    });
  }

  numKeys.forEach((key) => {
    key.addEventListener("click", () => {
      const val = key.getAttribute("data-val");
      const action = key.getAttribute("data-action");

      if (action === "backspace") {
        currentAmount = currentAmount.slice(0, -1);
      } else if (val !== null) {
        // Prevent leading zeros if empty
        if (currentAmount === "" && (val === "0" || val === "000")) return;
        currentAmount += val;
      }
      updateDisplay();
    });
  });

  if (btnSubmit) {
    btnSubmit.addEventListener("click", () => {
      alert(
        "Top Up Sebesar Rp" +
          parseInt(currentAmount).toLocaleString("id-ID") +
          " Berhasil! (Simulasi)"
      );
      // Close modal
      if (modalOverlay) modalOverlay.style.display = "none";
      if (topupModal) topupModal.style.display = "none";
      // Update balance in view (simulated)
      const balanceEl = document.querySelector(
        ".fw-balance-card div[style*='font-size: 28px']"
      );
      if (balanceEl) {
        balanceEl.innerText =
          "Rp" + (5 + parseInt(currentAmount)).toLocaleString("id-ID");
      }
    });
  }
  // LIMIT BULANAN NAVIGATION
  const btnLimitBulanan = document.getElementById("btn-limit-bulanan");
  const limitBulananView = document.getElementById("limit-bulanan-view");
  const btnBackLimit = document.getElementById("btn-back-limit");

  if (btnLimitBulanan) {
    btnLimitBulanan.addEventListener("click", () => {
      if (familyWaletView) familyWaletView.style.display = "none";
      if (limitBulananView) limitBulananView.style.display = "block";
    });
  }

  if (btnBackLimit) {
    btnBackLimit.addEventListener("click", () => {
      if (limitBulananView) limitBulananView.style.display = "none";
      if (familyWaletView) familyWaletView.style.display = "block";
    });
  }
  // SET LIMIT MODAL LOGIC (New)
  const memberLimitItem = document.getElementById("member-limit-item");
  const limitModal = document.getElementById("fw-limit-modal");
  const limitInput = document.getElementById("fw-limit-input");
  const limitSlider = document.querySelector(".slider-range");
  const limitKeys = document.querySelectorAll(".limit-key");
  const btnSaveLimit = document.getElementById("btn-save-limit");

  let currentLimit = "3"; // Default initial value

  function updateLimitDisplay() {
    if (currentLimit === "") {
      limitInput.value = "0";
      limitSlider.value = 0;
    } else {
      const val = parseInt(currentLimit);
      limitInput.value = val.toLocaleString("id-ID");
      limitSlider.value = val;
    }
  }

  if (memberLimitItem) {
    memberLimitItem.addEventListener("click", () => {
      if (modalOverlay) modalOverlay.style.display = "block";
      if (limitModal) limitModal.style.display = "block";
      currentLimit = "3"; // Reset or load current
      updateLimitDisplay();
    });
  }

  // Keypad logic for limit
  limitKeys.forEach((key) => {
    key.addEventListener("click", () => {
      const val = key.getAttribute("data-val");
      const action = key.getAttribute("data-action");

      if (action === "backspace") {
        currentLimit = currentLimit.slice(0, -1);
      } else if (val !== null) {
        // Prevent messy inputs
        if (currentLimit === "0") currentLimit = "";
        currentLimit += val;
      }

      // Cap at 3000000
      if (currentLimit !== "" && parseInt(currentLimit) > 3000000) {
        currentLimit = "3000000";
      }

      updateLimitDisplay();
    });
  });

  // Slider logic
  if (limitSlider) {
    limitSlider.addEventListener("input", (e) => {
      currentLimit = e.target.value;
      limitInput.value = parseInt(currentLimit).toLocaleString("id-ID");
    });
  }

  if (btnSaveLimit) {
    btnSaveLimit.addEventListener("click", () => {
      alert(
        "Limit berhasil diubah menjadi Rp" +
          parseInt(currentLimit || 0).toLocaleString("id-ID")
      );
      if (modalOverlay) modalOverlay.style.display = "none";
      if (limitModal) limitModal.style.display = "none";

      // Update list item
      const limitDisplay = document.querySelector(
        "#member-limit-item span[style*='color: #42a5f5']"
      );
      if (limitDisplay) {
        limitDisplay.innerText =
          "Rp" + parseInt(currentLimit || 0).toLocaleString("id-ID");
      }
    });
  }
  // RIWAYAT TRANSAKSI NAVIGATION
  const btnFwRiwayat = document.getElementById("btn-fw-riwayat");
  const riwayatView = document.getElementById("riwayat-view");
  const btnBackRiwayat = document.getElementById("btn-back-riwayat");

  if (btnFwRiwayat) {
    btnFwRiwayat.addEventListener("click", () => {
      if (familyWaletView) familyWaletView.style.display = "none";
      if (riwayatView) {
        riwayatView.style.display = "block";
        window.scrollTo(0, 0);
      }
    });
  }

  if (btnBackRiwayat) {
    btnBackRiwayat.addEventListener("click", () => {
      if (riwayatView) riwayatView.style.display = "none";
      if (familyWaletView) familyWaletView.style.display = "block";
    });
  }
  // MEMBER DETAIL NAVIGATION
  const memberDetailBtns = document.querySelectorAll(".member-detail-btn");
  const memberDetailView = document.getElementById("member-detail-view");
  const btnBackMemberDetail = document.getElementById("btn-back-member-detail");

  if (memberDetailBtns) {
    memberDetailBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // Prevent bubbling if any
        e.stopPropagation();

        if (familyWaletView) familyWaletView.style.display = "none";
        if (memberDetailView) {
          memberDetailView.style.display = "block";
          window.scrollTo(0, 0);
        }
      });
    });
  }

  if (btnBackMemberDetail) {
    btnBackMemberDetail.addEventListener("click", () => {
      if (memberDetailView) memberDetailView.style.display = "none";
      if (familyWaletView) familyWaletView.style.display = "block";
    });
  }

  // Toggle switch logic (Visual only)
  const switches = document.querySelectorAll(".switch input");
  switches.forEach((sw) => {
    sw.addEventListener("change", function () {
      const slider = this.nextElementSibling;
      if (this.checked) {
        slider.style.backgroundColor = "#2196f3";
      } else {
        slider.style.backgroundColor = "#ccc";
      }
    });
  });
});
