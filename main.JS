//elementos traidos para asignarles eventos
//linea para hacer un commit 
let botonEncenderTv = document.getElementById("btn-power-tv");
let tvScreen = document.getElementById("monitorscreen");
let botonEncenderNes = document.getElementById("powerNES");
let botonReset = document.getElementById("resetNES");
let botonAbajo = document.getElementById("botonAbajo");
let botonArriba = document.getElementById("botonArriba");
let botonStart = document.getElementById("botonStart");
let ledEncendido = document.getElementById("ledEncendido");
let juego = document.getElementById("supermario");
let juego2 = document.getElementById("supermario2");
let botonEncenderGameBoy = document.getElementById("powerGameBoy");
let botonArribaGameboy = document.getElementById("arribaGB");
let botonAbajoGameboy = document.getElementById("abajoGB");
let botonStartGameboy = document.getElementById("start");
let pantallaGameBoy = document.getElementById("pantallaGameBoy");
let ledGameBoy = document.getElementById("led_on");
let encenderTV = document.getElementById("apagarTV");
var sonidoBoton = new Audio("Resources/sonidoBoton.mp3");
let marioGB = document.getElementById("marioGB");
let mario = document.getElementById("mario");
let botonDerechaGameboy = document.getElementById("derechaGB");
let botonIzquierdaGameboy = document.getElementById("izquierdaGB");
let botonAGameboy = document.getElementsByClassName("a");
let botonDerechaNes = document.getElementById("derechaNES");
let botonIzquierdaNes = document.getElementById("izquierdaNES");
let botonANes = document.getElementById("aNes");

//variables y constantes
let reproduciendo = false;
let tvEncendida = false;
let nesEncendida = false;
let gameBoyEncendida = false;
let gameSelector = 0;
let gameStatusActive = false;
const imagen1 = "url('./Resources/Juego1.png')";
const imagen2 = "url('./Resources/Juego1-invert.png')";
const imagen3 = "url('./Resources/Juego2.png')";
const imagen4 = "url('./Resources/Juego2-invert.png')";
const imagen5 = "url('./Resources/Juego3.png')";
const imagen6 = "url('./Resources/Juego3-invert.png')";
let iteracion = 0;

function añadirsonido(){
  var sonido = new Audio('./Resources/sonidoBoton.mp3');
  sonido.play();
}
function musicaJuego(){
  if(reproduciendo == false){
  var sonido = new Audio('./Resources/musicajuego.mp3');
  sonido.play();
  reproduciendo = true;
}
  
}

function detenerMusicaJuego() {
  if (reproduciendo == true) {
    sonido.pause();
    sonido.currentTime = 0;
    reproduciendo = false;
  }
}

