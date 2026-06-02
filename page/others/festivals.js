// Haqiqiy insonlar va aktyorlar suratlari tushirilgan daxshatli ko'p festival filmlari
const festivalMovies = [
    {
        title: "Pulp Fiction",
        year: "1994",
        badge: "Kann Oltin Palma G'olibi",
        rating: "8.9",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600",
        plot: "Jon Travolta va Uma Turman bosh rollarda. Kventin Tarantinoning Kann festivalida dunyo tanqidchilarini shokka solgan daho asari."
    },
    {
        title: "Parasite (Parazitlar)",
        year: "2019",
        badge: "Kann Festivali Gran-Pri",
        rating: "8.5",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600",
        plot: "Janubiy Koreyalik afsonaviy aktyorlar ijrosida. Kambag'al va o'ta boy oilaning daxshatli tarzda to'qnash kelishi haqidagi ijtimoiy tabaqalanish dramasi."
    },
    {
        title: "Dune: Part Two",
        year: "2024",
        badge: "Venetsiya Maxsus Tanlovi",
        rating: "8.6",
        image: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?q=80&w=600",
        plot: "Timoti Shalamay va Zendaya koinot qumliklaridagi imperiyaga qarshi muqaddas urush olib borayotgan insonlar obrazida."
    },
    {
        title: "Once Upon a Time in Hollywood",
        year: "2019",
        badge: "Kann Festivali Nomzodi",
        rating: "7.6",
        image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=600",
        plot: "Leonardo Di Kaprio va Bred Pitt. 1969-yilgi Gollivudning oltin davri va kasting tizimida kurashayotgan kino ijodkorlari hayoti."
    },
    {
        title: "La La Land",
        year: "2016",
        badge: "Venetsiya Eng Yaxshi Aktyor",
        rating: "8.0",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600",
        plot: "Rayan Gosling va Emma Stoun. Venetsiya kinofestivalida tomoshabinlar olqishiga sazovor bo'lgan romantik va musiqiy san'atkorlar dramasi."
    },
    {
        title: "Inglourious Basterds",
        year: "2009",
        badge: "Kann Eng Yaxshi Erkak Rol",
        rating: "8.4",
        image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=600",
        plot: "Bred Pitt va Kristof Vals. Ikkinchi jahon urushi davridagi fashistlar armiyasiga qarshi maxfiy partizan guruhining ayovsiz rejasi."
    },
    {
        title: "The Revenant",
        year: "2015",
        badge: "Xalqaro Rejissyorlar Gildi",
        rating: "8.0",
        image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=600",
        plot: "Leonardo Di Kaprio o'rmon va qorli tog'lar qo'ynida tirik qolish uchun tabiat va xoin insonlarga qarshi daxshatli kurash olib boradi."
    },
    {
        title: "The Wolf of Wall Street",
        year: "2013",
        badge: "Xalqaro Aktyorlar Top",
        rating: "8.2",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600",
        plot: "Leonardo Di Kaprio Uoll-Stritdagi eng daho va firbgarsimon broker Jordan Belfortning dabdabali hayoti rolida."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("festivalGrid");
    if (!grid) return;

    grid.innerHTML = festivalMovies.map(movie => `
        <div class="festival-card">
            <div class="img-container">
                <img src="${movie.image}" alt="${movie.title}" loading="lazy">
                <div class="festival-badge"><i class="fas fa-ribbon"></i> ${movie.badge}</div>
            </div>
            <div class="info-container">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="meta-row">
                    <span><i class="far fa-calendar"></i> Yil: ${movie.year}</span>
                    <span class="rating"><i class="fas fa-star"></i> ${movie.rating} IMDb</span>
                </div>
                <p class="plot">${movie.plot}</p>
            </div>
        </div>
    `).join('');
});