import React, { useState } from 'react';
import { connect } from 'react-redux';
import { InputPanelProps } from './types';
import { mapDispatchToProps } from './behavior';

const InputPanel: React.FunctionComponent<InputPanelProps> = ({
  addTodo,
}) => {
  // used hooks here since text update and "submit" capture can be handled
  // internally to component, which often save memory and latency
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-panel">
      <input type="text" value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  )
};

export default connect(null, mapDispatchToProps)(InputPanel);
