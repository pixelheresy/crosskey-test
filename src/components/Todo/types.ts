import { Todo as TodoType } from '../../models/list';

export type TodoComponentProps = {
  complete: (index: number) => void;
  id: string;
  index: number;
  move: (index: number, target: number) => void;
  remove: (index: number) => void;
  todo: TodoType;
};

export interface DragItem {
  index: number
  id: string
  type: string
}

export const ItemTypes = {
  TODO: 'todo',
}
