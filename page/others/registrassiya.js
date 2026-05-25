const API_KEY = "ed1c56f1"; 
const BASE_URL = "https://www.omdbapi.com";
let joriyRejim = "login";

// Orqa fon uchun mashhur filmlar ro'yxati (Har kirganda mutlaqo tasodifiy tanlanadi)
const mashhurKinoFondlari = [
    "Interstellar", "Inception", "The Dark Knight", "Avatar", "Gladiator", 
    "The Matrix", "Spider-Man", "Titanic", "Avengers", "Joker"
];

// 1. TIZIM YUKLANGANDA STATUS VA BACKROUNDNI SOZLASH
document.addEventListener("DOMContentLoaded", () => {
    const hasLoggedInBefore = localStorage.getItem("userRegistered");
    const activeEmail = localStorage.getItem("activeUserEmail");
    
    // Kinematik orqa fon rasmini o'rnatish
    yuklashDinamikOrqaFon();

    setTimeout(() => {
        const loader = document.getElementById("splashLoader");
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 400);

        if (hasLoggedInBefore === "true" && activeEmail) {
            ochishProfilEkran(activeEmail);
        } else {
            document.getElementById("authSection").classList.remove("hidden");
        }
    }, 1000);
});

// Fondagi random kino rasmini API'dan olish
async function yuklashDinamikOrqaFon() {
    const bgContainer = document.getElementById("dynamicMovieBg");
    const randomTitle = mashhurKinoFondlari[Math.floor(Math.random() * mashhurKinoFondlari.length)];
    
    try {
        const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(randomTitle)}`);
        const data = await res.json();
        if (data.Response === "True" && data.Poster !== "N/A") {
            bgContainer.style.backgroundImage = `url('${data.Poster}')`;
        } else {
            bgContainer.style.backgroundImage = `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925')`;
        }
    } catch (e) {
        bgContainer.style.backgroundImage = `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925')`;
    }
}

// 2. REAL VAQTDA INPUTLARNI VALIDATSIYA QILISH
function tekshirishValidatsiya() {
    const email = document.getElementById("emailInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();
    const btn = document.getElementById("mainActionBtn");

    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|ru|uz)$/i;

    if (emailRegex.test(email) && password.length >= 8) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
}

// 3. REJIMLARNI ALMASHTIRISH (LOGIN/REGISTER)
function rejimniAlmashtirish() {
    const subtitle = document.getElementById("formSubtitle");
    const btn = document.getElementById("mainActionBtn");
    const switchText = document.getElementById("switchText");
    const switchBtn = document.getElementById("switchBtn");
    
    document.getElementById("emailInput").value = "";
    document.getElementById("passwordInput").value = "";
    btn.classList.remove("show");

    if (joriyRejim === "login") {
        joriyRejim = "register";
        subtitle.innerText = "Yangi hisob yaratish uchun ma'lumotlarni to'ldiring";
        btn.innerText = "Ro'yxatdan o'tish va Kirish ";
        switchText.innerText = "Akkauntingiz bormi?";
        switchBtn.innerText = "Tizimga kirish";
    } else {
        joriyRejim = "login";
        subtitle.innerText = "Premium olamga kirish uchun hisobingizga kiring";
        btn.innerText = "Kirish ";
        switchText.innerText = "Hisobingiz yo'qmi?";
        switchBtn.innerText = "Ro'yxatdan o'tish";
    }
}

// 4. ASOSIY TUGMA BOSILGANDA
function aksiyaniBajarish() {
    const email = document.getElementById("emailInput").value.trim();
    
    localStorage.setItem("userRegistered", "true");
    localStorage.setItem("activeUserEmail", email);
    
    if (joriyRejim === "register") {
        alert("Tabriklaymiz! Ro'yxatdan o'tish muvaffaqiyatli yakunlandi");
    }

    document.getElementById("authSection").classList.add("hidden");
    ochishProfilEkran(email);
}

// 5. PROFIL EKRANINI KO'RSATISH
function ochishProfilEkran(email) {
    document.getElementById("profileSection").classList.remove("hidden");
    document.getElementById("userEmailTitle").innerText = email;
    document.getElementById("avatarLetter").innerText = email.charAt(0).toUpperCase();
    
    document.body.style.alignItems = "flex-start";
    renderProfilKinolar();
}

