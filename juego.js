function obtenerEleccionOrdenador() {
    const opciones = ["piedra", "papel", "tijera"];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return opciones[numeroAleatorio];
}


function jugarPartida(eleccionJugador) {
    const eleccionOrdenador = obtenerEleccionOrdenador();
    const resultado = (
        (eleccionJugador === eleccionOrdenador) ? "Empate" :
        (eleccionJugador === "piedra" && eleccionOrdenador === "tijera") ||
        (eleccionJugador === "papel" && eleccionOrdenador === "piedra") ||
        (eleccionJugador === "tijera" && eleccionOrdenador === "papel") ? "Ganaste" : "Perdiste"
    );

    document.getElementById('resultado').textContent = `Elegiste ${eleccionJugador}, la computadora eligió ${eleccionOrdenador}. Resultado: ${resultado}`;

    if (resultado === "Ganaste") {
        document.getElementById('ganadas').textContent++;
    } else if (resultado === "Perdiste") {
        document.getElementById('perdidas').textContent++;
    } else {
        document.getElementById('empatadas').textContent++;
    }
}

document.getElementById('jugar').addEventListener('click', function () {
    const eleccionSeleccionada = document.querySelector('input[name="eleccion"]:checked');
    if (eleccionSeleccionada) {
        jugarPartida(eleccionSeleccionada.value);
    } else {
        alert("Por favor, elige una opción.");
    }
});

function reiniciar() {
    document.getElementById('ganadas').textContent = '0';
    document.getElementById('perdidas').textContent = '0';
    document.getElementById('empatadas').textContent = '0';
    document.getElementById('resultado').textContent = '';
}
document.getElementById('borrar-clasificacion').addEventListener('click', reiniciar);
document.getElementById('borrar-resultado').addEventListener('click', reiniciar);
