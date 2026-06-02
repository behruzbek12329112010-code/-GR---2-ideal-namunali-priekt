// Haqiqiy insonlar va taniqli aktyorlar suratlari tushirilgan daxshatli katta baza
const oscarMovies = [
    {
        title: "Oppenheimer",
        year: "2023",
        badge: "7 ta Oscar G'olibi",
        rating: "8.4",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600", 
        plot: "Killian Merfi daho fizik Robert Oppenheimer rolida. Atom bombasining yaratilish tarixi va uning insoniyat oldidagi fojiasi."
    },
    {
        title: "The Dark Knight",
        year: "2008",
        badge: "2 ta Oscar G'olibi",
        rating: "9.0",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600",
        plot: "Xit Ledjer o'zining afsonaviy Joker roli uchun Oskarni qo'lga kiritgan. Betmen va Jokerning Gotem shahrini boshqarish uchun shafqatsiz jangi."
    },
    {
        title: "Inception (Muqaddima)",
        year: "2010",
        badge: "4 ta Oscar G'olibi",
        rating: "8.8",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600",
        plot: "Leonardo Di Kaprio va Killian Merfi tushlar olami ichiga maxfiy g'oyalarni joylashtirish operatsiyasini bajaradigan josuslar rolida."
    },
    {
        title: "Titanic (Titanik)",
        year: "1997",
        badge: "11 ta Oscar Egasi",
        rating: "7.9",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600",
        plot: "Leonardo Di Kaprio va Keyt Uinslet. Dunyodagi eng mashhur fojiali kema halokati fonidagi unutilmas, buyuk muhabbat qissasi."
    },
    {
        title: "Gladiator",
        year: "2000",
        badge: "5 ta Oscar Egasi",
        rating: "8.5",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
        plot: "Rassel Krou Rim imperiyasining eng buyuk sarkardasi Maksimus rolida. Xiyonat ortidan gladiatorga aylangan jangchining qasosi."
    },
    {
        title: "The Godfather",
        year: "1972",
        badge: "3 ta Oscar Egasi",
        rating: "9.2",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600",
        plot: "Marlon Brando va Al Pachino. Nyu-York mafiya klanining rahbari Don Korleone va uning oilasi taqdiri haqidagi eng buyuk mafiyaviy asar."
    },
    {
        title: "Bohemian Rhapsody",
        year: "2018",
        badge: "4 ta Oscar Egasi",
        rating: "7.9",
        image: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=600",
        plot: "Rami Malek afsonaviy Queen guruhi solisti Freddi Merkyuri rolida. Musiqachining shon-shuhrat cho'qqisiga chiqishi va uning hayoti."
    },
    {
        title: "Joker",
        year: "2019",
        badge: "2 ta Oscar Egasi",
        rating: "8.4",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600",
        plot: "Xoakin Feniks o'zining daho darajasidagi Joker ijrosi uchun bosh rol nominatsiyasida Oskar statuetkasini qo'lga kiritgan drama."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("oscarGrid");
    if (!grid) return;

    grid.innerHTML = oscarMovies.map(movie => `
        <div class="oscar-card">
            <div class="img-container">
                <img src="${movie.image}" alt="${movie.title}" loading="lazy">
                <div class="oscar-badge"><i class="fas fa-trophy"></i> ${movie.badge}</div>
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