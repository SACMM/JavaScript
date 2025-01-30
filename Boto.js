function comprovarBOTO() {
    let boto = document.getElementById("boto").value;
    if (boto === "") {
        alert("El camp del boto no pot estar buit.");
    } else {
        alert("Has introduït contingut en el boto: " + boto);
    }
}
