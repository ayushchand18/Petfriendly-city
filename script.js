const carousel = document.querySelector(".carousel");
let scrollAmount = 0;

function scrollPets() {
    scrollAmount += 2; 
    if (scrollAmount >= carousel.scrollWidth / 2) { 
        scrollAmount = 0; 
    }
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
}

setInterval(scrollPets, 50); 
