import { useState } from "react";
import { Todo } from "../types/todo.interface.ts";
import TodoItem from "./TodoItem.tsx";
import { useTodo } from "../contexts/TodoContext.tsx";

const TodoList = () => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState<string>("");

  const { todos, updateTodo, deleteTodo } = useTodo();
  const handleEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditingTitle(todo.title);
  };

  const saveEdit = (id: number) => {
    updateTodo(id, editingTitle);
    setEditingId(null);
    setEditingTitle("");
  };

  const handleTitleChange = (title: string) => {
    setEditingTitle(title);
    if (editingId) updateTodo(editingId, title);
  };

  return (
    <ul className="mt-4 space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isEditing={editingId === todo.id}
          onEdit={handleEdit}
          onSave={saveEdit}
          onDelete={deleteTodo}
          onTitleChange={handleTitleChange}
        />
      ))}
    </ul>
  );
};
export default TodoList;
