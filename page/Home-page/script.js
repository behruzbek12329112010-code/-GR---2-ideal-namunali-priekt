  const API_KEY = "ed1c56f1";
const BASE_URL = "https://www.omdbapi.com";

///Hozirgi default kinolarimizga "Genre" (Janr) xususiyati biriktirildi (1-FUNKSIYA UCHUN)
const defaultMovies = [
    // === Sci-Fi / Fantastika ===
    { title: "Inception", genre: "Sci-Fi" }, 
    { title: "Avatar", genre: "Sci-Fi" }, 
    { title: "Interstellar", genre: "Sci-Fi" }, 
    { title: "The Matrix", genre: "Sci-Fi" }, 
    { title: "Dune", genre: "Sci-Fi" },
    { title: "Tenet", genre: "Sci-Fi" },
    { title: "The Martian", genre: "Sci-Fi" },
    { title: "Arrival", genre: "Sci-Fi" },
    { title: "Blade Runner 2049", genre: "Sci-Fi" },
    { title: "The Avengers", genre: "Sci-Fi" },
    { title: "Guardians of the Galaxy", genre: "Sci-Fi" },
    { title: "Ready Player One", genre: "Sci-Fi" },
    { title: "The Mandalorian", genre: "Sci-Fi" },
    { title: "Transformers", genre: "Sci-Fi" },
    { title: "Westworld", genre: "Sci-Fi" },
    { title: "Pacific Rim", genre: "Sci-Fi" },
    { title: "Altered Carbon", genre: "Sci-Fi" },
    { title: "Love, Death & Robots", genre: "Sci-Fi" },

    // === Action / Jangovar ===
    { title: "Gladiator", genre: "Action" }, 
    { title: "The Dark Knight", genre: "Action" }, 
    { title: "Spider-Man", genre: "Action" }, 
    { title: "Avengers", genre: "Action" }, 
    { title: "John Wick", genre: "Action" },
    { title: "The Batman", genre: "Action" },
    { title: "Mad Max: Fury Road", genre: "Action" },
    { title: "Top Gun: Maverick", genre: "Action" },
    { title: "Extraction", genre: "Action" },
    { title: "Spider-Man: No Way Home", genre: "Action" }, 
    { title: "John Wick: Chapter 4", genre: "Action" },
    { title: "The Witcher", genre: "Action" },
    { title: "Vikings", genre: "Action" },
    { title: "The Boys", genre: "Action" },
    { title: "Nobody", genre: "Action" },
    { title: "Greyhound", genre: "Action" },
    { title: "Sisu", genre: "Action" },

    // === Drama ===
    { title: "Titanic", genre: "Drama" }, 
    { title: "The Sopranos", genre: "Drama" }, 
    { title: "Joker", genre: "Drama" }, 
    { title: "Whiplash", genre: "Drama" }, 
    { title: "Chernobyl", genre: "Drama" }, 
    { title: "The Pianist", genre: "Drama" }, 
    { title: "The Shawshank Redemption", genre: "Drama" },
    { title: "Forrest Gump", genre: "Drama" },
    { title: "The Godfather", genre: "Drama" },
    { title: "Oppenheimer", genre: "Drama" },
    { title: "The Wolf of Wall Street", genre: "Drama" },
    { title: "Peaky Blinders", genre: "Drama" },
    { title: "The Queen's Gambit", genre: "Drama" },
    { title: "Fight Club", genre: "Drama" },
    { title: "Succession", genre: "Drama" },
    { title: "The Crown", genre: "Drama" },
    { title: "A Beautiful Mind", genre: "Drama" },
    { title: "The Last of Us", genre: "Drama" },

    // === Comedy / Komediya ===
    { title: "Wednesday", genre: "Comedy" }, 
    { title: "Friends", genre: "Comedy" }, 
    { title: "Deadpool", genre: "Comedy" },
    { title: "The Office", genre: "Comedy" },
    { title: "Free Guy", genre: "Comedy" },
    { title: "Home Alone", genre: "Comedy" },
    { title: "The Hangover", genre: "Comedy" },
    { title: "Ted Lasso", genre: "Comedy" },
    { title: "Rick and Morty", genre: "Comedy" },
    { title: "Barbie", genre: "Comedy" },
    { title: "Brooklyn Nine-Nine", genre: "Comedy" },
    { title: "Kung Fu Panda", genre: "Comedy" },
    { title: "The Mask", genre: "Comedy" },

    // === Thriller & Detective / Triller va Detektiv ===
    { title: "Breaking Bad", genre: "Thriller" }, 
    { title: "Narcos", genre: "Thriller" }, 
    { title: "Sherlock", genre: "Thriller" }, 
    { title: "The Prestige", genre: "Thriller" }, 
    { title: "Parasite", genre: "Thriller" }, 
    { title: "Dexter", genre: "Thriller" }, 
    { title: "Hannibal", genre: "Thriller" }, 
    { title: "Shutter Island", genre: "Thriller" },
    { title: "Prison Break", genre: "Thriller" },
    { title: "True Detective", genre: "Thriller" },
    { title: "Mindhunter", genre: "Thriller" },
    { title: "Money Heist", genre: "Thriller" },
    { title: "Black Mirror", genre: "Thriller" },
    { title: "Nightcrawler", genre: "Thriller" },
    { title: "The Invisible Guest", genre: "Thriller" },

    // === Horror & Mystery / Dahshat va Sirli ===
    { title: "The Walking Dead", genre: "Horror" },
    { title: "Resident Evil", genre: "Horror" },
    { title: "The Haunting of Hill House", genre: "Horror" },

];

// 5-FUNKSIYA UCHUN: Chiroyli kino qahramonlari avatarlari ro'yxati
const avatarOptions = [
    { name: "Batman", url: "https://i.pinimg.com/236x/82/80/75/828075727339f4e2467d51025078f44d.jpg" },
    { name: "Joker", url: "https://i.pinimg.com/236x/cb/13/27/cb132711867b36f787f0b5d1f8876c22.jpg" },
    { name: "Wednesday", url: "https://i.pinimg.com/236x/a9/37/10/a937107f91856b3e8e1da4ecf972b22b.jpg" },
    { name: "Spider-Man", url: "https://i.pinimg.com/236x/1a/05/92/1a0592966141386760fb26392095690b.jpg" },
    { name: "Iron Man", url: "https://i.pinimg.com/236x/43/d3/18/43d31804f326503cbfb168972ec222b0.jpg" },
    { name: "Jack Sparrow", url: "https://i.pinimg.com/236x/91/97/81/9197818e578c7fa7b9f33bf9e9cfa4d4.jpg" },
    { name: "Tyler Durden", url: "https://i.pinimg.com/236x/b2/f0/a8/b2f0a8c25345710609383617be33fcf4.jpg" },
    { name: "Walter White", url: "https://i.pinimg.com/236x/55/80/81/558081f9b3cf02b9e6e408ec27918a24.jpg" }
];

