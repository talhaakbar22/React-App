import React from 'react';
import Header from './components/Header';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <Header title="Task Tracking" />
      <Task />
    </div>
  );
}

export default App;
