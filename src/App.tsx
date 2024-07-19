import "./App.css";
import { useState } from "react";
import { Todo } from "./types/todo.interface.ts";
import TodoInput from "./components/TodoInput.tsx";
import TodoList from "./components/TodoList.tsx";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    const newTodo = { id: Date.now(), title: title, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const updateTodo = (id: number, title: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-2xl font-bold my-4">Todo List</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} />
    </div>
  );
}

export default App;
