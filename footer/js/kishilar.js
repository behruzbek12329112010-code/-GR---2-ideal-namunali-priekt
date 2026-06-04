const API_KEY = "3cb86b2d856e5f7b62ba0af4f797e81d";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const peopleGrid = document.getElementById("peopleGrid");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const personModal = document.getElementById("personModal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close-btn");

document.addEventListener("DOMContentLoaded", () => {
  getPopularPeople();
});

async function getPopularPeople() {
  try {
    const response = await fetch(
      `${BASE_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=1`
    );

    const data = await response.json();
    displayPeople(data.results);
  } catch (error) {
    console.error("Xatolik:", error);
  }
}

function displayPeople(people) {
  peopleGrid.innerHTML = "";

  if (!people || people.length === 0) {
    peopleGrid.innerHTML = `
      <p style="color:white;text-align:center;width:100%">
        Hech kim topilmadi
      </p>
    `;
    return;
  }

  people.forEach((person) => {
    const profileImg = person.profile_path
      ? `${IMAGE_URL}${person.profile_path}`
      : "https://via.placeholder.com/500x750?text=No+Image";

    const card = document.createElement("div");
    card.classList.add("person-card");

    card.innerHTML = `
      <img src="${profileImg}" alt="${person.name}">
      <h3>${person.name}</h3>
      <p>${person.known_for_department || "Noma'lum"}</p>
    `;

    card.addEventListener("click", () => {
      getPersonDetails(person.id);
    });

    peopleGrid.appendChild(card);
  });
}

async function searchPeople() {
  const query = searchInput.value.trim();

  if (!query) {
    getPopularPeople();
    return;
  }

  try {
    const response = await fetch(
      `${BASE_URL}/search/person?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}&language=en-US&page=1`
    );

    const data = await response.json();
    displayPeople(data.results);
  } catch (error) {
    console.error("Qidiruv xatosi:", error);
  }
}
async function getPersonDetails(personId) {
  try {
    const response = await fetch(
      `${BASE_URL}/person/${personId}?api_key=${API_KEY}&language=en-US`
    );

    const person = await response.json();

    const profileImg = person.profile_path
      ? `${IMAGE_URL}${person.profile_path}`
      : "https://via.placeholder.com/500x750?text=No+Image";

    modalBody.innerHTML = `
      <div class="modal-details">
        <img src="${profileImg}" alt="${person.name}">

        <div class="info-side">
          <h2>${person.name}</h2>

          <p>
            <strong>Kasbi:</strong>
            ${person.known_for_department || "Noma'lum"}
          </p>

          <p>
            <strong>Tug'ilgan sana:</strong>
            ${person.birthday || "Noma'lum"}
          </p>

          <p>
            <strong>Tug'ilgan joy:</strong>
            ${person.place_of_birth || "Noma'lum"}
          </p>

          <p>
            <strong>Mashhurligi:</strong>
            ${person.popularity}
          </p>

          <div class="biography">
            <strong>Biografiya:</strong>
            <p>
              ${
                person.biography ||
                "Biografik ma'lumot mavjud emas."
              }
            </p>
          </div>
        </div>
      </div>
    `;

    personModal.style.display = "flex";
  } catch (error) {
    console.error("Ma'lumot olishda xatolik:", error);
  }
}

searchBtn.addEventListener("click", searchPeople);

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchPeople();
  }
});

closeBtn.addEventListener("click", () => {
  personModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === personModal) {
    personModal.style.display = "none";
  }
});