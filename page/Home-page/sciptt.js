// Lokal rasmlarga moslangan va bir-birini takrorlamaydigan filmlar bazasi
const tmdbData = {
  trending: {
    today: [
      { title: "Deadpool & Wolverine", date: "July 26, 2024", img: "https://i.pinimg.com/originals/97/bd/97/97bd972695fafc40ba04f773fb7143b8.png" },
      { title: "Inside Out 2", date: "June 14, 2024", img: "https://www.theregalcinema.org/wp-content/uploads/2024/09/Inside-Out-2-Fb.png" },
      { title: "Furiosa: A Mad Max Saga", date: "May 24, 2024", img: "https://imageio.forbes.com/specials-images/imageserve/66744ad8984230fd11826566/0x0.jpg?format=jpg&amp;height=900&amp;width=1600&amp;fit=bounds" },
      { title: "Kingdom of the Planet of the Apes", date: "May 10, 2024", img: "https://images-s.kinorium.com/movie/poster/2328273/w1500_52682125.jpg" },
      { title: "Dune: Part Two", date: "March 1, 2024", img: "https://cdn.thefpsreview.com/wp-content/uploads/2024/04/dune-part-two-poster-paul-chani-sunset-poster-feature.jpg" },
      { title: "The Fall Guy", date: "May 3, 2024", img: "https://www.koimoi.com/wp-content/new-galleries/2024/04/the-fall-guy-movie-review-3.jpg" },
      { title: "Oppenheimer", date: "July 21, 2023", img: "https://www.kino-teatr.ru/movie/kadr/154859/1443518.jpg" },
      { title: "Barbie", date: "July 21, 2023", img: "https://s0.rbk.ru/v6_top_pics/media/img/1/90/346946964505901.jpeg" },
      { 
    title: "Inside Out 2", 
    date: "June 14, 2024", 
    img: "https://images-s.kinorium.com/movie/poster/9860574/w1500_52043258.jpg" 
  },
  { 
    title: "Furiosa: A Mad Max Saga", 
    date: "May 24, 2024", 
    img: "https://www.dexerto.com/cdn-image/wp-content/uploads/2024/05/22/Furiosa-Mad-Max-Saga-poster.jpg" 
  },
  { 
    title: "Kingdom of the Planet of the Apes", 
    date: "May 10, 2024", 
    img: "https://i.ytimg.com/vi/Eh1IVv_i4Pc/maxresdefault.jpg" 
  },
  { 
    title: "The Garfield Movie", 
    date: "May 24, 2024", 
    img: "https://static.kinoafisha.info/k/movie_posters/1920x1080/upload/movie_posters/8/9/0/8367098/544064447377.jpg" 
  },
  { 
    title: "Atlas", 
    date: "May 24, 2024", 
    img: "https://cdn.mos.cms.futurecdn.net/auRzjCPYkaeAx2YZLD94hj-1024-80.jpg" 
  },
  { 
    title: "The Fall Guy", 
    date: "May 3, 2024", 
    img: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb1c8f66c-65b6-445a-b850-b957bf303b4b_1921x797.jpeg" 
  }
      
    ],
    week: [
      { title: "Bad Boys: Ride or Die", date: "June 7, 2024", img: "https://i.ytimg.com/vi/8DJ_M7KqxRA/maxresdefault.jpg" },
     
      { title: "The Batman", date: "March 4, 2022", img: "https://img.championat.com/s/1350x900/news/big/y/u/mett-rivz-raskryl-nazvanie-svoej-vselennoj-s-betmenom-v-ispolnenii-roberta-pattinsona_1721794585524968739.jpg" },
      { title: "Top Gun: Maverick", date: "May 27, 2022", img: "https://s.yimg.com/ny/api/res/1.2/xJYLtnb5WdRpf4Dipm3uWw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk7Y2Y9d2VicA--/https://media.zenfs.com/en/comingsoon_net_477/d33cfcc87428f91a78479aa5ac9379c4" },
      { 
    title: "Obsession", 
    date: "May 22, 2026", 
    img: "https://i.ytimg.com/vi/qLxyDrfkIBQ/maxresdefault.jpg" 
  },
  { 
    title: "Project Hail Mary", 
    date: "May 15, 2026", 
    img: "https://comicbook.com/wp-content/uploads/sites/4/2024/06/68358a24-7185-492f-b142-e185dbae9258.jpg?w=1200" 
  },
  { 
    title: "Scary Movie 6", 
    date: "June 3, 2026", 
    img: "https://cdn.thefpsreview.com/wp-content/uploads/2024/04/dune-part-two-poster-paul-chani-sunset-poster-feature.jpg" 
  },
  { 
    title: "Masters of the Universe", 
    date: "June 4, 2026", 
    img: "https://cdn.shazoo.ru/c1400x625/860713_d4g2MMQ_thumb-1920-1406537.jpg" 
  },
  { 
    title: "The Crash", 
    date: "May 29, 2026", 
    img: "https://i.ytimg.com/vi/dDZ48O6Bixs/maxresdefault.jpg" 
  }
    ]
  },
  trailers: {
    popular: [
      { title: "Coyote vs ACME", text: "Destiny Arrives August 28", img: "https://www.kino-teatr.ru/movie/kadr/145297/2074526.jpg" },
      { title: "Masters of the Universe", text: "In Cinemas and IMAX 4 June", img: "https://cdn.shazoo.ru/c1400x625/860713_d4g2MMQ_thumb-1920-1406537.jpg" },
      { title: "The End of Oak Street", text: "Have you experienced the new trailer?", img: "https://i.ytimg.com/vi/qLxyDrfkIBQ/maxresdefault.jpg" },
      { title: "Tuner", text: "Pulses Raising", img: "https://i.ytimg.com/vi/dDZ48O6Bixs/maxresdefault.jpg" }
    ],
    theaters: [
      { title: "Sonic the Hedgehog 3", text: "New Adventures This December", img: "https://images-s.kinorium.com/movie/shot/8663323/w1500_54594509.jpg" },
      { title: "Mufasa: The Lion King", text: "The Legend Begins", img: "https://i.ebayimg.com/images/g/xiAAAeSwcuZnwRWK/s-l1600.jpg" },
      { 
    title: "The Super Mario Galaxy Movie", 
    text: "The Animated Global Box Office #1", 
    img: "https://variety.com/wp-content/uploads/2023/04/super-mario-movie-1.jpg?w=1000" 
  },
  { 
    title: "Michael", 
    text: "The King of Pop Biopic Shattering Records", 
    img: "https://img.championat.com/s/1350x900/news/big/y/u/mett-rivz-raskryl-nazvanie-svoej-vselennoj-s-betmenom-v-ispolnenii-roberta-pattinsona_1721794585524968739.jpg" 
  },
  { 
    title: "The Mandalorian and Grogu", 
    text: "Star Wars Epic Live-Action Movie", 
    img: "https://cdn.shazoo.ru/c1400x625/860713_d4g2MMQ_thumb-1920-1406537.jpg" 
  },
  { 
    title: "The Devil Wears Prada 2", 
    text: "The Highly Anticipated Fashion Return", 
    img: "https://s.yimg.com/ny/api/res/1.2/gpoZmxHowM6Rj9P.N4lF5A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk7Y2Y9d2VicA--/https://media.zenfs.com/en/comingsoon_net_477/3cfc334f3c7cb0326f75d0bf93270762" 
  },
  { 
    title: "Obsession", 
    text: "Atomic Monster and Blumhouse Thriller Hit", 
    img: "https://i.ytimg.com/vi/qLxyDrfkIBQ/maxresdefault.jpg" 
  }
    ]
  },
  popular: [
    { title: "Star Wars: The Mandalorian and Grogu", text: "In Cinemas Worldwide", img: "https://cdn.shazoo.ru/c1400x625/860713_d4g2MMQ_thumb-1920-1406537.jpg" },
    
      { title: "Michael", text: "The King of Pop Biopic", img: "https://img.championat.com/s/1350x900/news/big/y/u/mett-rivz-raskryl-nazvanie-svoej-vselennoj-s-betmenom-v-ispolnenii-roberta-pattinsona_1721794585524968739.jpg" },
      { title: "The Legend of Aang", text: "The Last Airbender Animated Event", img: "https://i.ytimg.com/vi/qLxyDrfkIBQ/maxresdefault.jpg" },
    { title: "Wednesday", date: "November 23, 2022", img: "https://i.ibb.co/VHh2ZsM/imgae5ad8bed2ba581eb2f5c545ffe2a925.jpg" },
    { title: "Stranger Things", date: "July 15, 2016", img: "https://upload.wikimedia.org/wikipedia/ru/thumb/b/b1/Stranger_Things_season_1.jpg/960px-Stranger_Things_season_1.jpg" },
    { title: "The Boys", date: "July 26, 2019", img: "https://assets.aboutamazon.com/dims4/default/0815d77/2147483647/strip/true/crop/2548x1434+1+0/resize/2640x1486!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F34%2F65%2Ffb00aebc49a7985bc9571d042264%2Ffull-width-mobile-first-hero-2550x1434.jpg" },
    { title: "Game of Thrones", date: "April 17, 2011", img: "https://avatars.mds.yandex.net/i?id=17144d97b78cd6151838356ed43a467aa4d94097-10464536-images-thumbs&n=13" },
    { title: "Breaking Bad", date: "January 20, 2008", img: "https://s.yimg.com/ny/api/res/1.2/gpoZmxHowM6Rj9P.N4lF5A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk7Y2Y9d2VicA--/https://media.zenfs.com/en/comingsoon_net_477/3cfc334f3c7cb0326f75d0bf93270762" },
    { title: "Rik va Morti", date: "December 2, 2013", img: "https://fbi.cults3d.com/uploaders/37582921/illustration-file/aa5a5704-8c3b-4d2c-9107-d2038ae2c2c9/1335145.jpg" },
    { title: "Loki", date: "June 9, 2021", img: "https://m.media-amazon.com/images/M/MV5BNTRhZGVmZjgtYThhMi00Zjc5LWE5MDctNzY4ZGY3MmMxYjM5XkEyXkFqcGc@._V1_.jpg" },
    { title: "The Mandalorian", date: "November 12, 2019", img: "https://m.media-amazon.com/images/M/MV5BZjVmZGJkODEtYjIyMS00ZmQ4LWJiMWUtNjdmNTg1OTNkOTA3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" }
  ]
};

