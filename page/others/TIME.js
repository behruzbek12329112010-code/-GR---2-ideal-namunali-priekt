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

let activeTimers = []; // Dinamik taymerlar klasteri
let currentLoadedData = []; // Saralangan ma'lumotlarni global saqlash uchun

// Matematik Haversine Formulorasi
function getDistanceKM(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    return (R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)))).toFixed(1);
}

// GPS yuklash tizimi
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

// Chap tomondagi ro'yxatni generatsiya qilish (HTML buglarsiz, index orqali boshqariladi)
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

// Element tanlanganda index orqali xavfsiz yuklash
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
    
    // Telefonlarda tanlanganda panelga avtomatik silliq siljitish (UX yaxshilash)
    if(window.innerWidth <= 968) {
        panel.scrollIntoView({ behavior: 'smooth' });
    }
}

// Live Countdown
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