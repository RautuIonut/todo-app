import MakeTodo from './logic/todos.js'
import MakeList from './logic/lists.js'
import TodoApp from './logic/todo-app.js'
import './styles/style.css'

const app = new TodoApp()
app.addList('work')
app.lists[0].addTodo('nigga', 'i am racist', '11.08.2026', 'low')
console.log(app.lists[0])