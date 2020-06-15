import { Todo, ListState } from '../../models/list';
import {
  ListAction,
} from './actions';

/* Reducer functions */
export function addItem (list: any[], text: string) {
  list.unshift({ text, complete: false});
  return list;
};

export function removeItem (list: any[], index: number) {
  list.splice(index, 1);
  return list;
};

export function moveItem (list: any[], index: number, target: number) {
  const moved = list.splice(index, 1);
  list.splice(target, 0, moved[0]);
  return list;
};

export function completeItem (list: Todo[], index: number) {
  const completed = list.splice(index, 1);
  completed[0].complete = true;
  return [...list, ...completed];
};

/* Initial state for scope 'list' */
export var initialState: ListState = { list: [] }; // using 'var' due to issue with babel and tsx in test runner

/* Reducer */
export function listReducer(
  state = initialState,
  action: ListAction
): ListState {
  switch (action.type) {
    case 'list/ADD':
      return { 
        list: addItem([...state.list], action.payload.text),
      };
    case 'list/REMOVE': 
      return {
        list: removeItem([...state.list], action.payload.index),
      };
    case 'list/MOVE':
      return {
        list: moveItem([...state.list], action.payload.index, action.payload.target),
      };
    case 'list/COMPLETE':
      return {
        list: completeItem([...state.list], action.payload.index),
      };
    default:
      return state;
  }
}