const kinoLugat = { "аватар": "Avatar", "начало": "Inception", "интерстеллар": "Interstellar", "гладиатор": "Gladiator" };

let isRegisterMode = false;
let bannerInterval = null;
let joriyTanlanganBaho = 5; // 3-Funksiya uchun default star rating
let joriyFiltrJanr = "all"; // 1-Funksiya uchun active janr

function getUserStorageKey(keyName) {
    const joriyUser = localStorage.getItem("tizimgaKirganUser");
    return joriyUser ? `${joriyUser}_${keyName}` : keyName;
}

function getUserListData(keyName) {
    return JSON.parse(localStorage.getItem(getUserStorageKey(keyName))) || [];
}

function setUserListData(keyName, data) {
    localStorage.setItem(getUserStorageKey(keyName), JSON.stringify(data));
}

window.addEventListener("DOMContentLoaded", () => {
    yuklashDumaloqKarusel();
    yuklashPremyeralar();
    yuklashTasodifiyReklama();
    initDragScroll();
    yangilaBarchaRoʻyxatlarni();
    startDynamicBanner();
    initTheme(); // 4-FUNKSIYA init

    // 1-FUNKSIYA: Janrlar filtr tugmalari hodisasi
    document.querySelectorAll(".genre-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".genre-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            joriyFiltrJanr = e.target.getAttribute("data-genre");
            yuklashPremyeralar(); // Filtrlangan holda qayta yuklaydi
        });
    });

    // 2-FUNKSIYA: Jonli qidiruv (Live Search) hodisasi
    const kinoInput = document.getElementById("kinoInput");
    if(kinoInput) {
        kinoInput.addEventListener("input", (e) => {
            const text = e.target.value.trim();
            ijroJonliQidiruv(text);
        });
    }

    // Dropdown tashqarisiga bosilganda yopish
    document.addEventListener("click", (e) => {
        const dropdown = document.getElementById("liveSearchDropdown");
        if(dropdown && !e.target.closest(".main-search-wrapper")) {
            dropdown.classList.add("hidden");
        }
    });

    // 4-FUNKSIYA: Dark/Light Mode tugmasi bosilishi
    const themeBtn = document.getElementById("themeToggleBtn");
    if(themeBtn) {
        themeBtn.addEventListener("click", () => {
            if(document.body.classList.contains("dark-theme")) {
                document.body.classList.replace("dark-theme", "light-theme");
                themeBtn.innerText = "☀️";
                localStorage.setItem("uzmovi_theme", "light");
            } else {
                document.body.classList.replace("light-theme", "dark-theme");
                themeBtn.innerText = "🌙";
                localStorage.setItem("uzmovi_theme", "dark");
            }
        });
    }

    // 5-FUNKSIYA: Avatar bosilganda modalni ochish va yuklash
    const avatarZone = document.getElementById("userAvatar");
    if(avatarZone) {
        avatarZone.addEventListener("click", () => {
            if(!localStorage.getItem("tizimgaKirganUser")) {
                alert("Avatarni o'zgartirish uchun avval tizimga kiring!");
                return;
            }
            document.getElementById("avatarModalBloki").classList.remove("hidden");
            yuklashAvatarVariantlari();
        });
    }

    // Logo va Bosh sahifaga qaytish logikalari
    document.getElementById("logoHome").addEventListener("click", () => {
        ochishAniqBlok("boshSahifaBloki");
        tekshirishJoriyFoydalanuvchi();
    });
    
    document.getElementById("homeBtnFromProfile").addEventListener("click", () => {
        ochishAniqBlok("boshSahifaBloki");
        tekshirishJoriyFoydalanuvchi();
    });

    initAuthButtonLogic();
    tekshirishJoriyFoydalanuvchi();
    
    // Auth Modal foni va "Sizda profil bormi?" UI elementlarini dastlabki yuklash
    initAuthDynamicUIStyle();
});

