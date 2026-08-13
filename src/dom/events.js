import state from '../logic/state.js'
import elements from './elements.js'
import showList from './showList.js'

function createList(name) {
  state.addList(name)

  const container = document.createElement('div')
  
  container.appendChild(document.createElement('h2'))
  container.firstChild.textContent = name
  container.classList.add('list')
  document.querySelector('.sidebar').appendChild(container)

  elements.addInput.value = ''
}

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-btn')) {
    createList(elements.addInput.value)
  }
})

window.addEventListener('load', (e) => {
  createList('default ')
})