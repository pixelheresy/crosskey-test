import { Todo as TodoType } from '../../models/list';

export type TodoContainerProps = TodoContainerExternalProps &
  StateMappedProps &
  DispatchProps

interface TodoContainerExternalProps { };

export type StateMappedProps = {
  list: TodoType[];
};

export type DispatchProps = {
  complete: (index: number) => void;
  move: (index: number, target: number) => void;
  remove: (index: number) => void;
};
