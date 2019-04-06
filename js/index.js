var canvas = document. getElementById("canvas");
var context= canvas.getContext("2d")

var x = canvas.width / 2;
var y = canvas.height - 30;

var dx = 2;
var dy = -2;
var ballRadius = 10;

// detectar las teclas direccionales de izquiera/derecha
var rightPressed = false;
var leftPressed = false;

//agregar eventos de presionado y soltado de teclas
document.addEventListener ("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//esta funcion determina si se preciona una tecla
function keyDownHandler(event) {
if (event.keyCode=== 39) {
  rightPressed= true;
  }  else if (event.keyCode=== 37) {
    leftPressed= true;
  }
}

//esta funcion determinasi se suelta la tecla
function keyUpHandler(event) {
  if(event.keyCode == 39) {
    rightPressed = false;
  } else if (event.keyCode == 37) {
    leftPressed = false;
  }

}
//paleta
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

// la funcion dibuja una paleta
function drawPaddle() {
  context.beginPath();
context.rect(paddleX, 310, paddleWidth, paddleHeight );
context.fillStyle = "#0095DD";
context.fill();
context.closePath();
}

// Esta funcion dibuja un circulo
function drawBall ()

 {
  context.beginPath();
context.arc(x, y, ballRadius, 0, Math.PI*2);
context.fillStyle = "#0095DD";
context.fill();
context.closePath();
}

function draw () {
  context.clearRect(0, 0, canvas.width, canvas.height);

// se llama la funcion de dibijar un circulo

  drawBall();

  // se llama al afuncion de dibujar
  drawBall ()
  // se llama a la funcion de dibujar la paleta
  drawPaddle ()

  // verificar si llego al limite de abajo
  if ( x + dx >  canvas.width - ballRadius || x + dx < ballRadius) {
    dx= -dx;
  }

  if ( y + dy <ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && paddleX + paddleWidth) {
      dy = -dy;
    } else {
      alert("Que pendejo ya perdio");
      document.location.reload();
    }
  }

  //verificar si se mueve
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -=7;
  }


  x += dx;
  y += dy;

  }




setInterval (draw,10);
