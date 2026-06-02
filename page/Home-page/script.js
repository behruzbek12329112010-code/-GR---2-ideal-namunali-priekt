  const API_KEY = "ed1c56f1";
const BASE_URL = "https://www.omdbapi.com";


const defaultMovies = [

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


    { title: "The Walking Dead", genre: "Horror" },
    { title: "Resident Evil", genre: "Horror" },
    { title: "The Haunting of Hill House", genre: "Horror" },

];


const avatarOptions = [
    { name: "Batman", url: "https://i.pinimg.com/474x/2d/a9/01/2da9017b0fe7b001e54a88c3b05860f2.jpg?nii=t" },
    { name: "Batman", url: "https://i.pinimg.com/474x/2d/a9/01/2da9017b0fe7b001e54a88c3b05860f2.jpg?nii=t" },
    { name: "Batman", url: "https://i.pinimg.com/474x/2d/a9/01/2da9017b0fe7b001e54a88c3b05860f2.jpg?nii=t" },
    { name: "Batman", url: "https://i.pinimg.com/474x/2d/a9/01/2da9017b0fe7b001e54a88c3b05860f2.jpg?nii=t" },
    { name: "Batman", url: "https://i.pinimg.com/474x/2d/a9/01/2da9017b0fe7b001e54a88c3b05860f2.jpg?nii=t" },
    { name: "Batman", url: "https://i.pinimg.com/474x/2d/a9/01/2da9017b0fe7b001e54a88c3b05860f2.jpg?nii=t" },
    { name: "Batman", url: "https://i.pinimg.com/474x/2d/a9/01/2da9017b0fe7b001e54a88c3b05860f2.jpg?nii=t" },
    { name: "Batman", url: "https://i.pinimg.com/474x/2d/a9/01/2da9017b0fe7b001e54a88c3b05860f2.jpg?nii=t" },
    { name: "Batman", url: "https://i.pinimg.com/474x/2d/a9/01/2da9017b0fe7b001e54a88c3b05860f2.jpg?nii=t" },
    { name: "Batman", url: "https://i.pinimg.com/474x/2d/a9/01/2da9017b0fe7b001e54a88c3b05860f2.jpg?nii=t" },
    { name: "Batman", url: "https://i.pinimg.com/474x/2d/a9/01/2da9017b0fe7b001e54a88c3b05860f2.jpg?nii=t" },
    { name: "Joker", url: "https://i.pinimg.com/736x/99/f6/4d/99f64dcb61bb72be1bc4b1c21300e3d0.jpg" },
    { name: "Wednesday", url: "https://i.pinimg.com/originals/df/cd/45/dfcd453776ac0ac07be2f2be5e89d5af.png?nii=t" },
    { name: "Spider-Man", url: "https://i.pinimg.com/originals/49/94/ec/4994ecec19904129111f44456573adbd.jpg?nii=t" },
    { name: "Iron Man", url: "https://i.pinimg.com/originals/b2/a3/ef/b2a3efca86da39df379c030be2784942.jpg" },
    { name: "Jack Sparrow", url: "https://masterpiecer-images.s3.yandex.net/5f9fc7bf2267cb3:upscaled" },
    { name: "Tyler Durden", url: "https://i.pinimg.com/originals/a0/31/a7/a031a7a0ef374e5510ff33f8f299fe2c.jpg?nii=t" },
    { name: "Walter White", url: "https://i.pinimg.com/originals/49/94/ec/4994ecec19904129111f44456573adbd.jpg?nii=t" }
];

const kinoLugat = { "аватар": "Avatar", "начало": "Inception", "интерстеллар": "Interstellar", "гладиатор": "Gladiator" };

let isRegisterMode = false;
let bannerInterval = null;
let joriyTanlanganBaho = 5; 
let joriyFiltrJanr = "all"; 

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
    initTheme(); 

    document.querySelectorAll(".genre-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".genre-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            joriyFiltrJanr = e.target.getAttribute("data-genre");
            yuklashPremyeralar(); 
        });
    });

   
    const kinoInput = document.getElementById("kinoInput");
    if(kinoInput) {
        kinoInput.addEventListener("input", (e) => {
            const text = e.target.value.trim();
            ijroJonliQidiruv(text);
        });
    }


    document.addEventListener("click", (e) => {
        const dropdown = document.getElementById("liveSearchDropdown");
        if(dropdown && !e.target.closest(".main-search-wrapper")) {
            dropdown.classList.add("hidden");
        }
    });

   
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
    

    initAuthDynamicUIStyle();
});


