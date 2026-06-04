const grid = document.getElementById("movieGrid");

function scrollPrev() {
  grid.scrollBy({ left: -300, behavior: "smooth" });
}

function scrollNext() {
  grid.scrollBy({ left: 300, behavior: "smooth" });
}

function filterList(type, btn) {
  const pills = document.querySelectorAll(".pill");
  pills.forEach(p => p.classList.remove("active"));
  btn.classList.add("active");

  const cards = document.querySelectorAll(".movie-card");
  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "scale(0.9)";
    
    setTimeout(() => {
      if (type === "all") {
        card.style.display = "block";
      } else {
        card.style.display = card.getAttribute("data-type") === type ? "block" : "none";
      }
      
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
      }, 50);
    }, 300);
  });
}