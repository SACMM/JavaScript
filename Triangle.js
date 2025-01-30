function comprovarTriangle() {
    let costat1 = parseInt(prompt("Introdueix el primer costat:"));
    let costat2 = parseInt(prompt("Introdueix el segon costat:"));
    let costat3 = parseInt(prompt("Introdueix el tercer costat:"));
    if (costat1 > 0 && costat2 > 0 && costat3 > 0) {
        let tipus;
        if (costat1 === costat2 && costat2 === costat3) {
            tipus = "El triangle és equilàter.";
        } else if (costat1 === costat2 || costat1 === costat3 || costat2 === costat3) {
            tipus = "El triangle és isòsceles.";
        } else {
            tipus = "El triangle és escalè.";
        }
        document.write(tipus);
    } else {
        document.write("Introdueix uns costats vàlids.");
    }
}
