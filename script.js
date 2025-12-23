// Menjalankan kode hanya setelah semua elemen HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // --- Efek 1: Magic Wisp Cursor ---
    // Membuat elemen 'div' baru untuk wisp-nya
    const magicWisp = document.createElement('div');
    magicWisp.className = 'magic-wisp'; // Memberi kelas agar bisa di-style CSS
    document.body.appendChild(magicWisp); // Memasukkan wisp ke dalam body HTML

    // Mendengarkan pergerakan mouse di seluruh jendela
    window.addEventListener('mousemove', (e) => {
        // 'e.clientX' dan 'e.clientY' adalah posisi X dan Y dari mouse di layar
        // Kita update posisi wisp secara langsung
        magicWisp.style.left = e.clientX + 'px';
        magicWisp.style.top = e.clientY + 'px';
    });

    // --- Efek 2: Scroll Reveal Animation ---
    
    // Pilih semua elemen yang ingin kita animasikan saat di-scroll
    // Kamu bisa tambahkan elemen lain jika mau (misal: 'header', 'footer')
    const elementsToReveal = document.querySelectorAll('section, article');

    // Pengaturan untuk 'IntersectionObserver'
    // 'threshold: 0.1' berarti animasi akan terpicu saat 10% elemen terlihat
    const observerOptions = {
        root: null, // 'null' berarti mengamati viewport
        threshold: 0.1
    };

    // Membuat 'Observer' baru
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Jika elemennya (entry) mulai terlihat (isIntersecting)
            if (entry.isIntersecting) {
                // Tambahkan kelas 'is-visible' ke elemen tersebut
                entry.target.classList.add('is-visible');
                // Hentikan pengamatan pada elemen ini agar animasi tidak berulang
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Terapkan 'Observer' ke setiap elemen yang telah kita pilih
    elementsToReveal.forEach(el => {
        observer.observe(el);
    });
    const music = document.getElementById('bg-music');
    const toggleBtn = document.getElementById('music-toggle-btn');
    
    // Setel volume agar tidak terlalu keras (0.0 sampai 1.0)
    music.volume = 0.3; // 30% volume

    toggleBtn.addEventListener('click', () => {
        // Cek apakah musik sedang dijeda (paused)
        if (music.paused) {
            music.play();
            toggleBtn.textContent = '🔇'; // Ganti ikon ke 'mute'
        } else {
            music.pause();
            toggleBtn.textContent = '🎵'; // Ganti ikon ke 'play'
        }
    });
    
});
