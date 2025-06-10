import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from './components/Counter';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Counter />} />
      <Route path="/todos" element={<TodoList />} />
    </Routes>
  );
}
