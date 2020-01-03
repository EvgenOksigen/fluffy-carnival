import React from 'react';
import TodoList from './ToDo/TodoList'

function App() {
  const todos = [
    { id: 1, completed: false, title: 'Buy bread' },
    { id: 2, completed: false, title: 'Buy onion' },
    { id: 3, completed: false, title: 'Buy house' }
  ]
  return (
    <div className="wrapper">
      <h1> React tutorial</h1>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
