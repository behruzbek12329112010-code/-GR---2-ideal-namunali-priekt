const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2I4NmIyZDg1NmU1ZjdiNjJiYTBhZjRmNzk3ZTgxZCIsIm5iZiI6MTc3OTkzMTExMS44MjQsInN1YiI6IjZhMTc5N2U3MzQyY2Y2Y2RjMTFiNzE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QbBMT5ysdSj0r_AVqgqdsFZg7bGk6EgRYJF4bBj1CgI"
  }
};

async function getMovies(type) {

  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${type}?language=en-US&page=1`,
    options
  );

  const data = await response.json();

  renderMovies(data.results);
}

function renderMovies(series) {

  const moviesDiv =
    document.getElementById("movies");

  moviesDiv.innerHTML = "";

  series.forEach((item) => {

    moviesDiv.innerHTML += `

      <div class="card">

        <div class="card-img-wrapper">

          <img src="${IMAGE_URL + item.poster_path}" alt="${item.name}">

          <div class="card-badge">TV</div>

          <div class="card-overlay">
            <button class="play-btn">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>

        </div>

        <div class="card-info">

          <h2>${item.name}</h2>

          <div class="card-meta">

            <span class="rating">
              <i class="fa-solid fa-star"></i>
              ${item.vote_average.toFixed(1)}
            </span>

            <span class="year">
              ${item.first_air_date?.slice(0, 4) || ""}
            </span>

          </div>

        </div>

      </div>

    `;
  });
}

// Popular seriallar
getMovies("popular");