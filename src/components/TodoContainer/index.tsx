import React from 'react';
import { connect } from 'react-redux';
import { Todo as TodoType } from '../../models/list';
import Todo from '../Todo';
import { TodoContainerProps } from './types';
import { mapStateToProps, mapDispatchToProps } from './behavior';

const TodoContainer: React.FunctionComponent<TodoContainerProps> = ({
  complete,
  list,
  move,
  remove,
}) => {
  return (
    <div className="todo-container">
      {list.map((todo: TodoType, index: number) => (
        <Todo 
          complete={complete}
          id={`todo${index}`} 
          index={index} 
          key={`todo${index}`} 
          move={move}
          remove={remove}
          todo={todo}
        />
        )
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
