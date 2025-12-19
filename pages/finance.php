    <div id="finance-view" style="display: none">
      <!-- Finance Hero (Image 4 Style) -->
      <section class="finance-hero">
        <div class="finance-card-row">
          <div class="f-card spaylater-big">
            <div class="f-header">
              <i class="fas fa-file-invoice-dollar"></i> SPayLater
            </div>
            <div class="f-body">
              <span>Limit kredit s/d</span>
              <div class="limit-amount">Rp 50.000.000</div>
            </div>
            <div class="f-action">Aktifkan Sekarang...</div>
          </div>
          <div class="f-card spinjam-big">
            <div class="f-header">
              <i class="fas fa-hand-holding-usd"></i> SPinjam
            </div>
            <div class="f-body">
              <span>Limit kredit s/d</span>
              <div class="limit-amount">Rp 100.000.000</div>
            </div>
            <div class="f-action">Aktifkan Sekarang...</div>
          </div>
        </div>
      </section>

      <!-- Finance Slider -->
      <div class="service-slider-container">
        <div class="service-slider" id="financeSlider">
          <!-- Page 1: Existing Finance Items -->
          <section class="finance-grid grid-page" style="padding: 20px 15px !important;">
            <div class="f-grid-item">
              <div class="bank-icon seabank">S</div>
              <span>SeaBank</span>
            </div>
            <div class="f-grid-item">
              <i class="fas fa-qrcode text-orange"></i>
              <div class="badge-mini">0%</div>
              <span>SPayLater Bayar QRIS</span>
            </div>
            <div class="f-grid-item">
              <i class="fas fa-desktop text-orange"></i>
              <span>SPayLater Limit Xtra</span>
            </div>
            <div class="f-grid-item">
              <i class="fas fa-shopping-bag text-teal"></i>
              <span>Bayar Ecommerce</span>
            </div>
            <div class="f-grid-item">
              <i class="fas fa-mobile-alt text-blue"></i>
              <span>Pulsa dan Tagihan</span>
            </div>
            <div class="f-grid-item">
              <i class="fas fa-gem text-yellow"></i>
              <span>Emas</span>
            </div>
            <div class="f-grid-item">
              <i class="fas fa-tachometer-alt text-orange"></i>
              <span>Shopee Meter</span>
            </div>
            <div class="f-grid-item">
              <i class="fas fa-shield-alt text-orange"></i>
              <span>Asuransi</span>
            </div>
          </section>

          <!-- Page 2: New Investment Items -->
          <section class="finance-grid grid-page" style="padding: 20px 15px !important; align-content: start;">
            <div class="f-grid-item">
              <div class="icon-circle" style="background:#fff; border:1px solid #ddd; width:35px; height:35px;">
                <i class="fas fa-chart-line text-orange"></i>
                <div class="badge-mini" style="top:15px; right:-5px; font-size:6px;">Rp</div>
              </div>
              <span>Investasi Pintar</span>
            </div>
            <div class="f-grid-item">
              <div class="icon-circle"
                style="background: linear-gradient(to bottom, #ffcc80, #ffab91); width:35px; height:35px; border-radius:8px;">
                <i class="fas fa-chart-area" style="color:white;"></i>
              </div>
              <span>Reksa Dana</span>
            </div>
            <div class="f-grid-item" id="btn-shopeepay-goals">
              <div class="icon-circle" style="background:#fff; border:1px solid #ddd; width:35px; height:35px;">
                <i class="fas fa-bullseye text-orange"></i>
              </div>
              <span>ShopeePay Savio</span>
            </div>
            <div class="f-grid-item" id="btn-family-walet">
              <div class="icon-circle" style="background:#fff; border:1px solid #ddd; width:35px; height:35px;">
                <i class="fas fa-users text-orange"></i>
              </div>
              <span>Family Walet</span>
            </div>
          </section>
        </div>
      </div>

      <!-- Dots for Finance Slider -->
      <div class="dots-indicator" id="financeDots">
        <span class="dot active"></span>
        <span class="dot"></span>
      </div>

      <!-- Insurance Promo -->
      <section class="insurance-promo">
        <div class="ins-icon"><i class="fas fa-shield-alt"></i></div>
        <div class="ins-text">
          <div class="ins-title">Asuransi</div>
          <div class="ins-sub">GRATIS proteksi kecelakaan Rp1JT</div>
        </div>
        <i class="fas fa-chevron-right"></i>
      </section>

      <!-- Voucher Produk List -->
      <section class="voucher-list">
        <div class="section-title">
          <span>Voucher Produk</span>
          <span class="see-all">Lihat Semua ></span>
        </div>
        <div class="horizontal-scroll">
          <!-- Item 1 -->
          <div class="voucher-card">
            <div class="vc-top">
              <div class="vc-title">Bunga Cicilan 0%</div>
              <div class="vc-tags">
                <span class="tag">SPayLater</span>
                <span class="tag">Di Toko</span>
              </div>
            </div>
            <button class="vc-btn">Pakai</button>
          </div>
          <!-- Item 2 -->
          <div class="voucher-card">
            <div class="vc-top">
              <div class="vc-title">Bunga Cicilan 0%</div>
              <div class="vc-tags">
                <span class="tag">SPayLater</span>
              </div>
            </div>
            <button class="vc-btn">Pakai</button>
          </div>
          <!-- Item 3 -->
          <div class="voucher-card">
            <div class="vc-top">
              <div class="vc-title">Bebas 1 Bulan Cicilan</div>
              <div class="vc-tags">
                <span class="tag">SPayLater</span>
              </div>
            </div>
            <button class="vc-btn">Pakai</button>
          </div>
        </div>
      </section>

      <!-- New Insurance Section (Based on User Image) -->
      <section class="insurance-section">
        <div class="ins-header">
          <h3>Asuransi yang disarankan</h3>
          <span class="see-all">Lihat Semua ></span>
        </div>

        <div class="ins-tabs">
          <div class="ins-tab active">Kecelakaan</div>
          <div class="ins-tab">Mobil</div>
          <div class="ins-tab">Kesehatan</div>
          <div class="ins-tab">Jiwa</div>
        </div>

        <!-- Card 1 -->
        <div class="ins-card">
          <div class="ins-badge">15% <br> OFF</div>
          <div class="ins-card-content">
            <div class="ins-img">
              <!-- Placeholder for doctor image -->
              <i class="fas fa-user-md text-teal"></i>
            </div>
            <div class="ins-details">
              <div class="ins-title">MeLife Protection Accident</div>
              <div class="ins-price-row">
                <span class="label">Dari Rp20.400</span> <span class="original">Rp24.000</span>
              </div>
              <ul class="ins-features">
                <li>Perlindungan cedera yang tidak disengaja</li>
                <li>Klaim hingga Rp100JT</li>
                <li>Perlindungan langsung dari kecelakaan</li>
              </ul>
            </div>
          </div>
          <button class="ins-btn">Beli</button>
          <div style="clear:both;"></div>
        </div>

        <!-- Card 2 -->
        <div class="ins-card">
          <div class="ins-badge">15% <br> OFF</div>
          <div class="ins-card-content">
            <div class="ins-img">
              <!-- Placeholder for leg injury -->
              <i class="fas fa-crutch text-orange"></i>
            </div>
            <div class="ins-details">
              <div class="ins-title">Asuransi Kecelakaan Diri</div>
              <div class="ins-price-row">
                <span class="label">Dari Rp5.000</span>
              </div>
              <ul class="ins-features">
                <li>Melindungimu dari kejadian tak terduga</li>
                <li>Premi terjangkau mulai dari Rp5.000</li>
                <li>Klaim biaya pengobatan sampai Rp5JT</li>
              </ul>
            </div>
          </div>
          <button class="ins-btn">Beli</button>
          <div style="clear:both;"></div>
        </div>
        <!-- Card 3 -->
        <div class="ins-card">
          <div class="ins-badge" style="background:#ee4d2d;">100% <br> OFF</div>
          <div class="ins-card-content">
            <div class="ins-img">
              <div class="badge-text"
                style="position: absolute; top:0; left:0; background: #ee4d2d; color:white; font-size:10px; padding:2px 5px; z-index: 2;">
                Gratis</div>
              <i class="fas fa-shield-alt text-blue"></i>
            </div>
            <div class="ins-details">
              <div class="ins-title">Asuransi Kecelakaan Diri Indosat...</div>
              <div class="ins-price-row">
                <span class="label">Rp0</span> <span class="original">Rp5.000</span>
              </div>
              <ul class="ins-features">
                <li>Proteksi Gratis selama 1 bulan</li>
                <li>Khusus pengguna Indosat</li>
              </ul>
            </div>
          </div>
          <button class="ins-btn">Ambil</button>
          <div style="clear:both;"></div>
        </div>

      </section>
    </div>
    <!-- End Finance View -->