function moveramario() {
  
  let incremento = 5;
  let actualPositionGB = 20;
  let actualPositionNES = 20;
  let newpositionGB = actualPositionGB;
  let newpositionNES = actualPositionNES;
  botonDerechaGameboy = addEventListener("click", (e) => {
    if (e.target.id === "derechaGB") {
      if (newpositionGB < 275) {
        newpositionGB = newpositionGB + incremento;
        newpositionNES = newpositionNES + incremento;
        console.log(newpositionGB + "px");
        marioGB.style.left = newpositionGB + "px";
        mario.style.left = newpositionNES + "px";
      }
    }
  });

  botonDerechaNes = addEventListener("click", (e) => {
    if (e.target.id === "derechaNES") {
      console.log("entra");
      if (newpositionGB < 275) {
        newpositionGB = newpositionGB + incremento;
        newpositionNES = newpositionNES + incremento;
        console.log(newpositionGB + "px");
        marioGB.style.left = newpositionGB + "px";
        mario.style.left = newpositionNES + "px";
      }
    }
  });
  botonIzquierdaGameboy = addEventListener("click", (e) => {
    if (e.target.id === "izquierdaGB") {
      if (newpositionGB > -5) {
        newpositionGB = newpositionGB - incremento;
        newpositionNES = newpositionNES - incremento;
        console.log(newpositionGB + "px");
        marioGB.style.left = newpositionGB + "px";
        mario.style.left = newpositionNES + "px";
      }
    }
  });

  botonIzquierdaNes = addEventListener("click", (e) => {
    if (e.target.id === "izquierdaNES") {
      if (newpositionGB < 275) {
        newpositionGB = newpositionGB - incremento;
        newpositionNES = newpositionNES - incremento;
        console.log(newpositionGB + "px");
        marioGB.style.left = newpositionGB + "px";
        mario.style.left = newpositionNES + "px";
      }
    }
  });

  botonAGameboy = addEventListener("click", (e) => {
    if (e.target.className === "a") {
      marioGB.style.bottom = 100 + "px";
      marioGB.style.transition = "all 0.5s";
      setTimeout(() => {
        marioGB.style.bottom = 40 + "px";
        marioGB.style.transition = "all 0.5s";
      }, 500);
    }
  });
  botonANes = addEventListener("click", (e) => {
    if (e.target.id === "aNes") {
      mario.style.bottom = 100 + "px";
      mario.style.transition = "all 0.5s";
      setTimeout(() => {
        mario.style.bottom = 40 + "px";
        mario.style.transition = "all 0.5s";
      }, 500);
    }
  });
}
// funcion de alternarFondo que simula la carga de juego refactorizada (dejo las otras en comentarios para fines didacticos)
function alternarFondoRefactorizada(iteracion, gameSelector) {
  switch (gameSelector) {
    case 0:
      if (iteracion >= 9) {
        tvScreen.style.backgroundImage =
          "url('./Resources/VillesAdventures.png')";
        pantallaGameBoy.style.backgroundImage =
          "url('./Resources/VillesAdventures.png')";
        return;
      }

      const imagenA = iteracion % 2 === 0 ? imagen1 : imagen2;
      tvScreen.style.backgroundImage = imagenA;
      pantallaGameBoy.style.backgroundImage = imagenA;
      gameStatusActive = true;
      setTimeout(() => {
        tvScreen.style.backgroundImage = "";
        tvScreen.style.backgroundColor = "grey";
        juego2.style.display = "block";
        tvScreen.style.backgroundSize = "820px 500px";
        pantallaGameBoy.style.backgroundImage = "";
        juego.style.display = "block";
        pantallaGameBoy.style.backgroundSize = "330px 320px";
        
      }, 4000);
      

      setTimeout(function () {
        setTimeout(function () {
          alternarFondoRefactorizada(iteracion + 1, gameSelector);
        }, 100);
      }, 100);
      break;

    case 1:
      if (iteracion >= 9) {
        tvScreen.style.backgroundImage = "url('./Resources/FraglanSouls.png')";
        pantallaGameBoy.style.backgroundImage =
          "url('./Resources/FraglanSouls.png')";
        return;
      }

      const imagenB = iteracion % 2 === 0 ? imagen3 : imagen4;
      tvScreen.style.backgroundImage = imagenB;
      pantallaGameBoy.style.backgroundImage = imagenB;
      gameStatusActive = true;
      setTimeout(() => {
        tvScreen.style.backgroundImage = "";
        tvScreen.style.backgroundColor = "grey";
        juego2.style.display = "block";
        tvScreen.style.backgroundSize = "820px 500px";
        pantallaGameBoy.style.backgroundImage = "";
        juego.style.display = "block";
        pantallaGameBoy.style.backgroundSize = "330px 320px";
      }, 4000);

      setTimeout(function () {
        setTimeout(function () {
          alternarFondoRefactorizada(iteracion + 1, gameSelector);
        }, 100);
      }, 100);
      break;

    case 2:
      if (iteracion >= 9) {
        tvScreen.style.backgroundImage = "url('./Resources/RatsRevenge.png')";
        pantallaGameBoy.style.backgroundImage =
          "url('./Resources/RatsRevenge.png')";
        return;
      }

      const imagenC = iteracion % 2 === 0 ? imagen5 : imagen6;
      tvScreen.style.backgroundImage = imagenC;
      pantallaGameBoy.style.backgroundImage = imagenC;
      gameStatusActive = true;
      setTimeout(() => {
        tvScreen.style.backgroundImage = "";
        tvScreen.style.backgroundColor = "grey";
        juego2.style.display = "block";
        tvScreen.style.backgroundSize = "820px 500px";
        pantallaGameBoy.style.backgroundImage = "";
        juego.style.display = "block";
        pantallaGameBoy.style.backgroundSize = "330px 320px";
      }, 4000);

      setTimeout(function () {
        setTimeout(function () {
          alternarFondoRefactorizada(iteracion + 1, gameSelector);
        }, 100);
      }, 100);
      break;
  }
}
// function alternarFondo1(iteracion1) {
//   if (iteracion1 >= 9) {
//     tvScreen.style.backgroundImage = "url('Resources/VillesAdventures.png')";
//     return;
//   }

//   const imagen = iteracion1 % 2 === 0 ? imagen1 : imagen2;
//   tvScreen.style.backgroundImage = imagen;
//   gameStatusActive = true;
//   setTimeout(() => {
//     tvScreen.style.backgroundImage = "";
//     tvScreen.style.backgroundColor = "grey";
//     juego2.style.display = "block";
//     tvScreen.style.backgroundSize = "820px 500px";
//   }, "4000");

