const elemento = document.querySelector('#elemento')
const caja = document.querySelector('#caja')
////////////////////////////////////////////////////////
// elemento.addEventListener('dragstart', () => {
//   console.log('se empezo a arrastrar');
// })
//////////////////
// caja.addEventListener('dragover', (evento) => {
//   evento.preventDefault()
// })

// caja.addEventListener('drop', (evento) => {
//   console.log('se solto');
// })

////////////////////////////////////////////////////////
elemento.addEventListener('touchmove', (evento) => {
  // console.log(evento.target);
  // console.log(evento.targetTouches);
  // console.log(evento.targetTouches[0]);
  let ubicacion = evento.targetTouches[0]
  elemento.style.left = ubicacion.pageX + 'px'
  elemento.style.top = ubicacion.pageY + 'px'

})