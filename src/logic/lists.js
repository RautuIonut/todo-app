import MakeTodo from './todos.js'
import {saveState} from './storage.js'

class MakeList {
  constructor(name) {
    this.name = name
    this.todos = []
    this.count = 0
  }

  addTodo(title, description, dueDate, priority) {
    const todo = new MakeTodo(title, description, dueDate, priority)
    this.todos.push(todo)
    this.count++

    saveState()
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
    this.count--

    saveState()
  }

  editTodo(id, title, description, dueDate, priority) {
    const todo = this.todos.find(todo => todo.id === id)

    todo.title = title
    todo.description = description
    todo.dueDate = dueDate
    todo.priority = priority

    saveState()
  }

  checkTodo(id) {
    const todo = this.todos.find(todo => todo.id === id)
    todo.checked = todo.checked === false ? true : false

    saveState()
  }
}

export default MakeList