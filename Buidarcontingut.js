function buidarAlFocus() {
    var elements = document.querySelectorAll('input[type="text"]');
    
    elements.forEach(function(element) {
        element.addEventListener('focus', function() {
            element.value = "";
        });
    });
}

window.onload = buidarAlFocus;
