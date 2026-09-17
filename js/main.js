document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a');

    // Toggle menu saat tombol hamburger di-klik
    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Ubah ikon dari garis tiga (bars) ke silang (xmark)
        const icon = hamburgerBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });

    // Otomatis tutup menu saat salah satu link navigasi di-klik
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = hamburgerBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        });
    });
});
// TABAHAN BARU:
    // Tutup menu otomatis kalau user mengklik area di luar menu/navbar
    document.addEventListener('click', (e) => {
        // Cek: Apakah yang di-klik BUKAN tombol hamburger DAN BUKAN isi menu?
        if (!hamburgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active'); // Sembunyikan menu
            
            // Kembalikan ikon silang (X) jadi garis tiga lagi
            const icon = hamburgerBtn.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
            }
        }
    });