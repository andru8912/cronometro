const cronometro = document.getElementById('cronometro');
const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');

let [horas, minutos, segundos] = [0, 0, 0];

let intervaloDelTiempo;
let estadoCronometro = 'pausado';

function actualizarCronometro() {
    segundos++;

    if (segundos / 60 === 1) {
       segundos = 0;
       minutos++; 
    }

    if (minutos / 60 === 1) {
        minutos = 0;
        horas++; 
     }

     const segundosConFormato = asignarFormato(segundos);
     const minutosConFormato = asignarFormato(minutos);
     const horasConFormato = asignarFormato(horas);

     cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;

}

function asignarFormato(unidadDelTiempo) {
    return unidadDelTiempo < 10 ? '0' + unidadDelTiempo : unidadDelTiempo;
}

botonInicioPausa.addEventListener('click', function() {
    if (estadoCronometro === 'pausado') {
        intervaloDelTiempo = window.setInterval(actualizarCronometro, 1000);
        botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
        botonInicioPausa.classList.remove('iniciar');
        botonInicioPausa.classList.add('pausar');
        estadoCronometro = 'andando';
    } else {
      window.clearInterval(intervaloDelTiempo);
      botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
      botonInicioPausa.classList.remove('pausar');  
      botonInicioPausa.classList.add('iniciar');
      estadoCronometro = 'pausado';  
        
    }
});

botonReiniciar.addEventListener('click', function() {
    Window,clearInterval(intervaloDelTiempo);

    horas = 0;
    minutos = 0;
    segundos = 0;

    cronometro.innerText = '00:00:00';

    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('inici ar');

    estadoCronometro = 'pausado';


})
