import { Todo } from "../types/todo.interface.ts";
import { FC, memo } from "react";

interface TodoItemProps {
  todo: Todo;
  isEditing: boolean;
  onEdit: (todo: Todo) => void;
  onSave: (id: number) => void;
  onDelete: (id: number) => void;
  onTitleChange: (title: string) => void;
}

const TodoItem: FC<TodoItemProps> = memo(
  ({ todo, isEditing, onEdit, onSave, onDelete, onTitleChange }) => {
    return (
      <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
        {isEditing ? (
          <input
            type="text"
            value={todo.title}
            onChange={(e) => onTitleChange(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1"
          />
        ) : (
          <span>{todo.title}</span>
        )}
        <div className="space-x-3">
          {isEditing ? (
            <button
              onClick={() => onSave(todo.id)}
              className="bg-green-500 text-white px-2 py-1 rounded-md"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => onEdit(todo)}
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
    );
  },
);

export default TodoItem;