// ================= 1-FUNKSIYA: PREMYERALARNI JANR BO'YICHA YUKLASH =================
async function yuklashPremyeralar() {
    const grid = document.getElementById("kinoGrid");
    if (!grid) return;
    grid.innerHTML = "<p style='color:var(--text-secondary); text-align:center; grid-column:1/-1;'>Yuklanmoqda...</p>";

    // Janrga qarab kinolarni filter qilamiz
    let filtrlanganKinolar = defaultMovies;
    if (joriyFiltrJanr !== "all") {
        filtrlanganKinolar = defaultMovies.filter(m => m.genre === joriyFiltrJanr);
    }

    if(filtrlanganKinolar.length === 0) {
        grid.innerHTML = "<p style='color:var(--text-muted); text-align:center; grid-column:1/-1;'>Ushbu janrda premyera mavjud emas.</p>";
        return;
    }

    grid.innerHTML = "";
    for (let item of filtrlanganKinolar) {
        try {
            const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(item.title)}`);
            const data = await res.json();
            if (data.Response === "True") {
                const liked = getUserListData("sevimliFilmlar").some(k => k.title === data.Title);
                const safePlot = data.Plot ? data.Plot.replace(/'/g, "\\'").replace(/"/g, '\\"') : "";
                
                const card = document.createElement("div");
                card.className = "movie-card";
                card.onclick = () => ochishIchkiSahifa(data.Title);
                card.innerHTML = `
                    <button class="card-like-icon ${liked ? 'active' : ''}" id="like-grid-${data.imdbID}">❤</button>
                    <div class="poster-box">
                        <img src="${data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/200x270'}" alt="${data.Title}">
                        <span class="card-rating">⭐ ${data.imdbRating !== 'N/A' ? data.imdbRating : '7.5'}</span>
                    </div>
                    <div class="movie-info-layer">
                        <h4>${data.Title}</h4>
                        <span class="movie-views-count">📁 ${item.genre}</span>
                    </div>`;
                grid.appendChild(card);

                document.getElementById(`like-grid-${data.imdbID}`).onclick = (e) => {
                    e.stopPropagation();
                    tugmaLikeBosildi(e, data.Title, data.Poster, safePlot);
                };
            }
        } catch (err) { console.error(err); }
    }
}

// ================= 2-FUNKSIYA: JONLI QIDIRUV (LIVE SEARCH) LOGIKASI =================
async function ijroJonliQidiruv(matn) {
    const dropdown = document.getElementById("liveSearchDropdown");
    if(!dropdown) return;

    if(matn.length < 3) {
        dropdown.classList.add("hidden");
        return;
    }

    try {
        // OMDb API'dan qidiruv (s=) bo'yicha ma'lumot so'raymiz
        const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(matn)}`);
        const data = await res.json();

        if(data.Response === "True" && data.Search) {
            dropdown.innerHTML = "";
            dropdown.classList.remove("hidden");

            // Eng mos kelgan dastlabki 5 ta natijani chiqaramiz
            data.Search.slice(0, 5).forEach(film => {
                const item = document.createElement("div");
                item.className = "live-search-item";
                item.onclick = () => {
                    ochishIchkiSahifa(film.Title);
                    dropdown.classList.add("hidden");
                    document.getElementById("kinoInput").value = "";
                };
                item.innerHTML = `
                    <img class="live-search-poster" src="${film.Poster !== 'N/A' ? film.Poster : 'https://via.placeholder.com/50x70'}" alt="Poster">
                    <div class="live-search-meta">
                        <h5>${film.Title}</h5>
                        <p>${film.Year} yil</p>
                    </div>
                `;
                dropdown.appendChild(item);
            });
        } else {
            dropdown.innerHTML = `<p style="padding:15px; text-align:center; color:var(--text-muted); font-size:0.9rem;">Mos keladigan kino topilmadi...</p>`;
            dropdown.classList.remove("hidden");
        }
    } catch (e) {
        console.error("Jonli qidiruv xatosi:", e);
    }
}

