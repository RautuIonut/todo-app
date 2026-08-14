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

  if (e.target.classList.contains('remove')) {
    const id = e.target.closest('.todo').id
    const list = state.getList(id)

    list.deleteTodo(id)
    showList(list.name)
  }
  
  if (e.target.classList.contains('edit')) {
    elements.form.classList.remove('hidden')
    elements.form.id = e.target.closest('.todo').id

    elements.titleInput.value = e.target.closest('.todo')
      .querySelector('.title'). textContent
    elements.descriptionInput.value = e.target.closest('.todo')
      .querySelector('.description').textContent
    elements.dateInput.value = e.target.closest('.todo')
      .querySelector('.date').value
  }

  if (e.target.classList.contains('save-btn')) {
    e.preventDefault()
    elements.form.classList.add('hidden')

    const list = state.getList(elements.form.id)
    list.editTodo(
      elements.form.id,
      elements.titleInput.value,
      elements.descriptionInput.value,
      elements.dateInput.value,
      elements.priorityInput.value
    )

    showList(list.name)
  }
})

window.addEventListener('load', (e) => {
  createList('default')
})