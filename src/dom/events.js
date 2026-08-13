import state from '../logic/state.js'
import elements from './elements.js'
import showList from './showList.js'
import MakeList from '../logic/lists.js'

function createList(name) {
  state.addList(name)

  const container = document.createElement('div')
  
  container.textContent = name
  container.classList.add('list')
  document.querySelector('.sidebar').appendChild(container)

  elements.addInput.value = ''
}

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-btn')) {
    createList(elements.addInput.value)
  }

  if (e.target.classList.contains('list') && !e.target.classList.contains('open')) {
    Array.from(document.querySelectorAll('.list'))
      .forEach(list => list.classList.remove('open'))
    e.target.classList.add('open')

    showList(e.target.textContent)
  }
})

window.addEventListener('load', (e) => {
  createList('default')
})