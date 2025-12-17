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
        renderGoals();
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

  // CREATE GOAL NAVIGATION & LOGIC
  const btnCreateGoalNav = document.getElementById("btn-create-goal-nav"); // Navigation button
  const createGoalView = document.getElementById("create-goal-view");
  const btnBackCreateGoal = document.getElementById("btn-back-create-goal");

  // Inputs
  const goalNameInput = document.getElementById("goal-name-input");
  const goalTargetInput = document.getElementById("goal-target-input");
  const btnSaveGoal = document.getElementById("btn-save-goal");

  // Data Store (In-Memory)
  let activeGoals = JSON.parse(localStorage.getItem('shopeepay_goals')) || [];

  // Initial Render on Load
  if (activeGoals.length > 0) {
    renderGoals();
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
    const target = goalTargetInput.value.trim();

    // Debugging (Uncomment if needed)
    // console.log("Input: ", name, target);

    if (name.length > 0 && target.length > 0 && parseInt(target) > 0) {
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
    goalTargetInput.addEventListener("input", validateGoalInputs);
    goalTargetInput.addEventListener("change", validateGoalInputs);
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
      const target = parseInt(goalTargetInput.value.trim());

      const newGoal = {
        id: Date.now(),
        name: name,
        target: target,
        current: 0,
        category: selectedCategory,
        icon: getCategoryIcon(selectedCategory)
      };

      activeGoals.push(newGoal);
      localStorage.setItem('shopeepay_goals', JSON.stringify(activeGoals)); // Save to LocalStorage
      renderGoals();

      // Navigate back
      if (createGoalView) createGoalView.style.display = "none";
      if (shopeePayView) shopeePayView.style.display = "block";
    }

    // 2. Open Goal Detail
    const goalCard = e.target.closest('.goal-card');
    if (goalCard) {
      const name = goalCard.querySelector('.goal-name').innerText;
      const goal = activeGoals.find(g => g.name === name); // Find by name (ID would be better)

      if (goal) {
        // Populate Detail View
        document.getElementById('detail-goal-title').innerText = goal.name;
        document.getElementById('detail-goal-icon').innerHTML = goal.icon; // Icon
        document.getElementById('detail-target-raw').value = goal.target;
        document.getElementById('detail-current-amount').innerText = 'Rp' + goal.current.toLocaleString('id-ID');

        const percent = Math.min(100, Math.round((goal.current / goal.target) * 100));
        document.getElementById('detail-progress-bar').style.width = percent + '%';
        document.getElementById('detail-target-text').innerText = percent + '% dari Rp' + goal.target.toLocaleString('id-ID');

        // Show View
        if (shopeePayView) shopeePayView.style.display = "none";
        const detailView = document.getElementById('goal-detail-view');
        if (detailView) {
          detailView.style.display = 'block';
          window.scrollTo(0, 0);
        }
      }
    }
  });

  function getCategoryIcon(cat) {
    switch (cat) {
      case 'Travel': return '<i class="fas fa-suitcase-rolling"></i>';
      case 'Gadget': return '<i class="fas fa-mobile-alt"></i>';
      case 'Fashion': return '<i class="fas fa-tshirt"></i>';
      case 'Elektronik': return '<i class="fas fa-tv"></i>';
      default: return '<i class="fas fa-piggy-bank"></i>';
    }
  }

  function renderGoals() {
    const listContainer = document.getElementById("active-goals-list");
    const emptyState = document.getElementById("sp-empty-state");
    const activeViewContainer = document.getElementById("sp-active-view-container");
    const totalBalanceEl = document.getElementById("sp-total-balance");

    if (!listContainer) return;

    listContainer.innerHTML = "";
    let totalBalance = 0;

    if (activeGoals.length > 0) {
      // Show Active View, Hide Empty State
      if (emptyState) emptyState.style.display = "none";
      if (activeViewContainer) activeViewContainer.style.display = "block";

      activeGoals.forEach(goal => {
        const currentAmount = goal.current || 0;
        totalBalance += currentAmount;

        const percent = Math.min(100, Math.round((currentAmount / goal.target) * 100));

        const cardHTML = `
          <div class="goal-card">
            <div class="goal-header">
              <div class="goal-icon-title">
                <div class="goal-icon">${goal.icon}</div>
                <div class="goal-info">
                  <span class="goal-name">${goal.name}</span>
                  <span class="goal-current-text" style="font-size:12px; color:#666;">Rp${currentAmount.toLocaleString('id-ID')}</span>
                </div>
              </div>
              <i class="fas fa-chevron-right" style="color: #ccc; font-size: 14px;"></i>
            </div>
            
            <div class="goal-progress-bar" style="margin-top: 10px;">
              <div class="goal-progress-fill" style="width: ${percent}%"></div>
            </div>
            <div style="display:flex; justify-content:space-between; margin-top:5px; font-size:10px; color:#999;">
               <span>Rp${currentAmount.toLocaleString('id-ID')}</span>
               <span>${percent}% dari Rp${goal.target.toLocaleString('id-ID')}</span>
            </div>
          </div>
        `;
        listContainer.innerHTML += cardHTML;
      });

      // Update Total
      if (totalBalanceEl) {
        totalBalanceEl.innerText = "Rp" + totalBalance.toLocaleString('id-ID');
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

  // --- GOAL DETAIL & TRANSACTION LOGIC ---
  const btnWithdraw = document.getElementById('btn-withdraw');
  const btnTopupTrigger = document.getElementById('btn-topup-trigger');

  // Modal 1 (Withdrawal)
  const modalWithdrawal = document.getElementById('withdrawal-modal');
  const btnCancelWithdrawal = document.getElementById('btn-cancel-withdrawal');
  const btnProceedWithdrawal = document.getElementById('btn-proceed-withdrawal');

  // Modal 2 (Confirmation)
  const modalConfirmation = document.getElementById('confirmation-modal');
  const btnBackConfirmation = document.getElementById('btn-back-confirmation');
  const btnFinalWithdrawal = document.getElementById('btn-final-withdrawal');

  // Modal 3 (PIN)
  const modalPin = document.getElementById('pin-modal');
  const pinKeys = document.querySelectorAll('.pin-key');
  const pinDots = document.querySelectorAll('.pin-dot');
  const pinBackspace = document.getElementById('pin-backspace');
  let pinValue = "";

  // Modal 4 (Success)
  const modalSuccess = document.getElementById('success-modal');
  const btnCloseSuccess = document.getElementById('btn-close-success');
  const btnCheckDetail = document.getElementById('btn-check-detail');

  // Top Up Modal
  const modalTopup = document.getElementById('topup-modal');
  const btnCancelTopup = document.getElementById('btn-cancel-topup');
  const btnConfirmTopup = document.getElementById('btn-confirm-topup');
  const inputTopupAmount = document.getElementById('input-topup-amount');

  // Data placeholders
  const confirmAmounts = document.querySelectorAll('.confirm-amount');
  const confirmGoalNames = document.querySelectorAll('.confirm-goal-name');

  const detailCurrentAmount = document.getElementById('detail-current-amount');
  const detailGoalTitle = document.getElementById('detail-goal-title');
  const detailProgressBar = document.getElementById('detail-progress-bar');
  const detailTargetText = document.getElementById('detail-target-text');

  function updatePinDots() {
    pinDots.forEach((dot, index) => {
      if (index < pinValue.length) {
        dot.style.background = "#ee4d2d";
        dot.style.borderColor = "#ee4d2d";
      } else {
        dot.style.background = "transparent";
        dot.style.borderColor = "#ccc";
      }
    });
  }

  function updateConfirmationData() {
    if (!detailCurrentAmount || !detailGoalTitle) return;
    const currentAmount = detailCurrentAmount.innerText;
    const goalName = detailGoalTitle.innerText;

    confirmAmounts.forEach(el => el.innerText = currentAmount);
    confirmGoalNames.forEach(el => el.innerText = goalName);
  }

  // --- Flow Listeners ---

  // Withdrawal Flow
  if (btnWithdraw) {
    btnWithdraw.addEventListener('click', function () {
      modalWithdrawal.style.display = 'flex';
    });
  }
  if (btnCancelWithdrawal) {
    btnCancelWithdrawal.addEventListener('click', function () {
      modalWithdrawal.style.display = 'none';
    });
  }
  if (btnProceedWithdrawal) {
    btnProceedWithdrawal.addEventListener('click', function () {
      updateConfirmationData();
      modalWithdrawal.style.display = 'none';
      modalConfirmation.style.display = 'flex';
    });
  }
  if (btnBackConfirmation) {
    btnBackConfirmation.addEventListener('click', function () {
      modalConfirmation.style.display = 'none';
      modalWithdrawal.style.display = 'flex';
    });
  }
  if (btnFinalWithdrawal) {
    btnFinalWithdrawal.addEventListener('click', function () {
      modalConfirmation.style.display = 'none';
      modalPin.style.display = 'flex';
      pinValue = "";
      updatePinDots();
    });
  }

  // PIN Logic
  pinKeys.forEach(key => {
    key.addEventListener('click', function () { /* Use function to access 'this' */
      const val = this.innerText;
      if (pinValue.length < 6) {
        pinValue += val;
        updatePinDots();

        if (pinValue.length === 6) {
          setTimeout(() => {
            modalPin.style.display = 'none';
            modalSuccess.style.display = 'flex';
          }, 300);
        }
      }
    });
  });

  if (pinBackspace) {
    pinBackspace.addEventListener('click', function () {
      pinValue = pinValue.slice(0, -1);
      updatePinDots();
    });
  }

  // Success & Close
  if (btnCloseSuccess) {
    btnCloseSuccess.addEventListener('click', function () {
      // 1. Identify goal to remove
      if (detailGoalTitle) {
        const goalName = detailGoalTitle.innerText;
        // Filter out the goal
        activeGoals = activeGoals.filter(g => g.name !== goalName);

        // 2. Persist changes
        localStorage.setItem('shopeepay_goals', JSON.stringify(activeGoals));

        // 3. Re-render list
        renderGoals();
      }

      modalSuccess.style.display = 'none';
      // Navigate back to goals views
      const receipt = document.getElementById('transaction-detail-view');
      const detail = document.getElementById('goal-detail-view');
      if (receipt) receipt.style.display = 'none';
      if (detail) detail.style.display = 'none';

      if (shopeePayView) {
        shopeePayView.style.display = 'block';
        window.scrollTo(0, 0);
      }
    });
  }

  // Top Up Flow
  if (btnTopupTrigger) {
    btnTopupTrigger.addEventListener('click', () => {
      modalTopup.style.display = 'flex';
    });
  }
  if (btnCancelTopup) {
    btnCancelTopup.addEventListener('click', () => {
      modalTopup.style.display = 'none';
    });
  }
  if (btnConfirmTopup) {
    btnConfirmTopup.addEventListener('click', () => {
      const amount = parseInt(inputTopupAmount.value || 0);
      if (amount > 0) {
        // Update UI directly for demo
        let current = parseInt(detailCurrentAmount.innerText.replace(/[^0-9]/g, '')) || 0;
        let target = parseInt(document.getElementById('detail-target-raw').value) || 1;

        current += amount;
        detailCurrentAmount.innerText = 'Rp' + current.toLocaleString('id-ID');

        const percent = Math.min(100, Math.round((current / target) * 100));
        detailProgressBar.style.width = percent + '%';
        detailTargetText.innerText = percent + '% dari Rp' + target.toLocaleString('id-ID');

        // Find and update global object (simplistic)
        const goalTitle = detailGoalTitle.innerText;
        const g = activeGoals.find(g => g.name === goalTitle);
        if (g) {
          g.current = current;
          renderGoals(); // Update list
        }

        modalTopup.style.display = 'none';
        alert("Top Up Berhasil!");
      }
    });
  }

  // Navigation for Detail View
  const btnBackDetailGoal = document.getElementById('btn-back-detail-goal');
  if (btnBackDetailGoal) {
    btnBackDetailGoal.addEventListener('click', () => {
      const detailView = document.getElementById('goal-detail-view');
      if (detailView) detailView.style.display = 'none';
      if (shopeePayView) shopeePayView.style.display = 'block';
    });
  }

  // Receipt View
  const transactionDetailView = document.getElementById('transaction-detail-view');
  const btnBackDetailReceipt = document.getElementById('btn-back-detail');

  if (btnCheckDetail) {
    btnCheckDetail.addEventListener('click', function () {
      modalSuccess.style.display = 'none';
      const detailView = document.getElementById('goal-detail-view');
      if (detailView) detailView.style.display = 'none';
      if (transactionDetailView) transactionDetailView.style.display = 'flex';
      window.scrollTo(0, 0);
    });
  }

  if (btnBackDetailReceipt) {
    btnBackDetailReceipt.addEventListener('click', () => {
      if (transactionDetailView) transactionDetailView.style.display = 'none';
      if (shopeePayView) shopeePayView.style.display = 'block';
    });
  }

  // Edit View Logic
  const editGoalView = document.getElementById('edit-goal-view');
  const btnTriggerEdit = document.getElementById('btn-trigger-edit');
  const btnBackEdit = document.getElementById('btn-back-edit-goal');
  const btnSaveEdit = document.getElementById('btn-save-edit');
  const inputEditName = document.getElementById('input-edit-name');
  const inputEditAmount = document.getElementById('input-edit-amount');

  if (btnTriggerEdit) {
    btnTriggerEdit.addEventListener('click', () => {
      inputEditName.value = detailGoalTitle.innerText;
      inputEditAmount.value = document.getElementById('detail-target-raw').value;

      document.getElementById('goal-detail-view').style.display = 'none';
      editGoalView.style.display = 'block';
      window.scrollTo(0, 0);
    });
  }
  if (btnBackEdit) {
    btnBackEdit.addEventListener('click', () => {
      editGoalView.style.display = 'none';
      document.getElementById('goal-detail-view').style.display = 'block';
    });
  }
  if (btnSaveEdit) {
    btnSaveEdit.addEventListener('click', () => {
      // Update Detail View
      detailGoalTitle.innerText = inputEditName.value;
      const newTarget = parseInt(inputEditAmount.value) || 0;
      document.getElementById('detail-target-raw').value = newTarget;

      // Re-calc progress
      let current = parseInt(detailCurrentAmount.innerText.replace(/[^0-9]/g, '')) || 0;
      const percent = Math.min(100, Math.round((current / newTarget) * 100));

      detailTargetText.innerText = percent + '% dari Rp' + newTarget.toLocaleString('id-ID');
      detailProgressBar.style.width = percent + '%';

      // Update global object
      const g = activeGoals.find(g => g.name === inputEditName.value); // weak match
      if (g) {
        g.name = inputEditName.value;
        g.target = newTarget;
        renderGoals();
      }

      editGoalView.style.display = 'none';
      document.getElementById('goal-detail-view').style.display = 'block';
    });
  }
});
