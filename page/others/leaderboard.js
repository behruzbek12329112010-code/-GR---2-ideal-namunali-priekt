const leaders = [
    { rank: 1, name: "Bunyod_Donaboyev", movies: "412 ta", points: "12,450", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150" },
    { rank: 2, name: "Jasur_Bek", movies: "389 ta", points: "11,200", avatar: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=150" },
    { rank: 3, name: "Shahzoda_Kino", movies: "320 ta", points: "9,850", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150" }
];

document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("leaderboardList");
    if(!list) return;
    list.innerHTML = leaders.map(l => `
        <div class="lb-row">
            <div class="col-rank rank-${l.rank}">#${l.rank}</div>
            <div class="col-user">
                <img src="${l.avatar}" alt="User">
                <span>${l.name}</span>
            </div>
            <div class="col-movies">${l.movies}</div>
            <div class="col-points">${l.points} pts</div>
        </div>
    `).join('');
});