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
let juegoGB = document.getElementById("supermario-GB");
let botonEncenderGameBoy = document.getElementById("powerGameBoy");
let botonArribaGameboy = document.getElementById("arribaGB");
let botonAbajoGameboy = document.getElementById("abajoGB");
let botonStartGameboy = document.getElementById("start");
let pantallaGameBoy = document.getElementById("pantallaGameBoy");
let ledGameBoy = document.getElementById("led_on");

let repeticiones = 0;
let maximasrepeticiones = 10;
let tvEncendida = false;
let nesEncendida = false;
let gameBoyEncendida = false;
let gameSelector = 0;
let contadorCambios = 0;
let gameStatusActive = false;
const imagen1 = "url('Resources/Juego1.png')";
const imagen2 = "url('Resources/Juego1-invert.png')";
const imagen3 = "url('Resources/Juego2.png')";
const imagen4 = "url('Resources/Juego2-invert.png')";
const imagen5 = "url('Resources/Juego3.png')";
const imagen6 = "url('Resources/Juego3-invert.png')";

let imagenActual = imagen1;

//funciones que simulan la carga del juego

//estas 6 funciones han de ser refactorizadas a 1 sola

function alternarFondo1(iteracion1) {
  if (iteracion1 >= 9) {
    tvScreen.style.backgroundImage = "url('Resources/VillesAdventures.png')";
    return;
  }

  const imagen = iteracion1 % 2 === 0 ? imagen1 : imagen2;
  tvScreen.style.backgroundImage = imagen;
  gameStatusActive = true;
  setTimeout(() => {
    tvScreen.style.backgroundImage = "";
    juego2.style.display = "block";
    tvScreen.style.backgroundSize = "820px 500px";
  }, "4000");

  setTimeout(function () {
    setTimeout(function () {
      alternarFondo1(iteracion1 + 1);
    }, 100);
  }, 100);
}


function alternarFondo2(iteracion2) {
  if (iteracion2 >= 9) {
    tvScreen.style.backgroundImage = "url('Resources/FraglanSouls.png')";
    return;
  }

  const imagen = iteracion2 % 2 === 0 ? imagen3 : imagen4;
  tvScreen.style.backgroundImage = imagen;
  gameStatusActive = true;
  setTimeout(() => {
    tvScreen.style.backgroundImage = "";
    juego2.style.display = "block";
    tvScreen.style.backgroundSize = "820px 500px";
  }, "4000");

  setTimeout(function () {
    setTimeout(function () {
      alternarFondo2(iteracion2 + 1);
    }, 100);
  }, 100);
}
function alternarFondo3(iteracion3) {
  if (iteracion3 >= 9) {
    tvScreen.style.backgroundImage = "url('Resources/RatsRevenge.png')";
    return;
  }

  const imagen = iteracion3 % 2 === 0 ? imagen5 : imagen6;
  tvScreen.style.backgroundImage = imagen;
  gameStatusActive = true;
  setTimeout(() => {
    tvScreen.style.backgroundImage = "";
    juego2.style.display = "block";
    tvScreen.style.backgroundSize = "820px 500px";
  }, "4000");

  setTimeout(function () {
    setTimeout(function () {
      alternarFondo3(iteracion3 + 1);
    }, 100);
  }, 100);
}
function alternarFondoGameBoy1(iteracion1) {
  if (iteracion1 >= 9) {
    pantallaGameBoy.style.backgroundImage =
      "url('Resources/VillesAdventures.png')";
    return;
  }

  const imagen = iteracion1 % 2 === 0 ? imagen1 : imagen2;
  pantallaGameBoy.style.backgroundImage = imagen;
  gameStatusActive = true;
  setTimeout(() => {
    pantallaGameBoy.style.backgroundImage = "";
    juegoGB.style.display = "block";
    pantallaGameBoy.style.backgroundSize = "330px 320px";
  }, "4000");

  setTimeout(function () {
    setTimeout(function () {
      alternarFondoGameBoy1(iteracion1 + 1);
    }, 100);
  }, 100);
}
function alternarFondoGameBoy2(iteracion2) {
  if (iteracion2 >= 9) {
    pantallaGameBoy.style.backgroundImage = "url('Resources/FraglanSouls.png')";
    return;
  }

  const imagen = iteracion2 % 2 === 0 ? imagen3 : imagen4;
  pantallaGameBoy.style.backgroundImage = imagen;
  gameStatusActive = true;
  setTimeout(() => {
    pantallaGameBoy.style.backgroundImage = "";
    juegoGB.style.display = "block";
    pantallaGameBoy.style.backgroundSize = "330px 320px";
  }, "4000");
  setTimeout(() => {
    pantallaGameBoy.style.backgroundImage = "";
    juegoGB.style.display = "block";
    pantallaGameBoy.style.backgroundSize = "330px 320px";
  }, "4000");

  setTimeout(function () {
    setTimeout(function () {
      alternarFondoGameBoy2(iteracion2 + 1);
    }, 100);
  }, 100);
}
function alternarFondoGameBoy3(iteracion3) {
  if (iteracion3 >= 9) {
    pantallaGameBoy.style.backgroundImage = "url('Resources/RatsRevenge.png')";
    return;
  }

  const imagen = iteracion3 % 2 === 0 ? imagen5 : imagen6;
  pantallaGameBoy.style.backgroundImage = imagen;
  gameStatusActive = true;
  setTimeout(() => {
    pantallaGameBoy.style.backgroundImage = "";
    juegoGB.style.display = "block";
    pantallaGameBoy.style.backgroundSize = "330px 320px";
  }, "4000");
  setTimeout(() => {
    pantallaGameBoy.style.backgroundImage = "";
    juegoGB.style.display = "block";
    pantallaGameBoy.style.backgroundSize = "330px 320px";
  }, "4000");

  setTimeout(function () {
    setTimeout(function () {
      alternarFondoGameBoy3(iteracion3 + 1);
    }, 100);
  }, 100);
}

