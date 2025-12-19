    <div id="shopeepay-view" style="display: none; background: #fff; min-height: 100vh;">
      <div class="sp-goals-header sp-header-white"
        style="display: flex; align-items: center; padding: 15px; position: sticky; top: 0; z-index: 100;">
        <i class="fas fa-arrow-left" id="btn-back-shopeepay" style="font-size: 18px; margin-right: 15px;"></i>
        <h2 style="font-size: 18px; margin: 0; font-weight: bold;">ShopeePay Savio</h2>
      </div>

      <!-- EMPTY STATE CONTAINER -->
      <div id="sp-empty-state" class="sp-goals-container">
        <!-- Hero Illustration -->
        <div class="sp-goals-hero">
          <div class="hero-illustration">
            <i class="fas fa-umbrella-beach"></i>
          </div>
        </div>

        <!-- Text Content -->
        <div class="sp-goals-text">
          <h3>Semua impian bakal jadi kenyataan</h3>
          <p>Dari liburan sampai belanja gadget idaman, atur dan wujudkan semuanya dengan ShopeePay Savio!</p>
        </div>

        <!-- Feature Cards (Horizontal Scroll) -->
        <div class="sp-features-scroll">
          <!-- Feature 1 -->
          <div class="sp-feature-card">
            <div class="sp-f-icon">
              <i class="fas fa-calendar-check text-orange"></i>
            </div>
            <div class="sp-f-title">Bebas biaya admin</div>
            <div class="sp-f-desc">Pakai sesukamu, semua bebas biaya admin.</div>
          </div>

          <!-- Feature 2 -->
          <div class="sp-feature-card">
            <div class="sp-f-icon">
              <i class="fas fa-coins text-yellow"></i>
            </div>
            <div class="sp-f-title">Tanpa jumlah minimum</div>
            <div class="sp-f-desc">Mulai dengan berapapun jumlah yang kamu mau.</div>
          </div>

          <!-- Feature 3 -->
          <div class="sp-feature-card">
            <div class="sp-f-icon">
              <i class="fas fa-tachometer-alt text-orange"></i>
            </div>
            <div class="sp-f-title">Tarik aja kapanpun</div>
            <div class="sp-f-desc">Tarik saldomu kapan saja dengan mudah.</div>
          </div>
        </div>
      </div>

      <!-- ACTIVE VIEW CONTAINER (Hidden by default) -->
      <div id="sp-active-view-container" style="display: none; padding-bottom: 80px;">
        <!-- Total Balance Header (Shopee Style) -->
        <div class="sp-active-header"
          style="background: #ee4d2d; color: white; padding: 20px; position: relative; display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
              <div style="font-size: 12px; opacity: 0.9; margin-bottom: 5px;">Total Saldo Impian</div>
              <h2 id="sp-total-balance" style="font-size: 24px; font-weight: bold; margin: 0;">Rp0</h2>
          </div>
          <div style="display: flex; flex-direction: column; gap: 15px; align-items: center;">
             <i id="btn-help-toggle" class="far fa-question-circle" style="font-size: 18px; cursor: pointer;"></i>
             <i id="btn-toggle-balance" class="fas fa-eye" style="font-size: 18px; cursor: pointer;"></i>
          </div>
        </div>



        <!-- Active Goals List -->
        <div id="active-goals-list"></div>
      </div>

      <!-- Bottom Button -->
      <div class="sp-bottom-btn-container">
        <button class="sp-btn-primary" id="btn-create-goal-nav">BUAT IMPIAN BARU</button>
      </div>
    </div>
    <div id="create-goal-view" style="display: none; background: #fff; min-height: 100vh; padding-bottom: 80px;">
      <div class="sp-goals-header sp-header-white"
        style="display: flex; align-items: center; padding: 15px; position: sticky; top: 0; z-index: 100;">
        <i class="fas fa-arrow-left" id="btn-back-create-goal" style="font-size: 18px; margin-right: 15px;"></i>
        <h2 style="font-size: 18px; margin: 0; font-weight: bold;">Buat Impian Baru</h2>
      </div>

      <div class="create-goal-content">
        <!-- Categories -->
        <div class="cg-section">
          <label class="cg-label">Jenis Impian</label>
          <div class="cg-categories-scroll">
            <div class="cg-cat-item active">
              <div class="cg-cat-icon">
                <i class="fas fa-piggy-bank"></i>
              </div>
              <span>Kasual</span>
            </div>
            <div class="cg-cat-item">
              <div class="cg-cat-icon">
                <i class="fas fa-suitcase-rolling"></i>
              </div>
              <span>Travel</span>
            </div>
            <div class="cg-cat-item">
              <div class="cg-cat-icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <span>Gadget</span>
            </div>
            <div class="cg-cat-item">
              <div class="cg-cat-icon">
                <i class="fas fa-tshirt"></i>
              </div>
              <span>Fashion</span>
            </div>
            <div class="cg-cat-item">
              <div class="cg-cat-icon">
                <i class="fas fa-tv"></i>
              </div>
              <span>Elektronik</span>
            </div>
          </div>
        </div>

        <div class="divider-thick"></div>

        <!-- Form -->
        <div class="cg-section">
          <div class="sp-input-group">
            <label>Nama Impian</label>
            <input type="text" id="goal-name-input" placeholder="Tulis impianmu di sini" class="sp-input">
          </div>

          <div class="sp-input-group">
            <label>Jumlah Target</label>
            <input type="text" id="goal-target-input" placeholder="Rp0" class="sp-input">
            <span class="helper-text">Jumlah maksimal target Rp16.000.000. <i class="far fa-question-circle"></i></span>
          </div>
        </div>



      </div>

      <!-- Bottom Button -->
      <div class="sp-bottom-btn-container">
        <button id="btn-save-goal" class="sp-btn-disabled" disabled>BUAT IMPIAN</button>
      </div>
    </div>
    <div id="goal-detail-view" style="display: none; background: #f5f5f5; min-height: 100vh; padding-bottom: 80px;">
      <!-- Header -->
      <div class="sp-goals-dashboard-header"
        style="display: flex; align-items: center; justify-content: space-between; padding: 15px; padding-bottom: 30px; position: sticky; top: 0; z-index: 100; background: #ee4d2d; color: white;">
        <div style="display: flex; align-items: center;">
          <i class="fas fa-arrow-left" id="btn-back-detail-goal"
            style="font-size: 18px; margin-right: 15px; cursor: pointer;"></i>
          <h2 style="font-size: 18px; margin: 0; font-weight: bold;">Detail Impian</h2>
        </div>
        <span id="btn-trigger-edit" style="font-size: 14px; font-weight: bold; cursor: pointer;">Ubah</span>
      </div>

      <!-- Main Content -->
      <div
        style="background: white; padding: 30px 20px; text-align: center; border-radius: 20px; margin-top: -20px; position: relative; z-index: 101; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); min-height: 400px;">

        <!-- Large Icon -->
        <div
          style="width: 120px; height: 120px; background: #fff5f5; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
          <!-- Placeholder for dynamic icon -->
          <span id="detail-goal-icon" class="text-orange"
            style="font-size: 60px; display: flex; align-items: center; justify-content: center;">
            <i class="fas fa-piggy-bank"></i>
          </span>
        </div>

        <input type="hidden" id="detail-target-raw" value="0">

        <!-- Goal Title -->
        <h2 id="detail-goal-title" style="font-size: 20px; font-weight: bold; margin-bottom: 20px; color: #333;">Nama
          Impian</h2>

        <!-- Progress Bar -->
        <div class="sp-progress-bar-bg"
          style="height: 8px; border-radius: 4px; background: #f0f0f0; margin-bottom: 15px;">
          <div id="detail-progress-bar" class="sp-progress-bar-fill"
            style="width: 0%; height: 100%; background: #ee4d2d; border-radius: 4px;"></div>
        </div>

        <!-- Amounts -->
        <div style="display: flex; justify-content: space-between; font-size: 14px; color: #555; margin-bottom: 30px;">
          <span id="detail-current-amount" style="font-weight: bold;">Rp0</span>
          <span id="detail-target-text">0% of Rp0</span>
        </div>

        <!-- Action Buttons -->
        <div style="display: flex; gap: 15px;">
          <button id="btn-withdraw" class="sp-btn-outline"
            style="flex: 1; border: 1px solid #ee4d2d; color: #ee4d2d; background: white; padding: 12px; border-radius: 8px; font-weight: bold;">TARIK
            SALDO</button>
          <button id="btn-topup-trigger" class="sp-btn-primary"
            style="flex: 1; background: #ee4d2d; border: none; padding: 12px; border-radius: 8px; color: white; font-weight: bold;">ISI
            SALDO</button>
        </div>
      </div>

      <!-- History / Empty State Area -->
      <div style="padding: 40px 20px; text-align: center; color: #888;">
        <!-- Empty State (Shown if no history) -->
        <div id="goal-empty-state">
           <div
             style="width: 80px; height: 80px; background: #ffe0b2; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
             <i class="fas fa-history text-orange" style="font-size: 30px;"></i>
           </div>
           <p style="font-size: 14px;">Belum ada progres di impianmu. Isi saldo dulu yuk!</p>
        </div>

        <!-- History List (Populated via JS) -->
        <div id="goal-history-list" style="text-align: left;"></div>
      </div>
    </div>
    <div id="topup-modal"
      style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 200; align-items: center; justify-content: center;">
      <div
        style="background: white; width: 85%; max-width: 320px; padding: 20px; border-radius: 12px; text-align: center;">
        <h3 style="font-size: 16px; font-weight: bold; margin-bottom: 15px;">Isi Saldo Impian</h3>

        <div class="sp-input-group" style="text-align: left; margin-bottom: 15px;">
          <label style="font-size: 12px; color: #666;">Jumlah Top Up</label>
          <input type="text" id="input-topup-amount" class="sp-input" placeholder="Rp10.000"
            style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px;">
        </div>

        <div style="display: flex; gap: 10px;">
          <button id="btn-cancel-topup"
            style="flex: 1; background: #eee; border: none; padding: 10px; border-radius: 6px; font-weight: bold; color: #555;">Batal</button>
          <button id="btn-confirm-topup"
            style="flex: 1; background: #ee4d2d; border: none; padding: 10px; border-radius: 6px; font-weight: bold; color: white;">Konfirmasi</button>
        </div>
      </div>
    </div>
    <div id="withdrawal-modal"
      style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 200; align-items: flex-end; justify-content: center;">
      <div
        style="background: white; width: 100%; max-width: 480px; border-radius: 20px 20px 0 0; padding: 25px 20px 40px 20px; text-align: center; animation: slideUpFlex 0.3s ease-out;">
        <!-- Illustration Area -->
        <div style="margin-bottom: 20px; position: relative; display: inline-block;">
          <div
            style="width: 100px; height: 100px; background: #fff5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
            <i class="fas fa-hand-holding-usd" style="font-size: 50px; color: #ee4d2d;"></i>
          </div>
        </div>

        <h3 style="font-size: 18px; font-weight: bold; margin-bottom: 10px; line-height: 1.3;">Tarik saldo dan hapus
          impian ini?</h3>
        <p style="font-size: 14px; color: #757575; margin-bottom: 25px; line-height: 1.5;">Impian ini akan dihapus dan
          saldo akan dipindahkan ke Saldo ShopeePay kamu.</p>

        <div style="display: flex; gap: 10px;">
          <button id="btn-cancel-withdrawal"
            style="flex: 1; background: white; border: 1px solid #ee4d2d; padding: 12px; border-radius: 6px; font-weight: bold; color: #ee4d2d; font-size: 14px;">BATALKAN</button>
          <button id="btn-proceed-withdrawal"
            style="flex: 1; background: #ee4d2d; border: none; padding: 12px; border-radius: 6px; font-weight: bold; color: white; font-size: 14px;">TARIK
            SALDO</button>
        </div>
      </div>
    </div>
    <div id="confirmation-modal"
      style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 300; align-items: flex-end; justify-content: center;">
      <div
        style="width: 100%; max-width: 480px; height: auto; max-height: 85vh; background: #f5f5f5; display: flex; flex-direction: column; border-radius: 20px 20px 0 0; animation: slideUpFlex 0.3s ease-out; overflow: hidden;">
        <!-- Header -->
        <div style="background: #ee4d2d; padding: 15px; color: white; display: flex; align-items: center;">
          <i class="fas fa-arrow-left" id="btn-back-confirmation"
            style="font-size: 18px; margin-right: 15px; cursor: pointer;"></i>
          <h2 style="font-size: 16px; font-weight: bold; margin: 0;">Konfirmasi Tarik Saldo</h2>
        </div>

        <!-- Content -->
        <div style="padding: 20px; overflow-y: auto;">
          <!-- Goal Card -->
          <div
            style="background: white; padding: 15px; border-radius: 10px; display: flex; align-items: center; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <div
              style="width: 50px; height: 50px; background: #fff5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
              <i class="fas fa-bullseye" style="font-size: 24px; color: #ee4d2d;"></i>
            </div>
            <div>
              <h4 style="font-size: 16px; font-weight: bold; margin: 0 0 5px 0;">ShopeePay Savio</h4>
              <p style="font-size: 12px; color: #888; margin: 0;">Tarik Saldo Impian - <span
                  class="confirm-goal-name">Impian</span></p>
            </div>
          </div>

          <!-- Total Price -->
          <div
            style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
              <span style="font-size: 16px; font-weight: bold;">Total Harga</span>
              <span style="font-size: 20px; font-weight: bold; color: #ee4d2d;" class="confirm-amount">Rp0</span>
            </div>
            <div
              style="display: flex; justify-content: space-between; font-size: 14px; color: #666; margin-bottom: 8px;">
              <span>Jumlah Tarik Saldo</span>
              <span class="confirm-amount">Rp0</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 14px; color: #666;">
              <span>Biaya Admin</span>
              <span style="color: #00bfa5; font-weight: bold;">GRATIS</span>
            </div>
          </div>
        </div>

        <!-- Sticky Bottom -->
        <div style="background: white; padding: 20px; box-shadow: 0 -2px 10px rgba(0,0,0,0.05);">
          <div style="display: flex; align-items: center; margin-bottom: 20px;">
            <div
              style="width: 24px; height: 24px; background: #ee4d2d; border-radius: 4px; margin-right: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;">
              <i class="fas fa-wallet"></i>
            </div>
            <span style="font-weight: bold; font-size: 14px;">Saldo ShopeePay</span>
          </div>
          <button id="btn-final-withdrawal"
            style="width: 100%; background: #ee4d2d; border: none; padding: 15px; border-radius: 8px; font-weight: bold; color: white; font-size: 16px;">
            TARIK SALDO <span class="confirm-amount">Rp0</span>
          </button>
        </div>
      </div>
    </div>
    <div id="pin-modal"
      style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 400; align-items: flex-end; justify-content: center;">
      <div
        style="width: 100%; max-width: 480px; height: auto; background: white; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; border-radius: 20px 20px 0 0; padding-bottom: 20px; animation: slideUpFlex 0.3s ease-out;">
        <div style="width: 100%; text-align: center; padding: 25px 20px;">
          <h3 style="font-size: 18px; font-weight: bold; margin-bottom: 30px;">Masukkan PIN ShopeePay</h3>

          <div style="display: flex; justify-content: center; gap: 15px; margin-bottom: 40px;">
            <div class="pin-dot" style="width: 15px; height: 15px; border-radius: 50%; border: 1px solid #ccc;"></div>
            <div class="pin-dot" style="width: 15px; height: 15px; border-radius: 50%; border: 1px solid #ccc;"></div>
            <div class="pin-dot" style="width: 15px; height: 15px; border-radius: 50%; border: 1px solid #ccc;"></div>
            <div class="pin-dot" style="width: 15px; height: 15px; border-radius: 50%; border: 1px solid #ccc;"></div>
            <div class="pin-dot" style="width: 15px; height: 15px; border-radius: 50%; border: 1px solid #ccc;"></div>
            <div class="pin-dot" style="width: 15px; height: 15px; border-radius: 50%; border: 1px solid #ccc;"></div>
          </div>

          <!-- Fake Keypad for visual effect -->
          <div
            style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; max-width: 300px; margin: 0 auto;">
            <button class="pin-key"
              style="background: none; border: 1px solid #eee; font-size: 24px; padding: 15px; border-radius: 50%; width: 65px; height: 65px;">1</button>
            <button class="pin-key"
              style="background: none; border: 1px solid #eee; font-size: 24px; padding: 15px; border-radius: 50%; width: 65px; height: 65px;">2</button>
            <button class="pin-key"
              style="background: none; border: 1px solid #eee; font-size: 24px; padding: 15px; border-radius: 50%; width: 65px; height: 65px;">3</button>
            <button class="pin-key"
              style="background: none; border: 1px solid #eee; font-size: 24px; padding: 15px; border-radius: 50%; width: 65px; height: 65px;">4</button>
            <button class="pin-key"
              style="background: none; border: 1px solid #eee; font-size: 24px; padding: 15px; border-radius: 50%; width: 65px; height: 65px;">5</button>
            <button class="pin-key"
              style="background: none; border: 1px solid #eee; font-size: 24px; padding: 15px; border-radius: 50%; width: 65px; height: 65px;">6</button>
            <button class="pin-key"
              style="background: none; border: 1px solid #eee; font-size: 24px; padding: 15px; border-radius: 50%; width: 65px; height: 65px;">7</button>
            <button class="pin-key"
              style="background: none; border: 1px solid #eee; font-size: 24px; padding: 15px; border-radius: 50%; width: 65px; height: 65px;">8</button>
            <button class="pin-key"
              style="background: none; border: 1px solid #eee; font-size: 24px; padding: 15px; border-radius: 50%; width: 65px; height: 65px;">9</button>
            <button style="background: none; border: none;"></button>
            <button class="pin-key"
              style="background: none; border: 1px solid #eee; font-size: 24px; padding: 15px; border-radius: 50%; width: 65px; height: 65px;">0</button>
            <button id="pin-backspace" style="background: none; border: none; font-size: 20px;"><i
                class="fas fa-backspace"></i></button>
          </div>
          <p style="margin-top: 25px; font-weight: bold; color: #ee4d2d; font-size: 14px; cursor: pointer;">Lupa PIN?
          </p>
        </div>
      </div>
    </div>
    <div id="success-modal"
      style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 500; align-items: flex-end; justify-content: center;">
      <div
        style="width: 100%; max-width: 480px; height: auto; background: #ee4d2d; display: flex; flex-direction: column; position: relative; border-radius: 20px 20px 0 0; animation: slideUpFlex 0.3s ease-out;">

        <!-- Header Protection -->
        <div style="padding: 20px; color: white; display: flex; align-items: center; justify-content: center;">
          <i class="fas fa-shield-alt" style="margin-right: 8px;"></i> ShopeePay <span
            style="font-weight: bold; margin-left: 4px;">PROTECTION</span>
        </div>

        <!-- Center Content -->
        <div
          style="padding: 20px 20px 40px 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; text-align: center;">
          <p style="font-weight: bold; margin-bottom: 20px; font-size: 16px;">Tarik Saldo Berhasil</p>

          <div
            style="width: 80px; height: 80px; background: #fbc02d; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
            <i class="fas fa-check" style="color: white; font-size: 40px;"></i>
          </div>

          <h2 style="font-weight: bold; font-size: 20px; margin-bottom: 5px;">Tarik Saldo ke</h2>
          <p style="font-size: 18px; margin-bottom: 15px;">Saldo ShopeePay</p>
          <h1 style="font-size: 32px; font-weight: bold;" class="confirm-amount">Rp0</h1>
        </div>

        <!-- Bottom Actions -->
        <div
          style="padding: 20px; background: white; width: 100%; display: flex; gap: 10px; border-radius: 20px 20px 0 0;">
          <button id="btn-close-success"
            style="flex: 1; background: white; border: 1px solid #ee4d2d; padding: 12px; border-radius: 8px; font-weight: bold; color: #ee4d2d;">TUTUP</button>
          <button id="btn-check-detail"
            style="flex: 1; background: #ee4d2d; border: none; padding: 12px; border-radius: 8px; font-weight: bold; color: white;">CEK
            DETAIL</button>
        </div>
      </div>
    </div>
    <div id="transaction-detail-view"
      style="display: none; background: #f5f5f5; min-height: 100vh; padding-bottom: 40px; justify-content: center; position: absolute; top: 0; left: 0; width: 100%; z-index: 100;">
      <div style="width: 100%; max-width: 480px; background: #f5f5f5;">
        <!-- Header -->
        <div
          style="background: white; padding: 15px; display: flex; align-items: center; border-bottom: 1px solid #eee;">
          <i class="fas fa-arrow-left" id="btn-back-detail"
            style="font-size: 18px; margin-right: 15px; cursor: pointer; color: #ee4d2d;"></i>
          <h2 style="font-size: 16px; font-weight: bold; margin: 0;">Rincian Transfer</h2>
        </div>

        <!-- Receipt Card -->
        <div style="padding: 20px;">
          <div
            style="background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
            <!-- Brand & ID -->
            <div style="padding: 20px; border-bottom: 1px dashed #eee; text-align: center;">
              <div
                style="margin-bottom: 15px; color: #ee4d2d; font-weight: bold; font-size: 20px; display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-wallet" style="margin-right: 8px;"></i> ShopeePay
              </div>
              <div style="font-size: 12px; color: #888; display: flex; justify-content: space-between;">
                <span>17 Des 2025 • 09:30</span>
                <span>ID: X823910382</span>
              </div>
            </div>

            <!-- Content -->
            <div style="padding: 20px;">
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <i class="fas fa-check-circle" style="color: #00bfa5; font-size: 20px; margin-right: 10px;"></i>
                <span style="font-weight: bold; font-size: 14px;">Transaksi Berhasil</span>
              </div>

              <p style="font-size: 14px; margin-bottom: 5px;">Tarik Saldo ShopeePay Savio</p>

              <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <div
                  style="display: flex; justify-content: space-between; font-weight: bold; font-size: 16px; margin-bottom: 5px;">
                  <span>Total Terima</span>
                  <span class="confirm-amount" style="color: #ee4d2d;">Rp0</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 12px; color: #888;">
                  <span>Tujuan</span>
                  <span>Saldo ShopeePay</span>
                </div>
              </div>

              <div style="border-top: 1px solid #eee; padding-top: 15px;">
                <p style="font-weight: bold; font-size: 14px; margin-bottom: 10px;">Rincian</p>
                <div
                  style="display: flex; justify-content: space-between; font-size: 13px; color: #666; margin-bottom: 8px;">
                  <span>Jumlah Penarikan</span>
                  <span class="confirm-amount">Rp0</span>
                </div>
                <div
                  style="display: flex; justify-content: space-between; font-size: 13px; color: #666; margin-bottom: 8px;">
                  <span>Biaya Admin</span>
                  <span style="color: #00bfa5;">GRATIS</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 13px; color: #666;">
                  <span>No. Referensi</span>
                  <span>10016695420503</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Banner/Ad Placeholder -->
        <div style="padding: 0 20px;">
          <div
            style="background: #333; color: white; border-radius: 10px; padding: 15px; display: flex; align-items: center; justify-content: space-between;">
            <div>
              <h4 style="font-size: 14px; font-weight: bold; margin: 0 0 5px 0;">Dapatkan Koin Shopee?</h4>
              <p style="font-size: 10px; margin: 0; color: #ccc;">Isi survey singkat & dapatkan hadiah.</p>
            </div>
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div id="edit-goal-view" style="display: none; background: #fff; min-height: 100vh; padding-bottom: 80px;">
      <div class="sp-goals-header sp-header-white"
        style="display: flex; align-items: center; padding: 15px; position: sticky; top: 0; z-index: 100;">
        <i class="fas fa-arrow-left" id="btn-back-edit-goal" style="font-size: 18px; margin-right: 15px;"></i>
        <h2 style="font-size: 18px; margin: 0; font-weight: bold;">Ubah Impian</h2>
      </div>

      <div class="create-goal-content">
        <!-- Categories (Visual Only for consistency) -->
        <div class="cg-section">
          <label class="cg-label">Jenis Impian</label>
          <div class="cg-categories-scroll">
            <div class="cg-cat-item active">
              <div class="cg-cat-icon">
                <i class="fas fa-piggy-bank"></i>
              </div>
              <span>Kasual</span>
            </div>
            <div class="cg-cat-item">
              <div class="cg-cat-icon">
                <i class="fas fa-suitcase-rolling"></i>
              </div>
              <span>Travel</span>
            </div>
            <div class="cg-cat-item">
              <div class="cg-cat-icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <span>Gadget</span>
            </div>
            <div class="cg-cat-item">
              <div class="cg-cat-icon">
                <i class="fas fa-tshirt"></i>
              </div>
              <span>Fashion</span>
            </div>
            <div class="cg-cat-item">
              <div class="cg-cat-icon">
                <i class="fas fa-tv"></i>
              </div>
              <span>Elektronik</span>
            </div>
          </div>
        </div>

        <div class="cg-section">
          <div class="sp-input-group">
            <label>Nama Impian</label>
            <input type="text" id="input-edit-name" class="sp-input">
          </div>

          <div class="sp-input-group">
            <label>Jumlah Target</label>
            <input type="number" id="input-edit-amount" class="sp-input">
          </div>
        </div>
      </div>

      <div class="sp-bottom-btn-container">
        <button id="btn-save-edit" class="sp-btn-primary">SIMPAN PERUBAHAN</button>
      </div>
    </div>
    <div id="payment-success-view" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 500; align-items: flex-end; justify-content: center;">
      <!-- Main Card -->
      <div style="background: #ee4d2d; width: 100%; max-width: 480px; height: auto; min-height: 50vh; border-radius: 20px 20px 0 0; animation: slideUpFlex 0.3s ease-out; display: flex; flex-direction: column;">
        
        <!-- Header -->
        <div style="padding: 15px; display: flex; justify-content: space-between; align-items: center; color: white;">
          <div style="font-weight: bold; font-size: 14px; display: flex; align-items: center; gap: 5px;">
             <i class="fas fa-shield-alt"></i> SHOPEEPAY PROTECTION
          </div>
          <div style="font-weight: bold; font-size: 14px; display: flex; align-items: center; gap: 5px;">
             <i class="fas fa-wallet"></i> PAY
          </div>
        </div>

        <!-- Content -->
        <div style="text-align: center; color: white; padding-top: 20px; flex: 1; display: flex; flex-direction: column; justify-content: center;">
          <div style="font-size: 18px; font-weight: 500; margin-bottom: 30px;">Pembayaran Sukses</div>

          <div style="margin-bottom: 20px;">
             <div style="width: 80px; height: 80px; background: #ffcc00; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 2px solid white;">
                <i class="fas fa-check" style="color: white; font-size: 40px;"></i>
             </div>
          </div>

          <div style="font-size: 18px; font-weight: 500; margin-bottom: 5px;">Top Up - ShopeePay Goals</div>
          <div id="success-amount-display" style="font-size: 32px; font-weight: bold;">Rp1.000</div>
        </div>

        <!-- Bottom Sheet -->
        <div style="background: white; border-radius: 20px 20px 0 0; padding: 20px; width: 100%;">
           <div style="text-align: center; font-size: 12px; color: #888; margin-bottom: 20px;">
              Kamu bisa cek detailnya di Riwayat Transaksi
           </div>

           <div style="display: flex; gap: 15px;">
              <button id="btn-success-close" style="width: 100%; background: white; border: 1px solid #ee4d2d; color: #ee4d2d; padding: 12px; border-radius: 8px; font-weight: bold;">TUTUP</button>
           </div>
        </div>
      </div>
    </div>
    
    <div id="edit-success-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.0); z-index: 600; align-items: center; justify-content: center;">
      <div style="background: rgba(33, 33, 33, 0.95); color: white; padding: 25px 40px; border-radius: 12px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.3); animation: fadeIn 0.3s ease-out; min-width: 250px;">
        <div style="margin-bottom: 15px;">
           <div style="width: 50px; height: 50px; background: #4caf50; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
              <i class="fas fa-check" style="color: white; font-size: 24px;"></i>
           </div>
        </div>
        <div style="font-size: 16px; font-weight: bold;">Perubahan Disimpan</div>
      </div>
    </div>
    <div id="help-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9999; align-items: flex-end; justify-content: center;">
      <div style="background: white; width: 100%; max-width: 480px; border-radius: 20px 20px 0 0; padding: 25px 20px; animation: slideUpFlex 0.3s ease-out; display: flex; flex-direction: column; max-height: 80vh;">
        
        <div style="width: 40px; height: 4px; background: #e0e0e0; border-radius: 2px; margin: 0 auto 20px;"></div>

        <h3 style="font-size: 18px; font-weight: bold; text-align: center; margin-bottom: 25px;">Selangkah lebih dekat menuju impianmu!</h3>

        <div style="display: flex; gap: 15px; margin-bottom: 20px;">
           <div style="width: 50px; height: 50px; background: #e0f2f1; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <i class="fas fa-coins" style="color: #00bfa5; font-size: 24px;"></i>
           </div>
           <div>
              <div style="font-weight: bold; font-size: 14px; margin-bottom: 5px;">Gratis tanpa jumlah minimal</div>
              <p style="font-size: 12px; color: #666; margin: 0;">Mulai dari berapa pun nominal yang kamu mau. Bebas biaya admin!</p>
           </div>
        </div>

        <div style="display: flex; gap: 15px; margin-bottom: 20px;">
           <div style="width: 50px; height: 50px; background: #fff3e0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <i class="fas fa-star" style="color: #ff9800; font-size: 24px;"></i>
           </div>
           <div>
              <div style="font-weight: bold; font-size: 14px; margin-bottom: 5px;">Wujudkan beragam impian</div>
              <p style="font-size: 12px; color: #666; margin: 0;">Kamu akan bantu mengelola uangmu untuk wujudkan impian dengan lebih mudah!</p>
           </div>
        </div>

        <div style="display: flex; gap: 15px; margin-bottom: 30px;">
           <div style="width: 50px; height: 50px; background: #e3f2fd; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <i class="fas fa-shield-alt" style="color: #2196f3; font-size: 24px;"></i>
           </div>
           <div>
              <div style="font-weight: bold; font-size: 14px; margin-bottom: 5px;">Aman & terjamin</div>
              <p style="font-size: 12px; color: #666; margin: 0;">Uangmu aman & terjamin dengan ShopeePay Protection. Biar kamu yang jaga!</p>
           </div>
        </div>

        <button id="btn-close-help" style="width: 100%; background: #ee4d2d; color: white; border: none; padding: 12px; border-radius: 8px; font-weight: bold; font-size: 14px;">MENGERTI</button>
      </div>
    </div>
