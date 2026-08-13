import state from '../logic/state.js'

function showList(name) {
  return state.lists.find(list => list.name === name)
}

export default showList