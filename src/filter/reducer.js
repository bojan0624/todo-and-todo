import { SET_FILTER } from './actionTypes'
import {FilterType} from '../constants'

export default (state = FilterType.ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state
  }
}