function comprovarDNI() {
    let dni = document.getElementById("dni").value;
    if (dni === "") {
        alert("El camp DNI no pot estar buit.");
    } else {
        alert("DNI introduït correctament: " + dni);
    }
}