async function yuklashPremyeralar() {
    const grid = document.getElementById("kinoGrid");
    if (!grid) return;
    grid.innerHTML = "<p style='color:var(--text-secondary); text-align:center; grid-column:1/-1;'>Yuklanmoqda...</p>";

 
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


async function ijroJonliQidiruv(matn) {
    const dropdown = document.getElementById("liveSearchDropdown");
    if(!dropdown) return;

    if(matn.length < 3) {
        dropdown.classList.add("hidden");
        return;
    }

    try {

        const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(matn)}`);
        const data = await res.json();

        if(data.Response === "True" && data.Search) {
            dropdown.innerHTML = "";
            dropdown.classList.remove("hidden");

   
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


function renderIzohlarTizimi(kinoNomi) {
    const reviewsBox = document.getElementById("movieReviewsSection");
    if(!reviewsBox) return;


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
    joriyTanlanganBaho = 5; 
    renderIzohlarTizimi(kinoNomi);
    yangilaBarchaRoʻyxatlarni(); 
}

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
            
     
            document.getElementById("btnLike").onclick = function() { toggleData("sevimliFilmlar", data.Title, posterUrl, safePlot); this.classList.toggle("active"); };
            document.getElementById("btnWatchlist").onclick = function() { toggleData("watchlistFilmlar", data.Title, posterUrl, safePlot); this.classList.toggle("active"); };
            document.getElementById("btnWatched").onclick = function() { toggleData("watchedFilmlar", data.Title, posterUrl, safePlot); this.classList.toggle("active"); };

         
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
    const shuffled = [...defaultMovies].sort(() => 0.5 - Math.random()).slice(0, 20);
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

                almashtirishAuthRejim(false);
            }
        }
    });
}

function yopishLoginModal() { document.getElementById("loginModalBloki").classList.add("hidden"); }

function almashtirishAuthRejim(r) {
    isRegisterMode = r;
    const formTitle = document.getElementById("loginFormTitle");
    const submitBtn = document.getElementById("authSubmitBtn");
    
    if (formTitle) formTitle.innerText = r ? "Ro'yxatdan O'tish" : "Tizimga Kirish";
    if (submitBtn) submitBtn.innerText = r ? "Akkount Yaratish" : "Kirish";


    let dynamicToggleOption = document.getElementById("authDynamicToggleOption");
    if (!dynamicToggleOption) {

        const authForm = document.getElementById("authForm");
        if (authForm) {
            dynamicToggleOption = document.createElement("div");
            dynamicToggleOption.id = "authDynamicToggleOption";
            authForm.appendChild(dynamicToggleOption);
        }
    }

    if (dynamicToggleOption) {
        if (r) {

            dynamicToggleOption.innerHTML = `
                <p class="auth-toggle-text">
                    Sizda profil bormi? 
                    <span class="auth-toggle-link" onclick="almashtirishAuthRejim(false)">Tizimga kirish</span>
                </p>
            `;
        } else {

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

function tekshirishURLParametrlari() {

    const urlParams = new URLSearchParams(window.location.search);
    const kinoNomi = urlParams.get('movie');

    if (kinoNomi) {

        const qidirilayotganKino = kinoLugat[kinoNomi.toLowerCase()] || kinoNomi;
        ochishIchkiSahifa(qidirilayotganKino);
    }
}

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
    { name: "Kreegarn", totalMovies: 141366, weekMovies: 7638, hasAvatar: false },
    { name: "老李", totalMovies: 14271, weekMovies: 13008, hasAvatar: false },
];

function yuklashLeaderboard() {
    const gridContainer = document.getElementById("leaderboardGrid");
    if (!gridContainer) return;


    const maxTotal = Math.max(...leaderboardUsers.map(u => u.totalMovies));
    const maxWeek = Math.max(...leaderboardUsers.map(u => u.weekMovies));

    gridContainer.innerHTML = ""; 

    leaderboardUsers.forEach(user => {
     
        const totalPercent = (user.totalMovies / maxTotal) * 100;
        const weekPercent = (user.weekMovies / maxWeek) * 100;

 
        const firstLetter = user.name.charAt(0).toUpperCase();

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


function generateAppleSlider() {
    const wrapper = document.getElementById("appleTvWrapper");
    const dotsContainer = document.getElementById("sliderDots");
    
    if (!wrapper || !dotsContainer) return;

    wrapper.innerHTML = "";
    dotsContainer.innerHTML = "";

    appleTvSlides.forEach((slide, idx) => {
      
        const slideHtml = `
            <div class="slide-item ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                <img src="${slide.image}" class="slide-img" alt="${slide.title}">
                <div class="slide-overlay"></div>
            </div>
        `;
        wrapper.insertAdjacentHTML("beforeend", slideHtml);

     
        const dotHtml = `
            <div class="dot ${idx === 0 ? 'active' : ''}" onclick="selectSlide(${idx})"></div>
        `;
        dotsContainer.insertAdjacentHTML("beforeend", dotHtml);
    });


    updateTextContent(0);
}


function updateTextContent(idx) {
    const titleEl = document.getElementById("activeSlideTitle");
    const descEl = document.getElementById("activeSlideDesc");
    const btnEl = document.getElementById("activeSlideBtn");
    
    const data = appleTvSlides[idx];

    titleEl.style.animation = 'none';
    descEl.style.animation = 'none';
    btnEl.style.animation = 'none';
    
    titleEl.offsetHeight; 

    titleEl.textContent = data.title;
    descEl.textContent = data.desc;
    btnEl.textContent = data.btnText;

    titleEl.style.animation = '';
    descEl.style.animation = '';
    btnEl.style.animation = '';
}


function changeSlide(nextIdx) {
    const slides = document.querySelectorAll(".slide-item");
    const dots = document.querySelectorAll(".dot");

    if (slides.length === 0) return;

  
    if (nextIdx >= slides.length) activeIndex = 0;
    else if (nextIdx < 0) activeIndex = slides.length - 1;
    else activeIndex = nextIdx;


    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[activeIndex].classList.add("active");
    dots[activeIndex].activeIndex = activeIndex;

  
    updateTextContent(activeIndex);
}


function startTimer() {
    autoTimer = setInterval(() => {
        changeSlide(activeIndex + 1);
    }, 6000);
}


function selectSlide(idx) {
    clearInterval(autoTimer); 
    changeSlide(idx);
    startTimer(); 
}


function initAuthDynamicUIStyle() {
    const modalBloki = document.getElementById("loginModalBloki");
    if (!modalBloki) return;

   
    modalBloki.style.background = "linear-gradient(rgba(10, 10, 14, 0.88), rgba(15, 15, 25, 0.94)), url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1400') no-repeat center/cover";
    modalBloki.style.backdropFilter = "blur(12px)";
    modalBloki.style.display = "flex";
    modalBloki.style.alignItems = "center";
    modalBloki.style.justifyContent = "center";

    
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


window.addEventListener("DOMContentLoaded", () => {
    yuklashLeaderboard();
});


window.addEventListener("DOMContentLoaded", () => {
    tekshirishURLParametrlari();
});

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
        console.log("Audio API brauzerda faollashmadi:", e);
    }
}


document.addEventListener("DOMContentLoaded", () => {

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


document.addEventListener("DOMContentLoaded", () => {

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
  const CinemaModule = {
    init: function() {
      const status = document.getElementById('cinemaStatus');
      const mapBox = document.getElementById('cinemaMapBox');
      const iframe = document.getElementById('cinemaIframe');

      status.className = "cinema-finder__status"; 
      status.textContent = "Joylashuv aniqlanmoqda, iltimos kuting...";

      if (!navigator.geolocation) {
        status.classList.add("cinema-finder__status--error");
        status.textContent = "Kechirasiz, brauzeringiz geolokatsiyani qo'llab-quvvatlamaydi.";
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;


          status.classList.add("cinema-finder__status--success");
          status.textContent = "Joylashuvingiz muvaffaqiyatli aniqlandi!";

          const googleMapsUrl = `http://googleusercontent.com/maps.google.com/3`;

      
          iframe.src = googleMapsUrl;
          mapBox.classList.add("cinema-finder__map-box--active");
        },
        (error) => {
          status.classList.add("cinema-finder__status--error");
          switch(error.code) {
            case error.PERMISSION_DENIED:
              status.textContent = "Xaritani ko'rish uchun joylashuvni aniqlashga ruxsat bering.";
              break;
            case error.POSITION_UNAVAILABLE:
              status.textContent = "Joylashuv ma'lumotlarini olib bo'lmadi.";
              break;
            case error.TIMEOUT:
              status.textContent = "So'rov vaqti tugadi.";
              break;
            default:
              status.textContent = "Noma'lum xatolik yuz berdi.";
          }
        }
      );
    }
  };


