import { SubjectColors } from '../constants';
import { CHANGE_SUBJECT_COLOR } from './actionTypes';

export default (state = SubjectColors[0], action) => {
  switch (action.type) {
    case CHANGE_SUBJECT_COLOR:
      return action.subjectColor;

    default:
      return state;
  }
};
