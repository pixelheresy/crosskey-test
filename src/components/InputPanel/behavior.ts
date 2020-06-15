import { DispatchProps } from './types';
import { add as addToList } from '../../redux/list/actions';

export const mapDispatchToProps: DispatchProps = {
  addTodo: (text: string) => addToList(text),
};
