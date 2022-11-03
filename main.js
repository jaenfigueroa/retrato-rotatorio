const elemento = document.getElementById('elemento')
////////////////////////////////////////////////////////

elemento.addEventListener('touchmove', (evento) => {

  let anchoElemento = elemento.getBoundingClientRect().width

  /* COORDENADAS DEL ELEMENTO*/
  let elementoX = evento.targetTouches[0].pageX
  let elementoY = evento.targetTouches[0].pageY

  /* MOVERLO DE LUGAR */
  elemento.style.left = elementoX - anchoElemento / 2 + 'px'
  elemento.style.top = elementoY - anchoElemento / 2 + 'px'
})
