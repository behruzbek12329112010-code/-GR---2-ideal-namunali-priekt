const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const options = {
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2I4NmIyZDg1NmU1ZjdiNjJiYTBhZjRmNzk3ZTgxZCIsIm5iZiI6MTc3OTkzMTExMS44MjQsInN1YiI6IjZhMTc5N2U3MzQyY2Y2Y2RjMTFiNzE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QbBMT5ysdSj0r_AVqgqdsFZg7bGk6EgRYJF4bBj1CgI"
  }
};

const moviesDiv = document.getElementById("movies");

async function getSeries(type = "popular") {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${type}?language=en-US&page=1`,
    options
  );

  const data = await res.json();
  render(data.results);
}

function render(items) {
  moviesDiv.innerHTML = "";

  items.forEach(item => {
    const img = item.poster_path
      ? IMAGE_URL + item.poster_path
      : "https://via.placeholder.com/500x750";

    moviesDiv.innerHTML += `
      <div class="card" onclick="openMovie(${item.id})">
        <img src="${img}">
        <h2>${item.name}</h2>
        <p>${item.first_air_date || ""}</p>
      </div>
    `;
  });
}

async function openMovie(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,
    options
  );

  const data = await res.json();

  const trailer = data.results.find(v => v.site === "YouTube");

  alert("Serial haqida ma'lumot ochiladi");

  if (!trailer) return;

  document.getElementById("trailerModal").style.display = "flex";
  document.getElementById("trailerPlayer").src =
    `https://www.youtube.com/embed/${trailer.key}`;
}

function closeTrailer() {
  document.getElementById("trailerModal").style.display = "none";
  document.getElementById("trailerPlayer").src = "";
}

getSeries();