(function() {

const LB_FETCH_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${LB_API_KEY}&sort_by=vote_count.desc&language=en-US&page=1`;

  const gridContainer = document.getElementById('letterboxdGridContainer');
  const detailPanel = document.getElementById('letterboxdDetailPanel');
  const closePanelBtn = document.getElementById('letterboxdCloseBtn');


  function calculateMillions(votes) {
    const formattedViews = (votes * 1.4) / 1000;
    return formattedViews.toFixed(1) + 'M marta';
  }


  async function loadLetterboxdContent() {
    try {
      const response = await fetch(LB_FETCH_URL);
      const payload = await response.json();

      if (payload.results && payload.results.length > 0) {

        const topTenMovies = payload.results.slice(0, 10);
        buildMovieGrid(topTenMovies);
      } else {
        gridContainer.innerHTML = `<p style="color: #ff4a4a; grid-column: span 5; text-align: center;">Kinolarni yuklab bo'lmadi. API kalit xato bo'lishi mumkin.</p>`;
      }
    } catch (err) {
      console.error("Ma'lumot olishda xatolik yuz berdi:", err);
    }
  }









  function buildMovieGrid(moviesList) {
    gridContainer.innerHTML = '';

    moviesList.forEach(movieItem => {
      const { title, poster_path, vote_count, release_date, overview, vote_average } = movieItem;
      const releaseYear = release_date ? release_date.split('-')[0] : 'N/A';

      const cardElement = document.createElement('div');
      cardElement.classList.add('letterboxd-item-card');

      cardElement.innerHTML = `
        <div class="letterboxd-mini-tooltip">${title} (${releaseYear})</div>
        <img src="${LB_IMG_BASE}${poster_path}" alt="${title}" onerror="this.src='https://via.placeholder.com/500x750?text=No+Poster'">
        <div class="letterboxd-card-overlay">
          <div class="letterboxd-views-count">
            <i class="fa-solid fa-eye"></i>
            <span>${calculateMillions(vote_count)}</span>
          </div>
        </div>
      `;


      cardElement.addEventListener('click', () => {
        document.getElementById('letterboxdPanelPoster').src = `${LB_IMG_BASE}${poster_path}`;
        document.getElementById('letterboxdPanelTitle').textContent = title;
        document.getElementById('letterboxdPanelYear').textContent = releaseYear;
        document.getElementById('letterboxdPanelRating').textContent = vote_average.toFixed(1);
        document.getElementById('letterboxdPanelOverview').textContent = overview || "Ushbu film uchun xulosa kiritilmagan.";


        detailPanel.classList.add('active-panel');
        detailPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });

      gridContainer.appendChild(cardElement);
    });
  }

  if(closePanelBtn) {
    closePanelBtn.addEventListener('click', () => {
      detailPanel.classList.remove('active-panel');
    });
  }

  loadLetterboxdContent();
})();


const database = [
    {
        name: "Jizzakh Cinema (Jizzax)",
        lat: 40.1158, lng: 67.8422,
        img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=800",
        movies: [
            { title: "G'aroyib Pul (Premyera)", rating: "⭐ 7.2", days: "Har kuni", targetTime: "18:45:00" },
            { title: "Koshey: Tirik Suv Siri", rating: "⭐ 8.0", days: "Shanba, Yakshanba", targetTime: "21:30:00" }
        ]
    },
    {
        name: "Drive Cinema (Samarqand, Family Park)",
        lat: 39.6542, lng: 66.9597,
        img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800",
        movies: [
            { title: "Dune: Ikkinchi Qism", rating: "⭐ 8.9", days: "Dushanba - Juma", targetTime: "19:00:00" },
            { title: "Yo'lovchi (Daxshatli kino)", rating: "⭐ 6.5", days: "Har kuni", targetTime: "23:15:00" }
        ]
    },
    {
        name: "Magic Cinema (Toshkent, Magic City)",
        lat: 41.3015, lng: 69.2644,
        img: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&q=80&w=800",
        movies: [
            { title: "O'rgimchak Odam (Uzbek tilida)", rating: "⭐ 8.5", days: "Har kuni", targetTime: "17:30:00" },
            { title: "Interstellar (Retro Seans)", rating: "⭐ 9.0", days: "Faqat Bugun", targetTime: "22:00:00" }
        ]
    },
    {
        name: "Asiya Cinema (Farg'ona)",
        lat: 40.3864, lng: 71.7864,
        img: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&q=80&w=800",
        movies: [
            { title: "G'aroyib Pul (Грязные деньги)", rating: "⭐ 6.8", days: "Har kuni", targetTime: "20:00:00" }
        ]
    },
    {
        name: "Buxoro Cinema (Buxoro)",
        lat: 39.7747, lng: 64.4286,
        img: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&q=80&w=800",
        movies: [
            { title: "Orzu qilish zarar qilmaydi", rating: "⭐ 7.0", days: "Dush - Shan", targetTime: "19:45:00" }
        ]
    }
];

let activeTimers = [];
let currentLoadedData = []; 


function getDistanceKM(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    return (R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)))).toFixed(1);
}


function initSmartLocator() {
    const btn = document.getElementById('locBtn');
    const loader = document.getElementById('mainLoader');
    const btnTxt = document.getElementById('btnText');

    btn.disabled = true;
    loader.style.display = 'inline-block';
    btnTxt.innerText = 'GPS Tizim Ishga Tushdi...';

    if (!navigator.geolocation) {
        alert("Brauzeringiz koordinatalarni qo'llab quvvatlamaydi!");
        resetButton();
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const uLat = position.coords.latitude;
            const uLng = position.coords.longitude;

            currentLoadedData = database.map(cinema => {
                const distance = getDistanceKM(uLat, uLng, cinema.lat, cinema.lng);
                return { ...cinema, distance: parseFloat(distance) };
            }).sort((a, b) => a.distance - b.distance);

            renderCinemaList(currentLoadedData);
            displayResultsArea();
        },
        (error) => {
            alert("GPS ruxsat berilmadi! Standart Jizzax shahri bo'yicha hisoblanadi.");
            currentLoadedData = database.map(cinema => {
                const distance = getDistanceKM(40.1158, 67.8422, cinema.lat, cinema.lng);
                return { ...cinema, distance: parseFloat(distance) };
            }).sort((a, b) => a.distance - b.distance);
            
            renderCinemaList(currentLoadedData);
            displayResultsArea();
        }, { enableHighAccuracy: true }
    );
}

function displayResultsArea() {
    const resultsArea = document.getElementById('resultsArea');
    resultsArea.style.display = 'block';
    resultsArea.scrollIntoView({ behavior: 'smooth' });
    resetButton();
}

function resetButton() {
    document.getElementById('locBtn').disabled = false;
    document.getElementById('mainLoader').style.display = 'none';
    document.getElementById('btnText').innerText = 'Joylashuvimni Qayta Aniqlash';
}


function renderCinemaList(data) {
    const listDiv = document.getElementById('cinemaHtmlList');
    listDiv.innerHTML = '';

    data.forEach((cinema, index) => {
        listDiv.innerHTML += `
            <div class="cinema-card" id="card-${index}" onclick="loadCinemaDetails(${index})">
                <div class="card-meta">
                    <h3 style="color:#00f2fe;">${cinema.name}</h3>
                    <span class="dist-badge">📍 ${cinema.distance} km</span>
                </div>
                <p style="font-size:0.9rem; color:#cbd5e1;">Kinolar soni: ${cinema.movies.length} ta premyera mavjud</p>
            </div>
        `;
    });
}

function loadCinemaDetails(index) {
    const cinema = currentLoadedData[index];
    const cardId = `card-${index}`;
    
    document.querySelectorAll('.cinema-card').forEach(c => c.classList.remove('active'));
    document.getElementById(cardId).classList.add('active');

    activeTimers.forEach(t => clearInterval(t));
    activeTimers = [];

    const panel = document.getElementById('detailsPanel');
    panel.style.animation = 'none';
    panel.offsetHeight; 
    panel.style.animation = 'imgFade 0.5s forwards';

    let moviesHTML = '';

    cinema.movies.forEach((movie, idx) => {
        const timerId = `timer-${idx}`;
        moviesHTML += `
            <div class="movie-row">
                <div style="display:flex; justify-content:space-between; margin-bottom:5px; gap: 10px;">
                    <h4 style="color:#fff; text-align: left;">${movie.title}</h4>
                    <span style="color:#ffbe21; white-space: nowrap;">${movie.rating}</span>
                </div>
                <p style="font-size:0.85rem; color:#a0aec0; margin-bottom:10px; text-align: left;">📅 Kunlari: ${movie.days} | ⏰ Boshlanishi: ${movie.targetTime.substring(0,5)}</p>
                
                <p style="font-size:0.8rem; color:#00f2fe; text-transform:uppercase; letter-spacing:1px; text-align: left;">Boshlanishiga qoldi:</p>
                <div class="timer-container" id="${timerId}">
                    <div class="timer-box"><div class="timer-num" id="${timerId}-h">00</div><div class="timer-label">Soat</div></div>
                    <div class="timer-box"><div class="timer-num" id="${timerId}-m">00</div><div class="timer-label">Min</div></div>
                    <div class="timer-box"><div class="timer-num" id="${timerId}-s">00</div><div class="timer-label">Sek</div></div>
                </div>
            </div>
        `;

        startCountdown(movie.targetTime, timerId);
    });

    panel.innerHTML = `
        <img src="${cinema.img}" class="cinema-banner" alt="Cinema">
        <h2 style="margin-bottom:8px; color:#fff; text-align: left; font-size: 1.5rem;">${cinema.name}</h2>
        <p style="color:#00f2fe; font-size:0.9rem; margin-bottom:25px; text-align: left;">📍 Koordinata: ${cinema.lat}, ${cinema.lng}</p>
        <h3 style="margin-bottom:15px; font-size:1.1rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:5px; text-align: left;">Bugungi Seanslar Jadvali:</h3>
        ${moviesHTML}
    `;
    
 
    if(window.innerWidth <= 968) {
        panel.scrollIntoView({ behavior: 'smooth' });
    }
}


function startCountdown(timeStr, elementId) {
    function update() {
        const now = new Date();
        const target = new Date();
        const timeParts = timeStr.split(':');
        
        target.setHours(parseInt(timeParts[0]), parseInt(timeParts[1]), parseInt(timeParts[2]), 0);

        if (target < now) {
            target.setDate(target.getDate() + 1);
        }

        const diff = target - now;

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const hEl = document.getElementById(`${elementId}-h`);
        const mEl = document.getElementById(`${elementId}-m`);
        const sEl = document.getElementById(`${elementId}-s`);

        if (hEl && mEl && sEl) {
            hEl.innerText = hours < 10 ? '0' + hours : hours;
            mEl.innerText = minutes < 10 ? '0' + minutes : minutes;
            sEl.innerText = seconds < 10 ? '0' + seconds : seconds;
        }
    }

    update();
    const interval = setInterval(update, 1000);
    activeTimers.push(interval);
}

const OMDB_API_KEY = 'Sizning_OMDB_API_KEY';
const slider = document.getElementById('trending-slider');
const buttons = document.querySelectorAll('.toggle-btn');


const topMoviesData = {
    day: [
        'tt16366836',
        'tt21415214', 
        'tt32341416',
        'tt15438246',
        'tt6718170',  
        'tt22111244'  
    ],
    week: [
        'tt11389872', 
        'tt4154664', 
        'tt0120737',  
        'tt1375666', 
        'tt0944947', 
        'tt1877830'  
    ]
};


async function loadMostViewed(timePeriod) {
    slider.innerHTML = '<p style="color: white; padding-left: 20px;">Yuklanmoqda...</p>';
    const idList = topMoviesData[timePeriod];
    let cardsHTML = '';


    for (let id of idList) {
        try {
            const res = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`);
            const movie = await res.json();

            if (movie.Response === "True") {
      
                let releaseDate = movie.Released !== "N/A" ? movie.Released : movie.Year;

                cardsHTML += `
                    <div class="movie-card">
                        <div class="poster-box">
                            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150x225?text=No+Poster'}" alt="${movie.Title}">
                            <button class="menu-dots">•••</button>
                        </div>
                        <div class="movie-meta">
                            <h3 onclick="openMovie('${movie.imdbID}')">${movie.Title}</h3>
                            <p>${releaseDate}</p>
                        </div>
                    </div>
                `;
            }
        } catch (err) {
            console.error("Kino yuklashda xato:", err);
        }
    }
    slider.innerHTML = cardsHTML;
}

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        buttons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const period = e.target.getAttribute('data-time');
        loadMostViewed(period);
    });
});

