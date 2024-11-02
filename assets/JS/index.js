//aggiungo una classe creata per cambiare i colori. ho preferito distinguere le funzioni perché mi stavo confondendo//

window.addEventListener('scroll', () => {
  /*aggiungo l'ascoltatore dell'evento scroll alla uppernav, l'elemento che deve rimanere fisso*/
  const upperNav =
    document.getElementsByClassName(
      'upperNav'
    )[0] /*classe uppernav, prima occorrenza*/

  /*ciclo if per innescare il cambiamento e applicare la classe*/
  if (upperNav) {
    if (window.scrollY > 50) {
      upperNav.classList.add('scrolled')
    } else {
      upperNav.classList.remove('scrolled')
    }
  }
})
/*faccio come sopra ma con il bottone*/
window.addEventListener('scroll', () => {
  const button = document.querySelector('.upperNav .button')

  if (window.scrollY > 50) {
    button.classList.add('scrolled')
  } else {
    button.classList.remove('scrolled')
  }
})
