<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Shopee UI Clone</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <div class="app-container">
    <!-- Header Section -->
    <header class="main-header" id="main-header">
      <div class="search-container">
        <div class="search-bar">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Diskon Top Up Game" />
        </div>
        <div class="header-action">
          <div class="coin-badge">
            <i class="fas fa-coins text-yellow"></i> Klaim 50RB
            <i class="fas fa-chevron-right"></i>
          </div>
          <div class="notification-icon">
            <i class="far fa-bell"></i>
            <span class="badge">24</span>
          </div>
        </div>
      </div>
    </header>

    <!-- VIEW: HOME -->
    <?php include 'pages/home.php'; ?>

    <!-- VIEW: FINANCE (KEUANGAN) -->
    <?php include 'pages/finance.php'; ?>

    <!-- VIEW: SHOPEEFOOD -->
    <?php include 'pages/food.php'; ?>

    <!-- VIEW: PROFILE (SAYA) -->
    <?php include 'pages/profile.php'; ?>

    <!-- VIEW: SHOPEEPAY GOALS & ALL MODALS -->
    <?php include 'pages/goals.php'; ?>

    <!-- VIEW: FAMILY WALLET & SUBVIEWS -->
    <?php include 'pages/family_wallet.php'; ?>

    <style>
      @keyframes slideUpFlex {
        from {
          transform: translateY(100%);
        }

        to {
          transform: translateY(0);
        }
      }
    </style>


    <!-- Bottom Navigation -->
    <nav class="bottom-nav">
      <div class="nav-item active">
        <i class="fas fa-home"></i>
        <span>Beranda</span>
      </div>
      <div class="nav-item">
        <i class="fas fa-hand-holding-usd"></i>
        <span>Keuangan</span>
      </div>
      <div class="nav-item qris-container">
        <div class="qris-btn">
          <i class="fas fa-qrcode"></i>
        </div>
        <span>QRIS</span>
      </div>
      <div class="nav-item">
        <i class="fas fa-utensils"></i>
        <span>ShopeeFood</span>
      </div>
      <div class="nav-item">
        <i class="far fa-user"></i>
        <span>Saya</span>
      </div>
    </nav>
  </div>



  <script src="script.js"></script>
</body>

</html>
