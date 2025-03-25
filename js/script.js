
const contadorVisitas = document.getElementById('contadorVisitas');
const restablecer = document.getElementById('btnReestablecer')

let visitas = localStorage.getItem('contadorVisitas')

visitas = visitas ?
Number (visitas) +1 : 1;

localStorage.setItem('contadorVisitas', visitas);
contadorVisitas.innerText = visitas;

restablecer.addEventListener('click', function() {
    localStorage.clear();
    location.reload()
})
