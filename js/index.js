alert(
  "🏆⚽ BIENVENIDO AL TORNEO DE PENALES CONTRA LOS 8 MEJORES EQUIPOS DE LA CHAMPIONS LEAGUE ⚽🏆. \nPodrá ver el historial de partidos en la consola(aprete F12)"
);

// Variables globales
let nombreUsuario = prompt("Ingrese su nombre").toLowerCase();
let puntos = 0;
let totalEquipos = 8;
let partidosJugados = 0;

// Variables para verificar que no juegue mas de una vez contra el mismo equipo
let jugado0 = false;
let jugado1 = false;
let jugado2 = false;
let jugado3 = false;
let jugado4 = false;
let jugado5 = false;
let jugado6 = false;
let jugado7 = false;

function seleccionarEquipo() {
  let sorteoRival;
  do {
    sorteoRival = Math.floor(Math.random() * totalEquipos);
  } while (
    (sorteoRival === 0 && jugado0) ||
    (sorteoRival === 1 && jugado1) ||
    (sorteoRival === 2 && jugado2) ||
    (sorteoRival === 3 && jugado3) ||
    (sorteoRival === 4 && jugado4) ||
    (sorteoRival === 5 && jugado5) ||
    (sorteoRival === 6 && jugado6) ||
    (sorteoRival === 7 && jugado7)
  );
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
  let equipoRival, arqueroRival;

  switch (sorteoRival) {
    case 0:
      equipoRival = "Real Madrid";
      arqueroRival = "Lunin";
      jugado0 = true;
      break;
    case 1:
      equipoRival = "Bayern Munich";
      arqueroRival = "Neuer";
      jugado1 = true;
      break;
    case 2:
      equipoRival = "Manchester City";
      arqueroRival = "Ederson";
      jugado2 = true;
      break;
    case 3:
      equipoRival = "PSG";
      arqueroRival = "Donnarumma";
      jugado3 = true;
      break;
    case 4:
      equipoRival = "Barcelona";
      arqueroRival = "Ter Stegen";
      jugado4 = true;
      break;
    case 5:
      equipoRival = "Arsenal";
      arqueroRival = "Raya";
      jugado5 = true;
      break;
    case 6:
      equipoRival = "Atletico Madrid";
      arqueroRival = "Oblak";
      jugado6 = true;
      break;
    case 7:
      equipoRival = "Dortmund";
      arqueroRival = "Kobel";
      jugado7 = true;
      break;
    default:
      equipoRival = "";
      arqueroRival = "";
      break;
  }
  confirm("Partido n° " + (partidosJugados + 1));
  console.log("Partido n° " + (partidosJugados + 1));
  alert(
    "Tu equipo rival es el " +
      equipoRival +
      ". El arquero del equipo rival es " +
      arqueroRival +
      "."
  );
  console.log(`${equipoRival} vs ${nombreUsuario}`);

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
        alert(
          `¡QUE GOLAZOOOOOOOOOOOOO! \n Resultado actual: ${nombreUsuario}: ${goles} - ${equipoRival}: ${atajadas}`
        );
        console.log(
          `¡QUE GOLAZOOOOOOOOOOOOO! \n Resultado actual: ${nombreUsuario}: ${goles} - ${equipoRival}: ${atajadas}`
        );
        break;
      case "atajada":
        atajadas++;
        alert(
          `¡Atajó el arquero rival! \n Resultado actual: ${nombreUsuario}: ${goles}  - ${equipoRival}: ${atajadas}`
        );
        console.log(
          `¡Atajó el arquero rival! \n Resultado actual: ${nombreUsuario}: ${goles}  - ${equipoRival}: ${atajadas}`
        );
        break;
      case "afuera":
        atajadas++;
        alert(
          `¡LA MANDASTE A LA CHINA! \n Resultado actual: ${nombreUsuario}: ${goles}  - ${equipoRival}: ${atajadas}`
        );
        console.log(
          `¡LA MANDASTE A LA CHINA! \n Resultado actual: ${nombreUsuario}: ${goles}  - ${equipoRival}: ${atajadas}`
        );
        break;
      case "palo":
        atajadas++;
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

  partidosJugados++;
}

alert(
  `El torneo ha terminado⚽⚽. \n ${nombreUsuario} has conseguido ${puntos} puntos 🏆🏆.`
);

console.log(
  `El torneo ha terminado⚽⚽. \n ${nombreUsuario} has conseguido ${puntos} puntos 🏆🏆.`
);
