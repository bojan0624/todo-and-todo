import { CHANGE_SUBJECT_COLOR } from './actionTypes';

export const changeSubjectColor = color => {
  return {
    type: CHANGE_SUBJECT_COLOR,
    subjectColor: color
  };
};
