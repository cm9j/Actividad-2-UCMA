
var contador = 1;

function agregarElemento() {

    var lista = document.getElementById('lista');
    var nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = 'Elemento ' + contador;
    lista.appendChild(nuevoElemento);
    contador++;
}