//   setTimeout(function () {
//     setTimeout(function () {
//       alternarFondo1(iteracion1 + 1);
//     }, 100);
//   }, 100);
// }
// function alternarFondo2(iteracion2) {
//   if (iteracion2 >= 9) {
//     tvScreen.style.backgroundImage = "url('Resources/FraglanSouls.png')";
//     return;
//   }

//   const imagen = iteracion2 % 2 === 0 ? imagen3 : imagen4;
//   tvScreen.style.backgroundImage = imagen;
//   gameStatusActive = true;
//   setTimeout(() => {
//     tvScreen.style.backgroundImage = "";
//     tvScreen.style.backgroundColor = "grey";
//     juego2.style.display = "block";
//     tvScreen.style.backgroundSize = "820px 500px";
//   }, "4000");

//   setTimeout(function () {
//     setTimeout(function () {
//       alternarFondo2(iteracion2 + 1);
//     }, 100);
//   }, 100);
// }
// function alternarFondo3(iteracion3) {
//   if (iteracion3 >= 9) {
//     tvScreen.style.backgroundImage = "url('Resources/RatsRevenge.png')";
//     return;
//   }

//   const imagen = iteracion3 % 2 === 0 ? imagen5 : imagen6;
//   tvScreen.style.backgroundImage = imagen;
//   gameStatusActive = true;
//   setTimeout(() => {
//     tvScreen.style.backgroundImage = "";
//     tvScreen.style.backgroundColor = "grey";
//     juego2.style.display = "block";
//     tvScreen.style.backgroundSize = "820px 500px";
//   }, "4000");

//   setTimeout(function () {
//     setTimeout(function () {
//       alternarFondo3(iteracion3 + 1);
//     }, 100);
//   }, 100);
// }
// function alternarFondoGameBoy1(iteracion1) {
//   if (iteracion1 >= 9) {
//     pantallaGameBoy.style.backgroundImage =
//       "url('Resources/VillesAdventures.png')";
//     return;
//   }

//   const imagen = iteracion1 % 2 === 0 ? imagen1 : imagen2;
//   pantallaGameBoy.style.backgroundImage = imagen;
//   gameStatusActive = true;
//   setTimeout(() => {
//     pantallaGameBoy.style.backgroundImage = "";
//     tvScreen.style.backgroundColor = "grey";
//     juego.style.display = "block";
//     pantallaGameBoy.style.backgroundSize = "330px 320px";
//   }, "4000");

//   setTimeout(function () {
//     setTimeout(function () {
//       alternarFondoGameBoy1(iteracion1 + 1);
//     }, 100);
//   }, 100);
// }
// function alternarFondoGameBoy2(iteracion2) {
//   if (iteracion2 >= 9) {
//     pantallaGameBoy.style.backgroundImage = "url('Resources/FraglanSouls.png')";
//     return;
//   }

//   const imagen = iteracion2 % 2 === 0 ? imagen3 : imagen4;
//   pantallaGameBoy.style.backgroundImage = imagen;
//   gameStatusActive = true;
//   setTimeout(() => {
//     pantallaGameBoy.style.backgroundImage = "";
//     tvScreen.style.backgroundColor = "grey";
//     juego.style.display = "block";
//     pantallaGameBoy.style.backgroundSize = "330px 320px";
//   }, "4000");

//   setTimeout(function () {
//     setTimeout(function () {
//       alternarFondoGameBoy2(iteracion2 + 1);
//     }, 100);
//   }, 100);
// }
// function alternarFondoGameBoy3(iteracion3) {
//   if (iteracion3 >= 9) {
//     pantallaGameBoy.style.backgroundImage = "url('Resources/RatsRevenge.png')";
//     return;
//   }

//   const imagen = iteracion3 % 2 === 0 ? imagen5 : imagen6;
//   pantallaGameBoy.style.backgroundImage = imagen;
//   gameStatusActive = true;
//   setTimeout(() => {
//     pantallaGameBoy.style.backgroundImage = "";
//     tvScreen.style.backgroundColor = "grey";
//     juego.style.display = "block";
//     pantallaGameBoy.style.backgroundSize = "330px 320px";
//   }, "4000");

//   setTimeout(function () {
//     setTimeout(function () {
//       alternarFondoGameBoy3(iteracion3 + 1);
//     }, 100);
//   }, 100);
// }

// resto de funciones

