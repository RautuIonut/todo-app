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
  const todoContainer = document.createElement('div')
  const error = document.createElement('p')

  header.classList.add('header')
  title.classList.add('title')
  counter.classList.add('counter')
  addBtn.classList.add('add-todo-btn')
  removeBtn.classList.add('delete-list-btn')
  error.classList.add('error')
  todoContainer.classList.add('todo-container')

  title.textContent = list.name
  counter.textContent = `(${list.count})`
  addBtn.textContent = 'Add'
  removeBtn.textContent = 'Remove'

  header.append(title, counter, addBtn, removeBtn, error)
  elements.content.append(header, todoContainer)

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

    if (list.todos[i].checked) {
      todo.classList.add('checked')
    }

    todo.classList.add('todo')
    title.classList.add('title')
    description.classList.add('description')
    priority.classList.add('priority')
    date.classList.add('date')
    remove.classList.add('remove')
    edit.classList.add('edit')
    todo.id = list.todos[i].id
    
    title.textContent = list.todos[i].title
    description.textContent = list.todos[i].description
    date.textContent = `Due date: ${list.todos[i].dueDate}`
    priority.textContent = list.todos[i].priority
    remove.textContent = 'Remove'
    edit.textContent = 'Edit'

    switch (priority.textContent) {
      case 'low':
        priority.classList.add('low')
        break
      
      case 'medium':
        priority.classList.add('medium')
        break

      case 'high':
        priority.classList.add('high')
    }

    titleDescription.append(title, description)
    todo.append(titleDescription, date, priority, remove, edit)
    todoContainer.append(todo)
  }
}

export default showList