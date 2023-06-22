const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))



window.addEventListener("scroll", function(){
    movimiento();
})

function movimiento() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("scrolling", window.scrollY > 20);
}

// ----------------------------------------------------------------------------------------------------------

carga();

function carga() {
    const http = new XMLHttpRequest();
    var ruta = "./js/portafolio.txt";
    var tarjetas = ``;

    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var arreglo = JSON.parse(this.responseText);

            var cartas = document.getElementById('cartas');

            for(let i in arreglo) {

                if(arreglo[i].clave == "") {

                } else {
                    tarjetas += `
                        <div class="card">
                            <div class="img">
                                <img id="img-icon" class="imagen-icon-portafolio" src="${arreglo[i].icono}">
                            </div>
                            <span>${arreglo[i].nombre}</span>
                            <p class="info">${arreglo[i].description}</p>
                            <div class="share">
                                <a href="${arreglo[i].pagina}" target="_blank">
                                    <img src="img/icon/monitor.svg" class="icon-svg-portafolio">
                                </a>
                                <a href="${arreglo[i].github}" target="_blank">
                                    <img src="img/icon/github.svg" class="icon-svg-portafolio">
                                </a>
                            </div>
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" value="0" onclick="abrirModal(${arreglo[i].clave})">resumen</button>
                        </div>`;

                    cartas.innerHTML = tarjetas;
                }

            }
        }
    }

    http.open("GET", ruta, true);
    http.send();
}

function abrirModal(valor) {
    const http = new XMLHttpRequest();
    var ruta = "./js/portafolio.txt";

    http.open("GET", ruta, true);
    http.send();

    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var arreglo = JSON.parse(this.responseText);

            var img1 = document.getElementById('img-carucel-1');
            var img2 = document.getElementById('img-carucel-2');

            img1.src = arreglo[valor].imagen1;
            img2.src = arreglo[valor].imagen2;

        }
    }
}