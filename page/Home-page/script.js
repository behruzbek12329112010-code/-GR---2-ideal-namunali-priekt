
const API_KEY = "ed1c56f1";
const BASE_URL = "https://www.omdbapi.com";


const defaultMovies = [
    "Inception", "Avatar", "Interstellar", "Gladiator", "The Dark Knight",
    "Spider-Man", "Avengers", "Titanic", "Wednesday", "The Sopranos",
    "Breaking Bad", "Narcos", "Sherlock", "Friends", "The Matrix",
    "Joker", "The Prestige", "Whiplash", "Parasite", "Chernobyl",
    "Dexter", "Hannibal", "Shutter Island", "The Pianist",
    "Alien", "Predator", "Terminator", "Die Hard",
    "Up", "Ratatouille", "Shrek", "Mad Max", "John Wick",
    "Casino Royale", "Skyfall", "Spectre", "No Time to Die", "Dune",
    "The Batman", "Aquaman", "Iron Man", "Thor", "Black Panther",
    "Doctor Strange", "Spider-Man: Homecoming", "Venom", "Deadpool", "Logan",
    "The Wolf of Wall Street", "The Great Gatsby", "Enola Holmes", "The Witcher"
];

const kinoLugat = {
    "аватар": "Avatar", "начало": "Inception", "интерстеллар": "Interstellar",
    "гладиатор": "Gladiator", "темный рыцарь": "The Dark Knight", "человек паук": "Spider-Man",
    "мстители": "Avengers", "титаник": "Titanic", "уэнсдей": "Wednesday",
    "во все тяжкие": "Breaking Bad", "нарко": "Narcos", "шерлок": "Sherlock",
    "друзья": "Friends", "матрица": "The Matrix", "джокер": "Joker",
    "престиж": "The Prestige", "одержимость": "Whiplash", "паразиты": "Parasite",
    "чернобыль": "Chernobyl", "декстер": "Dexter", "ганнибал": "Hannibal",
    "остров проклятых": "Shutter Island", "пианист": "The Pianist", "чужой": "Alien",
    "хищник": "Predator", "терминатор": "Terminator", "крепкий орешек": "Die Hard",
    "вверх": "Up", "рататуй": "Ratatouille", "шрек": "Shrek",
    "безумный макс": "Mad Max", "джон уик": "John Wick", "казино рояль": "Casino Royale",
    "скайфолл": "Skyfall", "дюна": "Dune", "бэтмен": "The Batman",
    "аквамен": "Aquaman", "железный человек": "Iron Man", "тор": "Thor",
    "черная пантера": "Black Panther", "доктор стрэндж": "Doctor Strange", "веном": "Venom",
    "дедпул": "Deadpool", "логан": "Logan", "волк с уолл стрит": "The Wolf of Wall Street",
    "великий гэтсби": "The Great Gatsby", "ведьмак": "The Witcher"
};

function tarjimaQilish(matn) {
    const tozalanganMatn = matn.toLowerCase().trim();
    if (kinoLugat[tozalanganMatn]) {
        return kinoLugat[tozalanganMatn];
    }
    return matn;
}

window.addEventListener("DOMContentLoaded", () => {
    yuklashDumaloqKarusel();
    yuklashPremyeralar();
    yuklashTasodifiyReklama();
    initDragScroll();


    const urlParams = new URLSearchParams(window.location.search);
    const movieFromUrl = urlParams.get('movie');
    if (movieFromUrl) {
        ochishIchkiSahifa(movieFromUrl, false);
    } else {

        history.replaceState({ page: "home" }, "", window.location.pathname);
    }

    const logo = document.getElementById("logoHome");
    if (logo) {
        logo.addEventListener("click", () => {
            orqagaQaytish();

            history.pushState({ page: "home" }, "", window.location.pathname);
        });
    }
});

window.addEventListener("popstate", (event) => {
    if (event.state && event.state.page === "details") {

        ochishIchkiSahifa(event.state.movieTitle, false);
    } else {

        document.getElementById("kinoIchkiSahifa").classList.add("hidden");
        document.getElementById("boshSahifaBloki").classList.remove("hidden");
    }
});

function orqagaQaytish() {
    document.getElementById("kinoIchkiSahifa").classList.add("hidden");
    document.getElementById("boshSahifaBloki").classList.remove("hidden");
}

function initDragScroll() {
    const slider = document.getElementById("storyContainer");
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
}


async function yuklashDumaloqKarusel() {
    const carousel = document.getElementById("storyCarousel");
    if (!carousel) return;
    carousel.innerHTML = "";

    const shuffled = [...defaultMovies].sort(() => 0.5 - Math.random());

    const selectedStories = shuffled.slice(0, 30);

    for (let title of selectedStories) {
        try {
            const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}`);
            const data = await res.json();

            if (data.Response === "True" && data.Poster !== 'N/A') {
                const storyCard = document.createElement("div");
                storyCard.className = "story-card";
                storyCard.title = data.Title;
                storyCard.onclick = () => ochishIchkiSahifa(data.Title);

                storyCard.innerHTML = `<img src="${data.Poster}" alt="${data.Title}">`;
                carousel.appendChild(storyCard);
            }
        } catch (err) {
            console.error("Karusel yuklashda xato:", err);
        }
    }
}

async function yuklashPremyeralar() {
    const grid = document.getElementById("kinoGrid");
    if (!grid) return;
    grid.innerHTML = "<p style='grid-column: 1/-1; text-align:center; color:#94a3b8;'>Kino olami yuklanmoqda...</p>";

    const shuffled = [...defaultMovies].sort(() => 0.5 - Math.random());

    const selectedMovies = shuffled.slice(0, 42);
    let htmlContent = "";

    for (let title of selectedMovies) {
        try {
            const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}`);
            const data = await res.json();

            if (data.Response === "True") {
                htmlContent += `
                    <div class="movie-card" onclick="ochishIchkiSahifa(\`${data.Title.replace(/'/g, "\\'")}\`)">
                        <div class="poster-box">
                            <img src="${data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/200x270'}" alt="${data.Title}">
                            <span class="card-rating">⭐ ${data.imdbRating !== 'N/A' ? data.imdbRating : '7.5'}</span>
                        </div>
                        <div class="movie-info-layer">
                            <h4>${data.Title}</h4>
                        </div>
                    </div>
                `;
            }
        } catch (err) {
            console.error("Kino yuklashda xato:", err);
        }
    }
    grid.innerHTML = htmlContent || "<p style='grid-column: 1/-1; text-align:center;'>Filmlar yuklanmadi.</p>";
}


