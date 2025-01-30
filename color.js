function canviarColorBlau() {
    var botons = document.querySelectorAll('button');
    botons.forEach(function(boton) {
        boton.addEventListener('mouseover', function() {
            boton.style.color = 'blue';
        });
        boton.addEventListener('mouseout', function() {
            boton.style.color = '';
        });
    });
}

window.onload = canviarColorBlau;
