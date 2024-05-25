alert(
  "🏆⚽ BIENVENIDO AL TORNEO DE PENALES CONTRA LOS 16 MEJORES EQUIPOS DE LA CHAMPIONS LEAGUE ⚽🏆. Podrá ver el historial de partidos en la consola(aprete F12)"
);

// Variables globales
let nombreUsuario = prompt("Ingrese su nombre").toLowerCase();
let puntos = 0;
let totalEquipos = 18;
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
let jugado8 = false;
let jugado9 = false;
let jugado10 = false;
let jugado11 = false;
let jugado12 = false;
let jugado13 = false;
let jugado14 = false;
let jugado15 = false;
let jugado16 = false;
let jugado17 = false;

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
    (sorteoRival === 7 && jugado7) ||
    (sorteoRival === 8 && jugado8) ||
    (sorteoRival === 9 && jugado9) ||
    (sorteoRival === 10 && jugado10) ||
    (sorteoRival === 11 && jugado11) ||
    (sorteoRival === 12 && jugado12) ||
    (sorteoRival === 13 && jugado13) ||
    (sorteoRival === 14 && jugado14) ||
    (sorteoRival === 15 && jugado15)
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
      equipoRival = "FC Copenhague";
      arqueroRival = "Grabara";
      jugado3 = true;
      break;
    case 4:
      equipoRival = "Barcelona";
      arqueroRival = "Ter Stegen";
      jugado4 = true;
      break;
    case 5:
      equipoRival = "Lazio";
      arqueroRival = "Provedel";
      jugado5 = true;
      break;
    case 6:
      equipoRival = "Atletico Madrid";
      arqueroRival = "Oblak";
      jugado6 = true;
      break;
    case 7:
      equipoRival = "PSV";
      arqueroRival = "Benitez";
      jugado7 = true;
      break;
    case 8:
      equipoRival = "Napoli";
      arqueroRival = "Meret";
      jugado8 = true;
      break;
    case 9:
      equipoRival = "Real Sociedad";
      arqueroRival = "Remiro";
      jugado9 = true;
      break;
    case 10:
      equipoRival = "Porto";
      arqueroRival = "Costa";
      jugado10 = true;
      break;
    case 11:
      equipoRival = "Dortmund";
      arqueroRival = "Kobel";
      jugado11 = true;
      break;
    case 12:
      equipoRival = "Arsenal";
      arqueroRival = "Raya";
      jugado12 = true;
      break;
    case 13:
      equipoRival = "Inter";
      arqueroRival = "Onana";
      jugado13 = true;
      break;
    case 14:
      equipoRival = "PSG";
      arqueroRival = "Donnarumma";
      jugado14 = true;
      break;
    case 15:
      equipoRival = "Leipzig";
      arqueroRival = "Gulacsi";
      jugado15 = true;
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
        " TE TOCA PATEAR! A donde quieres patear? 'i' = Izquierda, 'm' = Medio, 'd' = Derecha. Recuerda que el que ataja es " +
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
          `¡QUE GOLAZOOOOOOOOOOOOO! Resultado actual: ${nombreUsuario}: ${goles} - ${equipoRival}: ${atajadas}`
        );
        console.log(
          `¡QUE GOLAZOOOOOOOOOOOOO! Resultado actual: ${nombreUsuario}: ${goles} - ${equipoRival}: ${atajadas}`
        );
        break;
      case "atajada":
        atajadas++;
        alert(
          `¡Atajó el arquero rival! Resultado actual: ${nombreUsuario}: ${goles}  - ${equipoRival}: ${atajadas}`
        );
        console.log(
          `¡Atajó el arquero rival! Resultado actual: ${nombreUsuario}: ${goles}  - ${equipoRival}: ${atajadas}`
        );
        break;
      case "afuera":
        atajadas++;
        alert(
          `¡LA MANDASTE A LA CHINA! Resultado actual: ${nombreUsuario}: ${goles}  - ${equipoRival}: ${atajadas}`
        );
        console.log(
          `¡LA MANDASTE A LA CHINA! Resultado actual: ${nombreUsuario}: ${goles}  - ${equipoRival}: ${atajadas}`
        );
        break;
      case "palo":
        atajadas++;
        alert(
          `¡AAAAAL PAAALOO! Resultado actual: ${nombreUsuario}: ${goles}  - ${equipoRival}: ${atajadas}`
        );
        console.log(
          `¡AAAAAL PAAALOO! Resultado actual: ${nombreUsuario}: ${goles}  - ${equipoRival}: ${atajadas}`
        );
        break;
      default:
        alert("Error en el resultado.");
        break;
    }
  }

  if (goles < atajadas) {
    alert(
      `FINAL DEL PARTIDO!! GANÓ: ${equipoRival}. Por ${atajadas} a ${goles} 😭😭😭 . ${nombreUsuario} tienes ${puntos} puntos.`
    );
    console.log(
      `FINAL DEL PARTIDO!! GANÓ: ${equipoRival}. Por ${atajadas} a ${goles} 😭😭😭 . ${nombreUsuario} tienes ${puntos} puntos.`
    );
  } else {
    puntos += 3;
    alert(
      `FINAL DEL PARTIDO!! GANÓ: ${nombreUsuario}. Por ${goles} a ${atajadas} 😎😎😎. Tienes ${puntos} puntos.`
    );
    console.log(
      `FINAL DEL PARTIDO!! GANÓ: ${nombreUsuario}. Por ${goles} a ${atajadas} 😎😎😎. Tienes ${puntos} puntos.`
    );
  }

  partidosJugados++;
}

alert(
  `El torneo ha terminado⚽⚽. ${nombreUsuario} has conseguido ${puntos} puntos 🏆🏆.`
);

console.log(
  `El torneo ha terminado⚽⚽. ${nombreUsuario} has conseguido ${puntos} puntos 🏆🏆.`
);
