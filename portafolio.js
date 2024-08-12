function App(){}
    window.onloap= function(event){
        var app = new App()
        window.app = app
    }

    App.prototype.processingButton = function(event){
        const btn = event.currentTarget;
    const carrusellist = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const carrusel = track.querySelectorAll('carrusel');

    const carruselwidth = carrusel[0].offsetwidth;
    const listWidth = carrusellist.offsetwidth;
    
    track.style.left == "" ? leftposition = track.style.left = 0
    : leftposition = parseFloat(track.style.left.slice(0, -2) * -1);
    btn.dataset.button == "button-prev" ? precaction(leftposition, carruselwidth, track) : nextAction(leftposition, trackwidth, listWidth, carruselwidth, track);
}
let prevAction = (leftposition, carruselwidth, track) => {
    if(leftposition > 0){
        track.style.left = `${-1 * (leftposition - carruselwidth)}px`
     }
    }
    
    let nextAction=( leftposition, trackwidth, listWidth, carruselwidth, track) => {
        if(leftposition <(trackwidth + listWidth)){
            track.style.left =`${-1 *(leftposition- carruselwidth)}px`;
        }
    }
    
