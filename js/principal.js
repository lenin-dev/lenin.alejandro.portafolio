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

    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var arreglo = JSON.parse(this.responseText);

            var cartas = document.getElementById('cartas');

            for(let i in arreglo) {
                var div = document.createElement('div');
                    div.setAttribute("class", "card");

                    var div1 = document.createElement('div');
                        div1.setAttribute("class", "img");
                    var img = document.createElement('img');
                        img.setAttribute("id", "img-icon");
                        img.setAttribute("class", "imagen-icon-portafolio");
                        img.setAttribute("src", arreglo[i].icono);
                    div1.appendChild(img);

                    var span = document.createElement('span');
                        var textValor1 = document.createTextNode(arreglo[i].nombre);
                        span.appendChild(textValor1);

                    var p = document.createElement('p');
                        p.setAttribute("class", "info");
                        var textValor2 = document.createTextNode(arreglo[i].description);
                        p.appendChild(textValor2);

                    var div2 = document.createElement('div');
                        div2.setAttribute("class", "share");
                        var a = document.createElement('a');
                            a.setAttribute("href", arreglo[i].pagina);
                            a.setAttribute("target", "_blank");
                            var img2 = document.createElement('img');
                            img2.setAttribute("src", "img/icon/monitor.svg");
                            img2.setAttribute("class", "icon-svg-portafolio");
                        var a2 = document.createElement('a');
                            a2.setAttribute("href", arreglo[i].github);
                            a2.setAttribute("target", "_blank");
                            var img3 = document.createElement('img');
                            img3.setAttribute("src", "img/icon/github.svg");
                            img3.setAttribute("class", "icon-svg-portafolio");
                                a.appendChild(img2);
                                a2.appendChild(img3);
                                div2.appendChild(a);
                                div2.appendChild(a2);
                var button = document.createElement('button');
                    button.setAttribute("data-bs-toggle", "modal");
                    button.setAttribute("data-bs-target", "#exampleModal");
                    button.setAttribute("value", arreglo[i].clave);
                    button.setAttribute("onclick", "abrirModal(value)" );
                    var textValor3 = document.createTextNode("resumen");
                    button.appendChild(textValor3);

                div.appendChild(div1);
                div.appendChild(span);
                div.appendChild(p);
                div.appendChild(div2);
                div.appendChild(button);
                cartas.appendChild(div);
                // div.appendChild();

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