function cerrarjuegos() {
  juego.style.display = "none";
  juego2.style.display = "none";
  
  
}
function encenderconsolas() {
  gameSelector = 0;
  juego.style.display = "none";
  juego2.style.display = "none";
  gameStatusActive = false;
  ledGameBoy.style.backgroundColor = "Red";
  gameBoyEncendida = true;
  nesEncendida = true;
  pantallaGameBoy.style.background = "";
  pantallaGameBoy.style.backgroundImage = "url('./Resources/nintendo.png')";
  pantallaGameBoy.style.backgroundSize = "330px 320px";
  setTimeout(() => {
    juego.style.display = "none";
    juego2.style.display = "none";
    pantallaGameBoy.style.backgroundImage = "url('./Resources/Juego1.png')";
    pantallaGameBoy.style.backgroundSize = "330px 320px";
    memoria = "url('./Resources/Juego1.png')";
  }, "2000");
  ledEncendido.style.backgroundColor = "Red";
  tvScreen.style.background = "";
  tvScreen.style.backgroundImage = "url('./Resources/nintendo.png')";
  tvScreen.style.backgroundSize = "820px 500px";
  setTimeout(() => {
    juego.style.display = "none";
    juego2.style.display = "none";
    tvScreen.style.backgroundImage = "url('./Resources/Juego1.png')";
    tvScreen.style.backgroundSize = "820px 500px";
  }, "2000");
}
function apagarconsolas() {
  gameStatusActive = false;
  ledGameBoy.style.backgroundColor = "black";
  gameBoyEncendida = false;
  nesEncendida = false;
  pantallaGameBoy.style.backgroundImage = "";
  pantallaGameBoy.style.backgroundColor = "#84d07d";
  tvScreen.style.backgroundImage = "";
  tvScreen.style.backgroundColor = "grey";
  ledEncendido.style.backgroundColor = "grey";
  juego.style.display = "none";
  juego2.style.display = "none";
}
//triggers de eventos
botonEncenderTv.addEventListener("click", (e) => {
  if (e.target.id === "btn-power-tv") {
    if (tvEncendida == false) {
      tvScreen.style.backgroundColor = "grey";
      tvEncendida = true;
    } else if (tvEncendida == true) {
      tvScreen.style.backgroundColor = "#100f0f";
      tvEncendida = false;
    }
  }
});
botonEncenderNes.addEventListener("click", (e) => {
  if (e.target.id === "powerNES") {
    
    if (
      nesEncendida == false &&
      gameBoyEncendida == false) {
      encenderconsolas();
    } else if (nesEncendida == true && gameBoyEncendida == true) {
     
      apagarconsolas();
      
    }
  }
});
botonEncenderGameBoy.addEventListener("click", (e) => {
  if (e.target.id === "powerGameBoy") {
    gameStatusActive = false;

    if (!gameBoyEncendida) {
      encenderconsolas();
    } else if (gameBoyEncendida) {
      cerrarjuegos();
      apagarconsolas();
    }
  }
});
botonReset.addEventListener("click", (e) => {
  if (e.target.id === "resetNES") {
    if (nesEncendida == true && gameBoyEncendida == true) {
      
      juego.style.display = "none";
      juego2.style.display = "none";
      gameStatusActive = false;
      tvScreen.style.backgroundImage = "";
      tvScreen.style.backgroundColor = "grey";
      pantallaGameBoy.style.backgroundImage = "";
      pantallaGameBoy.style.backgroundColor = "#84d07d";
      juego.style.display = "none";
      juego2.style.display = "none";

      setTimeout(() => {
        gameStatusActive = false;
        juego.style.display = "none";
        juego2.style.display = "none";
        tvScreen.style.backgroundImage = "";
        tvScreen.style.backgroundColor = "black";
        pantallaGameBoy.style.backgroundImage = "";
        pantallaGameBoy.style.backgroundColor = "#84d07d";
        juego.style.display = "none";
        juego2.style.display = "none";
      }, "200");
      setTimeout(() => {
        encenderconsolas();
        juego.style.display = "none";
        juego2.style.display = "none";
      }, "200");
    }
  }
});
botonAbajo.addEventListener("click", (e) => {
  if (
    e.target.id === "botonAbajo" &&
    !gameStatusActive &&
    nesEncendida == true
  ) {
    gameSelector++;
    sonidoBoton.play();
    switch (gameSelector) {
      case 0:
        tvScreen.style.backgroundImage = "url('./Resources/Juego1.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector = 0;
        break;

      case 1:
        tvScreen.style.backgroundImage = "url('./Resources/Juego2.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector = 1;
        break;

      case 2:
        tvScreen.style.backgroundImage = "url('./Resources/Juego3.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector = 2;
        break;
    }
  }
});
botonArriba.addEventListener("click", (e) => {
  
  if (
    e.target.id === "botonArriba" &&
    !gameStatusActive &&
    nesEncendida == true
  ) {
    añadirsonido()
    gameSelector--;
    sonidoBoton.play();
    switch (gameSelector) {
      case 0:
        tvScreen.style.backgroundImage = "url('./Resources/Juego1.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector = 0;
        break;

      case 1:
        tvScreen.style.backgroundImage = "url('./Resources/Juego2.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector = 1;
        break;

      case 2:
        tvScreen.style.backgroundImage = "url('./Resources/Juego3.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector = 2;
        break;
    }
  }
});
botonArribaGameboy.addEventListener("click", (e) => {
  if (
    e.target.id === "arribaGB" &&
    gameStatusActive == false &&
    gameBoyEncendida == true
  ) {
    añadirsonido()
    gameSelector--;
    sonidoBoton.play();
    switch (gameSelector) {
      case 0:
        pantallaGameBoy.style.backgroundImage = "url('./Resources/Juego1.png')";
        pantallaGameBoy.style.backgroundSize = "330px 320px";
        gameSelector = 0;
        break;

      case 1:
        pantallaGameBoy.style.backgroundImage = "url('./Resources/Juego2.png')";
        pantallaGameBoy.style.backgroundSize = "330px 320px";
        gameSelector = 1;
        break;

      case 2:
        pantallaGameBoy.style.backgroundImage = "url('./Resources/Juego3.png')";
        pantallaGameBoy.style.backgroundSize = "330px 320px";
        gameSelector = 2;
        break;
    }
  }
});
botonAbajoGameboy.addEventListener("click", (e) => {
  if (
    e.target.id === "abajoGB" &&
    gameStatusActive == false &&
    gameBoyEncendida == true
  ) {
    añadirsonido()
    gameSelector++;
    sonidoBoton.play();
    switch (gameSelector) {
      case 0:
        pantallaGameBoy.style.backgroundImage = "url('./Resources/Juego1.png')";
        pantallaGameBoy.style.backgroundSize = "330px 320px";
        gameSelector = 0;
        break;

      case 1:
        pantallaGameBoy.style.backgroundImage = "url('./Resources/Juego2.png')";
        pantallaGameBoy.style.backgroundSize = "330px 320px";
        gameSelector = 1;
        break;

      case 2:
        pantallaGameBoy.style.backgroundImage = "url('./Resources/Juego3.png')";
        pantallaGameBoy.style.backgroundSize = "330px 320px";
        gameSelector = 2;
        break;
    }
  }
});
botonStart.addEventListener("click", (e) => {
  if (
    e.target.id === "botonStart" &&
    gameSelector === 0 &&
    !gameStatusActive &&
    gameBoyEncendida == true
  ) {
    añadirsonido()
    alternarFondoRefactorizada(iteracion, gameSelector);
    gameStatusActive = true;
    moveramario();
    setTimeout(() => {
      musicaJuego()
      
    }, 3000);
  } else if (
    e.target.id === "botonStart" &&
    gameSelector === 1 &&
    !gameStatusActive
  ) {
    añadirsonido()
    alternarFondoRefactorizada(iteracion, gameSelector);
    gameStatusActive = true;
  } else if (
    e.target.id === "botonStart" &&
    gameSelector === 2 &&
    !gameStatusActive
  ) {
    añadirsonido()
    alternarFondoRefactorizada(iteracion, gameSelector);
    gameStatusActive = true;
  }
});
botonStartGameboy.addEventListener("click", (e) => {
  if (
    e.target.id === "start" &&
    gameSelector === 0 &&
    !gameStatusActive &&
    nesEncendida == true
  ) {
    añadirsonido()
    alternarFondoRefactorizada(iteracion, gameSelector);
    gameStatusActive = true;
    moveramario();
    setTimeout(() => {
      musicaJuego()
      
    }, 3000);
  } else if (
    e.target.id === "start" &&
    gameSelector === 1 &&
    !gameStatusActive
  ) {
    añadirsonido()
    alternarFondoRefactorizada(iteracion, gameSelector);
    gameStatusActive = true;
  } else if (
    e.target.id === "start" &&
    gameSelector === 2 &&
    !gameStatusActive
  ) {
    añadirsonido()
    alternarFondoRefactorizada(iteracion, gameSelector);
    gameStatusActive = true;
  }
});
