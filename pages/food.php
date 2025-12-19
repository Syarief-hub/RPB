    <div id="food-view" style="display: none;">
      <!-- Custom Food Header -->
      <div class="food-header">
        <div class="fh-top">
          <div class="fh-loc">
            <span class="fh-label">Antar ke:</span>
            <div class="fh-address">
              <i class="fas fa-map-marker-alt"></i>
              <span>Gelora, TANAH ABANG, KOTA JAKARTA...</span>
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
          <i class="fas fa-shopping-cart text-white"></i>
        </div>
        <div class="fh-search">
          <i class="fas fa-search text-orange"></i>
          <input type="text" placeholder="Mie Gacoan">
        </div>
      </div>

      <!-- Food Menu Slider -->
      <div class="service-slider-container" style="margin-top: 10px; background: white; padding-bottom: 10px;">
        <div class="service-slider" id="foodSlider">
          <section class="grid-page"
            style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; padding: 15px;">
            <div class="service-item">
              <div class="icon-circle" style="background: white; border: 1px solid #eee;">
                <span style="font-weight:900; color:#ee4d2d; font-size:12px;">60%</span>
              </div>
              <span>Diskon Terus</span>
            </div>
            <div class="service-item">
              <div class="icon-circle" style="background: white; border: 1px solid #eee;">
                <i class="fas fa-map-marker-alt text-blue"></i>
              </div>
              <span>Sekitarmu</span>
            </div>
            <div class="service-item">
              <div class="icon-circle" style="background: white; border: 1px solid #eee;">
                <i class="fas fa-ticket-alt text-green"></i>
              </div>
              <span>Voucher</span>
            </div>
            <div class="service-item">
              <div class="icon-circle" style="background: white; border: 1px solid #eee;">
                <i class="fas fa-thumbs-up text-blue"></i>
              </div>
              <span>Foodies Pick</span>
            </div>
            <div class="service-item">
              <div class="icon-circle" style="background: white; border: 1px solid #eee;">
                <span style="font-weight:900; color:#ee4d2d; font-size:10px;">ONGKIR<br>1.0</span>
              </div>
              <span>Check Murah</span>
            </div>
          </section>
        </div>
        <!-- Dots -->
        <div class="dots-indicator" id="foodDots">
          <span class="dot active" style="background: #ee4d2d;"></span>
          <span class="dot" style="background: #ddd;"></span>
        </div>
      </div>

      <!-- Checkout Murah Section -->
      <section class="food-section">
        <div class="fs-sec-header">
          <div class="fs-left">
            <i class="fas fa-thumbs-up text-red"></i>
            <span class="fs-title">CHECKOUT MURAH</span>
          </div>
          <span class="see-all">Lihat Semua ></span>
        </div>
        <div class="fs-sub-title">Semua Menu Harga Termasuk Ongkir</div>

        <div class="horizontal-scroll">
          <!-- Food Card 1 -->
          <div class="food-card">
            <div class="fc-img-box">
              <!-- Placeholder Food Image -->
              <i class="fas fa-drumstick-bite" style="font-size:30px; color:#ddd;"></i>
              <div class="fc-tag-pop">TERLARIS</div>
            </div>
            <div class="fc-name">Paket Komplit Nasi Ayam Spi...</div>
            <div class="fc-price">Rp21.300</div>
            <div class="fc-orig-price">Rp61.233</div>
          </div>
          <!-- Food Card 2 -->
          <div class="food-card">
            <div class="fc-img-box">
              <i class="fas fa-pizza-slice" style="font-size:30px; color:#ddd;"></i>
            </div>
            <div class="fc-name">Martabak Pizza Or...</div>
            <div class="fc-price">Rp13.900</div>
            <div class="fc-orig-price">Rp29.500</div>
          </div>
          <!-- Food Card 3 -->
          <div class="food-card">
            <div class="fc-img-box">
              <i class="fas fa-bread-slice" style="font-size:30px; color:#ddd;"></i>
            </div>
            <div class="fc-name">Roti Bakar Kacang Coklat</div>
            <div class="fc-price">Rp13.000</div>
            <div class="fc-orig-price">Rp25.500</div>
          </div>
        </div>
      </section>

      <!-- ShopeeFood Deals Section -->
      <section class="food-section" style="background: #fff5f5;">
        <div class="fs-sec-header">
          <div class="fs-left">
            <span class="fs-title text-orange">ShopeeFood <i class="fas fa-percent"></i> DEALS</span>
          </div>
          <span class="see-all">Lihat Semua ></span>
        </div>
        <div class="fs-sub-title">Voucher Menu Diskon s/d 70%</div>

        <div class="horizontal-scroll">
          <!-- Deal Card 1 -->
          <div class="food-card deal-card">
            <div class="fc-img-box" style="height: 100px;">
              <div class="fc-badge-yellow">-68%</div>
              <i class="fas fa-utensils" style="font-size:30px; color:#ddd;"></i>
              <div class="fc-sold-count">100RB+ terjual</div>
            </div>
            <div class="fc-desc">Mie Gacoan - Jak...</div>
            <div class="fc-name-bold">Mie Gacoan</div>
            <div class="fc-price text-orange">Rp5.000</div>
            <div class="fc-orig-price">Rp15.500</div>
          </div>
          <!-- Deal Card 2 -->
          <div class="food-card deal-card">
            <div class="fc-img-box" style="height: 100px;">
              <div class="fc-badge-yellow">-79%</div>
              <i class="fas fa-hamburger" style="font-size:30px; color:#ddd;"></i>
              <div class="fc-sold-count">800+ terjual</div>
            </div>
            <div class="fc-desc">Ayam Bakar Kalas...</div>
            <div class="fc-name-bold">nasi goreng chicken katsu</div>
            <div class="fc-price text-orange">Rp12.500</div>
            <div class="fc-orig-price">Rp60.000</div>
          </div>
        </div>
      </section>
    </div>
