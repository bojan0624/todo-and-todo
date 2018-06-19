import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CHANGE_TODO_TAG } from './actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        },
        ...state
      ]
      
    case TOGGLE_TODO:
      return state.map(item => {
        if (item.id === action.id) {
          return {...item, completed: !item.completed}
        } else {
          return item
        }
      })

    case REMOVE_TODO:
      return state.filter(item => item.id !== action.id)
     
    case CHANGE_TODO_TAG:
      return state.map(item => item.id === action.id ? {...item, typeId: action.typeId} : item)
                  .sort((a, b) => a.typeId > b.typeId)
    default:
      return state
  }
}