function cerrarjuegos(){
  juego.style.display = "none";
  juego2.style.display = "none";
}

//encendido y apgado TV

botonEncenderTv.addEventListener("click", (e) => {
  if (e.target.id === "btn-power-tv") {
    if (!tvEncendida) {
      tvScreen.style.backgroundColor = "grey";
      tvEncendida = true;
    } else {
      tvScreen.style.backgroundImage = "";
      tvScreen.style.backgroundColor = "#100f0f";
      tvEncendida = false;
      cerrarjuegos()
    }
  }
});

//inicio y reset de las consolas

botonReset.addEventListener("click", (e) => {
  if (e.target.id === "resetNES") {
    cerrarjuegos()
    gameStatusActive = false;
    gameSelector = 0;
    tvScreen.style.background = "";
    setTimeout(() => {
      tvScreen.style.backgroundColor = "Black";
      ledEncendido.style.backgroundColor = "grey";
      
      setTimeout(() => {
        tvScreen.style.backgroundImage = "url('Resources/nintendo.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        ledEncendido.style.backgroundColor = "Red";
        

        setTimeout(() => {
          tvScreen.style.backgroundImage = "url('Resources/Juego1.png')";
          tvScreen.style.backgroundSize = "820px 500px";
          ledEncendido.style.backgroundColor = "Red";
        }, "2000");
      }, "200");
    }, "200");
  }
});

