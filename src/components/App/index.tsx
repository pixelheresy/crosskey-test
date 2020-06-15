import React from 'react';
import Heading from '../Heading';
import InputPanel from '../InputPanel';
import TodoContainer from '../TodoContainer';
import './index.css';

function App() {
  return (
    <div className="App">
      <header>
        <Heading text="Crosskey Todo Test" />
      </header>
      <main>
        <InputPanel />
        <TodoContainer />
      </main>
    </div>
  );
}

export default App;
