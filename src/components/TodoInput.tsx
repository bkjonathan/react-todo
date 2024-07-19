import { FormEvent, useRef, useState } from "react";
import { useTodo } from "../contexts/TodoContext.tsx";

const TodoInput = () => {
  const [title, setTitle] = useState("");

  const { addTodo } = useTodo();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title);
    setTitle("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleChange} className="flex justify-center mt-8">
      <input
        ref={inputRef}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new todo"
        className="border-2 border-gray-300 rounded-md px-2 py-1"
      />
      <button
        type="submit"
        className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md"
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
