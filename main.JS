let botonEncenderTv = document.getElementById("btn-power-tv");
let tvScreen = document.getElementById("monitorscreen");
let botonEncenderNes = document.getElementById("powerNES");
let botonAbajo = document.getElementById("botonAbajo");
let botonArriba = document.getElementById("botonArriba");
let botonStart = document.getElementById("botonStart");

let tvEncendida = false;
let nesEncendida = false;
let gameSelector = 0;

console.log(tvScreen);
console.log(botonEncenderTv);

// Loop through the collection of elements and add an event listener to each one

botonEncenderTv.addEventListener("click", (e) => {
  if (e.target.id === "btn-power-tv") {
    if (!tvEncendida) {
      tvScreen.style.backgroundColor = "grey";
      tvEncendida = true;
    } else {
      tvScreen.style.backgroundImage = "";
      tvScreen.style.backgroundColor = "#100f0f";
      tvEncendida = false;
    }
  }
});

botonEncenderNes.addEventListener("click", (e) => {
  if (e.target.id === "powerNES") {
    if (!nesEncendida && tvEncendida) {
      tvScreen.style.background = "";
      tvScreen.style.backgroundImage = "url('Resources/nintendo.png')";
      tvScreen.style.backgroundSize = "820px 500px";

      setTimeout(() => {
        tvScreen.style.backgroundImage = "url('Resources/Juego1.png')";
        tvScreen.style.backgroundSize = "820px 500px";
      }, "2000");

      nesEncendida = true;
    } else if (!tvEncendida) {
      tvScreen.style.backgroundImage = "";
      tvScreen.style.backgroundColor = "#100f0f";
      nesEncendida = false;
    } else {
      tvScreen.style.backgroundImage = "";
      tvScreen.style.backgroundColor = "grey";
      nesEncendida = false;
    }
  }
});

botonAbajo.addEventListener("click", (e) => {
  if (e.target.id === "botonAbajo") {
    switch (gameSelector) {
      case 0:
        tvScreen.style.backgroundImage = "url('Resources/Juego1.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector++;
        break;

      case 1:
        tvScreen.style.backgroundImage = "url('Resources/Juego2.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector++;
        break;

      case 2:
        tvScreen.style.backgroundImage = "url('Resources/Juego3.png')";
        tvScreen.style.backgroundSize = "820px 500px";

        break;
    }
  }
});

botonArriba.addEventListener("click", (e) => {
  if (e.target.id === "botonArriba") {
    switch (gameSelector) {
      case 0:
        tvScreen.style.backgroundImage = "url('Resources/Juego1.png')";
        tvScreen.style.backgroundSize = "820px 500px";

        break;

      case 1:
        tvScreen.style.backgroundImage = "url('Resources/Juego2.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector--;
        break;

      case 2:
        tvScreen.style.backgroundImage = "url('Resources/Juego3.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector--;
        break;
    }
  }
});

botonStart.addEventListener("click", (e) => {
  if (e.target.id === "botonStart"){
  for(let i = 1; i<=10; i++ ){

      
   setTimeout(() => {
      
      tvScreen.style.backgroundImage = "url('Resources/Juego1.png')";
      tvScreen.style.backgroundSize = "820px 500px";
      
      setTimeout(() => {
      tvScreen.style.backgroundImage = "url('Resources/Juego1-invert.png')";
      tvScreen.style.backgroundSize = "820px 500px";
        
    }, "100");
    }, "100");
    
  }}
   
})   
      
   
    
  

