    <div id="family-walet-view" style="display: none; background: #f5f5f5; min-height: 100vh;">
      <div class="fw-header"
        style="background: #ee4d2d; color: white; padding: 15px; position: sticky; top: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
          <i class="fas fa-chevron-left" id="btn-back-family-walet"
            style="font-size: 18px; margin-right: 15px; cursor: pointer;"></i>
          <h2 style="font-size: 18px; margin: 0; font-weight: 500;">Rekening Keluarga</h2>
        </div>
        <i class="far fa-question-circle" style="font-size: 18px;"></i>
      </div>

      <div class="fw-content" style="padding: 15px;">
        <!-- Balance Card -->
        <div class="fw-balance-card"
          style="background: white; border-radius: 8px; padding: 15px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 20px; position: relative; overflow: hidden;">
          <div style="position: relative; z-index: 2;">
            <div style="font-size: 12px; color: #333; margin-bottom: 5px; font-weight: bold;">Saldo Bersama</div>
            <div style="font-size: 28px; font-weight: bold; margin-bottom: 15px;">Rp5</div>

            <button id="btn-fw-topup"
              style="border: 1px solid #ee4d2d; background: white; color: #ee4d2d; padding: 8px 0; width: 100%; border-radius: 4px; font-weight: bold; font-size: 14px;">ISI
              SALDO</button>
          </div>

          <div style="display: flex; margin-top: 15px; border-top: 1px solid #eee; padding-top: 15px;">
            <div id="btn-limit-bulanan"
              style="flex: 1; display: flex; align-items: center; gap: 5px; font-size: 13px; color: #555; cursor: pointer;">
              <i class="fas fa-clock text-orange"></i> Limit Bulanan <i class="fas fa-chevron-right"
                style="margin-left: auto; font-size: 10px;"></i>
            </div>
            <div style="width: 1px; background: #eee; margin: 0 10px;"></div>
            <div id="btn-fw-riwayat"
              style="flex: 1; display: flex; align-items: center; gap: 5px; font-size: 13px; color: #555; cursor: pointer;">
              <i class="fas fa-receipt text-orange"></i> Riwayat <i class="fas fa-chevron-right"
                style="margin-left: auto; font-size: 10px;"></i>
            </div>
          </div>

          <!-- Illustration (Simplified) -->
          <div style="position: absolute; top: 10px; right: -10px; width: 100px; opacity: 0.2; z-index: 1;">
            <!-- Using an icon to represent the illustration -->
            <i class="fas fa-user-friends" style="font-size: 80px; color: #ee4d2d;"></i>
          </div>
        </div>

        <!-- Members Section -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
          <div style="font-weight: bold; color: #333;">Anggota Rekening Keluarga</div>
          <i class="fas fa-info-circle text-orange"></i>
        </div>

        <div class="fw-members-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
          <!-- Add Member -->
          <div id="btn-add-member"
            style="cursor: pointer; background: #fff5f5; border: 1px dashed #ee4d2d; border-radius: 8px; padding: 15px 10px; display: flex; flex-direction: column; align-items: center; text-align: center; height: 140px; justify-content: center;">
            <div
              style="width: 30px; height: 30px; background: #ee4d2d; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; margin-bottom: 10px;">
              <i class="fas fa-plus"></i>
            </div>
            <div style="font-size: 11px; font-weight: bold; margin-bottom: 5px; color: #ee4d2d;">Tambah Anggota</div>
            <div style="font-size: 9px; color: #777;">Maks. 5 anggota setiap keluarga</div>
          </div>

          <!-- Member 1 -->
          <div
            style="background: white; border-radius: 8px; padding: 10px; display: flex; flex-direction: column; height: 140px; justify-content: space-between; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
            <div style="display: flex; justify-content: space-between;">
              <div style="width: 30px; height: 30px; background: #eee; border-radius: 50%; overflow: hidden;">
                <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Syarief" style="width:100%">
              </div>
              <div id="btn-owner-detail"
                style="width: 20px; height: 20px; display: flex; align-items: center; justify-content: flex-end; cursor: pointer;">
                <i class="fas fa-ellipsis-v" style="color: #999; font-size: 12px;"></i>
              </div>
            </div>
            <div>
              <div style="font-size: 11px; font-weight: bold; line-height: 1.2; margin-bottom: 5px;">Syarief Studio</div>
              <div style="font-size: 9px; color: #777;">Pemilik Rekening</div>
            </div>
          </div>

          <!-- Member 2 -->
          <div
            style="background: white; border-radius: 8px; padding: 10px; display: flex; flex-direction: column; height: 140px; justify-content: space-between; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
            <div style="display: flex; justify-content: space-between;">
              <div style="width: 30px; height: 30px; background: #eee; border-radius: 50%; overflow: hidden;">
                <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Made" style="width:100%">
              </div>
              <div class="member-detail-btn"
                style="width: 20px; height: 20px; display: flex; align-items: center; justify-content: flex-end; cursor: pointer;">
                <i class="fas fa-ellipsis-v" style="color: #999; font-size: 12px;"></i>
              </div>
            </div>
            <div>
              <div class="member-name" style="font-size: 11px; font-weight: bold; line-height: 1.2; margin-bottom: 5px;">Made Dwi</div>
              <div class="member-limit-text" style="font-size: 9px; color: #777;">Limit: Rp3</div>
              <i class="fas fa-paper-plane text-orange" style="font-size: 10px; margin-top: 5px;"></i>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div id="limit-bulanan-view" style="display: none; background: #f5f5f5; min-height: 100vh;">
      <div class="fw-header"
        style="background: #ee4d2d; color: white; padding: 15px; position: sticky; top: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
          <i class="fas fa-chevron-left" id="btn-back-limit"
            style="font-size: 18px; margin-right: 15px; cursor: pointer;"></i>
          <h2 style="font-size: 18px; margin: 0; font-weight: 500;">Limit Transaksi Bulanan</h2>
        </div>
      </div>

      <div id="limit-members-list" style="padding: 15px;">
        <div style="font-size: 13px; color: #666; margin-bottom: 15px; line-height: 1.4;">
          Kamu harus pasang limit untuk tiap anggota supaya mereka bisa pakai Rekening Keluargamu.
        </div>

        <div id="member-limit-item"
          style="background: white; border-radius: 8px; padding: 15px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 1px 2px rgba(0,0,0,0.05); cursor: pointer;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 35px; height: 35px; background: #eee; border-radius: 50%; overflow: hidden;">
              <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Made" style="width:100%; height:100%; object-fit: cover;">
            </div>
            <div class="limit-list-name" style="font-size: 14px; font-weight: 500; color: #333;">Made Dwi</div>
          </div>

          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="limit-list-value" style="color: #42a5f5; font-size: 14px;">Rp3</span>
            <i class="fas fa-chevron-right" style="color: #999; font-size: 12px;"></i>
          </div>
        </div>
      </div>
    </div>
    <div id="fw-modal-overlay"
      style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 2000;">
    </div>
    <div id="fw-topup-modal"
      style="display: none; position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; max-width: 480px; background: white; border-top-left-radius: 16px; border-top-right-radius: 16px; z-index: 2001; padding-bottom: 20px; animation: slideUp 0.3s ease-out;">

      <!-- Drag Handle -->
      <div style="width: 100%; display: flex; justify-content: center; padding: 10px;">
        <div style="width: 40px; height: 4px; background: #ddd; border-radius: 2px;"></div>
      </div>

      <div style="padding: 15px;">
        <h3 style="margin: 0 0 20px 0; font-size: 16px; font-weight: bold;">Mau isi saldo berapa?</h3>

        <div style="border-bottom: 1px solid #ddd; padding-bottom: 10px; margin-bottom: 20px;">
          <input type="text" id="fw-amount-display" value="Rp0" readonly
            style="width: 100%; border: none; font-size: 32px; font-weight: bold; color: #333; outline: none; background: transparent;">
        </div>

        <div class="num-pad-grid"
          style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 20px;">
          <div class="num-key" data-val="1"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">1</div>
          <div class="num-key" data-val="2"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">2</div>
          <div class="num-key" data-val="3"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">3</div>
          <div class="num-key" data-val="4"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">4</div>
          <div class="num-key" data-val="5"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">5</div>
          <div class="num-key" data-val="6"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">6</div>
          <div class="num-key" data-val="7"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">7</div>
          <div class="num-key" data-val="8"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">8</div>
          <div class="num-key" data-val="9"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">9</div>
          <div class="num-key" data-val="0"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">0</div>
          <div class="num-key" data-val="000"
            style="font-size: 20px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">000</div>
          <div class="num-key" data-action="backspace"
            style="font-size: 20px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer; display: flex; align-items: center; justify-content: center;">
            <i class="fas fa-backspace" style="color: #666;"></i>
          </div>
        </div>

        <button id="btn-fw-submit" disabled
          style="width: 100%; background: #ccc; color: white; border: none; padding: 12px; border-radius: 8px; font-weight: bold; cursor: default;">LANJUT</button>
      </div>
    </div>
    <div id="fw-limit-modal"
      style="display: none; position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; max-width: 480px; background: white; border-top-left-radius: 16px; border-top-right-radius: 16px; z-index: 2001; padding-bottom: 20px; animation: slideUp 0.3s ease-out;">

      <!-- Drag Handle -->
      <div style="width: 100%; display: flex; justify-content: center; padding: 10px;">
        <div style="width: 40px; height: 4px; background: #ddd; border-radius: 2px;"></div>
      </div>

      <div style="padding: 15px;">
        <h3 style="margin: 0 0 20px 0; font-size: 16px; font-weight: bold;">Atur Limit Transaksi Anggota</h3>

        <div
          style="border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-bottom: 5px; display: flex; align-items: center;">
          <span style="font-size: 16px; font-weight: bold; margin-right: 5px;">Rp</span>
          <input type="text" id="fw-limit-input" value="3" readonly
            style="flex: 1; border: none; font-size: 24px; font-weight: bold; color: #333; outline: none; background: transparent;">
          <i class="fas fa-times-circle" style="color: #ccc;"></i>
        </div>
        <div style="font-size: 10px; color: #999; margin-bottom: 20px;">Limit maksimal untuk tiap anggota: Rp3.000.000
          <i class="fas fa-info-circle"></i>
        </div>

        <!-- Slider -->
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
          <span style="font-size: 12px; color: #666;">Min.</span>
          <input type="range" min="0" max="3000000" value="3" class="slider-range" style="flex: 1;">
          <span style="font-size: 12px; color: #666;">Maks.</span>
        </div>

        <div class="num-pad-grid-limit"
          style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 20px;">
          <div class="limit-key" data-val="1"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">1</div>
          <div class="limit-key" data-val="2"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">2</div>
          <div class="limit-key" data-val="3"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">3</div>
          <div class="limit-key" data-val="4"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">4</div>
          <div class="limit-key" data-val="5"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">5</div>
          <div class="limit-key" data-val="6"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">6</div>
          <div class="limit-key" data-val="7"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">7</div>
          <div class="limit-key" data-val="8"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">8</div>
          <div class="limit-key" data-val="9"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">9</div>
          <div class="limit-key" data-val="0"
            style="font-size: 24px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">0</div>
          <div class="limit-key" data-val="000"
            style="font-size: 20px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer;">000</div>
          <div class="limit-key" data-action="backspace"
            style="font-size: 20px; font-weight: bold; text-align: center; padding: 10px; cursor: pointer; display: flex; align-items: center; justify-content: center;">
            <i class="fas fa-backspace" style="color: #666;"></i>
          </div>
        </div>

        <button id="btn-save-limit"
          style="width: 100%; background: #ee4d2d; color: white; border: none; padding: 12px; border-radius: 8px; font-weight: bold; cursor: pointer;">SIMPAN
          PERUBAHAN</button>
      </div>
    </div>
    <div id="add-member-view" style="display: none; background: #fff; min-height: 100vh;">
      <div class="fw-header"
        style="background: #ee4d2d; color: white; padding: 15px; position: sticky; top: 0; z-index: 100; display: flex; align-items: center;">
          <i class="fas fa-arrow-left" id="btn-back-add-member"
            style="font-size: 18px; margin-right: 15px; cursor: pointer;"></i>
          <h2 style="font-size: 18px; margin: 0; font-weight: 500;">Tambah Anggota</h2>
      </div>

      <div style="padding: 15px;">
        <!-- Search Bar -->
        <div style="background: #f5f5f5; border-radius: 4px; padding: 10px; display: flex; align-items: center; gap: 10px; margin-bottom: 20px; border: 1px solid #ddd;">
          <i class="fas fa-search" style="color: #999;"></i>
          <input type="text" placeholder="Cari Nama atau No. Handphone" style="border: none; flex: 1; outline: none; background: transparent; font-size: 14px; color: #333;">
        </div>

        <!-- Section: Invite via -->
        <div style="font-size: 13px; font-weight: bold; color: #000; margin-bottom: 15px;">Undang Teman via</div>
        
        <div style="display: flex; gap: 20px; margin-bottom: 30px;">
             <!-- WhatsApp -->
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <div style="width: 45px; height: 45px; background: #25d366; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">
                    <i class="fab fa-whatsapp"></i>
                </div>
                <span style="font-size: 11px; color: #666;">WhatsApp</span>
            </div>
            <!-- Line -->
             <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <div style="width: 45px; height: 45px; background: #00c300; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">
                    <i class="fab fa-line"></i>
                </div>
                <span style="font-size: 11px; color: #666;">Line</span>
            </div>
            <!-- Messenger -->
             <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <div style="width: 45px; height: 45px; background: #3b5998; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">
                    <i class="fab fa-facebook-messenger"></i>
                </div>
                <span style="font-size: 11px; color: #666;">Messenger</span>
            </div>
            <!-- Link -->
             <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <div style="width: 45px; height: 45px; background: #ddd; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #666; font-size: 20px;">
                    <i class="fas fa-link"></i>
                </div>
                <span style="font-size: 11px; color: #666;">Salin Link</span>
            </div>
        </div>

        <!-- Section: Contacts -->
        <div style="font-size: 13px; font-weight: bold; color: #000; margin-bottom: 15px;">Kontak Shopee</div>
        
        <div style="background: white;">
            <!-- Contact 1 -->
            <div style="padding: 15px 0; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center; gap: 15px;">
                <div style="width: 40px; height: 40px; background: #eee; border-radius: 50%; overflow: hidden;">
                    <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Aditya" style="width:100%; height:100%; object-fit: cover;">
                </div>
                <div style="flex: 1;">
                    <div style="font-size: 14px; font-weight: 500; color: #333;">Aditya Pratama</div>
                    <div style="font-size: 12px; color: #999;">+62 812 3456 7890</div>
                </div>
                <button class="btn-trigger-invite" style="border: none; background: #ee4d2d; color: white; padding: 6px 15px; border-radius: 4px; font-size: 12px; font-weight: 500; cursor: pointer;">Undang</button>
            </div>
            <!-- Contact 2 -->
             <div style="padding: 15px 0; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center; gap: 15px;">
                <div style="width: 40px; height: 40px; background: #eee; border-radius: 50%; overflow: hidden;">
                    <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Budi" style="width:100%; height:100%; object-fit: cover;">
                </div>
                <div style="flex: 1;">
                    <div style="font-size: 14px; font-weight: 500; color: #333;">Budi Santoso</div>
                    <div style="font-size: 12px; color: #999;">+62 813 9876 5432</div>
                </div>
                <button class="btn-trigger-invite" style="border: none; background: #ee4d2d; color: white; padding: 6px 15px; border-radius: 4px; font-size: 12px; font-weight: 500; cursor: pointer;">Undang</button>
            </div>
             <!-- Contact 3 -->
             <div style="padding: 15px 0; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center; gap: 15px;">
                <div style="width: 40px; height: 40px; background: #eee; border-radius: 50%; overflow: hidden;">
                    <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Citra" style="width:100%; height:100%; object-fit: cover;">
                </div>
                <div style="flex: 1;">
                    <div style="font-size: 14px; font-weight: 500; color: #333;">Citra Dewi</div>
                    <div style="font-size: 12px; color: #999;">+62 856 1234 5678</div>
                </div>
                 <button style="border: 1px solid #ddd; background: white; color: #aaa; padding: 6px 15px; border-radius: 4px; font-size: 12px; font-weight: 500; cursor: default;">Diundang</button>
            </div>
        </div>

      </div>

      <!-- INVITATION FORM MODAL -->
      <div id="invite-form-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 600; align-items: center; justify-content: center;">
         <div style="background: white; border-radius: 10px; padding: 25px; width: 85%; max-width: 320px;">
            <h3 style="font-size: 16px; font-weight: bold; margin-bottom: 20px; text-align: center;">Detail Anggota</h3>
            
            <div class="sp-input-group" style="margin-bottom: 15px;">
                <label style="font-size: 12px; color: #666; margin-bottom: 5px; display: block;">Hubungan</label>
                <select id="input-invite-relation" class="sp-input" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; background: white;">
                    <option value="" disabled selected>Pilih Hubungan</option>
                    <option value="Istri">Istri</option>
                    <option value="Suami">Suami</option>
                    <option value="Anak">Anak</option>
                    <option value="Orang Tua">Orang Tua</option>
                    <option value="Saudara">Saudara</option>
                    <option value="Lainnya">Lainnya</option>
                </select>
            </div>

            <div class="sp-input-group" style="margin-bottom: 20px;">
                <label style="font-size: 12px; color: #666; margin-bottom: 5px; display: block;">Status Alamat</label>
                <select id="select-invite-address-status" class="sp-input" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; background: white; margin-bottom: 10px;">
                    <option value="Sama">Sama dengan Pemilik</option>
                    <option value="Tidak">Tidak Sama</option>
                </select>

                <div id="container-invite-address" style="display: none;">
                     <input type="text" id="input-invite-address" class="sp-input" placeholder="Masukkan Alamat Lengkap" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px;">
                </div>
            </div>

            <div style="display: flex; gap: 10px;">
               <button id="btn-cancel-invite-form" style="flex: 1; background: #eee; border: none; padding: 10px; border-radius: 6px; font-weight: bold; color: #555;">Batal</button>
               <button id="btn-submit-invite-form" style="flex: 1; background: #ee4d2d; border: none; padding: 10px; border-radius: 6px; font-weight: bold; color: white;">Kirim</button>
            </div>
         </div>
      </div>

      <!-- INVITATION SUCCESS MODAL -->
      <div id="invite-success-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 600; align-items: center; justify-content: center;">
         <div style="background: white; border-radius: 10px; padding: 25px; width: 80%; max-width: 300px; text-align: center; display: flex; flex-direction: column; align-items: center;">
            <div style="width: 60px; height: 60px; background: #ee4d2d; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                <i class="fas fa-check" style="color: white; font-size: 30px;"></i>
            </div>
            <h3 style="font-size: 16px; font-weight: bold; margin-bottom: 10px;">Undangan Terkirim</h3>
            <p style="font-size: 13px; color: #666; margin-bottom: 25px;">Permintaan bergabung telah dikirim ke teman kamu.</p>
            <button id="btn-close-invite-modal" style="background: #ee4d2d; color: white; border: none; padding: 10px 0; width: 100%; border-radius: 6px; font-weight: bold;">Oke</button>
         </div>
      </div>
    </div>
    <div id="riwayat-view" style="display: none; background: #f5f5f5; min-height: 100vh;">
      <div class="fw-header"
        style="background: #ee4d2d; color: white; padding: 15px; position: sticky; top: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
          <i class="fas fa-chevron-left" id="btn-back-riwayat"
            style="font-size: 18px; margin-right: 15px; cursor: pointer;"></i>
          <h2 style="font-size: 18px; margin: 0; font-weight: 500;">Riwayat Transaksi</h2>
        </div>
      </div>

      <div style="padding: 0;">
        <!-- Month Header -->
        <div style="padding: 10px 15px; background: #eee; font-size: 13px; color: #666; font-weight: bold;">
          Desember 2024
        </div>

        <!-- Transaksi Items -->
        <div style="background: white;">
          <!-- Item 1 -->
          <div
            style="padding: 15px; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 15px;">
              <div
                style="width: 40px; height: 40px; background: #ffebee; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #ee4d2d;">
                <i class="fas fa-utensils"></i>
              </div>
              <div>
                <div style="font-weight: 500; color: #333; margin-bottom: 2px;">Bayar Kantin Sekolah</div>
                <div style="font-size: 12px; color: #666; margin-bottom: 2px;">Oleh: I M**e D*i</div>
                <div style="font-size: 11px; color: #999;">17 Des 2024 • 12:30</div>
              </div>
            </div>
            <div style="text-align: right;">
              <div style="font-weight: bold; color: #333;">-Rp15.000</div>
            </div>
          </div>

          <!-- Item 2 -->
          <div
            style="padding: 15px; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 15px;">
              <div
                style="width: 40px; height: 40px; background: #e8f5e9; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #4caf50;">
                <i class="fas fa-wallet"></i>
              </div>
              <div>
                <div style="font-weight: 500; color: #333; margin-bottom: 2px;">Isi Saldo dari ShopeePay</div>
                <div style="font-size: 12px; color: #666; margin-bottom: 2px;">Oleh: Admin Keluarga</div>
                <div style="font-size: 11px; color: #999;">16 Des 2024 • 08:00</div>
              </div>
            </div>
            <div style="text-align: right;">
              <div style="font-weight: bold; color: #4caf50;">+Rp50.000</div>
            </div>
          </div>

          <!-- Item 3 -->
          <div
            style="padding: 15px; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 15px;">
              <div
                style="width: 40px; height: 40px; background: #e3f2fd; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #2196f3;">
                <i class="fas fa-bus"></i>
              </div>
              <div>
                <div style="font-weight: 500; color: #333; margin-bottom: 2px;">Bayar Bus Sekolah</div>
                <div style="font-size: 12px; color: #666; margin-bottom: 2px;">Oleh: MOHAMAD</div>
                <div style="font-size: 11px; color: #999;">15 Des 2024 • 06:45</div>
              </div>
            </div>
            <div style="text-align: right;">
              <div style="font-weight: bold; color: #333;">-Rp5.000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="member-detail-view" style="display: none; background: #f5f5f5; min-height: 100vh;">
      <!-- Header + Profile Section (Orange Background) -->
      <div style="background: #ee4d2d; color: white; padding-bottom: 20px;">
        <div class="fw-header" style="padding: 15px; display: flex; align-items: center;">
          <i class="fas fa-chevron-left" id="btn-back-member-detail"
            style="font-size: 18px; margin-right: 15px; cursor: pointer;"></i>
          <h2 style="font-size: 18px; margin: 0; font-weight: 500; flex: 1; text-align: center; margin-right: 33px;">
            Anggota</h2>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; padding: 10px 0 20px 0;">
          <div
            style="width: 80px; height: 80px; background: #eee; border-radius: 50%; overflow: hidden; border: 3px solid white; margin-bottom: 10px;">
            <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Made" style="width:100%; height:100%; object-fit: cover;">
          </div>
          <div class="detail-name" style="font-size: 16px; font-weight: bold;">Made Dwi</div>
        </div>
      </div>

      <div style="padding: 15px;">
        <!-- Menu List -->
        <div
          style="background: white; border-radius: 8px; overflow: hidden; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
          <!-- Limit Transaksi -->
          <div id="btn-edit-limit-detail"
            style="padding: 15px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
            <span style="font-size: 14px; color: #333;">Limit Transaksi</span>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="detail-limit-value" style="color: #2196f3; font-size: 14px;">Rp3</span>
              <i class="fas fa-chevron-right" style="color: #ccc; font-size: 12px;"></i>
            </div>
          </div>

          <!-- Riwayat Transaksi -->
          <div
            style="padding: 15px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 14px; color: #333;">Riwayat Transaksi</span>
            <i class="fas fa-chevron-right" style="color: #ccc; font-size: 12px;"></i>
          </div>

          <!-- Hapus Anggota -->
          <div style="padding: 15px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 14px; color: #ff5252;">Hapus Anggota</span>
          </div>
        </div>

        <!-- Toggle Section -->
        <div style="font-size: 13px; color: #000; font-weight: 500; margin-bottom: 10px;">Rekening Keluarga ini bisa
          dipakai untuk:</div>

        <div
          style="background: white; border-radius: 8px; padding: 15px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
          <div class="btn-trigger-send-money" style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <i class="fas fa-paper-plane text-blue" style="font-size: 18px;"></i>
            <span style="font-size: 14px; color: #333;">Send Money</span>
          </div>

          <!-- IOS Style Toggle -->
          <label class="switch" style="position: relative; display: inline-block; width: 50px; height: 28px;">
            <input type="checkbox" checked style="opacity: 0; width: 0; height: 0;">
            <span class="slider round"
              style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #2196f3; -webkit-transition: .4s; transition: .4s; border-radius: 34px;"></span>
            <span class="slider-circle"
              style="position: absolute; content: ''; height: 24px; width: 24px; left: 24px; bottom: 2px; background-color: white; -webkit-transition: .4s; transition: .4s; border-radius: 50%;"></span>
          </label>
        </div>
      </div>
    </div>
    <div id="owner-detail-view" style="display: none; background: #f5f5f5; min-height: 100vh;">
      <!-- Header + Profile Section (Orange Background) -->
      <div style="background: #ee4d2d; color: white; padding-bottom: 30px;">
        <div class="fw-header" style="padding: 15px; display: flex; align-items: center;">
          <i class="fas fa-chevron-left" id="btn-back-owner-detail"
            style="font-size: 18px; margin-right: 15px; cursor: pointer;"></i>
          <h2 style="font-size: 18px; margin: 0; font-weight: 500; flex: 1; text-align: center; margin-right: 33px;">
            Pemilik Rekening</h2>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; padding: 10px 0 10px 0;">
          <div
            style="width: 80px; height: 80px; background: #333; border-radius: 50%; overflow: hidden; border: 3px solid white; margin-bottom: 10px;">
            <img src="https://via.placeholder.com/80" style="width:100%; height:100%; object-fit: cover;">
          </div>
          <div style="font-size: 16px; font-weight: bold; text-transform: uppercase;">MOHAMAD SYARIEF AL...</div>
        </div>
      </div>

      <div style="padding: 15px; margin-top: -10px;">
        <!-- Menu List -->
        <div
          style="background: white; border-radius: 8px; overflow: hidden; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
          <!-- Nama Keluarga -->
          <div
            style="padding: 15px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 14px; color: #333;">Nama Keluarga</span>
            <span style="font-size: 14px; color: #333;">SAMAN</span>
          </div>

          <!-- Hapus Rekening Keluarga -->
          <div style="padding: 15px; display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
            <span style="font-size: 14px; color: #ff5252;">Hapus Rekening Keluarga</span>
          </div>
        </div>
      </div>
    </div>


