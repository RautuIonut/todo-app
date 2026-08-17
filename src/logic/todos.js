class MakeTodo {
  constructor(title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.checked = false
    this.id = crypto.randomUUID()
  }
}

export default MakeTodo