import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  CHANGE_TODO_TAG
} from './actionTypes';

const sortByTag = arr =>
  arr.sort((a, b) => {
    const compareA = a.typeId || 9999;
    const compareB = b.typeId || 9999;
    return compareA > compareB;
  });

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return sortByTag([
        {
          id: action.id,
          text: action.text,
          completed: false
        },
        ...state
      ]);

    case TOGGLE_TODO:
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });

    case REMOVE_TODO:
      return state.filter(item => item.id !== action.id);

    case CHANGE_TODO_TAG:
      return sortByTag(
        state.map(
          item =>
            item.id === action.id ? { ...item, typeId: action.typeId } : item
        )
      );

    default:
      return state;
  }
};
