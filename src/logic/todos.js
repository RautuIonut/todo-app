class MakeTodo {
  constructor(title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.checked = false
    this.id = crypto.randomUUID()
  }

  editTodo(title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
  }

  check() {
    this.checked = this.checked === false ? true : false
  }
}

export default MakeTodo