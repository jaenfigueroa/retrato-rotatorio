const mundo3D = document.getElementById('mundo3D')

///CUANDO SE HACE CLICK //////////////////////////////////
window.addEventListener('mousedown', () => {
  window.addEventListener('mousemove', girar)
})

///CUANDO SE DEJA DE HACER CLICK /////////////////////////
window.addEventListener('mouseup', () => {
  removeEventListener('mousemove', girar)
})

//////////////////////////////////////////////////////////
//ROTAR EL MUNDO3D ///////////////////////////////////////
function girar(evento) {
  //obtener la coordenada X y Y de la flecha de mouse
  let X = evento.clientX
  let Y = evento.clientY

  //aginarle esos valores y rotar
  mundo3D.style.transform = `rotateX(-${Y}deg) rotateY(${X}deg)`
}

////////////////////////////////////////////////////
////////////////////////////////////////////////////