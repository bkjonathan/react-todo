import { FC, useState } from "react";
import { Todo } from "../types/todo.interface.ts";
import TodoItem from "./TodoItem.tsx";

interface TodoListProps {
  todos: Todo[];
  onUpdate: (id: number, title: string) => void;
  onDelete: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, onDelete, onUpdate }) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState<string>("");

  const handleEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditingTitle(todo.title);
  };

  const saveEdit = (id: number) => {
    onUpdate(id, editingTitle);
    setEditingId(null);
    setEditingTitle("");
  };

  const handleTitleChange = (title: string) => {
    setEditingTitle(title);
    if (editingId) onUpdate(editingId, title);
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
          onDelete={onDelete}
          onTitleChange={handleTitleChange}
        />
      ))}
    </ul>
  );
};
export default TodoList;
