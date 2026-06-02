// Dunyo bo'ylab mashhurlikka erishgan 20 ta eng buyuk aktyorlar bazasi
const actorsData = [
    {
        id: 1,
        name: "Leonardo DiCaprio",
        birth: "1974",
        rating: "9.9",
        badge: "<i class='fas fa-trophy'></i> Oscar Egasining",
        badgeClass: "",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500",
        bio: "Gollivudning tirik afsonasi, murakkab va psixologik xarakterga ega rollarni jonlantirishda dunyoda tengsiz kishi.",
        movies: [
            { title: "Inception (Muqaddima)", role: "Cobb", rating: "8.8", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500", plot: "Tushlar ichiga kirib g'oyalarni o'g'irlash sirlari." },
            { title: "Titanic (Titanik)", role: "Jack Dawson", rating: "7.9", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=500", plot: "Ulkan kemadagi fojiali va unutilmas muhabbat hikoyasi." },
            { title: "The Wolf of Wall Street", role: "Jordan Belfort", rating: "8.2", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500", plot: "Nyu-York birja brokerining aqlbovar qilmas boyligi va inqirozi." }
        ]
    },
    {
        id: 2,
        name: "Scarlett Johansson",
        birth: "1984",
        rating: "9.7",
        badge: "<i class='fas fa-crown'></i> Eng jozibali",
        badgeClass: "premium-badge",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500",
        bio: "Marvel kinematografiya olamining eng yorqin yulduzi. Dunyodagi eng yuqori haq to'lanadigan va talabgir aktrisa.",
        movies: [
            { title: "The Avengers", role: "Black Widow", rating: "8.0", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=500", plot: "Superqahramonlarning dunyoni qutqarish yo'lidagi buyuk jangi." },
            { title: "Lucy (Lyusi)", role: "Lucy", rating: "6.7", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500", plot: "Inson miyasi imkoniyatlarini 100% ishlatgan ayol qudrati." }
        ]
    },
    {
        id: 3,
        name: "Tom Cruise",
        birth: "1962",
        rating: "9.8",
        badge: "<i class='fas fa-bolt'></i> Kaskadyor Qiroli",
        badgeClass: "stunt-badge",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500",
        bio: "Ekshen janrining qiroli. Filmlardagi eng daxshatli tryuklarni dublyorsiz, o'z hayotini xavfga qo'yib o'zi bajaradi.",
        movies: [
            { title: "Mission: Impossible", role: "Ethan Hunt", rating: "7.8", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=500", plot: "Bajarib bo'lmas maxfiy topshiriqlar va daxshatli tryuklar." },
            { title: "Top Gun: Maverick", role: "Maverick", rating: "8.3", image: "https://images.unsplash.com/photo-1519074069444-1ba4e56b544c?q=80&w=500", plot: "Harbiy qiruvchi samolyot uchuvchilarining ekstremal hayoti." }
        ]
    },
    {
        id: 4,
        name: "Johnny Depp",
        birth: "1963",
        rating: "9.8",
        badge: "<i class='fas fa-mask'></i> Obrazlar Ustasi",
        badgeClass: "premium-badge",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500",
        bio: "Gollivudning eng noodatiy va mistik aktyori. Karib dengizi qaroqchilari filmidagi obrazi bilan afsonaga aylangan.",
        movies: [
            { title: "Pirates of the Caribbean", role: "Captain Jack Sparrow", rating: "8.1", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=500", plot: "Dengiz qaroqchilarining sehrli va la'natlangan xazinalar qidirishi." },
            { title: "Edward Scissorhands", role: "Edward", rating: "7.9", image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=500", plot: "Qo'llari o'rnida qaychi bo'lgan g'ayritabiiy insonning g'amgin qissasi." }
        ]
    },
    {
        id: 5,
        name: "Brad Pitt",
        birth: "1963",
        rating: "9.7",
        badge: "<i class='fas fa-star'></i> Premium Yulduz",
        badgeClass: "",
        avatar: "https://images.unsplash.com/photo-1504257401789-b36999555156?q=80&w=500",
        bio: "Ko'rinishi va mahorati bilan millionlab muxlislar yoqimtoyiga aylangan, har qanday janrni mukammal o'ynovchi aktyor.",
        movies: [
            { title: "Fight Club (Jangovar Klub)", role: "Tyler Durden", rating: "8.8", image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=500", plot: "Hayotdan zerikkan insonlarning yer osti yashirin jang klubi." },
            { title: "Fury (G'azab)", role: "Don 'Wardaddy' Collier", rating: "7.6", image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?q=80&w=500", plot: "Ikkinchi jahon urushidagi tankchilarning shafqatsiz jang maydoni." }
        ]
    },
    {
        id: 6,
        name: "Angelina Jolie",
        birth: "1975",
        rating: "9.6",
        badge: "<i class='fas fa-gem'></i> G'olib Aktrisa",
        badgeClass: "premium-badge",
        avatar: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?q=80&w=500",
        bio: "Dunyoning eng taniqli aktrisalaridan biri, BMT elchisi va jangovar rollar malikasi.",
        movies: [
            { title: "Maleficent (Malefisenta)", role: "Maleficent", rating: "6.9", image: "https://images.unsplash.com/photo-1608889174633-41a1c2285adb?q=80&w=500", plot: "Ertaklar olamidagi qora sehrgar ayolning sirli va haqiqiy tarixi." },
            { title: "Mr. & Mrs. Smith", role: "Jane Smith", rating: "6.5", image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=500", plot: "Bir-biridan bexabar yashirin josus bo'lib ishlovchi er-xotin urushi." }
        ]
    },
    {
        id: 7,
        name: "Robert Downey Jr.",
        birth: "1965",
        rating: "9.9",
        badge: "<i class='fas fa-iron'></i> Temir Odam",
        badgeClass: "stunt-badge",
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=500",
        bio: "Marvel olamining asoschisi va yuragi. Toni Stark roli orqali dunyo kinosini butunlay o'zgartirib yubordi.",
        movies: [
            { title: "Iron Man (Temir Odam)", role: "Tony Stark", rating: "7.9", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=500", plot: "Milliarder ixtirochining super-temir zirh yaratishi tarixi." },
            { title: "Sherlock Holmes", role: "Sherlock Holmes", rating: "7.6", image: "https://images.unsplash.com/photo-1593487568522-746df8894941?q=80&w=500", plot: "Daho detektivning aqlbovar qilmas mantiqiy sarguzashtlari." }
        ]
    },
    {
        id: 8,
        name: "The Rock (Dwayne Johnson)",
        birth: "1972",
        rating: "9.5",
        badge: "<i class='fas fa-dumbbell'></i> Polat Muskel",
        badgeClass: "",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=500",
        bio: "Eski restler, hozirda Gollivudning eng baquvvat, giper-faol va eng ko'p daromad keltiruvchi kassa yulduzi.",
        movies: [
            { title: "Fast & Furious (Forsaj)", role: "Luke Hobbs", rating: "6.7", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=500", plot: "Tezkor mashinalar va xalqaro miqyosdagi maxsus klanlar jangi." },
            { title: "Jumanji", role: "Dr. Smolder Bravestone", rating: "6.9", image: "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=500", plot: "Sehrli videoo'yin ichiga tushib qolgan o'smirlar sarguzashti." }
        ]
    },
    {
        id: 9,
        name: "Will Smith",
        birth: "1968",
        rating: "9.7",
        badge: "<i class='fas fa-smile'></i> Pozitiv Daho",
        badgeClass: "premium-badge",
        avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=500",
        bio: "Fantastika, komediya va chuqur drama janrlarida birdek yorqin porlay oladigan universal aktyor.",
        movies: [
            { title: "I Am Legend (Men Afsonaman)", role: "Robert Neville", rating: "7.2", image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=500", plot: "Zombi virusi tarqalgan dunyoda yolg'iz qolgan olim kurashi." },
            { title: "The Pursuit of Happyness", role: "Chris Gardner", rating: "8.0", image: "https://images.unsplash.com/photo-1484712401471-05c7215e66eb?q=80&w=500", plot: "Kambag'allikdan yuqori darajaga chiqqan ota va o'g'il motivatsiyasi." }
        ]
    },
    {
        id: 10,
        name: "Keanu Reeves",
        birth: "1964",
        rating: "9.8",
        badge: "<i class='fas fa-gun'></i> Jon Uik Afsonasi",
        badgeClass: "stunt-badge",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500",
        bio: "Internet ahlining eng sevimli, kamtarin aktyori. Kiber-pank va daxshatli jangovar kinolar qiroli.",
        movies: [
            { title: "The Matrix (Matritsa)", role: "Neo", rating: "8.7", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500", plot: "Biz yashayotgan dunyo shunchaki kompyuter dasturi ekanligi." },
            { title: "John Wick (Jon Uik)", role: "John Wick", rating: "7.4", image: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=500", plot: "Kuchugini o'ldirishgani uchun butun boshli mafiyani yo'q qilgan qotil." }
        ]
    },
    {
        id: 11,
        name: "Tom Hardy",
        birth: "1977",
        rating: "9.6",
        badge: "<i class='fas fa-mask'></i> Shafqatsiz Obraz",
        badgeClass: "",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500",
        bio: "Xarakterli va jiddiy rollar ustasi, Venom va Beoromon Maks filmlari qahramoni.",
        movies: [
            { title: "Venom", role: "Eddie Brock / Venom", rating: "6.7", image: "https://images.unsplash.com/photo-1608889174633-41a1c2285adb?q=80&w=500", plot: "Inson tanasiga joylashib olgan o'zga sayyoralik simbiot hayoti." },
            { title: "Mad Max: Fury Road", role: "Max Rockatansky", rating: "8.1", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=500", plot: "Suvsiz qolgan cho'l apokalipsisida tirik qolish poygasi." }
        ]
    },
    {
        id: 12,
        name: "Cillian Murphy",
        birth: "1976",
        rating: "9.7",
        badge: "<i class='fas fa-eye'></i> Ko'zlar Qiroli",
        badgeClass: "premium-badge",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=500",
        bio: "Oskar-2024 g'olibi. O'zining o'tkir ko'zlari va Peaky Blinders serialidagi Tomas Shelbi roli bilan mashhur.",
        movies: [
            { title: "Oppenheimer", role: "J. Robert Oppenheimer", rating: "8.4", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500", plot: "Dunyodagi birinchi atom bombasining yaratilish tarixi." },
            { title: "Peaky Blinders", role: "Thomas Shelby", rating: "8.8", image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=500", plot: "Birmingemdagi eng xavfli va aqlli mafiya klanining yuksalishi." }
        ]
    },
    {
        id: 13,
        name: "Jason Statham",
        birth: "1967",
        rating: "9.5",
        badge: "<i class='fas fa-hand-fist'></i> Mutloq Kuch",
        badgeClass: "stunt-badge",
        avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=500",
        bio: "Shafqatsiz janglar, kaskadyorlik va tezkor mashinalar olamining doimiy yuziga aylangan britaniyalik aktyor.",
        movies: [
            { title: "The Transporter", role: "Frank Martin", rating: "6.8", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=500", plot: "Hech qanday qoidalarsiz maxfiy yuklarni yetkazib beruvchi haydovchi." },
            { title: "Mechanic", role: "Arthur Bishop", rating: "6.5", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=500", plot: "Topshiriqlarni xuddi baxtsiz hodisadek ko'rsatadigan professional qotil." }
        ]
    },
    {
        id: 14,
        name: "Chris Hemsworth",
        birth: "1983",
        rating: "9.6",
        badge: "<i class='fas fa-hammer'></i> Tor (God of Thunder)",
        badgeClass: "",
        avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=500",
        bio: "Avstraliyalik kelishgan aktyor, Marvel koinotida Mjolnir bolg'asini ko'tarib yuruvchi Momaqaldiroq xudosi.",
        movies: [
            { title: "Thor: Ragnarok", role: "Thor", rating: "7.9", image: "https://images.unsplash.com/photo-1601987177651-8edfe6c20009?q=80&w=500", plot: "O'z sayyorasini yovuz opasi Xeladan qutqarishga urinayotgan Tor." },
            { title: "Extraction (Evakuatsiya)", role: "Tyler Rake", rating: "6.8", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=500", plot: "Dakka shahrida asirga olingan bolani qutqarish uchun kelgan yollanma askar." }
        ]
    },
    {
        id: 15,
        name: "Jackie Chan",
        birth: "1954",
        rating: "9.9",
        badge: "<i class='fas fa-laugh'></i> Komedik Jangchi",
        badgeClass: "stunt-badge",
        avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=500",
        bio: "Kino olamida eng ko'p suyaklari singan, har bir tryukni hayotini tikib bajargan afsonaviy xitoylik aktyor.",
        movies: [
            { title: "Rush Hour (Tig'iz Vaqt)", role: "Inspector Lee", rating: "7.0", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=500", plot: "Xitoylik va amerikalik ikki mutloqo teskari detektivlar sarguzashti." },
            { title: "The Foreigner", role: "Ngoc Minh Quan", rating: "7.0", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500", plot: "Portlashda qizidan ayrilgan otaning terrorchilardan dahshatli qasodi." }
        ]
    },
    {
        id: 16,
        name: "Zendaya",
        birth: "1996",
        rating: "9.4",
        badge: "<i class='fas fa-star'></i> Yosh Qirolicha",
        badgeClass: "premium-badge",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500",
        bio: "Zamonaviy yosh avlodning eng muvaffaqiyatli aktrisasi va moda timsoli, Eyforiya yulduzi.",
        movies: [
            { title: "Dune: Part Two", role: "Chani", rating: "8.6", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500", plot: "Qumli sayyorani ozod qilish va buyuk imperiyaga qarshi muqaddas urush." },
            { title: "Spider-Man: No Way Home", role: "MJ", rating: "8.2", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=500", plot: "Parallel koinotlar ochilib ketishi ortidan kelgan daxshatli xavf." }
        ]
    },
    {
        id: 17,
        name: "Christian Bale",
        birth: "1974",
        rating: "9.8",
        badge: "<i class='fas fa-mask'></i> Transformatsiya Qiroli",
        badgeClass: "",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500",
        bio: "Rollari uchun vaznini 30 kg gacha tashlaydigan yoki semira oladigan, fidoiylikda dunyoda birinchi raqamli aktyor.",
        movies: [
            { title: "The Dark Knight (Betmen)", role: "Bruce Wayne / Batman", rating: "9.0", image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=500", plot: "Gotem shahrini Joker ismli aqldan ozgan daxshatli qotildan qutqarish." },
            { title: "Ford v Ferrari", role: "Ken Miles", rating: "8.1", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=500", plot: "24 soatlik Le-Man poygasida Ferrari-ni yengish uchun qurilgan Ford mashinasi." }
        ]
    },
    {
        id: 18,
        name: "Margot Robbie",
        birth: "1990",
        rating: "9.6",
        badge: "<i class='fas fa-crown'></i> Barbi Malikasi",
        badgeClass: "premium-badge",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500",
        bio: "Gollivudda o'z prodyuserlik kompaniyasiga ega bo'lgan, aqlbovar qilmas kassa rekordlarini yangilagan aktrisa.",
        movies: [
            { title: "Barbie (2023)", role: "Barbie", rating: "6.9", image: "https://images.unsplash.com/photo-1608889174633-41a1c2285adb?q=80&w=500", plot: "Mukammal qo'g'irchoqlar olamidan real hayot muammolariga tushib qolish." },
            { title: "Suicide Squad", role: "Harley Quinn", rating: "5.9", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=500", plot: "Hukumat topshirig'ini bajarishga majbur bo'lgan yovuz aqldan ozganlar guruhi." }
        ]
    },
    {
        id: 19,
        name: "Vin Diesel",
        birth: "1967",
        rating: "9.5",
        badge: "<i class='fas fa-users'></i> Oila Himoyachisi",
        badgeClass: "stunt-badge",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500",
        bio: "Forsaj kinosining o'zgarmas yetakchisi, oila va do'stlik tushunchalarini har qanday narsadan ustun qo'yuvchi aktyor.",
        movies: [
            { title: "Fast Five (Forsaj 5)", role: "Dominic Toretto", rating: "7.3", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=500", plot: "Rio-de-Janeyroda yirik seyfni o'g'irlash bo'yicha super poygachilar reajasi." },
            { title: "Riddick", role: "Riddick", rating: "6.4", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500", plot: "Qorong'uda ko'ra oladigan xavfli jinoyatchining o'zga sayyoralik maxluqlar bilan jangi." }
        ]
    },
    {
        id: 20,
        name: "Morgan Freeman",
        birth: "1937",
        rating: "9.9",
        badge: "<i class='fas fa-microphone'></i> Oltin Ovoz",
        badgeClass: "premium-badge",
        avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=500",
        bio: "Kino olamining eng dono va ulug' aktyori. Uning ovozi va falsafiy rollari filmlarga o'zgacha sehr beradi.",
        movies: [
            { title: "The Shawshank Redemption", role: "Ellis Boyd 'Red' Redding", rating: "9.3", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=500", plot: "IMDb reytingida 1-o'rinda turuvchi, qamoqxonadan qochish va umid haqidagi eng buyuk asar." },
            { title: "Seven (Etti)", role: "Detective Somerset", rating: "8.6", image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=500", plot: "7 ta eng og'ir gunohlar asosida qotillik qilayotgan manyakni qidirayotgan keksaygan detektiv." }
        ]
    }
];

// Sahifa to'liq yuklanganda ishga tushuvchi qism
document.addEventListener("DOMContentLoaded", () => {
    const actorsGrid = document.getElementById("actorsGrid");
    const actorModal = document.getElementById("actorModal");
    const closeModalBtn = document.getElementById("closeModalBtn");

    if (!actorsGrid) return;

    // 1. 20 ta aktyorni ekranga shishasimon premium kartochka qilib chiqarish
    actorsGrid.innerHTML = actorsData.map(actor => `
        <div class="actor-card" onclick="openActorDetails(${actor.id})">
            <div class="avatar-wrapper">
                <img src="${actor.avatar}" alt="${actor.name}" loading="lazy">
                <div class="oscar-badge ${actor.badgeClass}">${actor.badge}</div>
            </div>
            <div class="actor-info">
                <h3 class="actor-name">${actor.name}</h3>
                <div class="actor-meta">
                    <span><i class="far fa-calendar"></i> ${actor.birth}</span>
                    <span><i class="fas fa-star"></i> ${actor.rating} Reyting</span>
                </div>
                <p class="actor-bio-short">${actor.bio.substring(0, 85)}...</p>
                <div class="click-hint">Filmlarini ko'rish <i class="fas fa-chevron-right"></i></div>
            </div>
        </div>
    `).join('');

    // 2. Modal yopish funksiyalari
    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            actorModal.classList.remove("active");
        });
    }

    if (actorModal) {
        actorModal.addEventListener("click", (e) => {
            if (e.target === actorModal) {
                actorModal.classList.remove("active");
            }
        });
    }
});

// 3. Aktyor bosilganda filmlarni va uning rasmlarini modalga dynamic yuklash
function openActorDetails(actorId) {
    const actor = actorsData.find(a => a.id === actorId);
    const actorModal = document.getElementById("actorModal");
    
    if (!actor || !actorModal) return;

    document.getElementById("modalActorName").innerText = actor.name;
    document.getElementById("modalActorBio").innerText = actor.bio;
    
    const modalMoviesGrid = document.getElementById("modalMoviesGrid");
    
    modalMoviesGrid.innerHTML = actor.movies.map(movie => `
        <div class="m-movie-card">
            <div class="m-poster">
                <img src="${movie.image}" alt="${movie.title}">
                <div class="m-rating"><i class="fas fa-star"></i> ${movie.rating}</div>
            </div>
            <div class="m-info">
                <h4 class="m-title">${movie.title}</h4>
                <p class="m-role"><i class="fas fa-user-tag"></i> Roli: ${movie.role}</p>
                <p class="m-plot">${movie.plot}</p>
            </div>
        </div>
    `).join('');

    actorModal.classList.add("active");
}