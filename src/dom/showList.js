import state from '../logic/state.js'
import elements from './elements.js'

function showList(name) {
  elements.content.innerHTML = ''

  const list = state.lists.find(list => list.name === name)
  const header = document.createElement('div')
  const title = document.createElement('h2')
  const counter = document.createElement('p')
  const addBtn = document.createElement('button')
  const removeBtn = document.createElement('button')

  header.classList.add('header')
  title.classList.add('title')
  counter.classList.add('counter')
  addBtn.classList.add('add-todo-btn')
  removeBtn.classList.add('delete-list-btn')

  title.textContent = list.name
  counter.textContent = `(${list.count})`
  addBtn.textContent = 'Add'
  removeBtn.textContent = 'Remove'

  header.append(title, counter, addBtn, removeBtn)
  elements.content.appendChild(header)

  
  
  
  for (let i = 0; i < list.todos.length; i++) {
    const todo = document.createElement('div')
    const title = document.createElement('p')
    const description = document.createElement('p')
    const date = document.createElement('p')
    const priority = document.createElement('p')
    const checkbox = document.createElement('input')
    const titleDescription = document.createElement('div')
    const remove = document.createElement('button')
    const edit = document.createElement('button')

    todo.classList.add('todo')
    title.classList.add('title')
    description.classList.add('description')
    priority.classList.add('priority')
    date.classList.add('date')
    checkbox.classList.add('checkbox')
    remove.classList.add('remove')
    edit.classList.add('edit')
    todo.id = list.todos[i].id
    

    checkbox.type = 'checkbox'

    if (list.todos[i].checked) {
      todo.classList.add('checked')
      checkbox.setAttribute('checked', 'checked')
    }

    title.textContent = list.todos[i].title
    description.textContent = list.todos[i].description
    date.textContent = list.todos[i].dueDate
    priority.textContent = list.todos[i].priority
    remove.textContent = 'remove'
    edit.textContent = 'edit'    

    titleDescription.append(title, description)
    todo.append(checkbox, titleDescription, date, priority, remove, edit)
    elements.content.appendChild(todo)
  }
}

export default showList