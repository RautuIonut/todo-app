import MakeTodo from './todos.js'

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
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  editTodo(id, title, description, dueDate, priority) {
    const todo = this.todos.find(todo => todo.id === id)

    todo.title = title
    todo.description = description
    todo.dueDate = dueDate
    todo.priority = priority
  }
}

export default MakeList