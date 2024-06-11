document.getElementById("startButton").addEventListener("click", iniciarTorneo);
function iniciarTorneo() {
  alert(
    "🏆⚽ BIENVENIDO AL TORNEO DE PENALES CONTRA LOS 8 MEJORES EQUIPOS DE LA CHAMPIONS LEAGUE ⚽🏆. \nPodrá ver el historial de partidos en la consola(aprete F12)"
  );

  // Variables globales
  let nombreUsuario = prompt("Ingrese su nombre").toLowerCase();
  let puntos = 0;
  let totalEquipos = 8;
  let partidosJugados = 0;

  // Array de equipos con objetos
  let equipos = [
    { nombre: "Real Madrid", arquero: "Lunin", jugado: false },
    { nombre: "Bayern Munich", arquero: "Neuer", jugado: false },
    { nombre: "Manchester City", arquero: "Ederson", jugado: false },
    { nombre: "PSG", arquero: "Donnarumma", jugado: false },
    { nombre: "Barcelona", arquero: "Ter Stegen", jugado: false },
    { nombre: "Arsenal", arquero: "Raya", jugado: false },
    { nombre: "Atletico Madrid", arquero: "Oblak", jugado: false },
    { nombre: "Dortmund", arquero: "Kobel", jugado: false },
  ];

  // Historial de partidos
  let historialPartidos = [];

  function seleccionarEquipo() {
    let sorteoRival;
    do {
      sorteoRival = Math.floor(Math.random() * totalEquipos);
    } while (equipos[sorteoRival].jugado);
    equipos[sorteoRival].jugado = true;
    return sorteoRival;
  }

  console.log(
    "🏆⚽" + nombreUsuario + " Aqui está el HISTORIAL DE LOS PARTIDOS⚽🏆."
  );

  while (partidosJugados < totalEquipos) {
    let goles = 0;
    let atajadas = 0;
    let penales = 5;

    let sorteoRival = seleccionarEquipo();
    let equipoRival = equipos[sorteoRival].nombre;
    let arqueroRival = equipos[sorteoRival].arquero;

    let resultadoPartido = {
      equipoUsuario: nombreUsuario,
      equipoRival: equipoRival,
      golesUsuario: 0,
      atajadasUsuario: 0,
      atajadasRival: 0,
    };
    alert(`Fecha ${partidosJugados + 1} \n ${equipoRival} vs ${nombreUsuario}`);
    console.log(
      `Fecha ${partidosJugados + 1} \n ${equipoRival} vs ${nombreUsuario}`
    );

    function patearUsuario() {
      let direccionPatear = prompt(
        nombreUsuario +
          " TE TOCA PATEAR! A donde quieres patear?\n" +
          "'i' = Izquierda,\n" +
          "'m' = Medio,\n" +
          "'d' = Derecha.\n" +
          "Recuerda que el que ataja es " +
          arqueroRival
      ).toLowerCase();

      // Bucle para que el usuario no le erre a la pelota jeje
      while (
        direccionPatear !== "m" &&
        direccionPatear !== "d" &&
        direccionPatear !== "i"
      ) {
        alert("NO SÉ A DONDE LE QUERES PEGAR, Debes ingresar 'i', 'm' o 'd'.");
        direccionPatear = prompt(
          "A donde quieres patear? 'i' = Izquierda, 'm' = Medio, 'd' = Derecha."
        ).toLowerCase();
      }

      // cuando patea la pelota entra a acá
      let probabilidad = Math.random();

      if (probabilidad < 0.1) {
        return "afuera";
      } else if (probabilidad < 0.15) {
        return "palo";
      } else if (probabilidad < 0.35) {
        return "atajada";
      } else {
        switch (direccionPatear) {
          case "i":
            return "Gol a la izquierda";
          case "m":
            return "Gol al medio";
          case "d":
            return "Gol a la derecha";
          default:
            return "invalido";
        }
      }
    }

    for (let i = 1; i <= penales; i++) {
      alert(`Penal ${i}`);
      console.log(`Penal ${i}`);
      let resultado = patearUsuario();

      switch (resultado) {
        case "Gol a la izquierda":
        case "Gol al medio":
        case "Gol a la derecha":
          goles++;
          resultadoPartido.golesUsuario++;
          alert(
            `¡QUE GOLAZOOOOOOOOOOOOO! \n Resultado actual: ${nombreUsuario}: ${goles} - ${equipoRival}: ${atajadas}`
          );
          console.log(
            `¡QUE GOLAZOOOOOOOOOOOOO! \n Resultado actual: ${nombreUsuario}: ${goles} - ${equipoRival}: ${atajadas}`
          );
          break;
        case "atajada":
          atajadas++;
          resultadoPartido.atajadasRival++;
          alert(
            `¡Atajó el arquero rival! \n Resultado actual: ${nombreUsuario}: ${goles}  - ${equipoRival}: ${atajadas}`
          );
          console.log(
            `¡Atajó el arquero rival! \n Resultado actual: ${nombreUsuario}: ${goles}  - ${equipoRival}: ${atajadas}`
          );
          break;
        case "afuera":
          atajadas++;
          resultadoPartido.atajadasRival++;
          alert(
            `¡LA MANDASTE A LA CHINA! \n Resultado actual: ${nombreUsuario}: ${goles}  - ${equipoRival}: ${atajadas}`
          );
          console.log(
            `¡LA MANDASTE A LA CHINA! \n Resultado actual: ${nombreUsuario}: ${goles}  - ${equipoRival}: ${atajadas}`
          );
          break;
        case "palo":
          atajadas++;
          resultadoPartido.atajadasRival++;
          alert(
            `¡AAAAAL PAAALOO! \n Resultado actual: ${nombreUsuario}: ${goles}  - ${equipoRival}: ${atajadas}`
          );
          console.log(
            `¡AAAAAL PAAALOO! \n Resultado actual: ${nombreUsuario}: ${goles}  - ${equipoRival}: ${atajadas}`
          );
          break;
        default:
          alert("Error en el resultado.");
          break;
      }
    }

    if (goles < atajadas) {
      alert(
        `FINAL DEL PARTIDO!! \n GANÓ: ${equipoRival}. \n Por ${atajadas} a ${goles} 😭😭😭 . \n ${nombreUsuario} tienes ${puntos} puntos.`
      );
      console.log(
        `FINAL DEL PARTIDO!! \n GANÓ: ${equipoRival}. \n Por ${atajadas} a ${goles} 😭😭😭 . \n ${nombreUsuario} tienes ${puntos} puntos.`
      );
    } else {
      puntos += 3;
      alert(
        `FINAL DEL PARTIDO!! \n GANÓ: ${nombreUsuario}. \n Por ${goles} a ${atajadas} 😎😎😎. \n Tienes ${puntos} puntos.`
      );
      console.log(
        `FINAL DEL PARTIDO!! \n GANÓ: ${nombreUsuario}. \n Por ${goles} a ${atajadas} 😎😎😎. \n Tienes ${puntos} puntos.`
      );
    }

    historialPartidos.push(resultadoPartido);
    partidosJugados++;
  }

  alert(
    `El torneo ha terminado⚽⚽. \n ${nombreUsuario} has conseguido ${puntos} puntos 🏆🏆.`
  );

  console.log(
    `El torneo ha terminado⚽⚽. \n ${nombreUsuario} has conseguido ${puntos} puntos 🏆🏆.`
  );
  // Opción para ver el resultado de un partido específico
  let seleccionPartido = prompt(
    "¿Deseas ver el resultado de algún partido? Ingrese el número del partido o '0' para salir."
  );

  while (seleccionPartido !== "0") {
    let partidoSeleccionado = parseInt(seleccionPartido);
    if (
      partidoSeleccionado >= 1 &&
      partidoSeleccionado <= historialPartidos.length
    ) {
      let partido = historialPartidos[partidoSeleccionado - 1];
      alert(
        `Resultado del Partido ${partidoSeleccionado}:\n` +
          `${partido.equipoUsuario}: ${partido.golesUsuario} goles` +
          `${partido.equipoRival}: ${partido.atajadasRival} atajadas.`
      );
    } else {
      alert("Número de partido no válido.");
    }
    seleccionPartido = prompt(
      "¿Deseas ver el resultado de otro partido? Ingrese el número del partido o '0' para salir."
    );
  }
}
