const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))



window.addEventListener("scroll", function(){
    movimiento();
})

function movimiento() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("scrolling", window.scrollY > 20);
}