botonEncenderNes.addEventListener("click", (e) => {
  if (e.target.id === "powerNES") {
    gameStatusActive = false;
    if (ledEncendido.style.backgroundColor != "Red") {
      ledEncendido.style.backgroundColor = "Red";
    } else if (ledEncendido.style.backgroundColor === "Red") {
      ledEncendido.style.backgroundColor = "Grey";
      
      gameStatusActive = false;
      cerrarjuegos()
    }

    if (!nesEncendida && tvEncendida) {
      gameStatusActive = false;

      //cuando enciendes la consola, la gameboy se mantiene encendida al hace responsive

      if (!gameBoyEncendida) {
        
        ledGameBoy.style.backgroundColor = "red";
        gameBoyEncendida = true;
        pantallaGameBoy.style.backgroundImage = "url('Resources/nintendo.png')";
        pantallaGameBoy.style.backgroundSize = "330px 320px";
        setTimeout(() => {
          pantallaGameBoy.style.backgroundImage = "url('Resources/Juego1.png')";
          pantallaGameBoy.style.backgroundSize = "330px 320px";
          juego.style.display = "block";
        }, "2000");
      } else if (gameBoyEncendida) {
        cerrarjuegos()
        ledGameBoy.style.backgroundColor = "black";
        gameBoyEncendida = false;
        pantallaGameBoy.style.backgroundImage = "";
        pantallaGameBoy.style.backgroundColor = "#84d07d";
      }

      tvScreen.style.background = "";
      tvScreen.style.backgroundImage = "url('Resources/nintendo.png')";
      tvScreen.style.backgroundSize = "820px 500px";
      

      setTimeout(() => {
        gameStatusActive = false;
        tvScreen.style.backgroundImage = "url('Resources/Juego1.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        
      }, "2000");

      nesEncendida = true;
    } else if (!tvEncendida) {
      cerrarjuegos()
      gameStatusActive = false;
      tvScreen.style.backgroundImage = "";
      tvScreen.style.backgroundColor = "#100f0f";
      nesEncendida = false;
      
    } else {
      cerrarjuegos()
      gameStatusActive = false;
      tvScreen.style.backgroundImage = "";
      tvScreen.style.backgroundColor = "Grey";
      nesEncendida = false;


      //cuando apagas la nes, apagas la gameboy en responsive
      if (gameBoyEncendida) {
        cerrarjuegos()
        ledGameBoy.style.backgroundColor = "black";
        gameBoyEncendida = false;
        pantallaGameBoy.style.backgroundImage = "";
        pantallaGameBoy.style.backgroundColor = "#84d07d";
      }
    }
  }
});

botonEncenderGameBoy.addEventListener("click", (e) => {
  if (e.target.id === "powerGameBoy") {
    gameStatusActive = false;

    if (!gameBoyEncendida) {
      gameStatusActive = false;
      ledGameBoy.style.backgroundColor = "Red";
      gameBoyEncendida = true;

      pantallaGameBoy.style.backgroundImage = "url('Resources/nintendo.png')";
      pantallaGameBoy.style.backgroundSize = "330px 320px";
      //cuando enciendes la gameboy , enciendes la nintendo en responsive
      ledEncendido.style.backgroundColor = "Red";
      tvScreen.style.background = "";
      tvScreen.style.backgroundImage = "url('Resources/nintendo.png')";
      tvScreen.style.backgroundSize = "820px 500px";
      
      setTimeout(() => {
        tvScreen.style.backgroundImage = "url('Resources/Juego1.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        juego.style.display = "block";
      }, "2000");

      setTimeout(() => {
        pantallaGameBoy.style.backgroundImage = "url('Resources/Juego1.png')";
        pantallaGameBoy.style.backgroundSize = "330px 320px";
        
      }, "2000");
      //cuando apagas la gameboy, apagas la nintendo en responsive y la tele se queda encendida para poder apagarla
    } else if (gameBoyEncendida) {
      cerrarjuegos()
      gameStatusActive = false;
      
      ledGameBoy.style.backgroundColor = "black";
      gameBoyEncendida = false;
      pantallaGameBoy.style.backgroundImage = "";
      pantallaGameBoy.style.backgroundColor = "#84d07d";
      tvScreen.style.backgroundImage = "";
      tvScreen.style.backgroundColor = "#100f0f";
      ledEncendido.style.backgroundColor = "Gray";
      tvScreen.style.backgroundImage = "";
      tvScreen.style.backgroundColor = "Grey";
      tvEncendida = true;
    }
  }
});

//selectores e inicio de juego