// ================= 3-FUNKSIYA: KINOLARGA IZOH VA YULDUZCHA BERISH TIZIMI =================
function renderIzohlarTizimi(kinoNomi) {
    const reviewsBox = document.getElementById("movieReviewsSection");
    if(!reviewsBox) return;

    // LocalStoragedan faqat shu kinoga tegishli izohlarni olamiz
    let barchaIzohlar = JSON.parse(localStorage.getItem("uzmovi_global_reviews")) || [];
    let shuKinoIzohlari = barchaIzohlar.filter(r => r.movie === kinoNomi);

    reviewsBox.innerHTML = `
        <h3>💬 Foydalanuvchilar fikri (${shuKinoIzohlari.length})</h3>
        
        <div class="review-input-wrapper" style="margin-top:15px;">
            <p style="font-size:0.9rem; color:var(--text-secondary);">Filmga o'z bahongizni bering:</p>
            <div class="star-rating-select">
                ${[1,2,3,4,5].map(num => `<span class="star-select-item ${num <= joriyTanlanganBaho ? 'selected' : ''}" data-star="${num}">★</span>`).join('')}
            </div>
            <div class="review-input-box">
                <textarea id="shaxsiyIzohMatni" placeholder="Ushbu film haqidagi fikringizni yozib qoldiring..."></textarea>
                <button class="submit-review-btn" onclick="saqlashYangiIzoh('${kinoNomi}')">Izohni yuborish</button>
            </div>
        </div>

        <div class="user-reviews-list">
            ${shuKinoIzohlari.length === 0 ? `<p style="color:var(--text-muted); font-size:0.9rem;">Hozircha hech kim fikr bildirmagan. Birinchi bo'ling!</p>` : ''}
            ${shuKinoIzohlari.map(rev => `
                <div class="single-review-card">
                    <div class="review-author-meta">
                        <span> ${rev.user.split('@')[0]}</span>
                        <span style="color:#ffc107;">${'★'.repeat(rev.rating)}${'☆'.repeat(5-rev.rating)}</span>
                    </div>
                    <p style="font-size:0.9rem; color:var(--text-primary); margin-top:5px;">${rev.text}</p>
                </div>
            `).join('')}
        </div>
    `;

    // Yulduzchalarni tanlash klik hodisasi
    document.querySelectorAll(".star-select-item").forEach(star => {
        star.onclick = function() {
            joriyTanlanganBaho = parseInt(this.getAttribute("data-star"));
            renderIzohlarTizimi(kinoNomi);
        };
    });
}

function saqlashYangiIzoh(kinoNomi) {
    const user = localStorage.getItem("tizimgaKirganUser");
    if(!user) {
        alert("Izoh qoldirish uchun profil yaratishingiz va tizimga kirishingiz zarur!");
        return;
    }

    const matn = document.getElementById("shaxsiyIzohMatni").value.trim();
    if(!matn) {
        alert("Izoh matnini yozing!");
        return;
    }

    let barchaIzohlar = JSON.parse(localStorage.getItem("uzmovi_global_reviews")) || [];
    barchaIzohlar.push({
        movie: kinoNomi,
        user: user,
        rating: joriyTanlanganBaho,
        text: matn
    });

    localStorage.setItem("uzmovi_global_reviews", JSON.stringify(barchaIzohlar));
    joriyTanlanganBaho = 5; // Formani tozalaymiz
    renderIzohlarTizimi(kinoNomi);
    yangilaBarchaRoʻyxatlarni(); // Profildagi ko'rinishni yangilash
}

// ================= 4-FUNKSIYA: DARK / LIGHT REJIMNI INIT QILISH =================
function initTheme() {
    const saqlanganTheme = localStorage.getItem("uzmovi_theme") || "dark";
    const themeBtn = document.getElementById("themeToggleBtn");
    if(saqlanganTheme === "light") {
        document.body.classList.replace("dark-theme", "light-theme");
        if(themeBtn) themeBtn.innerText = "☀️";
    } else {
        document.body.classList.replace("light-theme", "dark-theme");
        if(themeBtn) themeBtn.innerText = "🌙";
    }
}

// ================= 5-FUNKSIYA: PERSONAJ AVATARLARINI TANLASH VA RO'YXATGA OLISH =================
function yuklashAvatarVariantlari() {
    const grid = document.getElementById("avatarSelectionGrid");
    if(!grid) return;
    grid.innerHTML = "";

    const joriyAvatarUrl = localStorage.getItem(getUserStorageKey("user_avatar_img")) || "";

    avatarOptions.forEach(av => {
        const div = document.createElement("div");
        div.className = `avatar-option-item ${joriyAvatarUrl === av.url ? 'selected' : ''}`;
        div.onclick = () => {
            localStorage.setItem(getUserStorageKey("user_avatar_img"), av.url);
            document.getElementById("avatarModalBloki").classList.add("hidden");
            tekshirishJoriyFoydalanuvchi();
        };
        div.innerHTML = `<img src="${av.url}" alt="${av.name}" title="${av.name}">`;
        grid.appendChild(div);
    });
}

function tekshirishJoriyFoydalanuvchi() {
    const joriyUser = localStorage.getItem("tizimgaKirganUser");
    const authTugma = document.getElementById("rendon");
    const homeBtnFromProfile = document.getElementById("homeBtnFromProfile");
    const displayUsername = document.getElementById("displayUsername");
    const userAvatar = document.getElementById("userAvatar");

    if (joriyUser) {
        const usernameClean = joriyUser.split("@")[0];
        if (displayUsername) displayUsername.innerHTML = `${usernameClean} <span class="edit-icon"></span>`;
        
        // 5-FUNKSIYA: Agar foydalanuvchi shaxsiy personaj avatarini tanlagan bo'lsa uni chizamiz
        const saqlanganAvatar = localStorage.getItem(getUserStorageKey("user_avatar_img"));
        if (userAvatar) {
            if(saqlanganAvatar) {
                userAvatar.innerHTML = `<img src="${saqlanganAvatar}" alt="avatar">`;
            } else {
                userAvatar.innerText = usernameClean.charAt(0).toUpperCase();
            }
        }
    }

    const profilOchiqmi = !document.getElementById("profilSahifaBloki").classList.contains("hidden");

    if (homeBtnFromProfile) {
        if (profilOchiqmi && joriyUser) homeBtnFromProfile.classList.remove("hidden");
        else homeBtnFromProfile.classList.add("hidden");
    }

    if (authTugma) {
        if (profilOchiqmi && joriyUser) {
            authTugma.innerText = "Chiqish (Exit)";
            authTugma.classList.add("exit-mode");
        } else {
            authTugma.innerText = joriyUser ? "Profilga kirish" : "Tizimga kirish";
            authTugma.classList.remove("exit-mode");
        }
    }
}

// ================= KINO ICHKI SAHIFASI VA SILLIQ INTEGRATSIYA =================
async function ochishIchkiSahifa(kinoNomi) {
    ochishAniqBlok("kinoIchkiSahifa");
    const ichkiSahifa = document.getElementById("kinoIchkiSahifa");
    if (!ichkiSahifa) return;
    ichkiSahifa.innerHTML = "<p style='text-align:center; padding:50px; color:var(--text-secondary);'>Film yuklanmoqda...</p>";

    try {
        const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(kinoNomi)}&plot=full`);
        const data = await res.json();

        if (data.Response === "True") {
            const posterUrl = data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/300x450";
            const playerUrl = `https://vidsrc.xyz/embed/movie?imdb=${data.imdbID}`;
            const safePlot = data.Plot ? data.Plot.replace(/'/g, "\\'").replace(/"/g, '\\"') : "Syujet mavjud emas.";

            const liked = getUserListData("sevimliFilmlar").some(k => k.title === data.Title);
            const wlist = getUserListData("watchlistFilmlar").some(k => k.title === data.Title);
            const watched = getUserListData("watchedFilmlar").some(k => k.title === data.Title);

            ichkiSahifa.innerHTML = `
                <div class="movie-detail-header">
                    <span>${data.Title.toUpperCase()} (${data.Year})</span>
                    <button class="action-toggle-btn" onclick="ochishAniqBlok('boshSahifaBloki')">⬅ Orqaga</button>
                </div>
                <div class="movie-detail-main">
                    <div class="movie-detail-flex">
                        <div class="detail-poster">
                            <img src="${posterUrl}" alt="${data.Title}" id="posterPlayerBtn" style="cursor:pointer;" title="Pleyerni yoqish">
                        </div>
                        <div class="detail-info-table">
                            <div class="info-row"><div class="info-label">Nomi</div><div class="info-value">${data.Title}</div></div>
                            <div class="info-row"><div class="info-label">Janr</div><div class="info-value">${data.Genre}</div></div>
                            <div class="info-row"><div class="info-label">Yil</div><div class="info-value"> ${data.Year}</div></div>
                            <div class="info-row"><div class="info-label">Reyting</div><div class="info-value" style="color:#ffc107; font-weight:bold;">⭐ ${data.imdbRating}</div></div>
                            
                            <div class="interaction-panel">
                                <button id="btnLike" class="action-toggle-btn ${liked ? 'active' : ''}">❤ Sevimli</button>
                                <button id="btnWatchlist" class="action-toggle-btn ${wlist ? 'active' : ''}"> Watchlist</button>
                                <button id="btnWatched" class="action-toggle-btn ${watched ? 'active' : ''}"> Watched</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="detail-plot-box"><strong>Film syujeti:</strong><br><br>${data.Plot}</div>
                <div id="playerSection" class="player-section hidden">
                    <div class="video-wrapper"><iframe id="moviePlayer" src="" allowfullscreen="true"></iframe></div>
                </div>
                
                <div class="reviews-section-wrapper" id="movieReviewsSection"></div>
            `;

            window.currentMovieUrl = playerUrl;
            document.getElementById("posterPlayerBtn").onclick = () => pleyerniYoqish();
            
            // Tugmalar funksionali
            document.getElementById("btnLike").onclick = function() { toggleData("sevimliFilmlar", data.Title, posterUrl, safePlot); this.classList.toggle("active"); };
            document.getElementById("btnWatchlist").onclick = function() { toggleData("watchlistFilmlar", data.Title, posterUrl, safePlot); this.classList.toggle("active"); };
            document.getElementById("btnWatched").onclick = function() { toggleData("watchedFilmlar", data.Title, posterUrl, safePlot); this.classList.toggle("active"); };

            // Izohlarni chizish
            renderIzohlarTizimi(data.Title);

        } else { ichkiSahifa.innerHTML = "<p style='text-align:center; padding:50px; color:#ef4444;'>Kino topilmadi!</p>"; }
    } catch (err) { console.error(err); }
}

