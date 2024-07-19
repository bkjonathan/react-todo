import { FC, useState } from "react";
import { Todo } from "../types/todo.interface.ts";

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
  return (
    <ul className="mt-4 space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center  bg-gray-100 p-4 rounded-lg"
        >
          {editingId === todo.id ? (
            <input
              type="text"
              value={editingTitle}
              onChange={(e) => setEditingTitle(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1"
            />
          ) : (
            <span>{todo.title}</span>
          )}
          <div className="space-x-2">
            {editingId === todo.id ? (
              <button
                onClick={() => saveEdit(todo.id)}
                className="bg-green-500 text-white px-2 py-1 rounded-md"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(todo)}
                className="bg-blue-500 text-white px-2 py-1 rounded-md"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => onDelete(todo.id)}
              className="bg-red-500 text-white px-2 py-1 rounded-md"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
