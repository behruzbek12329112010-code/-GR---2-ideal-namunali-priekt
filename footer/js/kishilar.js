const API_KEY = '3cb86b2d856e5f7b62ba0af4f797e81d';
const BASE_URL = 'https://themoviedb.org';
const IMAGE_URL = 'https://tmdb.org';

const peopleGrid = document.getElementById('peopleGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const personModal = document.getElementById('personModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-btn');

document.addEventListener('DOMContentLoaded', () => {
    getPopularPeople();
});

async function getPopularPeople() {
    try {
        const response = await fetch(`${BASE_URL}/person/popular?api_key=${API_KEY}&language=uz-UZ&page=1`);
        const data = await response.json();
        displayPeople(data.results);
    } catch (error) {
        console.error(error);
    }
}

function displayPeople(people) {
    peopleGrid.innerHTML = '';
    if(!people || people.length === 0) {
        peopleGrid.innerHTML = '<p style="color: white; text-align: center; width: 100%;">Hech kim topilmadi.</p>';
        return;
    }
    people.forEach(person => {
        const profileImg = person.profile_path ? IMAGE_URL + person.profile_path : 'https://placeholder.com';
        const card = document.createElement('div');
        card.classList.add('person-card');
        card.innerHTML = `
            <img src="${profileImg}" alt="${person.name}">
            <h3>${person.name}</h3>
            <p>${person.known_for_department || 'Aktyor'}</p>
        `;
        card.addEventListener('click', () => getPersonDetails(person.id));
        peopleGrid.appendChild(card);
    });
}

async function searchPeople() {
    const query = searchInput.value.trim();
    if (!query) return;
    try {
        const response = await fetch(`${BASE_URL}/search/person?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=uz-UZ`);
        const data = await response.json();
        displayPeople(data.results);
    } catch (error) {
        console.error(error);
    }
}

searchBtn.addEventListener('click', searchPeople);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchPeople();
});

async function getPersonDetails(personId) {
    try {
        const response = await fetch(`${BASE_URL}/person/${personId}?api_key=${API_KEY}&language=uz-UZ`);
        const person = await response.json();
        const profileImg = person.profile_path ? IMAGE_URL + person.profile_path : 'https://placeholder.com';
        const bio = person.biography || "Ushbu ijodkor haqida biografik ma'lumot kiritilmagan.";
        const birthday = person.birthday ? person.birthday : "Noma'lum";
        const placeOfBirth = person.place_of_birth ? person.place_of_birth : "Noma'lum";

        modalBody.innerHTML = `
            <div class="modal-details">
                <img src="${profileImg}" alt="${person.name}">
                <div class="info-side">
                    <h2>${person.name}</h2>
                    <p><strong>Kasbi:</strong> ${person.known_for_department}</p>
                    <p><strong>Tug'ilgan sanasi:</strong> ${birthday}</p>
                    <p><strong>Tug'ilgan joyi:</strong> ${placeOfBirth}</p>
                    <p><strong>Mashhurlik darajasi:</strong> ${person.popularity}</p>
                    <div class="biography">
                        <strong>Biografiyasi:</strong>
                        <p>${bio}</p>
                    </div>
                </div>
            </div>
        `;
        personModal.style.display = 'block';
    } catch (error) {
        console.error(error);
    }
}

closeBtn.addEventListener('click', () => personModal.style.display = 'none');
window.addEventListener('click', (e) => {
    if (e.target === personModal) personModal.style.display = 'none';
});
