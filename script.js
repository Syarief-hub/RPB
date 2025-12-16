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
});