botonAbajo.addEventListener("click", (e) => {
  if (e.target.id === "botonAbajo" && !gameStatusActive) {
    gameSelector++;
    switch (gameSelector) {
      case 0:
        tvScreen.style.backgroundImage = "url('Resources/Juego1.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector = 0;
        break;

      case 1:
        tvScreen.style.backgroundImage = "url('Resources/Juego2.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector = 1;
        break;

      case 2:
        tvScreen.style.backgroundImage = "url('Resources/Juego3.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector = 2;
        break;
    }
  }
});

botonArriba.addEventListener("click", (e) => {
  if (e.target.id === "botonArriba" && !gameStatusActive) {
    gameSelector--;
    switch (gameSelector) {
      case 0:
        tvScreen.style.backgroundImage = "url('Resources/Juego1.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector = 0;
        break;

      case 1:
        tvScreen.style.backgroundImage = "url('Resources/Juego2.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector = 1;
        break;

      case 2:
        tvScreen.style.backgroundImage = "url('Resources/Juego3.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector = 2;
        break;
    }
  }
});

botonArribaGameboy.addEventListener("click", (e) => {
  if (e.target.id === "arribaGB" && !gameStatusActive) {
    gameSelector--;
    switch (gameSelector) {
      case 0:
        pantallaGameBoy.style.backgroundImage = "url('Resources/Juego1.png')";
        pantallaGameBoy.style.backgroundSize = "330px 320px";
        gameSelector = 0;
        break;

      case 1:
        pantallaGameBoy.style.backgroundImage = "url('Resources/Juego2.png')";
        pantallaGameBoy.style.backgroundSize = "330px 320px";
        gameSelector = 1;
        break;

      case 2:
        pantallaGameBoy.style.backgroundImage = "url('Resources/Juego3.png')";
        pantallaGameBoy.style.backgroundSize = "330px 320px";
        gameSelector = 2;
        break;
    }
  }
});

botonAbajoGameboy.addEventListener("click", (e) => {
  if (e.target.id === "abajoGB" && !gameStatusActive) {
    gameSelector++;
    switch (gameSelector) {
      case 0:
        pantallaGameBoy.style.backgroundImage = "url('Resources/Juego1.png')";
        pantallaGameBoy.style.backgroundSize = "330px 320px";
        gameSelector = 0;
        break;

      case 1:
        pantallaGameBoy.style.backgroundImage = "url('Resources/Juego2.png')";
        pantallaGameBoy.style.backgroundSize = "330px 320px";
        gameSelector = 1;
        break;

      case 2:
        pantallaGameBoy.style.backgroundImage = "url('Resources/Juego3.png')";
        pantallaGameBoy.style.backgroundSize = "330px 320px";
        gameSelector = 2;
        break;
    }
  }
});

botonStart.addEventListener("click", (e) => {
  if (e.target.id === "botonStart" && tvEncendida == true && gameSelector === 0 && !gameStatusActive) {
    alternarFondo1(0);
    alternarFondoGameBoy1(0);
  } else if (
    e.target.id === "botonStart" &&
    gameSelector === 1 &&
    !gameStatusActive
  ) {
    alternarFondo2(0);
    alternarFondoGameBoy2(0);
  } else if (
    e.target.id === "botonStart" &&
    gameSelector === 2 &&
    !gameStatusActive
  ) {
    alternarFondo3(0);
    alternarFondoGameBoy3(0);
  }
});

botonStartGameboy.addEventListener("click", (e) => {
  if (e.target.id === "start" && gameSelector === 0 && !gameStatusActive) {
    alternarFondo1(0);
    alternarFondoGameBoy1(0);
  } else if (
    e.target.id === "start" &&
    gameSelector === 1 &&
    !gameStatusActive
  ) {
    alternarFondo3(0);
    alternarFondoGameBoy2(0);
  } else if (
    e.target.id === "start" &&
    gameSelector === 2 &&
    !gameStatusActive
  ) {
    alternarFondo3(0);
    alternarFondoGameBoy3(0);
  }
});
