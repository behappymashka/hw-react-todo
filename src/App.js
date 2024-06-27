import React from 'react';
import AddTodo from './components/todos/AddTodo';
import TodoList from './components/todos/TodoList';
import './App.css';

const App = () => (
    <div>
      <h1>TODO</h1>
      <AddTodo />
      <TodoList />
    </div>
);

export default App;