function cargarSelect(select, data) {
    limpiarSelect(select);
    data.forEach(element => {
        let opcion = document.createElement('option');
        opcion.setAttribute('value', element);
        let texto = document.createTextNode(element);
        opcion.appendChild(texto);
        select.appendChild(opcion);
    });
}

function limpiarSelect(select) {
    while (select.hasChildNodes()) {
        select.remove(select.firstChild);
    }
}