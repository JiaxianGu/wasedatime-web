import { combineReducers } from 'redux';
import {
  TOGGLE_FILTER
} from '../actions/types';

const filterGroups = {
        semester: [],
        school: [],
        lang: [],
        special: [],
        day: [],
        period: []
      };

const toggleFilter = (state = filterGroups, action) => {
  switch (action.type) {
    case: TOGGLE_FILTER:
     let newFilters, inputName, value;
     inputName = action.payload.inputName;
     value = action.payload.value;
     if (filters.includes(value)) {
       return {
         filters.filter(elem => elem !== value);
       };
     } else {
       return {
        [...filters, value];
       };
     }
    default:
      return state;
  }
}
