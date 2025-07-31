let turnos = JSON.parse(localStorage.getItem("turnos")) || [];

let ultimoId = 1;

function nuevoTurno (){
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    const turno = {
        id: ultimoId++,
        nombre: nombre,
        fecha: fecha,
        hora: hora,
    }

    turnos.push(turno);
    localStorage.setItem('turnos', JSON.stringify(turnos));
    alert('El turno ha sido asignado con exito!');
}

document.getElementById('turnosForm').addEventListener('submit', function(event){
    event.preventDefault();
    nuevoTurno();
    mostrarTurnos();
})

function mostrarTurnos(){
    turnosLista.innerHTML = "";

    turnos.forEach((turno) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <p><strong>ID:</strong> ${turno.id}</p>
        <p><strong>Nombre:</strong> ${turno.nombre}</p>
        <p><strong>Fecha:</strong> ${turno.fecha}</p>
        <p><strong>Hora:</strong> ${turno.hora}</p>
        `;

        turnosLista.appendChild(div);
    })
}
mostrarTurnos()