// Trendlar generatori
function loadTrends(timeframe) {
  const container = document.getElementById('trend-scroller');
  container.innerHTML = '';
  tmdbData.trending[timeframe].forEach(item => {
    container.innerHTML += `
      <div class="card">
        <div class="image-wrap">
          <img src="${item.img}" alt="${item.title}">
          <button class="opt-btn">•••</button>
        </div>
        <div class="info-wrap">
          <h3>${item.title}</h3>
          <p>${item.date}</p>
        </div>
      </div>`;
  });
}

// Treylerlar generatori
function loadTrailers(category) {
  const container = document.getElementById('video-scroller');
  container.innerHTML = '';
  tmdbData.trailers[category].forEach(item => {
    container.innerHTML += `
      <div class="card video-card">
        <div class="image-wrap">
          <img src="${item.img}" alt="${item.title}">
          <div class="play-icon">▶</div>
          <button class="opt-btn">•••</button>
        </div>
        <div class="info-wrap">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      </div>`;
  });
}

// Ommabop qismi generatori
function loadPopular() {
  const container = document.getElementById('popular-scroller');
  container.innerHTML = '';
  tmdbData.popular.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <div class="image-wrap">
          <img src="${item.img}" alt="${item.title}">
          <button class="opt-btn">•••</button>
        </div>
        <div class="info-wrap">
          <h3>${item.title}</h3>
          <p>${item.date}</p>
        </div>
      </div>`;
  });
}

// Aktivlikni boshqarish
function setupToggle(buttonId, callback, type) {
  const btn = document.getElementById(buttonId);
  if(btn) {
    btn.addEventListener('click', (e) => {
      const parent = e.target.parentElement;
      parent.querySelector('.anchor.active').classList.remove('active');
      e.target.classList.add('active');
      callback(type);
    });
  }
}

// Hodisalarni sozlash
setupToggle('trend-today', loadTrends, 'today');
setupToggle('trend-week', loadTrends, 'week');
setupToggle('trailer-popular', loadTrailers, 'popular');
setupToggle('trailer-theaters', loadTrailers, 'theaters');

// Birinchi yuklanish
document.addEventListener('DOMContentLoaded', () => {
  loadTrends('today');
  loadTrailers('popular');
  loadPopular();
});