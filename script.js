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
        fetchGoals(); // FETCH GOALS FROM API
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

  const btnToggleBalance = document.getElementById("btn-toggle-balance");
  if (btnToggleBalance) {
    btnToggleBalance.addEventListener("click", () => {
      isBalanceVisible = !isBalanceVisible;
      // Toggle Icon Class
      if (isBalanceVisible) {
        btnToggleBalance.classList.remove("fa-eye-slash");
        btnToggleBalance.classList.add("fa-eye");
      } else {
        btnToggleBalance.classList.remove("fa-eye");
        btnToggleBalance.classList.add("fa-eye-slash");
      }
      renderGoals();
    });
  }

  // Help Modal Logic
  const btnHelpToggle = document.getElementById("btn-help-toggle");
  const helpModal = document.getElementById("help-modal");
  const btnCloseHelp = document.getElementById("btn-close-help");

  if (btnHelpToggle && helpModal) {
    btnHelpToggle.addEventListener("click", () => {
      helpModal.style.display = "flex";
    });
  }

  if (btnCloseHelp && helpModal) {
    btnCloseHelp.addEventListener("click", () => {
      helpModal.style.display = "none";
    });
  }

  // Close on Overlay Click
  if (helpModal) {
    helpModal.addEventListener("click", (e) => {
      if (e.target === helpModal) {
        helpModal.style.display = "none";
      }
    });
  }

  // CREATE GOAL NAVIGATION & LOGIC
  const btnCreateGoalNav = document.getElementById("btn-create-goal-nav"); // Navigation button
  const createGoalView = document.getElementById("create-goal-view");
  const btnBackCreateGoal = document.getElementById("btn-back-create-goal");

  // Inputs
  const goalNameInput = document.getElementById("goal-name-input");
  const goalTargetInput = document.getElementById("goal-target-input");
  const btnSaveGoal = document.getElementById("btn-save-goal");

  // Data Store (In-Memory)
  let activeGoals = []; // INITIALIZE AS EMPTY
  let isBalanceVisible = true;

  // Initial Render on Load - Try to fetch if we are already in view?
  // Usually only needed if we start on that view. For now, we fetch when opening the view.

  function fetchGoals() {
    fetch("api/goals.php")
      .then((response) => response.json())
      .then((data) => {
        activeGoals = data.map((g) => ({
          ...g,
          icon: getCategoryIcon(g.category),
          target: parseFloat(g.target_amount),
          current: parseFloat(g.current_amount),
        }));
        renderGoals();
      })
      .catch((err) => console.error(err));
  }

  if (btnCreateGoalNav) {
    btnCreateGoalNav.addEventListener("click", () => {
      if (shopeePayView) shopeePayView.style.display = "none";
      if (createGoalView) {
        createGoalView.style.display = "block";
        window.scrollTo(0, 0);
        // Reset inputs
        goalNameInput.value = "";
        goalTargetInput.value = "";
        validateGoalInputs();
      }
    });
  }

  if (btnBackCreateGoal) {
    btnBackCreateGoal.addEventListener("click", () => {
      if (createGoalView) createGoalView.style.display = "none";
      if (shopeePayView) {
        shopeePayView.style.display = "block";
      }
    });
  }

  // Goal Validation Logic
  function validateGoalInputs() {
    if (!goalNameInput || !goalTargetInput || !btnSaveGoal) return;

    const name = goalNameInput.value.trim();
    // Strip non-digits for validation
    const targetRaw = goalTargetInput.value.replace(/[^0-9]/g, "");
    const targetAmount = parseInt(targetRaw);

    // Debugging (Uncomment if needed)
    // console.log("Input: ", name, targetAmount);

    if (
      name.length > 0 &&
      targetRaw.length > 0 &&
      targetAmount > 0 &&
      targetAmount <= 16000000
    ) {
      btnSaveGoal.disabled = false;
      btnSaveGoal.classList.remove("sp-btn-disabled");
      btnSaveGoal.classList.add("sp-btn-primary");
    } else {
      btnSaveGoal.disabled = true;
      btnSaveGoal.classList.add("sp-btn-disabled");
      btnSaveGoal.classList.remove("sp-btn-primary");
    }
  }

  if (goalNameInput) {
    goalNameInput.addEventListener("input", validateGoalInputs);
    // Also listen to change for safer measure
    goalNameInput.addEventListener("change", validateGoalInputs);
  }

  if (goalTargetInput) {
    goalTargetInput.addEventListener("input", function (e) {
      // 1. Format Currency
      let value = this.value.replace(/[^0-9]/g, ""); // strip non-digits

      if (value) {
        const fmt = parseInt(value).toLocaleString("id-ID");
        this.value = "Rp " + fmt;
      } else {
        this.value = "";
      }
      // 2. Validate
      validateGoalInputs();
    });
  }

  // Category Selection Logic
  const catItems = document.querySelectorAll(".cg-cat-item");
  let selectedCategory = "Kasual"; // Default

  catItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove active from all
      catItems.forEach((cat) => cat.classList.remove("active"));
      // Add active to clicked
      this.classList.add("active");
      selectedCategory = this.getAttribute("data-cat");
    });
  });

  // Save Goal Logic
  // Global Click Listener (Delegation)
  document.addEventListener("click", (e) => {
    // 1. Save Goal
    if (e.target && e.target.id === "btn-save-goal") {
      const name = goalNameInput.value.trim();
      // Strip non-digits from formatted input
      const targetRaw = goalTargetInput.value.replace(/[^0-9]/g, "");
      const target = parseInt(targetRaw);

      if (target > 16000000) {
        alert("Jumlah maksimal target adalah Rp16.000.000");
        return;
      }

      const newGoal = {
        name: name,
        target: target,
        category: selectedCategory,
      };

      // POST TO API
      fetch("api/goals.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGoal),
      })
        .then((response) => response.json())
        .then((data) => {
          fetchGoals(); // Refresh list
          // Navigate back
          if (createGoalView) createGoalView.style.display = "none";
          if (shopeePayView) shopeePayView.style.display = "block";
        })
        .catch((err) => alert("Error saving goal"));
    }

    // 2. Open Goal Detail
    const goalCard = e.target.closest(".goal-card");
    if (goalCard) {
      const name = goalCard.querySelector(".goal-name").innerText;
      const goal = activeGoals.find((g) => g.name === name); // Find by name (ID would be better)

      if (goal) {
        // Populate Detail View
        document.getElementById("detail-goal-title").innerText = goal.name;
        document.getElementById("detail-goal-icon").innerHTML = goal.icon; // Icon
        document.getElementById("detail-target-raw").value = goal.target;
        document.getElementById("detail-current-amount").innerText =
          "Rp" + goal.current.toLocaleString("id-ID");

        const percent = Math.min(
          100,
          Math.round((goal.current / goal.target) * 100)
        );
        document.getElementById("detail-progress-bar").style.width =
          percent + "%";
        document.getElementById("detail-target-text").innerText =
          percent + "% dari Rp" + goal.target.toLocaleString("id-ID");

        // Show View
        if (shopeePayView) shopeePayView.style.display = "none";
        const detailView = document.getElementById("goal-detail-view");
        if (detailView) {
          detailView.style.display = "block";
          window.scrollTo(0, 0);
        }
      }
    }
  });

  function getCategoryIcon(cat) {
    switch (cat) {
      case "Travel":
        return '<i class="fas fa-suitcase-rolling"></i>';
      case "Gadget":
        return '<i class="fas fa-mobile-alt"></i>';
      case "Fashion":
        return '<i class="fas fa-tshirt"></i>';
      case "Elektronik":
        return '<i class="fas fa-tv"></i>';
      default:
        return '<i class="fas fa-piggy-bank"></i>';
    }
  }

  function renderGoals() {
    const listContainer = document.getElementById("active-goals-list");
    const emptyState = document.getElementById("sp-empty-state");
    const activeViewContainer = document.getElementById(
      "sp-active-view-container"
    );
    const totalBalanceEl = document.getElementById("sp-total-balance");

    if (!listContainer) return;

    listContainer.innerHTML = "";
    let totalBalance = 0;

    if (activeGoals.length > 0) {
      // Show Active View, Hide Empty State
      if (emptyState) emptyState.style.display = "none";
      if (activeViewContainer) activeViewContainer.style.display = "block";

      activeGoals.forEach((goal) => {
        const currentAmount = goal.current || 0;
        totalBalance += currentAmount;

        const percent = Math.min(
          100,
          Math.round((currentAmount / goal.target) * 100)
        );

        const displayAmount = isBalanceVisible
          ? currentAmount.toLocaleString("id-ID")
          : "••••••";

        const cardHTML = `
            <div class="goal-card">
              <div class="goal-header">
                <div class="goal-icon-title">
                  <div class="goal-icon">${goal.icon}</div>
                  <div class="goal-info">
                    <span class="goal-name">${goal.name}</span>
                    <span class="goal-current-text" style="font-size:12px; color:#666;">Rp${displayAmount}</span>
                  </div>
                </div>
                <i class="fas fa-chevron-right" style="color: #ccc; font-size: 14px;"></i>
              </div>
              
              <div class="goal-progress-bar" style="margin-top: 10px;">
                <div class="goal-progress-fill" style="width: ${percent}%"></div>
              </div>
              <div style="display:flex; justify-content:space-between; margin-top:5px; font-size:10px; color:#999;">
                 <span>Rp${displayAmount}</span>
                 <span>${percent}% dari Rp${goal.target.toLocaleString(
          "id-ID"
        )}</span>
              </div>
            </div>
          `;
        listContainer.innerHTML += cardHTML;
      });

      // Update Total
      // Update Total
      if (totalBalanceEl) {
        if (isBalanceVisible) {
          totalBalanceEl.innerText =
            "Rp" + totalBalance.toLocaleString("id-ID");
        } else {
          totalBalanceEl.innerText = "Rp ••••••";
        }
      }
    } else {
      // Show Empty State, Hide Active View
      if (emptyState) emptyState.style.display = "block";
      if (activeViewContainer) activeViewContainer.style.display = "none";
    }
  }
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
        updateBalanceDisplay(); // FETCH BALANCE
      }
    });
  }

  // UPDATE BALANCE DISPLAY
  function updateBalanceDisplay() {
    fetch("api/wallet.php")
      .then((res) => res.json())
      .then((data) => {
        const balanceEl = document.querySelector(
          ".fw-balance-card div[style*='font-size: 28px']"
        );
        if (balanceEl) {
          balanceEl.innerText = "Rp" + data.balance.toLocaleString("id-ID");
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
      // POST TOP UP
      const amount = parseInt(currentAmount);

      fetch("api/wallet.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount }),
      })
        .then((res) => res.json())
        .then((data) => {
          // Close modal
          if (modalOverlay) modalOverlay.style.display = "none";
          if (topupModal) topupModal.style.display = "none";

          // Show Payment Success View
          const paymentSuccessView = document.getElementById(
            "payment-success-view"
          );
          const successAmountDisplay = document.getElementById(
            "success-amount-display"
          );
          const btnSuccessClose = document.getElementById("btn-success-close");
          const btnSuccessDetail =
            document.getElementById("btn-success-detail");

          if (paymentSuccessView) {
            // if (familyWaletView) familyWaletView.style.display = "none"; // Keep background visible
            paymentSuccessView.style.display = "flex";

            const formattedAmount =
              parseInt(currentAmount).toLocaleString("id-ID");
            if (successAmountDisplay)
              successAmountDisplay.innerText = "Rp" + formattedAmount;
          }

          // Update balance in view
          updateBalanceDisplay();

          // Success View Button Handlers
          if (btnSuccessClose) {
            btnSuccessClose.onclick = () => {
              paymentSuccessView.style.display = "none";
              if (familyWaletView) familyWaletView.style.display = "block";
            };
          }

          if (btnSuccessDetail) {
            btnSuccessDetail.onclick = () => {
              paymentSuccessView.style.display = "none";
              // Navigate to Riwayat or similar. For now back to Family Walet
              if (familyWaletView) {
                familyWaletView.style.display = "block";
                // Optionally open Riwayat View if we had a direct link logic
              }
            };
          }
        })
        .catch((err) => alert("Top Up Failed"));
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
  let activeLimitItem = null; // Track which item is being edited
  let editingMemberName = ""; // Track member name for syncing

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
    memberLimitItem.addEventListener("click", function () {
      activeLimitItem = this;
      const nameEl = this.querySelector("div[style*='font-weight: 500']");
      if (nameEl)
        editingMemberName = nameEl.innerText.replace(/\s+/g, " ").trim();

      if (modalOverlay) modalOverlay.style.display = "block";
      if (limitModal) limitModal.style.display = "block";

      // Try to parse existing limit
      const existingSpan = this.querySelector("span[style*='color: #42a5f5']");
      if (existingSpan) {
        const text = existingSpan.innerText
          .replace("Rp", "")
          .replace(/\./g, "");
        currentLimit = text;
      } else {
        currentLimit = "3";
      }
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
      const newVal = parseInt(currentLimit || 0);
      const formattedVal = "Rp" + newVal.toLocaleString("id-ID");

      alert("Limit berhasil diubah menjadi " + formattedVal);
      if (modalOverlay) modalOverlay.style.display = "none";
      if (limitModal) limitModal.style.display = "none";

      // 1. Update List Item (if activeLimitItem is set)
      if (activeLimitItem) {
        const limitDisplay = activeLimitItem.querySelector(
          "span[style*='color: #42a5f5']"
        );
        if (limitDisplay) {
          limitDisplay.innerText = formattedVal;
        }
      }

      // 2. Sync with Detail View
      const memberDetailView = document.getElementById("member-detail-view");
      if (memberDetailView && editingMemberName) {
        const nameDisplay = memberDetailView.querySelector(".detail-name");
        if (
          nameDisplay &&
          nameDisplay.innerText.replace(/\s+/g, " ").trim() ===
            editingMemberName.replace(/\s+/g, " ").trim()
        ) {
          const limitDisplay = memberDetailView.querySelector(
            ".detail-limit-value"
          );
          if (limitDisplay) limitDisplay.innerText = formattedVal;
        }
      }

      // 3. Sync with Grid Card (Find by name)
      if (editingMemberName) {
        const cards = document.querySelectorAll(".fw-members-grid > div");
        cards.forEach((card) => {
          const nameEl = card.querySelector(".member-name");
          if (
            nameEl &&
            nameEl.innerText.replace(/\s+/g, " ").trim() ===
              editingMemberName.replace(/\s+/g, " ").trim()
          ) {
            const limitEl = card.querySelector(".member-limit-text");
            if (limitEl) limitEl.innerText = "Limit: " + formattedVal;
          }
        });

        // 4. Sync with Limit List Items
        const limitItems = document.querySelectorAll(
          "#limit-members-list > div"
        );
        limitItems.forEach((item) => {
          const nameEl = item.querySelector(".limit-list-name");
          if (
            nameEl &&
            nameEl.innerText.replace(/\s+/g, " ").trim() ===
              editingMemberName.replace(/\s+/g, " ").trim()
          ) {
            const limitDisplay = item.querySelector(".limit-list-value");
            if (limitDisplay) limitDisplay.innerText = formattedVal;
          }
        });
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
        // Prevent bubbling
        e.stopPropagation();

        // Get Data from Card
        // DOM Structure: btn -> div(flex) -> div(card)
        const card = btn.closest("div[style*='background: white']");
        let name = "Anggota";
        let limit = "Rp0";

        if (card) {
          const nameEl = card.querySelector("div[style*='font-weight: bold']");
          const limitEl = card.querySelector("div[style*='color: #777']");

          if (nameEl) name = nameEl.innerText.replace(/\s+/g, " ").trim();
          if (limitEl) limit = limitEl.innerText.replace("Limit: ", "");
        }

        // Update View
        if (memberDetailView) {
          const nameDisplay = memberDetailView.querySelector(".detail-name");
          const limitDisplay = memberDetailView.querySelector(
            ".detail-limit-value"
          );

          if (nameDisplay) nameDisplay.innerText = name;
          if (limitDisplay) limitDisplay.innerText = limit;

          // Set global tracking var
          editingMemberName = name;

          if (familyWaletView) familyWaletView.style.display = "none";
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

  // MEMBER DETAIL LIMIT EDIT TRIGGER
  const btnEditLimitDetail = document.getElementById("btn-edit-limit-detail");
  if (btnEditLimitDetail) {
    btnEditLimitDetail.addEventListener("click", () => {
      activeLimitItem = null; // We are editing from detail view, not list item directly

      if (modalOverlay) modalOverlay.style.display = "block";
      if (limitModal) limitModal.style.display = "block";

      // Parse current limit from Detail View
      const memberDetailView = document.getElementById("member-detail-view");
      if (memberDetailView) {
        const limitDisplay = memberDetailView.querySelector(
          "span[style*='color: #2196f3']"
        );
        if (limitDisplay) {
          const text = limitDisplay.innerText
            .replace("Rp", "")
            .replace(/\./g, "");
          currentLimit = text;
        } else {
          currentLimit = "0";
        }
      }
      if (typeof updateLimitDisplay === "function") updateLimitDisplay();
    });
  }

  // OWNER DETAIL NAVIGATION
  const btnOwnerDetail = document.getElementById("btn-owner-detail");
  const ownerDetailView = document.getElementById("owner-detail-view");
  const btnBackOwnerDetail = document.getElementById("btn-back-owner-detail");

  if (btnOwnerDetail) {
    btnOwnerDetail.addEventListener("click", () => {
      if (familyWaletView) familyWaletView.style.display = "none";
      if (ownerDetailView) {
        ownerDetailView.style.display = "block";
        window.scrollTo(0, 0);
      }
    });
  }

  if (btnBackOwnerDetail) {
    btnBackOwnerDetail.addEventListener("click", () => {
      if (ownerDetailView) ownerDetailView.style.display = "none";
      if (familyWaletView) familyWaletView.style.display = "block";
    });
  }

  // ADD MEMBER NAVIGATION
  const btnAddMember = document.getElementById("btn-add-member");
  const addMemberView = document.getElementById("add-member-view");
  const btnBackAddMember = document.getElementById("btn-back-add-member");

  if (btnAddMember) {
    btnAddMember.addEventListener("click", () => {
      if (familyWaletView) familyWaletView.style.display = "none";
      if (addMemberView) addMemberView.style.display = "block"; // Assuming add-member-view exists
    });
  }

  if (btnBackAddMember) {
    btnBackAddMember.addEventListener("click", () => {
      if (addMemberView) addMemberView.style.display = "none";
      if (familyWaletView) familyWaletView.style.display = "block";
    });
  }

  // --- GOAL DETAIL INTERACTION FIXES ---
  const btnBackDetailGoal = document.getElementById("btn-back-detail-goal");
  const goalDetailView = document.getElementById("goal-detail-view");
  const btnWithdraw = document.getElementById("btn-withdraw");
  const btnTopupTrigger = document.getElementById("btn-topup-trigger");
  const btnTriggerEdit = document.getElementById("btn-trigger-edit");
  const editGoalView = document.getElementById("edit-goal-view");
  const btnBackEditGoal = document.getElementById("btn-back-edit-goal");

  // Modals
  const withdrawalModal = document.getElementById("withdrawal-modal");
  const btnCancelWithdrawal = document.getElementById("btn-cancel-withdrawal");
  const topupModalGoal = document.getElementById("topup-modal");
  const btnCancelTopup = document.getElementById("btn-cancel-topup");

  if (btnBackDetailGoal) {
    btnBackDetailGoal.addEventListener("click", () => {
      if (goalDetailView) goalDetailView.style.display = "none";
      if (shopeePayView) {
        shopeePayView.style.display = "block";
        fetchGoals(); // Refresh data
      }
    });
  }

  if (btnWithdraw) {
    btnWithdraw.addEventListener("click", () => {
      if (withdrawalModal) withdrawalModal.style.display = "flex";
    });
  }

  if (btnCancelWithdrawal) {
    btnCancelWithdrawal.addEventListener("click", () => {
      if (withdrawalModal) withdrawalModal.style.display = "none";
    });
  }

  // Chain Withdrawal -> Confirmation
  const btnProceedWithdrawal = document.getElementById(
    "btn-proceed-withdrawal"
  );
  const confirmationModal = document.getElementById("confirmation-modal");
  const btnBackConfirmation = document.getElementById("btn-back-confirmation");

  if (btnProceedWithdrawal) {
    btnProceedWithdrawal.addEventListener("click", () => {
      // Get Data
      const currentTitle =
        document.getElementById("detail-goal-title").innerText;
      const currentGoal = activeGoals.find((g) => g.name === currentTitle);

      if (currentGoal && confirmationModal) {
        if (withdrawalModal) withdrawalModal.style.display = "none";
        confirmationModal.style.display = "flex";

        // Update UI in Confirmation Modal
        const amountEls = confirmationModal.querySelectorAll(".confirm-amount");
        amountEls.forEach((el) => {
          el.innerText =
            "Rp" +
            parseFloat(String(currentGoal.current_amount)).toLocaleString(
              "id-ID"
            );
        });

        const nameEls =
          confirmationModal.querySelectorAll(".confirm-goal-name");
        nameEls.forEach((el) => {
          el.innerText = currentGoal.name;
        });

        // Try to update button text specifically if it has confirm-amount class inside
        const btnFinal = document.getElementById("btn-final-withdrawal");
        if (btnFinal) {
          // Reconstruct content to keep the span if needed, or just update the span inside
          const spanInside = btnFinal.querySelector(".confirm-amount");
          if (spanInside) {
            spanInside.innerText =
              "Rp" +
              parseFloat(String(currentGoal.current_amount)).toLocaleString(
                "id-ID"
              );
          }
        }
      }
    });
  }

  if (btnBackConfirmation) {
    btnBackConfirmation.addEventListener("click", () => {
      if (confirmationModal) confirmationModal.style.display = "none";
      if (withdrawalModal) withdrawalModal.style.display = "flex"; // Go back
    });
  }

  // Chain Confirmation -> PIN
  const btnFinalWithdrawal = document.getElementById("btn-final-withdrawal");
  const pinModal = document.getElementById("pin-modal");
  // PIN Logic reused/shared?
  // For now just show PIN modal
  if (btnFinalWithdrawal) {
    btnFinalWithdrawal.addEventListener("click", () => {
      if (confirmationModal) confirmationModal.style.display = "none";
      if (pinModal) pinModal.style.display = "flex";
    });
  }

  // PIN Back
  // logic to close PIN modal is inside the PIN modal HTML usually (or missing)
  // Let's check pin-backspace logic in previous reading... it was for deleting numbers.
  // There doesn't seem to be a close button on PIN modal in HTML, maybe clicking outside?
  // or user completes PIN.

  if (btnTopupTrigger) {
    btnTopupTrigger.addEventListener("click", () => {
      if (topupModalGoal) topupModalGoal.style.display = "flex";
    });
  }

  if (btnCancelTopup) {
    btnCancelTopup.addEventListener("click", () => {
      if (topupModalGoal) topupModalGoal.style.display = "none";
    });
  }

  if (btnTriggerEdit) {
    btnTriggerEdit.addEventListener("click", () => {
      if (goalDetailView) goalDetailView.style.display = "none";
      if (editGoalView) editGoalView.style.display = "block";
    });
  }

  if (btnBackEditGoal) {
    btnBackEditGoal.addEventListener("click", () => {
      if (editGoalView) editGoalView.style.display = "none";
      if (goalDetailView) goalDetailView.style.display = "block";
    });
  }

  // --- GOAL TOP UP LOGIC ---
  const btnConfirmTopup = document.getElementById("btn-confirm-topup");
  const inputTopupAmount = document.getElementById("input-topup-amount");

  if (inputTopupAmount) {
    inputTopupAmount.addEventListener("input", function (e) {
      let value = this.value.replace(/[^0-9]/g, "");
      if (value) {
        const fmt = parseInt(value).toLocaleString("id-ID");
        this.value = "Rp " + fmt;
      } else {
        this.value = "";
      }
    });
  }

  if (btnConfirmTopup) {
    btnConfirmTopup.addEventListener("click", () => {
      // Strip non-digits
      const raw = inputTopupAmount.value.replace(/[^0-9]/g, "");
      const amount = parseInt(raw);

      if (!amount || amount < 0) {
        alert("Masukkan jumlah yang valid");
        return;
      }

      // Find Current Goal ID
      const currentTitle =
        document.getElementById("detail-goal-title").innerText;
      const currentGoal = activeGoals.find((g) => g.name === currentTitle);

      if (!currentGoal) {
        alert("Data impian tidak ditemukan");
        return;
      }

      // Call API
      fetch("api/goals.php", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "topup",
          id: currentGoal.id,
          amount: amount,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (topupModalGoal) topupModalGoal.style.display = "none";

          // Show Success Modal (Reuse Payment Success View)
          const paymentSuccessView = document.getElementById(
            "payment-success-view"
          );
          const successAmountDisplay = document.getElementById(
            "success-amount-display"
          );
          const btnSuccessClose = document.getElementById("btn-success-close");

          if (paymentSuccessView) {
            paymentSuccessView.style.display = "flex";
            if (successAmountDisplay) {
              successAmountDisplay.innerText =
                "Rp" + amount.toLocaleString("id-ID");
            }

            if (btnSuccessClose) {
              // Overwrite onclick to handle specific flow for Goal TopUp
              btnSuccessClose.onclick = () => {
                paymentSuccessView.style.display = "none";
                fetchGoals();

                // Manually update active goal current amount in UI for immediate feedback
                // Ensure numeric addition to avoid string concatenation
                // Manually update active goal current amount in UI for immediate feedback
                // Ensure numeric addition to avoid string concatenation
                currentGoal.current_amount =
                  parseFloat(currentGoal.current_amount || 0) + amount;

                if (goalDetailView) {
                  // Add History Item
                  const historyList =
                    document.getElementById("goal-history-list");
                  const emptyState =
                    document.getElementById("goal-empty-state");

                  if (emptyState) emptyState.style.display = "none";
                  if (historyList) {
                    const date = new Date();
                    const dateStr = date.toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    });

                    const itemHtml = `
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px 0; border-bottom: 1px solid #f0f0f0;">
                          <div style="display: flex; align-items: center; gap: 15px;">
                            <div style="width: 40px; height: 40px; background: #e3f2fd; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #2196f3;">
                              <i class="fas fa-plus"></i>
                            </div>
                            <div>
                              <div style="font-weight: 500; color: #333; margin-bottom: 2px;">Isi Saldo</div>
                              <div style="font-size: 11px; color: #999;">${dateStr}</div>
                            </div>
                          </div>
                          <div style="text-align: right;">
                            <div style="font-weight: bold; color: #2e7d32;">+Rp${amount.toLocaleString(
                              "id-ID"
                            )}</div>
                          </div>
                        </div>
                        `;
                    historyList.insertAdjacentHTML("afterbegin", itemHtml);
                  }
                  // Update amounts in UI
                  const detailCurrent = document.getElementById(
                    "detail-current-amount"
                  );
                  if (detailCurrent)
                    detailCurrent.innerText =
                      "Rp" + currentGoal.current_amount.toLocaleString("id-ID");

                  // Recalculate progress
                  const percent = Math.min(
                    100,
                    Math.round(
                      (currentGoal.current_amount / currentGoal.target) * 100
                    )
                  );
                  const progressBar = document.getElementById(
                    "detail-progress-bar"
                  );
                  if (progressBar) progressBar.style.width = percent + "%";

                  const targetText =
                    document.getElementById("detail-target-text");
                  if (targetText)
                    targetText.innerText =
                      percent +
                      "% dari Rp" +
                      currentGoal.target.toLocaleString("id-ID");
                }
              };
            }
          }
        })
        .catch((err) => alert("Terjadi kesalahan"));
    });
  }

  // --- GOAL EDIT LOGIC ---
  const btnSaveEdit = document.getElementById("btn-save-edit");
  const inputEditName = document.getElementById("input-edit-name"); // Need to ensure IDs match HTML
  const inputEditAmount = document.getElementById("input-edit-amount");

  if (btnSaveEdit) {
    btnSaveEdit.addEventListener("click", () => {
      const name = inputEditName.value;
      const target = parseInt(inputEditAmount.value);

      // Find Current Goal ID (from title before edit, or store it?)
      // If we are in Edit View, the title of Detail View is still populated or hidden.
      const currentTitle =
        document.getElementById("detail-goal-title").innerText;
      const currentGoal = activeGoals.find((g) => g.name === currentTitle);

      if (!currentGoal) return;

      fetch("api/goals.php", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "edit",
          id: currentGoal.id,
          name: name,
          target_amount: target,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // Show Custom Success Modal
          const successModal = document.getElementById("edit-success-modal");
          if (successModal) {
            successModal.style.display = "flex";
            setTimeout(() => {
              successModal.style.display = "none";
              fetchGoals();
              if (editGoalView) editGoalView.style.display = "none";
              if (shopeePayView) shopeePayView.style.display = "block";
            }, 1500);
          } else {
            // Fallback
            alert("Perubahan Disimpan");
            fetchGoals();
            if (editGoalView) editGoalView.style.display = "none";
            if (shopeePayView) shopeePayView.style.display = "block";
          }
        })
        .catch((err) => alert("Gagal menyimpan"));
    });
  }

  // Start Edit View with Data
  if (btnTriggerEdit) {
    // Re-attach listener to populate inputs?
    // I already added a listener for display toggle. Let's add population logic here.
    // Wait, I can't overwrite the previous listener easily.
    // But I can add ANOTHER listener to the same button.
    btnTriggerEdit.addEventListener("click", () => {
      const currentTitle =
        document.getElementById("detail-goal-title").innerText;
      const currentGoal = activeGoals.find((g) => g.name === currentTitle);
      if (currentGoal) {
        if (inputEditName) inputEditName.value = currentGoal.name;
        if (inputEditAmount) inputEditAmount.value = currentGoal.target_amount; // Use raw
      }
    });
  }

  // --- PIN LOGIC (Mock) ---
  const pinKeys = document.querySelectorAll(".pin-key");
  const pinDots = document.querySelectorAll(".pin-dot");
  let currentPin = "";

  pinKeys.forEach((key) => {
    key.addEventListener("click", () => {
      const text = key.innerText;
      if (currentPin.length < 6 && !isNaN(text) && text !== "") {
        currentPin += text;
        updatePinUI();
      }
    });
  });

  // Backspace PIN
  const pinBackspace = document.getElementById("pin-backspace");
  if (pinBackspace) {
    pinBackspace.addEventListener("click", () => {
      currentPin = currentPin.slice(0, -1);
      updatePinUI();
    });
  }

  function updatePinUI() {
    pinDots.forEach((dot, index) => {
      if (index < currentPin.length) {
        dot.style.background = "#ee4d2d";
        dot.style.border = "none";
      } else {
        dot.style.background = "white";
        dot.style.border = "1px solid #ccc";
      }
    });

    if (currentPin.length === 6) {
      // Trigger Withdraw Logic
      processWithdrawal();
    }
  }

  function processWithdrawal() {
    const currentTitle = document.getElementById("detail-goal-title").innerText;
    const currentGoal = activeGoals.find((g) => g.name === currentTitle);

    if (!currentGoal) return;

    // API Call
    fetch("api/goals.php", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "withdraw",
        id: currentGoal.id,
        amount: currentGoal.current_amount, // Withdraw All
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (pinModal) pinModal.style.display = "none";

        // Show Success
        const successModal = document.getElementById("success-modal");
        if (successModal) {
          successModal.style.display = "flex";

          // Update amount display with proper formatting
          const els = successModal.querySelectorAll(".confirm-amount");
          els.forEach((el) => {
            // Parse float to ensure toLocaleString works on number
            el.innerText =
              "Rp" +
              parseFloat(String(currentGoal.current_amount)).toLocaleString(
                "id-ID"
              );
          });

          // Attach handlers for this specific flow
          const btnCloseSuccess = document.getElementById("btn-close-success");
          const btnCheckDetail = document.getElementById("btn-check-detail");

          if (btnCloseSuccess) {
            btnCloseSuccess.onclick = () => {
              successModal.style.display = "none";
              // Also close the detail view since the goal is now deleted/empty
              if (goalDetailView) goalDetailView.style.display = "none";
              if (shopeePayView) shopeePayView.style.display = "block";
            };
          }

          if (btnCheckDetail) {
            btnCheckDetail.onclick = () => {
              successModal.style.display = "none";
              // Must hide other views to ensure transaction detail is visible locally
              if (goalDetailView) goalDetailView.style.display = "none";
              if (shopeePayView) shopeePayView.style.display = "none"; // Hide main view too if needed

              const transDetailView = document.getElementById(
                "transaction-detail-view"
              );
              if (transDetailView) {
                transDetailView.style.display = "flex";
                const transAmountEls =
                  transDetailView.querySelectorAll(".confirm-amount");

                transAmountEls.forEach((el) => {
                  el.innerText =
                    "Rp" +
                    parseFloat(
                      String(currentGoal.current_amount)
                    ).toLocaleString("id-ID");
                });
              }
            };
          }
        }

        fetchGoals(); // Refresh
        currentPin = ""; // Reset PIN
        updatePinUI();
      })
      .catch((err) => {
        alert("Gagal menarik saldo");
        currentPin = "";
        updatePinUI();
      });
  }

  // Transaction Detail Back Button
  const btnBackDetail = document.getElementById("btn-back-detail");
  const transDetailView = document.getElementById("transaction-detail-view");
  if (btnBackDetail) {
    btnBackDetail.addEventListener("click", () => {
      if (transDetailView) transDetailView.style.display = "none";
      if (shopeePayView) shopeePayView.style.display = "block";
    });
  }

  // --- ADD MEMBER BUTTONS FIX ---
  // --- ADD MEMBER BUTTONS FIX ---
  const inviteButtons = document.querySelectorAll(".btn-trigger-invite");
  const inviteFormModal = document.getElementById("invite-form-modal");
  const btnCancelInviteForm = document.getElementById("btn-cancel-invite-form");
  const btnSubmitInviteForm = document.getElementById("btn-submit-invite-form");
  const inviteSuccessModal = document.getElementById("invite-success-modal");
  const btnCloseInviteModal = document.getElementById("btn-close-invite-modal");

  let selectedMemberName = ""; // Store selected name

  inviteButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Capture Name (Traverse DOM)
      // Structure: container > div(flex:1) > div(name)
      const parent = e.target.parentElement;
      const nameDiv = parent.querySelector("div[style*='font-weight: 500']");
      if (nameDiv) selectedMemberName = nameDiv.innerText;

      if (inviteFormModal) {
        inviteFormModal.style.display = "flex";

        // Reset Form
        const relSelect = document.getElementById("input-invite-relation");
        const addrStatusSelect = document.getElementById(
          "select-invite-address-status"
        );
        const addrContainer = document.getElementById(
          "container-invite-address"
        );
        const addrInput = document.getElementById("input-invite-address");

        if (relSelect) relSelect.value = "";
        if (addrStatusSelect) {
          addrStatusSelect.value = "Sama";
          if (addrContainer) addrContainer.style.display = "none";
        }
        if (addrInput) addrInput.value = "";
      }
    });
  });

  // ADDRESS STATUS DROPDOWN LOGIC
  const selectInviteAddressStatus = document.getElementById(
    "select-invite-address-status"
  );
  const containerInviteAddress = document.getElementById(
    "container-invite-address"
  );

  if (selectInviteAddressStatus && containerInviteAddress) {
    selectInviteAddressStatus.addEventListener("change", (e) => {
      if (e.target.value === "Tidak") {
        containerInviteAddress.style.display = "block";
      } else {
        containerInviteAddress.style.display = "none";
      }
    });
  }

  if (btnCancelInviteForm) {
    btnCancelInviteForm.addEventListener("click", () => {
      if (inviteFormModal) inviteFormModal.style.display = "none";
    });
  }

  if (btnSubmitInviteForm) {
    btnSubmitInviteForm.addEventListener("click", () => {
      // Validate inputs if needed
      if (inviteFormModal) inviteFormModal.style.display = "none";
      if (inviteSuccessModal) inviteSuccessModal.style.display = "flex";
    });
  }

  if (btnCloseInviteModal) {
    btnCloseInviteModal.addEventListener("click", () => {
      if (inviteSuccessModal) inviteSuccessModal.style.display = "none";

      // ADD NEW MEMBER TO GRID
      const membersGrid = document.querySelector(".fw-members-grid");
      if (membersGrid && selectedMemberName) {
        const newMemberHTML = `
           <div style="background: white; border-radius: 8px; padding: 10px; display: flex; flex-direction: column; height: 140px; justify-content: space-between; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
            <div style="display: flex; justify-content: space-between;">
              <div style="width: 30px; height: 30px; background: #eee; border-radius: 50%; overflow: hidden;">
                <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=${selectedMemberName}" style="width:100%">
              </div>
              <div class="member-detail-btn" style="width: 20px; height: 20px; display: flex; align-items: center; justify-content: flex-end; cursor: pointer;">
                <i class="fas fa-ellipsis-v" style="color: #999; font-size: 12px;"></i>
              </div>
            </div>
            <div>
              <div class="member-name" style="font-size: 11px; font-weight: bold; line-height: 1.2; margin-bottom: 5px;">${selectedMemberName}</div>
              <div class="member-limit-text" style="font-size: 9px; color: #777;">Limit: Rp0</div>
              <i class="fas fa-paper-plane text-orange" style="font-size: 10px; margin-top: 5px;"></i>
            </div>
          </div>
          `;
        // Insert before any potential "Add" button if order matters, or just append
        // Here we append to the grid
        membersGrid.insertAdjacentHTML("beforeend", newMemberHTML);

        // Attach Detail Listener to New Member
        const newMemberCard = membersGrid.lastElementChild;
        const detailBtn = newMemberCard.querySelector(".member-detail-btn");
        if (detailBtn) {
          detailBtn.addEventListener("click", (e) => {
            e.stopPropagation();

            // Get Name/Limit from already captured var or DOM
            let name = selectedMemberName;
            let limit = "Rp0";

            const memberDetailView =
              document.getElementById("member-detail-view"); // Ensure scope
            const familyWaletView =
              document.getElementById("family-walet-view");

            if (memberDetailView) {
              const nameDisplay =
                memberDetailView.querySelector(".detail-name");
              const limitDisplay = memberDetailView.querySelector(
                ".detail-limit-value"
              );

              if (nameDisplay) nameDisplay.innerText = name;
              if (limitDisplay) limitDisplay.innerText = limit;

              // Set global tracking var
              editingMemberName = name.replace(/\s+/g, " ").trim();

              if (familyWaletView) familyWaletView.style.display = "none";
              memberDetailView.style.display = "block";
              window.scrollTo(0, 0);
            }
          });
        }

        // Also Add to Limit List
        const limitList = document.getElementById("limit-members-list");
        if (limitList) {
          const limitItemHTML = `
            <div class="member-limit-item-dynamic" style="background: white; border-radius: 8px; padding: 15px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 1px 2px rgba(0,0,0,0.05); cursor: pointer; margin-top: 10px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 35px; height: 35px; background: #eee; border-radius: 50%; overflow: hidden;">
                  <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=${selectedMemberName}" style="width:100%; height:100%; object-fit: cover;">
                </div>
                <div class="limit-list-name" style="font-size: 14px; font-weight: 500; color: #333;">${selectedMemberName}</div>
              </div>

              <div style="display: flex; align-items: center; gap: 10px;">
                <span class="limit-list-value" style="color: #42a5f5; font-size: 14px;">Rp0</span>
                <i class="fas fa-chevron-right" style="color: #999; font-size: 12px;"></i>
              </div>
            </div>
            `;
          limitList.insertAdjacentHTML("beforeend", limitItemHTML);

          // Attach Event Listener
          const newItem = limitList.lastElementChild;
          if (newItem) {
            newItem.addEventListener("click", function () {
              activeLimitItem = this;
              const nameEl = this.querySelector(".limit-list-name");
              if (nameEl)
                editingMemberName = nameEl.innerText
                  .replace(/\s+/g, " ")
                  .trim();

              const modalOverlay = document.getElementById("fw-modal-overlay");
              const limitModal = document.getElementById("fw-limit-modal");
              if (modalOverlay) modalOverlay.style.display = "block";
              if (limitModal) limitModal.style.display = "block";

              const existingSpan = this.querySelector(".limit-list-value");
              if (existingSpan) {
                const text = existingSpan.innerText
                  .replace("Rp", "")
                  .replace(/\./g, "");
                if (typeof currentLimit !== "undefined") currentLimit = text;
              } else {
                if (typeof currentLimit !== "undefined") currentLimit = "3";
              }

              if (typeof updateLimitDisplay === "function")
                updateLimitDisplay();
            });
          }
        }
      }

      // Restore Views
      const addMemberView = document.getElementById("add-member-view");
      if (addMemberView) addMemberView.style.display = "none";
      if (familyWaletView) familyWaletView.style.display = "block";
    });
  }

  // Generic Modal Overlay Closer
  const overlays = [
    withdrawalModal,
    confirmationModal,
    pinModal,
    document.getElementById("success-modal"),
    inviteFormModal,
    inviteSuccessModal,
    document.getElementById("topup-modal"), // specialized topup modal
  ];

  overlays.forEach((overlay) => {
    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          overlay.style.display = "none";
        }
      });
    }
  });

  // --- SEND MONEY FEATURE (Redesigned Flow) ---
  let totalFamilyBalance = 500000; // Mock Balance
  let selectedPaymentMethod = "Family Wallet"; // Default

  // Helper to update balance display
  function updateFamilyBalanceDisplay() {
    const dispBal = document.getElementById("display-payment-balance");
    if (dispBal) dispBal.innerText = totalFamilyBalance.toLocaleString("id-ID");
    const modalBals = document.querySelectorAll(".family-balance-val");
    modalBals.forEach(
      (el) => (el.innerText = totalFamilyBalance.toLocaleString("id-ID"))
    );
  }

  // Global Function for Direct Click (Fixing Delegation Issues)
  window.processSendMoneyStep1 = function () {
    // alert("Direct Click Works!"); // Debug
    const inputRecipient = document.getElementById(
      "input-send-money-recipient"
    );

    if (inputRecipient && inputRecipient.value.trim() !== "") {
      // Pass Recipient Data
      const dispName = document.getElementById("display-recipient-name");
      const dispNum = document.getElementById("display-recipient-number");
      if (dispName) dispName.innerText = "Teman (" + inputRecipient.value + ")";
      if (dispNum) dispNum.innerText = inputRecipient.value;

      // Update Balance Display in Step 2
      const dispBal = document.getElementById("display-payment-balance");
      if (dispBal)
        dispBal.innerText = totalFamilyBalance.toLocaleString("id-ID");

      // Update Modal Balance
      const modalBals = document.querySelectorAll(".family-balance-val");
      modalBals.forEach(
        (el) => (el.innerText = totalFamilyBalance.toLocaleString("id-ID"))
      );

      // Hide Step 1, Show Step 2
      const step1 = document.getElementById("send-money-step-1");
      const step2 = document.getElementById("send-money-step-2-new");
      if (step1) step1.style.display = "none";
      if (step2) step2.style.display = "flex";

      // Reset Amount
      const inputAmount = document.getElementById("input-send-money-amount");
      const dispTotal = document.getElementById("display-total-amount");
      if (inputAmount) inputAmount.value = "";
      if (dispTotal) dispTotal.innerText = "0";
    } else {
      alert("Mohon masukkan nomor atau nama tujuan!");
    }
  };

  // Global Function for Step 2 Final Submission
  window.processSendMoneyFinal = function () {
    const inputAmount = document.getElementById("input-send-money-amount");
    const step2 = document.getElementById("send-money-step-2-new");
    const sendMoneySuccessModal = document.getElementById(
      "send-money-success-modal"
    );

    if (inputAmount && inputAmount.value) {
      const amount = parseInt(inputAmount.value);
      if (amount <= 0) {
        alert("Nominal tidak valid!");
        return;
      }

      // Check Balance
      if (selectedPaymentMethod === "Family Wallet") {
        if (amount > totalFamilyBalance) {
          alert("Saldo Family Wallet tidak mencukupi!");
          return;
        }
        // Deduct
        totalFamilyBalance -= amount;
        updateFamilyBalanceDisplay();
      } else {
        // ShopeePay Check (Mock)
        if (amount > 479) {
          alert("Saldo ShopeePay tidak mencukupi!");
          return;
        }
        // No deduction for mock
      }

      // Show Success
      if (step2) step2.style.display = "none";
      if (sendMoneySuccessModal) sendMoneySuccessModal.style.display = "flex";
    } else {
      alert("Mohon masukkan jumlah uang!");
    }
  };

  document.addEventListener("click", (e) => {
    // 2. Open Step 1 (Trigger)
    const btnTrigger = e.target.closest(".btn-trigger-send-money");
    if (btnTrigger) {
      const step1 = document.getElementById("send-money-step-1");
      if (step1) {
        step1.style.display = "flex";
        // Reset
        const inputRecipient = document.getElementById(
          "input-send-money-recipient"
        );
        if (inputRecipient) inputRecipient.value = "";
      }
    }

    // 3. Back: Step 2 -> Step 1
    const btnBackStep2 = e.target.closest("#btn-back-step-2");
    if (btnBackStep2) {
      const step1 = document.getElementById("send-money-step-1");
      const step2 = document.getElementById("send-money-step-2-new");
      if (step2) step2.style.display = "none";
      if (step1) step1.style.display = "flex";
    }

    // 4. Cancel Step 1
    const btnCancelStep1 = e.target.closest("#btn-cancel-step-1");
    if (btnCancelStep1) {
      const step1 = document.getElementById("send-money-step-1");
      if (step1) step1.style.display = "none";
    }

    // New: Select Contact from List (Auto Next)
    const contactItem = e.target.closest(".contact-item");
    if (contactItem) {
      // Extract Data (Mock)
      const nameEl = contactItem.querySelector(".contact-name");
      const numEl = contactItem.querySelector(".contact-number");

      const name = nameEl ? nameEl.innerText : "Recipient";
      const num = numEl ? numEl.innerText : "000";

      // Fill Input (Hidden or displayed)
      const inputRecipient = document.getElementById(
        "input-send-money-recipient"
      );
      if (inputRecipient) inputRecipient.value = num; // Use number as value

      // Setup Step 2 Display
      const dispName = document.getElementById("display-recipient-name");
      const dispNum = document.getElementById("display-recipient-number");
      if (dispName) dispName.innerText = name;
      if (dispNum) dispNum.innerText = num;

      // Update Balance Display in Step 2
      const dispBal = document.getElementById("display-payment-balance");
      if (dispBal)
        dispBal.innerText = totalFamilyBalance.toLocaleString("id-ID");

      // Update Modal Balance
      const modalBals = document.querySelectorAll(".family-balance-val");
      modalBals.forEach(
        (el) => (el.innerText = totalFamilyBalance.toLocaleString("id-ID"))
      );

      // Transition
      const step1 = document.getElementById("send-money-step-1");
      const step2 = document.getElementById("send-money-step-2-new");
      if (step1) step1.style.display = "none";
      if (step2) step2.style.display = "flex";

      // Reset Amount
      const inputAmount = document.getElementById("input-send-money-amount");
      const dispTotal = document.getElementById("display-total-amount");
      if (inputAmount) inputAmount.value = "";
      if (dispTotal) dispTotal.innerText = "0";
    }

    // 5. Open Payment Method Modal
    const triggerMethod = e.target.closest("#trigger-payment-method");
    if (triggerMethod) {
      const modal = document.getElementById("payment-method-modal");
      if (modal) modal.style.display = "flex";
    }

    // 6. Close Payment Method Modal
    const closeMethod = e.target.closest("#btn-close-payment-method");
    if (closeMethod) {
      const modal = document.getElementById("payment-method-modal");
      if (modal) modal.style.display = "none";
    }

    // 7. Select Payment Method
    const methodOption = e.target.closest(".payment-option");
    if (methodOption) {
      selectedPaymentMethod = methodOption.getAttribute("data-method");

      // Update Step 2 Display
      const dispMethod = document.getElementById("display-payment-method");
      const dispBal = document.getElementById("display-payment-balance");
      const dispIcon = document.getElementById("icon-payment-method-display");

      if (dispMethod) dispMethod.innerText = selectedPaymentMethod;
      if (selectedPaymentMethod === "Family Wallet") {
        if (dispBal)
          dispBal.innerText = totalFamilyBalance.toLocaleString("id-ID");
        if (dispIcon) dispIcon.className = "fas fa-users text-blue";
      } else {
        if (dispBal) dispBal.innerText = "479"; // Mock
        if (dispIcon) dispIcon.className = "fas fa-wallet text-orange";
      }

      // Close Modal
      const modal = document.getElementById("payment-method-modal");
      if (modal) modal.style.display = "none";
    }

    // 9. Close Success Modal
    const btnCloseSuccess = e.target.closest("#btn-close-send-money-success");
    if (btnCloseSuccess) {
      const modal = document.getElementById("send-money-success-modal");
      if (modal) modal.style.display = "none";
    }
  });

  // Capture Amount Input for Total Display
  document.addEventListener("input", (e) => {
    if (e.target.id === "input-send-money-amount") {
      const val = e.target.value;
      const dispTotal = document.getElementById("display-total-amount");
      if (dispTotal)
        dispTotal.innerText = val ? parseInt(val).toLocaleString("id-ID") : "0";
    }
  });
  // End Delegation
}); // End DOMContentLoaded
