// Definición de la función App
function App() {}

// Inicialización del objeto App cuando la ventana se carga
window.onload = function(event) {
    var app = new App();
    window.app = app;

    // Asigna eventos a los botones
    const buttons = document.querySelectorAll('.carrusel-arrow');
    buttons.forEach(button => {
        button.addEventListener('click', app.processingButton.bind(app));
    });
};

// Método de la clase App para procesar los botones del carrusel
App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const carruselList = btn.parentNode;
    const track = carruselList.querySelector('#track');
    const carruseles = track.querySelectorAll('.carrusel');

    const carruselWidth = carruseles[0].offsetWidth;
    const listWidth = carruselList.offsetWidth;

    let leftPosition = track.style.transform === "" ? 0 : Math.abs(parseInt(track.style.transform.replace('translateX(', '').replace('px)', '')));
    
    if (btn.dataset.button === "button-prev") {
        prevAction(leftPosition, carruselWidth, track);
    } else if (btn.dataset.button === "button-next") {
        nextAction(leftPosition, track.scrollWidth, listWidth, carruselWidth, track);
    }
}

// Acción para el botón "prev" (anterior)
function prevAction(leftPosition, carruselWidth, track) {
    if (leftPosition > 0) {
        track.style.transform = `translateX(${-1 * (leftPosition - carruselWidth)}px)`;
    }
}

// Acción para el botón "next" (siguiente)
function nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track) {
    if (leftPosition < (trackWidth - listWidth)) {
        track.style.transform = `translateX(${-1 * (leftPosition + carruselWidth)}px)`;
    }
}