function openMovie(id) {
    alert("Kino sahifasiga o'tish ID: " + id);

}


document.addEventListener("DOMContentLoaded", () => {
    loadMostViewed('day');
});

const sliderContainer = document.getElementById('trending-slider');
const filterButtons = document.querySelectorAll('.time-btn');

const movieLists = {
    day: [
        'tt16366836',
        'tt21415214',
        'tt32341416',
        'tt15438246',
        'tt6718170',  
        'tt22111244' 
    ],
    week: [
        'tt11389872', 
        'tt4154664',  
        'tt1375666',  
        'tt1877830',  
        'tt0120737',  
        'tt0944947' 
    ]
};


async function fetchTrending(timeOption) {
    sliderContainer.innerHTML = '<p style="padding-left: 20px; color: #333;">Yuklanmoqda...</p>';
    const currentIDs = movieLists[timeOption];
    let htmlContent = '';

    for (let id of currentIDs) {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
            const data = await response.json();

            if (data.Response === "True") {
              
                let movieDate = data.Released !== "N/A" ? data.Released : data.Year;

                htmlContent += `
                    <div class="movie-card">
                        <div class="poster-container">
                            <img src="${data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/150x225?text=No+Poster'}" alt="${data.Title}">
                            <button class="options-dot">•••</button>
                        </div>
                        <div class="movie-details">
                            <h3 onclick="goToMovie('${data.imdbID}')">${data.Title}</h3>
                            <p>${movieDate}</p>
                        </div>
                    </div>
                `;
            }
        } catch (error) {
            console.error("Xatolik:", error);
        }
    }
    sliderContainer.innerHTML = htmlContent;
}


filterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
     
        filterButtons.forEach(btn => btn.classList.remove('active'));
   
        event.target.classList.add('active');

  
        const selectedTime = event.target.getAttribute('data-time');
        fetchTrending(selectedTime);
    });
});


function goToMovie(id) {
    console.log("Kino ID:", id);
}

document.addEventListener("DOMContentLoaded", () => {
    fetchTrending('day');
});


window.addEventListener("DOMContentLoaded", () => {
    const ovozliBtn = document.getElementById("ovozliQidiruvTugmasi");
    if (ovozliBtn) {
        ovozliBtn.addEventListener("click", faollashtirOvozliQidiruv);
    }
});


function faollashtirOvozliQidiruv() {

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Kechirasiz, siz foydalanayotgan brauzer ovozli qidiruvni qo'llab-quvvatlamaydi (Google Chrome tavsiya etiladi).");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US'; 
    const ovozliBtn = document.getElementById("ovozliQidiruvTugmasi");
    
 
    ovozliBtn.innerHTML = `<i class="fa-solid fa-microphone-lines" style="color: #ef4444; animation: pulse 1s infinite;"></i>`;
    

    recognition.start();

    recognition.onresult = (event) => {
        const natijaMatni = event.results[0][0].transcript;
        

        const kinoInput = document.getElementById("kinoInput");
        if (kinoInput) {
            kinoInput.value = natijaMatni;
        }

        if (typeof qidiruvKinoAsosiy === "function") {
            qidiruvKinoAsosiy(natijaMatni);
        } else {
            console.log("Ovozli matn aniqlandi: " + natijaMatni);
        }
    };

    recognition.onend = () => {
        ovozliBtn.innerHTML = `<i class="fa-solid fa-microphone"></i>`;
    };

    recognition.onerror = (event) => {
        console.error("Ovozni aniqlashda xatolik:", event.error);
        ovozliBtn.innerHTML = `<i class="fa-solid fa-microphone"></i>`;
    };
}


window.addEventListener("DOMContentLoaded", () => {
    const menuToggleBtn = document.getElementById("menuToggleBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuToggleBtn && navLinks) {
        menuToggleBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            const icon = menuToggleBtn.querySelector("i");
            if (navLinks.classList.contains("active")) {
                icon.className = "fa-solid fa-xmark";
            } else {
                icon.className = "fa-solid fa-bars";
            }
        });
    }
});