function pleyerniYoqish() {
    const playerSection = document.getElementById("playerSection");
    const moviePlayer = document.getElementById("moviePlayer");
    if (moviePlayer && playerSection) {
        moviePlayer.src = window.currentMovieUrl;
        playerSection.classList.remove("hidden");
        playerSection.scrollIntoView({ behavior: "smooth" });
    }
}

// BARCHA JORALANGAN RO'YXATLARNI (PROFIL) YANGILASH
function yangilaBarchaRoʻyxatlarni() {
    const renderTurlari = [
        { key: "sevimliFilmlar", gridId: "likedGrid", countId: "likedCount", label: "Sevimli filmlar" },
        { key: "watchlistFilmlar", gridId: "watchlistGrid", countId: "watchlistCount", label: "Keyinroq ko'rish" },
        { key: "watchedFilmlar", gridId: "watchedGrid", countId: "watchedCount", label: "Ko'rilgan filmlar" }
    ];

    let barchaIzohlar = JSON.parse(localStorage.getItem("uzmovi_global_reviews")) || [];

    renderTurlari.forEach(tur => {
        const dataRoʻyxat = getUserListData(tur.key);
        const countElement = document.getElementById(tur.countId);
        const gridElement = document.getElementById(tur.gridId);

        if (countElement) countElement.innerText = `${tur.label} (${dataRoʻyxat.length} ta)`;

        if (gridElement) {
            gridElement.innerHTML = "";
            if (dataRoʻyxat.length === 0) {
                gridElement.innerHTML = `<p class="empty-message">Bu roʻyxatda hozircha filmlar yo'q.</p>`;
            } else {
                dataRoʻyxat.forEach((kino) => {
                    const card = document.createElement("div");
                    if (tur.key === "watchedFilmlar") {
                        // 3-FUNKSIYA INTEGRATSIYASI: Foydalanuvchi ushbu kinoga o'z profilida qoldirgan bahosini ham chiqaradi
                        const userShaxsiyFikri = barchaIzohlar.find(r => r.movie === kino.title && r.user === localStorage.getItem("tizimgaKirganUser"));
                        const starBadge = userShaxsiyFikri ? `★ Berilgan baho: ${userShaxsiyFikri.rating}/5` : "Baho berilmagan";

                        card.className = "watched-detail-card";
                        card.innerHTML = `
                            <img class="watched-card-poster" src="${kino.poster !== 'N/A' ? kino.poster : 'https://via.placeholder.com/200x270'}" alt="${kino.title}">
                            <div class="watched-card-info">
                                <h4>${kino.title}</h4>
                                <span class="profile-review-badge">${starBadge}</span>
                                <p class="watched-card-plot" style="margin-top:5px;"><strong>Fikringiz:</strong> ${userShaxsiyFikri ? userShaxsiyFikri.text : 'Izoh qoldirilmagan.'}</p>
                            </div>`;
                    } else {
                        card.className = "movie-card";
                        card.innerHTML = `
                            <div class="poster-box">
                                <img src="${kino.poster !== 'N/A' ? kino.poster : 'https://via.placeholder.com/200x270'}" alt="${kino.title}">
                            </div>
                            <div class="movie-info-layer">
                                <h4>${kino.title}</h4>
                            </div>`;
                    }
                    card.onclick = () => ochishIchkiSahifa(kino.title);
                    gridElement.appendChild(card);
                });
            }
        }
    });
}

// QOLGAN STANDARD FUNKSIYALAR
function toggleData(key, title, poster, plot) {
    let list = getUserListData(key);
    const idx = list.findIndex(k => k.title === title);
    if (idx === -1) { list.push({ title, poster, plot }); } 
    else { list.splice(idx, 1); }
    setUserListData(key, list);
    yangilaBarchaRoʻyxatlarni();
}

function tugmaLikeBosildi(e, title, poster, plot) {
    let list = getUserListData("sevimliFilmlar");
    const idx = list.findIndex(k => k.title === title);
    if (idx === -1) {
        list.push({ title, poster, plot });
        e.currentTarget.classList.add("active");
    } else {
        list.splice(idx, 1);
        e.currentTarget.classList.remove("active");
    }
    setUserListData("sevimliFilmlar", list);
    yangilaBarchaRoʻyxatlarni();
}

function ochishAniqBlok(blokId) {
    ["boshSahifaBloki", "kinoIchkiSahifa", "profilSahifaBloki"].forEach(id => {
        document.getElementById(id)?.classList.add("hidden");
    });
    document.getElementById(blokId)?.classList.remove("hidden");
    tekshirishJoriyFoydalanuvchi();
}

async function startDynamicBanner() {
    const banner = document.getElementById("dynamicBanner");
    if (!banner) return;
    const changeBg = async () => {
        const randItem = defaultMovies[Math.floor(Math.random() * defaultMovies.length)];
        const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(randItem.title)}`);
        const d = await res.json();
        if (d.Response === "True" && d.Poster !== 'N/A') banner.style.backgroundImage = `url('${d.Poster}')`;
    };
    changeBg();
    if(bannerInterval) clearInterval(bannerInterval);
    bannerInterval = setInterval(changeBg, 7000);
}

async function yuklashDumaloqKarusel() {
    const carousel = document.getElementById("storyCarousel");
    if (!carousel) return;
    carousel.innerHTML = "";
    const shuffled = [...defaultMovies].sort(() => 0.5 - Math.random()).slice(0, 50);
    for (let m of shuffled) {
        try {
            const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(m.title)}`);
            const data = await res.json();
            if (data.Response === "True" && data.Poster !== 'N/A') {
                const liked = getUserListData("sevimliFilmlar").some(k => k.title === data.Title);
                const div = document.createElement("div");
                div.className = "story-card";
                div.onclick = () => ochishIchkiSahifa(data.Title);
                div.innerHTML = `
                    <button class="card-like-icon ${liked ? 'active' : ''}" id="like-car-${data.imdbID}">❤</button>
                    <img src="${data.Poster}" alt="">`;
                carousel.appendChild(div);
                document.getElementById(`like-car-${data.imdbID}`).onclick = (e) => {
                    e.stopPropagation();
                    tugmaLikeBosildi(e, data.Title, data.Poster, data.Plot);
                };
            }
        } catch(e){}
    }
}

