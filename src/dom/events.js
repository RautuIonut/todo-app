import state from '../logic/state.js'
import elements from './elements.js'

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-btn')) {
    state.addList(elements.addInput.value)

    const container = document.createElement('div')
  
    container.appendChild(document.createElement('h2'))
    container.firstChild.textContent = elements.addInput.value
    document.querySelector('.sidebar').appendChild(container)
  }
})