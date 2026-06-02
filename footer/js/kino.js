const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const options = {
  method: "GET",

  headers: {
    accept: "application/json",

    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2I4NmIyZDg1NmU1ZjdiNjJiYTBhZjRmNzk3ZTgxZCIsIm5iZiI6MTc3OTkzMTExMS44MjQsInN1YiI6IjZhMTc5N2U3MzQyY2Y2Y2RjMTFiNzE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QbBMT5ysdSj0r_AVqgqdsFZg7bGk6EgRYJF4bBj1CgI"
  }
};

async function getPopularMovies() {

  const response = await fetch(

    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",

    options
  );

  const data = await response.json();

  return data.results;
}

async function showMovies() {

  const moviesDiv =
    document.getElementById("movies");

  const movies =
    await getPopularMovies();

  console.log(movies);

  movies.forEach((movie) => {

    moviesDiv.innerHTML += `

      <div class="card">

        <img src="${IMAGE_URL + movie.poster_path}">

        <h2>${movie.title}</h2>

        <p>${movie.release_date}</p>

      </div>

    `;
  });
}

showMovies();

async function getMovies(type) {

  const response = await fetch(

    `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`,

    options
  );

  const data = await response.json();

  renderMovies(data.results);
}

function renderMovies(movies) {

  const moviesDiv =
    document.getElementById("movies");

  moviesDiv.innerHTML = "";

  movies.forEach((movie) => {

    moviesDiv.innerHTML += `

      <div class="card">

        <img src="${IMAGE_URL + movie.poster_path}">

        <h2>${movie.title}</h2>

        <p>${movie.release_date}</p>

      </div>

    `;
  });
}

getMovies("popular");















