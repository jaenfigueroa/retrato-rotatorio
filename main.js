const mundo = document.getElementById('mundo')
////////////////////////////////////////////////////////
let anchoElemento = mundo.getBoundingClientRect().width
let X = 0
let moverX = 0

///SE HACE CLICK /////////////////////////////////////////
window.addEventListener('mousedown', () => {
  // console.log('se hizo click');
  window.addEventListener('mousemove', girar)
})

///SE DEJA DE HACER CLICK ////////////////////////////////
window.addEventListener('mouseup', () => {
  // console.log('se dejo de hacer click');
  removeEventListener('mousemove', girar)
})

//GIRAR //////////////////////////////////////////////////
function girar(evento) {
  //obtener la coordenada x de puntero de mouse
  let X = evento.clientX

  //rotar el mundo
  mundo.style.transform = `rotateX(-15deg) rotateY(${X}deg) rotateZ(0deg)`
}