// Xotiradan sevimli kinolarni olish
function yuklashKinoMassivi() {
    let kinolar = localStorage.getItem("savedProfileMovies");
    return kinolar ? JSON.parse(kinolar) : ["Interstellar", "Avatar", "Gladiator"];
}

// Kinolarni OMDb API orqali chiqarish
async function renderProfilKinolar() {
    const grid = document.getElementById("moviesGridBox");
    const kinolar = yuklashKinoMassivi();

    if (kinolar.length === 0) {
        grid.innerHTML = "<p style='color: #94a3b8; grid-column: 1/-1; text-align: center; padding: 30px; font-size: 0.95rem;'>Sevimli kinolaringiz ro'yxati bo'sh. Yuqoridan qo'shing!</p>";
        return;
    }

    grid.innerHTML = "";
    for (let title of kinolar) {
        try {
            const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}`);
            const data = await res.json();
            if (data.Response === "True") {
                grid.innerHTML += `
                    <div class="movie-card">
                        <button class="delete-card-btn" onclick="kinoOchirish('${data.Title.replace(/'/g, "\\'")}')">chiqindonga tashlash</button>
                        <img src="${data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/210x265/151f32/fff?text=No+Poster'}" alt="${data.Title}">
                        <h4>${data.Title}</h4>
                        <span style="color: #ffc107; font-size: 0.85rem; font-weight:600;">⭐ ${data.imdbRating !== 'N/A' ? data.imdbRating : 'N/A'}</span>
                    </div>
                `;
            }
        } catch (e) { console.error(e); }
    }
}

// 6. INPUTDA ENTER BOSILGANDA TEKSHIRISH
function inputEnterTekshirish(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        yangiKinoQoshish();
    }
}

// 7. AQLLI YANGI KINO QO'SHISH (API BILAN TEKSHIRILADI)
async function yangiKinoQoshish() {
    const input = document.getElementById("movieTitleInput");
    const searchBtn = document.getElementById("searchInlineBtn");
    const title = input.value.trim();
    
    if (!title) return alert("Iltimos, kino nomini yozing!");

    let kinolar = yuklashKinoMassivi();
    
    if (kinolar.map(k => k.toLowerCase()).includes(title.toLowerCase())) {
        return alert("Bu kino ro'yxatda allaqachon mavjud!");
    }

    searchBtn.innerText = "⏳";
    searchBtn.style.pointerEvents = "none";

    try {
        const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}`);
        const data = await res.json();

        if (data.Response === "True") {
            kinolar.unshift(data.Title);
            localStorage.setItem("savedProfileMovies", JSON.stringify(kinolar));
            input.value = "";
            renderProfilKinolar();
        } else {
            alert(` "${title}" nomli film topilmadi. Iltimos, inglizcha nomini to'g'ri yozganingizga ishonch hosil qiling!`);
        }
    } catch (e) {
        console.error(e);
        alert("Tarmoqda xatolik yuz berdi, qaytadan urinib ko'ring.");
    } finally {
        searchBtn.innerText = "🔍";
        searchBtn.style.pointerEvents = "auto";
    }
}

// 8. KINONI O'CHIRISH
function kinoOchirish(title) {
    if (confirm(`"${title}" filmini o'chirmoqchimisiz?`)) {
        let kinolar = yuklashKinoMassivi();
        kinolar = kinolar.filter(k => k !== title);
        localStorage.setItem("savedProfileMovies", JSON.stringify(kinolar));
        renderProfilKinolar();
    }
}

// 9. TIZIMDAN CHIQISH
function tizimdanChiqish() {
    if (confirm("Hisobingizdan chiqmoqchimisiz?")) {
        localStorage.removeItem("userRegistered");
        localStorage.removeItem("activeUserEmail");
        
        document.getElementById("profileSection").classList.add("hidden");
        document.getElementById("authSection").classList.remove("hidden");
        document.body.style.alignItems = "center";
        joriyRejim = "login";
        rejimniAlmashtirish();
        yuklashDinamikOrqaFon(); // Chiqganda fonni ham yangilaymiz
    }
}