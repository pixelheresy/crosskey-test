import { typedAction } from '../index';

/* Redux action types */
enum actions {
  add = 'list/ADD',
  remove = 'list/REMOVE',
  move = 'list/MOVE',
  complete = 'list/COMPLETE',
}

/* exposing generated type from all actions */
export type ListAction = ReturnType<typeof add 
  | typeof complete 
  | typeof move 
  | typeof remove
  >;

/* Redux action functions */
export const add = (text: string) => {
  return typedAction(actions.add, { text });
};

export const complete = (index: number) => {
  return typedAction(actions.complete, { index });
};

export const move = (index: number, target: number) => {
  return typedAction(actions.move, { index, target });
};

export const remove = (index: number) => {
  return typedAction(actions.remove, { index });
};