async function yuklashTasodifiyReklama() {
    const reklamaBox = document.getElementById("reklamaKino");
    if (!reklamaBox) return;
    const rand = defaultMovies[Math.floor(Math.random() * defaultMovies.length)];
    const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(rand.title)}`);
    const data = await res.json();
    if (data.Response === "True") {
        reklamaBox.innerHTML = `<img src="${data.Poster}" alt="" style="cursor:pointer;"><h4>${data.Title}</h4>`;
        reklamaBox.querySelector("img").onclick = () => ochishIchkiSahifa(data.Title);
    }
}

function initDragScroll() {
    const slider = document.getElementById("storyContainer");
    if (!slider) return;
    let isDown = false, startX, scrollLeft;
    slider.addEventListener("mousedown", (e) => { isDown = true; startX = e.pageX - slider.offsetLeft; scrollLeft = slider.scrollLeft; });
    slider.addEventListener("mouseleave", () => isDown = false);
    slider.addEventListener("mouseup", () => isDown = false);
    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        const walk = (e.pageX - slider.offsetLeft - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
}

function initAuthButtonLogic() {
    const authTugma = document.getElementById("rendon");
    authTugma?.addEventListener("click", () => {
        const joriyUser = localStorage.getItem("tizimgaKirganUser");
        const profilOchiqmi = !document.getElementById("profilSahifaBloki").classList.contains("hidden");
        if (profilOchiqmi) {
            localStorage.removeItem("tizimgaKirganUser");
            ochishAniqBlok("boshSahifaBloki");
            yangilaBarchaRoʻyxatlarni();
        } else {
            if (joriyUser) {
                ochishAniqBlok("profilSahifaBloki");
                yangilaBarchaRoʻyxatlarni();
            } else {
                document.getElementById("loginModalBloki").classList.remove("hidden");
                // Har gal login ochilganda default Kirish holatida ochiladi
                almashtirishAuthRejim(false);
            }
        }
    });
}

function yopishLoginModal() { document.getElementById("loginModalBloki").classList.add("hidden"); }

// TAHRIRLANGAN VA YANGILANGAN AUTH REJIM ALMASHTIRUVCHISI ("Sizda profil bormi?")
function almashtirishAuthRejim(r) {
    isRegisterMode = r;
    const formTitle = document.getElementById("loginFormTitle");
    const submitBtn = document.getElementById("authSubmitBtn");
    
    if (formTitle) formTitle.innerText = r ? "Ro'yxatdan O'tish" : "Tizimga Kirish";
    if (submitBtn) submitBtn.innerText = r ? "Akkount Yaratish" : "Kirish";

    // Dinamik interaktiv pastki matn (Sizda profil bormi? funksiyasi shu yerda shakllanadi)
    let dynamicToggleOption = document.getElementById("authDynamicToggleOption");
    if (!dynamicToggleOption) {
        // Agar oyna ichida o'tish konteyneri mavjud bo'lmasa, uni yaratib joylaymiz
        const authForm = document.getElementById("authForm");
        if (authForm) {
            dynamicToggleOption = document.createElement("div");
            dynamicToggleOption.id = "authDynamicToggleOption";
            authForm.appendChild(dynamicToggleOption);
        }
    }

    if (dynamicToggleOption) {
        if (r) {
            // Ro'yxatdan o'tish rejimidagi ko'rinish
            dynamicToggleOption.innerHTML = `
                <p class="auth-toggle-text">
                    Sizda profil bormi? 
                    <span class="auth-toggle-link" onclick="almashtirishAuthRejim(false)">Tizimga kirish</span>
                </p>
            `;
        } else {
            // Tizimga kirish rejimidagi ko'rinish
            dynamicToggleOption.innerHTML = `
                <p class="auth-toggle-text">
                    Yangi foydalanuvchimisiz? 
                    <span class="auth-toggle-link" onclick="almashtirishAuthRejim(true)">Ro'yxatdan o'tish</span>
                </p>
            `;
        }
    }
}

function avtorizatsiyaTizimi(e) {
    e.preventDefault();
    const email = document.getElementById("authEmail").value.trim();
    const parol = document.getElementById("authParol").value.trim();
    let db = JSON.parse(localStorage.getItem("uzmovi_users_baza")) || [];
    if (isRegisterMode) {
        if (db.some(u => u.email === email)) { alert("Bu email band!"); return; }
        db.push({ email, parol });
        localStorage.setItem("uzmovi_users_baza", JSON.stringify(db));
    } else {
        if (!db.some(u => u.email === email && u.parol === parol)) { alert("Xato ma'lumot!"); return; }
    }
    localStorage.setItem("tizimgaKirganUser", email);
    document.getElementById("loginModalBloki").classList.add("hidden");
    document.getElementById("authForm").reset();
    ochishAniqBlok("profilSahifaBloki");
    yangilaBarchaRoʻyxatlarni();
}

function switchProfileTab(paneId, btnId) {
    document.querySelectorAll(".tab-panel-item").forEach(p => p.classList.add("hidden"));
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.getElementById(paneId).classList.remove("hidden");
    document.getElementById(btnId).classList.add("active");
}

const qidirishTugmasi = document.getElementById("qidirishTugmasi");
if(qidirishTugmasi) {
    qidirishTugmasi.addEventListener("click", () => {
        const val = document.getElementById("kinoInput").value.trim();
        if(val) ochishIchkiSahifa(kinoLugat[val.toLowerCase()] || val);
    });
}
// Brauzer manzilidagi parametrlarni tekshirish va ishlatish
function tekshirishURLParametrlari() {
    // URL ichidan query parametrlarni ajratib olamiz (masalan: ?movie=Avatar)
    const urlParams = new URLSearchParams(window.location.search);
    const kinoNomi = urlParams.get('movie');

    if (kinoNomi) {
        // Agar manzil satrida kino nomi bo'lsa, uni avtomatik ochamiz
        // Ruscha kiritilgan nomlarni ham lug'atdan tekshirib o'tadi
        const qidirilayotganKino = kinoLugat[kinoNomi.toLowerCase()] || kinoNomi;
        ochishIchkiSahifa(qidirilayotganKino);
    }
}
// === LEADERBOARD (FAOL FOYDALANUVCHILAR) DATA ===
const leaderboardUsers = [
    { name: "behruzbek12329112010", totalMovies: 2871308, weekMovies: 23676, hasAvatar: false },
    { name: "Lucas", totalMovies: 136226, weekMovies: 22058, hasAvatar: false },
    { name: "Roman", totalMovies: 703852, weekMovies: 20169, hasAvatar: false },
    { name: "RuiZafon", totalMovies: 2347658, weekMovies: 17258, hasAvatar: false },
    { name: "老李", totalMovies: 14271, weekMovies: 13008, hasAvatar: false },
    { name: "Media-ops", totalMovies: 40186, weekMovies: 12143, hasAvatar: false },
    { name: "TUZHENNING", totalMovies: 11829, weekMovies: 11829, hasAvatar: false },
    { name: "enterpr1se", totalMovies: 2813771, weekMovies: 11023, hasAvatar: false },
    { name: "Samara", totalMovies: 4682689, weekMovies: 7755, hasAvatar: false },
    { name: "Kreegarn", totalMovies: 141366, weekMovies: 7638, hasAvatar: false }
];

function yuklashLeaderboard() {
    const gridContainer = document.getElementById("leaderboardGrid");
    if (!gridContainer) return;

    // Eng yuqori qiymatlarni aniqlaymiz (Foiz barini to'g'ri chizish uchun)
    const maxTotal = Math.max(...leaderboardUsers.map(u => u.totalMovies));
    const maxWeek = Math.max(...leaderboardUsers.map(u => u.weekMovies));

    gridContainer.innerHTML = ""; // Tozalash

    leaderboardUsers.forEach(user => {
        // Foizlarni hisoblash
        const totalPercent = (user.totalMovies / maxTotal) * 100;
        const weekPercent = (user.weekMovies / maxWeek) * 100;

        // Avatar uchun birinchi harfni olish
        const firstLetter = user.name.charAt(0).toUpperCase();

        // Sonlarni chiroyli formatda chiqarish (masalan: 2,871,308)
        const formattedTotal = user.totalMovies.toLocaleString();
        const formattedWeek = user.weekMovies.toLocaleString();

        const userRowHTML = `
            <div class="user-row">
                <div class="user-avatar-text">${firstLetter}</div>
                <div class="user-info">
                    <div class="user-name">${user.name}</div>
                    
                    <div class="progress-container">
                        <div class="progress-bar-wrapper">
                            <div class="progress-track">
                                <div class="progress-fill fill-total" style="width: ${totalPercent}%"></div>
                            </div>
                            <span class="count-text">${formattedTotal}</span>
                        </div>
                        
                        <div class="progress-bar-wrapper">
                            <div class="progress-track">
                                <div class="progress-fill fill-week" style="width: ${weekPercent}%"></div>
                            </div>
                            <span class="count-text">${formattedWeek}</span>
                        </div>
                    </div>

                </div>
            </div>
        `;
        gridContainer.insertAdjacentHTML("beforeend", userRowHTML);
    });
}
// APPLE TV USLUBIDAGI PREMIUM SLAYDER MA'LUMOTLARI
const appleTvSlides = [
    {
        title: "The New Home of Formula 1",
        desc: "Watch every race weekend live or on-demand with an Apple TV subscription. Feel the limit of speed.",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200",
        btnText: "Accept Free Trial"
    },
    {
        title: "Dune: Part Two",
        desc: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200",
        btnText: "Watch Now"
    },
    {
        title: "The Batman",
        desc: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
        image: "https://i.pinimg.com/originals/51/d1/86/51d1864a8ee21c2514890bcba45c8622.jpg",
        btnText: "Stream Movie"
    },
    {
        title: "Interstellar: 4K Remastered",
        desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
        btnText: "Watch in UltraHD"
    }
];

let activeIndex = 0;
let autoTimer;

document.addEventListener("DOMContentLoaded", () => {
    generateAppleSlider();
    startTimer();
});

// Slayder interfeysini xatosiz qurish
function generateAppleSlider() {
    const wrapper = document.getElementById("appleTvWrapper");
    const dotsContainer = document.getElementById("sliderDots");
    
    if (!wrapper || !dotsContainer) return;

    wrapper.innerHTML = "";
    dotsContainer.innerHTML = "";

    appleTvSlides.forEach((slide, idx) => {
        // Slayd rasm bloki
        const slideHtml = `
            <div class="slide-item ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                <img src="${slide.image}" class="slide-img" alt="${slide.title}">
                <div class="slide-overlay"></div>
            </div>
        `;
        wrapper.insertAdjacentHTML("beforeend", slideHtml);

        // Navigatsiya nuqtachasi
        const dotHtml = `
            <div class="dot ${idx === 0 ? 'active' : ''}" onclick="selectSlide(${idx})"></div>
        `;
        dotsContainer.insertAdjacentHTML("beforeend", dotHtml);
    });

    // Birinchi slayd matnlarini o'rnatish
    updateTextContent(0);
}

// Matnlar va tugmalarni yangilash (Animatsiyani qayta ishga tushirish bilan)
function updateTextContent(idx) {
    const titleEl = document.getElementById("activeSlideTitle");
    const descEl = document.getElementById("activeSlideDesc");
    const btnEl = document.getElementById("activeSlideBtn");
    
    const data = appleTvSlides[idx];

    // Animatsiya qaytadan ishlashi uchun eski elementlarni o'chirib-yoqamiz
    titleEl.style.animation = 'none';
    descEl.style.animation = 'none';
    btnEl.style.animation = 'none';
    
    titleEl.offsetHeight; // Reflow effekt (animatsiyani reset qilish uchun yordam beradi)

    titleEl.textContent = data.title;
    descEl.textContent = data.desc;
    btnEl.textContent = data.btnText;

    titleEl.style.animation = '';
    descEl.style.animation = '';
    btnEl.style.animation = '';
}

// Slaydlarni o'zgartirish mexanizmi
function changeSlide(nextIdx) {
    const slides = document.querySelectorAll(".slide-item");
    const dots = document.querySelectorAll(".dot");

    if (slides.length === 0) return;

    // Indeks chegarasini boshqarish
    if (nextIdx >= slides.length) activeIndex = 0;
    else if (nextIdx < 0) activeIndex = slides.length - 1;
    else activeIndex = nextIdx;

    // Klasslarni yangilash
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[activeIndex].classList.add("active");
    dots[activeIndex].activeIndex = activeIndex;

    // Matnlarni rasmga mos almashtirish
    updateTextContent(activeIndex);
}

// Avtomatik almashtirish taymeri (Har 6 soniyada - Apple TV standarti)
function startTimer() {
    autoTimer = setInterval(() => {
        changeSlide(activeIndex + 1);
    }, 6000);
}

// Nuqtacha bosilganda ishlaydigan funksiya
function selectSlide(idx) {
    clearInterval(autoTimer); // Foydalanuvchi bosganda taymerni vaqtincha to'xtatamiz
    changeSlide(idx);
    startTimer(); // Taymerni noldan qayta yoqamiz
}

// AUTH MODAL ORQA FONINI KINO BANNERI BILAN ZAMONAVIY VA JAZZOBADOR QILISH CSS-IN-JS EFFEKTI
function initAuthDynamicUIStyle() {
    const modalBloki = document.getElementById("loginModalBloki");
    if (!modalBloki) return;

    // Modal tashqi konteyneriga chiroyli blur va zamonaviy kino orqa foni beramiz
    modalBloki.style.background = "linear-gradient(rgba(10, 10, 14, 0.88), rgba(15, 15, 25, 0.94)), url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1400') no-repeat center/cover";
    modalBloki.style.backdropFilter = "blur(12px)";
    modalBloki.style.display = "flex";
    modalBloki.style.alignItems = "center";
    modalBloki.style.justifyContent = "center";

    // CSS qoidalarini dinamik inject qilamiz (Sizda profil bormi? qismi juda jozibador ko'rinishi uchun)
    const styleId = "uzmovi-auth-dynamic-styles";
    if (!document.getElementById(styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = styleId;
        styleSheet.innerText = `
            .auth-toggle-text {
                margin-top: 20px;
                text-align: center;
                font-size: 0.95rem;
                color: #b3b3b3 !important;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .auth-toggle-link {
                color: #ff3e6c !important;
                font-weight: 600;
                cursor: pointer;
                margin-left: 5px;
                text-decoration: none;
                transition: all 0.3s ease;
                border-bottom: 1px dashed transparent;
            }
            .auth-toggle-link:hover {
                color: #ff6b8b !important;
                border-bottom-color: #ff6b8b;
                text-shadow: 0 0 8px rgba(255, 62, 108, 0.4);
            }
            #loginModalBloki .login-box-card, #loginModalBloki .modal-content {
                background: rgba(20, 20, 35, 0.75) !important;
                border: 1px solid rgba(255, 255, 255, 0.08) !important;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6) !important;
                border-radius: 16px !important;
                padding: 30px !important;
                backdrop-filter: blur(8px);
            }
        `;
        document.head.appendChild(styleSheet);
    }
}

// Sahifa to'liq yuklanganda reyting paneli ishga tushadi
window.addEventListener("DOMContentLoaded", () => {
    yuklashLeaderboard();
});

// Sahifa yuklanganda parametrlarni tekshirish funksiyasini ishga tushiramiz
window.addEventListener("DOMContentLoaded", () => {
    tekshirishURLParametrlari();
});
// ================= UNIVERSAL UI CLICK TOVUSH GENERATORI (Web Audio API) =================
function chalishUiClickTovushi() {
    try {
        // Brauzer ovoz tizimini yaratamiz
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        // Tovush turi: 'sine' (silliq), 'square', 'sawtooth', 'triangle' (elektron)
        oscillator.type = 'sine'; 
        
        // Chastota (Ovoz balandligi/tonalligi): 600Hz - qisqa va yoqimli UI chertish ovozi
        oscillator.frequency.setValueAtTime(580, audioCtx.currentTime);
        // Ovoz pasayib borishi (Exponensial pasayish effekti)
        gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.08);

        // Tovushni boshlash va 0.08 soniyadan keyin o'chirish (juda qisqa chertish)
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.08);
    } catch (e) {
        console.log("Audio API brauzerda faollashmadi:", e);
    }
}

// ================= DASTURDAGI HAR QANDAY TUGMAGA TOVUSHNI AVTOMAT BOG'LASH =================
document.addEventListener("DOMContentLoaded", () => {
    // Event Delegation orqali butun sahifadagi tugmalarni klikini tutib olamiz
    document.body.addEventListener("click", (event) => {
        // Agar bosilgan element button bo'lsa yoki button ichidagi element bo'lsa
        const button = event.target.closest("button") || 
                       event.target.closest(".genre-btn") || 
                       event.target.closest(".star-select-item") ||
                       event.target.closest(".auth-toggle-link") ||
                       event.target.closest(".story-card");
                       
        if (button) {
            chalishUiClickTovushi();
        }
    });
});
// === SCRIPT.JS FAILINGIZNING ENG OXIRIGA SHUNDOQLIGICHA TASHLA_VERING ===

// 1. Ovoz eshittirish funksiyasi
function chalishUiClickTovushi() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.type = 'sine'; 
        oscillator.frequency.setValueAtTime(580, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.08);
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.08);
    } catch (e) {
        console.log("Audio xatosi:", e);
    }
}

// 2. Event Delegation orqali har qanday tugmaga ovoz berish va Den/Noch mantiqini tekshirish
document.addEventListener("DOMContentLoaded", () => {
    // Butun ekran bo'ylab tugmalar bosilishini eshitish
    document.body.addEventListener("click", (event) => {
        const button = event.target.closest("button") || 
                       event.target.closest(".genre-btn") || 
                       event.target.closest(".star-select-item") ||
                       event.target.closest(".auth-toggle-link") ||
                       event.target.closest(".story-card");
                       
        if (button) {
            chalishUiClickTovushi();
        }
    });
});
function ochishAniqBlok(blokId) {
    ["boshSahifaBloki", "kinoIchkiSahifa", "profilSahifaBloki"].forEach(id => {
        const blok = document.getElementById(id);
        if (blok) {
            blok.classList.add("hidden");
            // Animatsiyani qayta tiklash uchun CSS trigger
            blok.style.animation = 'none';
            blok.offsetHeight; /* reflow */
            blok.style.animation = null;
        }
    });
    
    const faolBlok = document.getElementById(blokId);
    if (faolBlok) {
        faolBlok.classList.remove("hidden");
    }
    tekshirishJoriyFoydalanuvchi();
}
 