import "./App.css";
import TodoInput from "./components/TodoInput.tsx";
import TodoList from "./components/TodoList.tsx";
import { TodoProvider } from "./contexts/TodoContext.tsx";

function App() {
  return (
    <TodoProvider>
      <div className="container mx-auto px-4">
        <h1 className="text-center text-2xl font-bold my-4">Todo List</h1>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
