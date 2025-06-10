import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Load todos from localStorage on component mount
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    // Save todos to localStorage whenever they change
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List</h1>
      <form onSubmit={addTodo} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ marginRight: '10px' }}
            />
            <span style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none',
              marginRight: '10px'
            }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '20px' }}>
        <Link to="/">Go to Counter</Link>
      </div>
    </div>
  );
};

export default TodoList; 