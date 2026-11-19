// Daftar akun valid untuk pengecekan login
const akunTerdaftar = [
    { username: "admin", password: "luxnoir123", role: "Administrator Hotel" },
    { username: "tamu", password: "vip2026", role: "VIP Member" }
];

// Fungsi pengecekan username dan password
function validasiLogin(event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    // 1. Cek jika kolom kosong
    if (usernameInput === "" || passwordInput === "") {
        tampilkanAlert("Username dan password wajib diisi.", "error");
        return;
    }

    // 2. Cek kecocokan username & password
    const userCocok = akunTerdaftar.find(
        (akun) => akun.username === usernameInput && akun.password === passwordInput
    );

    if (userCocok) {
        tampilkanAlert(
            `Login berhasil! Selamat datang, ${userCocok.username} (${userCocok.role}). Mengalihkan ke halaman utama...`,
            "success"
        );
        // Simpan status login di sessionStorage
        sessionStorage.setItem("luxnoir_user", userCocok.username);

        // Redirect otomatis ke index.html setelah 1.5 detik
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    } else {
        tampilkanAlert("Username atau password salah. Silakan periksa kembali.", "error");
    }
}

function tampilkanAlert(pesan, tipe) {
    const alertBox = document.getElementById("loginAlert");
    if (!alertBox) return;
    alertBox.textContent = pesan;
    alertBox.className = `login-alert ${tipe}`;
    alertBox.style.display = "block";
}

// Fitur tampilkan / sembunyikan password
function togglePassword() {
    const passField = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");
    if (!passField || !eyeIcon) return;

    if (passField.type === "password") {
        passField.type = "text";
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        passField.type = "password";
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
    }
}

// Simulasi pengiriman formulir di halaman Kontak
function kirimPesanKontak(event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value.trim();
    const feedback = document.getElementById("contactAlert");
    if (!feedback) return;

    feedback.textContent = `Terima kasih, ${nama}. Pesan Anda telah diterima oleh tim Concierge LUX NOIR.`;
    document.getElementById("contactForm").reset();
}
