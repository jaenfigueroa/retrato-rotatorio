const elemento = document.getElementById('X55')
const texto = document.querySelector('#texto')
////////////////////////////////////////////////////////
let ID_GUARDADO

elemento.addEventListener('touchmove', (evento) => {

  let ancho = elemento.getBoundingClientRect().width

  ID_GUARDADO = evento.target.id

  /* coordenadas del elemento para moverlo*/
  let elementoX = evento.targetTouches[0].pageX
  let elementoY = evento.targetTouches[0].pageY

  // console.log(elementoX, elementoY);

  //RESTRINGIR MOVER DE MAS //////////
  anchoPantalla = window.innerWidth
  altoPantalla = window.innerHeight

  if (elementoX < anchoPantalla - ancho / 2 && elementoX > ancho / 2) {
    elemento.style.left = elementoX - ancho / 2 + 'px'
  }

  if (elementoY < altoPantalla - ancho / 2 && elementoY > ancho / 2) {
    elemento.style.top = elementoY - ancho / 2 + 'px'
  }
})

elemento.addEventListener('touchend', (evento) =>

  comprobarColision(ID_GUARDADO)
)

///////////////////////////////////////////////////
//ESTRUCTURA CLASE/////////////////////////////////
class Objeto {
  constructor(X, Y, alto, ancho) {
    this.arriba = Y
    this.abajo = Y + alto
    this.derecha = X + ancho
    this.izquierda = X
  }
}

///CREAR OBJETOS///////////////////////////////////
function crearObjeto(id) {  //ID

  let elemento = document.getElementById(id).getBoundingClientRect()

  let x = elemento.x
  let y = elemento.y
  let ancho = elemento.width
  let alto = elemento.height

  ///////////////
  return new Objeto(x, y, alto, ancho)
}
///COMPROBAR COLISION//////////////////////////////
function comprobarColision(id) { //OBJETO, OBJETO

  let elemento = crearObjeto(id)
  let caja = crearObjeto(`lugar${id}`)

  if (
    elemento.abajo < caja.arriba ||
    elemento.arriba > caja.abajo ||
    elemento.derecha < caja.izquierda ||
    elemento.izquierda > caja.derecha
  ) {
    console.log('NO Hay colision');
    // console.log('NO ES AHI 😅');
    texto.textContent = 'NO'

  } else {
    console.log('SI hay colision');
    // console.log('CORRECTO 😀');
    texto.textContent = 'SI'
  }
}

///PONER EN PANTALLA COMPLETA///////////////////
function aver() {
  document.getElementById('main').requestFullscreen()
}
