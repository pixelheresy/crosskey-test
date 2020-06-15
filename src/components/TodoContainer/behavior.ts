import { RootState } from '../../models/index';
import {
  complete as completeInList,
  move as moveInList,
  remove as removeFromList,
} from '../../redux/list/actions';
import { StateMappedProps, DispatchProps } from './types';

export const mapStateToProps = (state: RootState): StateMappedProps => {
  const { list } = state.list; // extracting list from list module context
  return {
    list
  };
};

export const mapDispatchToProps: DispatchProps = {
  complete: (index: number) => completeInList(index),
  move: (index: number, target: number) => moveInList(index, target),
  remove: (index: number) => removeFromList(index),
};

