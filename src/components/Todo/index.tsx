import React, { useRef } from 'react';
import { TodoComponentProps, DragItem, ItemTypes } from './types';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd'
import { XYCoord } from 'dnd-core'

const style = {
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  borderRadius: 15,
  cursor: 'move',
}

const Todo: React.FunctionComponent<TodoComponentProps> = ({
  complete,
  id,
  index,
  move,
  remove,
  todo,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: ItemTypes.TODO,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      move(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  })

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.TODO, id, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  const done = { textDecoration: 'line-through' };
  drag(drop(ref));
   
  return (
    <div ref={ref} style={{ ...style, opacity }} className='todo'>
      <h2 style={todo.complete ? done : undefined }>{todo.text}</h2>
      { !todo.complete
        ? ( <button onClick={() => complete(index)}>✓</button> )
        : null }
      <button onClick={() => remove(index)}>✗</button>
    </div>
  );
};

export default Todo;