async function ochishIchkiSahifa(kinoNomi, isPushState = true) {
    const boshSahifa = document.getElementById("boshSahifaBloki");
    const ichkiSahifa = document.getElementById("kinoIchkiSahifa");

    if (!ichkiSahifa || !boshSahifa) return;

    boshSahifa.classList.add("hidden");
    ichkiSahifa.classList.remove("hidden");
    ichkiSahifa.innerHTML = "<p style='text-align:center; padding:50px; color:#cbd5e1;'>Film tafsilotlari tayyorlanmoqda...</p>";

    try {
        const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(kinoNomi)}&plot=full`);
        const data = await res.json();

        if (data.Response === "True") {
            const posterUrl = data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/300x450";
            const playerUrl = `https://vidsrc.xyz/embed/movie?imdb=${data.imdbID}`;


            if (isPushState) {
                history.pushState(
                    { page: "details", movieTitle: data.Title },
                    "",
                    `?movie=${encodeURIComponent(data.Title)}`
                );
            }

            ichkiSahifa.innerHTML = `
                <div class="movie-detail-header">
                    <span>${data.Title.toUpperCase()} — </span>

                </div>

                <div class="movie-detail-main">
                    <div class="movie-detail-flex">
                        <div class="detail-poster">
                            <img src="${posterUrl}" alt="${data.Title}" onclick="pleyerniYoqish()" style="cursor:pointer;" title="Pleyerni yoqish uchun bosing">
                        </div>
                        
                        <div class="detail-info-table">
                            <div class="info-row"><div class="info-label">Nomi</div><div class="info-value">${data.Title}</div></div>
                            <div class="info-row"><div class="info-label">Janr</div><div class="info-value">${data.Genre}</div></div>
                            <div class="info-row"><div class="info-label">Davlati</div><div class="info-value">${data.Country}</div></div>
                            <div class="info-row"><div class="info-label">Yili</div><div class="info-value">${data.Year}</div></div>
                            <div class="info-row"><div class="info-label">Davomiyligi</div><div class="info-value">${data.Runtime}</div></div>
                            <div class="info-row"><div class="info-label">IMDb Reyting</div><div class="info-value" style="color:#ffc107; font-weight:bold;">⭐ ${data.imdbRating}</div></div>
                        </div>
                    </div>
                </div>

                <div class="detail-plot-box">
                    <strong>Film syujeti:</strong> <br><br>
                    ${data.Plot !== 'N/A' ? data.Plot : 'Film syujeti tez kunda joylanadi.'}
                </div>

                <div id="playerSection" class="player-section hidden">
                    <div style="margin-bottom: 12px; font-size: 0.9rem; color: #38bdf8; text-align:center;">
                   
                    </div>
                    <div class="video-wrapper">
                        <iframe id="moviePlayer" src="" 
                                allowfullscreen="true" 
                                webkitallowfullscreen="true" 
                                mozallowfullscreen="true" 
                                scrolling="no" 
                                allow="autoplay; fullscreen; encrypted-media; picture-in-picture">
                        </iframe>
                    </div>
                </div>
            `;

            window.currentMovieUrl = playerUrl;

        } else {
            ichkiSahifa.innerHTML = "<p style='text-align:center; padding:50px; color:#ef4444;'>Kino topilmadi!</p>";
        }
    } catch (err) {
        ichkiSahifa.innerHTML = "<p style='text-align:center; padding:50px; color:#ef4444;'>Yuklashda xatolik yuz berdi!</p>";
    }
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


async function yuklashTasodifiyReklama() {
    const reklamaBox = document.getElementById("reklamaKino");
    if (!reklamaBox) return;

    const randomTitle = defaultMovies[Math.floor(Math.random() * defaultMovies.length)];

    try {
        const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(randomTitle)}`);
        const data = await res.json();

        if (data.Response === "True") {
            reklamaBox.innerHTML = `
                <div style="cursor:pointer;" onclick="ochishIchkiSahifa(\`${data.Title.replace(/'/g, "\\'")}\`)">
                    <img src="${data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/200x270'}" alt="Reklama" style="width:100%; border-radius:6px;">
                    <h4 style="margin-top:8px; text-align:center;">${data.Title}</h4>
                </div>
            `;
        }
    } catch (err) {
        console.error("Reklama yuklashda xato:", err);
    }
}

const qidirishTugmasi = document.getElementById("qidirishTugmasi");
const kinoInput = document.getElementById("kinoInput");

if (qidirishTugmasi && kinoInput) {
    qidirishTugmasi.addEventListener("click", () => {
        const kiritilganMatn = kinoInput.value.trim();

        if (kiritilganMatn !== "") {
            const qidirilayotganKino = tarjimaQilish(kiritilganMatn);
            ochishIchkiSahifa(qidirilayotganKino);
        } else {
            alert("Iltimos, film nomini kiriting!");
        }
    });

    kinoInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") qidirishTugmasi.click();
    });
}