let botonEncenderTv = document.getElementById("btn-power-tv");
let tvScreen = document.getElementById("monitorscreen");
let botonEncenderNes = document.getElementById("powerNES");
let botonReset = document.getElementById("resetNES");
let botonAbajo = document.getElementById("botonAbajo");
let botonArriba = document.getElementById("botonArriba");
let botonStart = document.getElementById("botonStart");


let repeticiones = 0;
let maximasrepeticiones = 10;
let tvEncendida = false;
let nesEncendida = false;
let gameSelector = 0;
let contadorCambios = 0;
let gameStatusActive = false;
const imagen1 = "url('Resources/Juego1.png')"
const imagen2 = "url('Resources/Juego1-invert.png')"
const imagen3 = "url('Resources/Juego2.png')"
const imagen4 = "url('Resources/Juego2-invert.png')"
const imagen5 = "url('Resources/Juego3.png')"
const imagen6 = "url('Resources/Juego3-invert.png')"


let imagenActual = imagen1

function alternarFondo1(iteracion1) {
   if (iteracion1 >= 9) {
      tvScreen.style.backgroundImage = "url('Resources/VillesAdventures.png')";
     return; 
   }
 
   const imagen = iteracion1 % 2 === 0 ? imagen1 : imagen2; 
   tvScreen.style.backgroundImage = imagen;
   gameStatusActive = true;
 
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
       
         setTimeout(function () {
           
           setTimeout(function () {
             alternarFondo3(iteracion3 + 1);
           }, 100);
         }, 100);
         }




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

botonReset.addEventListener("click",(e)=>{
  if(e.target.id === "resetNES"){
    tvScreen.style.background =""
    setTimeout(() => {
      tvScreen.style.backgroundColor = "Black"
    setTimeout(() => {
      tvScreen.style.backgroundImage = "url('Resources/nintendo.png')";
      tvScreen.style.backgroundSize = "820px 500px";
     setTimeout(() => {
      tvScreen.style.backgroundImage = "url('Resources/Juego1.png')";
      tvScreen.style.backgroundSize = "820px 500px";
    }, "2000");}, "200");}, "200");
    
   



  }})



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
  if (e.target.id === "botonAbajo" && !gameStatusActive) {
   gameSelector++;
    switch (gameSelector) {
      case 0:
        tvScreen.style.backgroundImage = "url('Resources/Juego1.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector = 0
        break;

      case 1:
        tvScreen.style.backgroundImage = "url('Resources/Juego2.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector = 1
        break;

      case 2:
        tvScreen.style.backgroundImage = "url('Resources/Juego3.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector = 2
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
        gameSelector = 0 
        break;

      case 1:
        tvScreen.style.backgroundImage = "url('Resources/Juego2.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector = 1
        break;

      case 2:
        tvScreen.style.backgroundImage = "url('Resources/Juego3.png')";
        tvScreen.style.backgroundSize = "820px 500px";
        gameSelector = 2
        break;
    }
  }
});

botonStart.addEventListener("click", (e) => {
   if (e.target.id === "botonStart" && (gameSelector === 0 && !gameStatusActive)) {
      alternarFondo1(0);
      
      }else if(e.target.id === "botonStart" && (gameSelector === 1 && !gameStatusActive))
      {
      alternarFondo2(0)   
      }
      else if(e.target.id === "botonStart" && (gameSelector === 2 && !gameStatusActive))
      {
      alternarFondo3(0)   
      }
      
      })
 
 
 
 
  
     
      
   
    
  

