import state from '../logic/state.js'
import elements from './elements.js'
import showList from './showList.js'
import MakeList from '../logic/lists.js'

function displayLists() {
  elements.listsContainer.innerHTML = ''

  for (let i = 0; i < state.lists.length; i++) {
    const container = document.createElement('div')
    container.textContent = state.lists[i].name
    container.classList.add('list')
    elements.listsContainer.appendChild(container)
  }  
}

function resetInputs() {
  elements.titleInput.value = ''
  elements.descriptionInput.value = ''
  elements.priorityInput.value = ''
  elements.dateInput.value = ''
  elements.addInput.value = ''
}

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-btn')) {
    state.addList(elements.addInput.value)
    elements.addInput.value = ''
    displayLists()
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
    elements.saveButton.classList.add('save-edit-btn')
    elements.form.id = e.target.closest('.todo').id

    elements.titleInput.value = e.target.closest('.todo')
      .querySelector('.title'). textContent
    elements.descriptionInput.value = e.target.closest('.todo')
      .querySelector('.description').textContent
    elements.priorityInput.value = e.target.closest('.todo')
      .querySelector('.priority').textContent
    elements.dateInput.value = e.target.closest('.todo')
      .querySelector('.date').value
  }

  if (e.target.classList.contains('save-edit-btn')) {
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

    elements.saveButton.classList.remove('save-edit-btn')
    elements.form.id = ''

    showList(list.name)
    resetInputs()
  }

  if (e.target.classList.contains('add-todo-btn')) {
    elements.form.classList.remove('hidden')
    elements.saveButton.classList.add('save-todo-btn')
  }

  if (e.target.classList.contains('save-todo-btn')) {
    e.preventDefault()
    elements.form.classList.add('hidden') 

    const list = state.lists
      .find(list => list.name === document.querySelector('.open').textContent)

    list.addTodo(
      elements.titleInput.value,
      elements.descriptionInput.value,
      elements.dateInput.value,
      elements.priorityInput.value
    )

    elements.saveButton.classList.remove('save-todo-btn')

    showList(list.name)
    resetInputs()
  }

  if (e.target.classList.contains('checkbox')) {
    if (e.target.hasAttribute('checked')) {
      e.target.toggleAttribute('checked')

      const todo = e.target.closest('.todo')
      todo.classList.remove('checked')
      state.getList(todo.id).checkTodo(todo.id)
    } else {
      e.target.toggleAttribute('checked')

      const todo = e.target.closest('.todo')
      todo.classList.add('checked')
      state.getList(todo.id).checkTodo(todo.id)

      showList(state.getList(todo.id).name)
    }
  }

  if (e.target.classList.contains('cancel-btn')) {
    e.preventDefault()
    elements.form.classList.add('hidden')
    elements.saveButton.classList = ''
    resetInputs()
  }

  if (e.target.classList.contains('delete-list-btn') && document.querySelector('.open')) {
    if (document.querySelectorAll('.list').length === 1) {
      const error = document.createElement('p')
      error.textContent = 'You cannot remove the last project'
      elements.content.appendChild(error)
      return
    }

    const target = document.querySelector('.open')
    target.classList.remove('open')
    state.deleteList(target.textContent)
    displayLists()
    document.querySelector('.list').classList.add('open')
    showList(document.querySelector('.list').textContent)
    console.log(state)
  }
})

window.addEventListener('load', (e) => {
  state.addList('default')
  elements.addInput.value = ''
  displayLists()
  document.querySelector('.list').classList.add('open')
  showList('default')
})