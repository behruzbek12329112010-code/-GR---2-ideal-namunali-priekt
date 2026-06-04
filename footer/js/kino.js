const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2I4NmIyZDg1NmU1ZjdiNjJiYTBhZjRmNzk3ZTgxZCIsIm5iZiI6MTc3OTkzMTExMS44MjQsInN1YiI6IjZhMTc5N2U3MzQyY2Y2Y2RjMTFiNzE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QbBMT5ysdSj0r_AVqgqdsFZg7bGk6EgRYJF4bBj1CgI"
  }
};

const moviesDiv = document.getElementById("movies");

async function getMovies(type = "popular") {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`,
      options
    );

    const data = await response.json();

    renderMovies(data.results);
  } catch (err) {
    console.log(err);
  }
}

function renderMovies(movies) {
  moviesDiv.innerHTML = "";

  movies.forEach(movie => {
    const poster = movie.poster_path
      ? IMAGE_URL + movie.poster_path
      : "https://via.placeholder.com/500x750";

    moviesDiv.innerHTML += `
      <div class="card" onclick="openMovie(${movie.id})">

        <div class="card-img-wrapper">

          <img src="${poster}" alt="${movie.title}">

          <div class="card-badge">
            ⭐ ${movie.vote_average.toFixed(1)}
          </div>

          <div class="card-overlay">
            <button class="play-btn">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>

        </div>

        <h2>${movie.title}</h2>

        <p>${movie.release_date || "Unknown"}</p>

      </div>
    `;
  });
}

async function searchMovies(query) {
  if (!query.trim()) {
    getMovies("popular");
    return;
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`,
      options
    );

    const data = await response.json();

    renderMovies(data.results);
  } catch (err) {
    console.log(err);
  }
}

async function openMovie(id) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );

    const data = await response.json();

    const trailer = data.results.find(
      item =>
        item.site === "YouTube" &&
        (item.type === "Trailer" || item.type === "Teaser")
    );

    if (!trailer) {
      alert("Bu film uchun treyler topilmadi");
      return;
    }

    document.getElementById("trailerModal").style.display = "flex";

    document.getElementById(
      "trailerPlayer"
    ).src = `https://www.youtube.com/embed/${trailer.key}?autoplay=1`;

  } catch (err) {
    console.log(err);
  }
}

function closeTrailer() {
  document.getElementById("trailerModal").style.display = "none";

  document.getElementById("trailerPlayer").src = "";
}

window.onclick = function (e) {
  const modal = document.getElementById("trailerModal");

  if (e.target === modal) {
    closeTrailer();
  }
};

getMovies("popular");