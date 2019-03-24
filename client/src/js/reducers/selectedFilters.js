import { combineReducers } from 'redux';
import {
  SELECTED_FILTER_CONDITION
} from '../actions/types';

const selectedFilters = (state = [], action) => {
  switch (action.type) {
    case: SELECTED_FILTER_CONDITION:
      return state;
    default:
      return state;
  }
}
