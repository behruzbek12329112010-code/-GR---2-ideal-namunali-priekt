const threadsData = [
    {
        title: "Interstellar filmidagi qora tuynuk sahnasi mantiqan to'g'rimi?",
        author: "Behruz_Dev",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150",
        replies: "42", views: "312", time: "2 soat oldin",
        text: "Kip Torn hisob-kitoblari asosida yaratilgan 'Gargantua' qora tuynugi fiziklar tomonidan juda yuqori baholangan. Nima deb o'ylaysiz, u yerdagi vaqt sekinlashishi haqiqatga yaqinmi?"
    },
    {
        title: "Oppenheimer va Peaky Blinders: Killian Merfi qaysi rolda kuchliroq chiqqan?",
        author: "Nodira_Kino",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
        replies: "58", views: "419", time: "5 soat oldin",
        text: "Tomas Shelbi obrazidagi sovuqqonlik va Oppenheimerdagi ichki fojia hamda stress. Aktyorlik mahorati bo'yicha qaysi birini birinchi o'ringa qo'ygan bo'lardingiz?"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("forumThreads");
    if(!list) return;
    list.innerHTML = threadsData.map(t => `
        <div class="thread-card">
            <img src="${t.avatar}" class="author-img" alt="Avatar">
            <div class="thread-details">
                <h3>${t.title}</h3>
                <div class="thread-meta">
                    <span><i class="far fa-user"></i> ${t.author}</span>
                    <span><i class="far fa-clock"></i> ${t.time}</span>
                    <span><i class="far fa-comment"></i> ${t.replies} javob</span>
                    <span><i class="far fa-eye"></i> ${t.views} ko'rish</span>
                </div>
                <p class="thread-text">${t.text}</p>
            </div>
        </div>
    `).join('');
});