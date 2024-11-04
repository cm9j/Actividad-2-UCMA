var textoVisible = false;

function toggleText() {
    // Selecciona el elemento de texto adicional
    var textoAdicional = document.querySelector('.additional');
    // Selecciona el enlace
    var enlace = document.querySelector('a');

    if (textoVisible) {
        // Si el texto está visible, lo ocultamos
        textoAdicional.classList.add('hidden');
        textoAdicional.classList.remove('visible');
        enlace.textContent = 'Seguir leyendo';
        textoVisible = false;
    } else {
        // Si el texto está oculto, lo mostramos
        textoAdicional.classList.remove('hidden');
        textoAdicional.classList.add('visible');
        enlace.textContent = 'Ocultar exceso de texto';
        textoVisible = true;
    }
}