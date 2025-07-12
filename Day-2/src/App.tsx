import { useEffect, useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import FilterTabs from "./components/FilterTabs";
import TodoItem from "./components/TodoItem";
import EditModal from "./components/EditModal";
import type { Todo } from "./types/Todo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  const handleEditSave = (text: string) => {
    if (editingTodo) {
      const updated = todos.map((t) =>
        t.id === editingTodo.id ? { ...t, text } : t
      );
      setTodos(updated);
      setEditingTodo(null);
    }
  };

  return (
    <div
      style={{
        background: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "#e0e0e0" : "#000",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>🚀 Pro Todo App</h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          marginBottom: "20px",
          background: darkMode ? "#e0e0e0" : "#121212",
          color: darkMode ? "#000" : "#fff",
          padding: "8px 16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      <AddTodoForm onAdd={(t) => setTodos([...todos, t])} />
      <FilterTabs currentFilter={filter} onChange={setFilter} />

      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() =>
            setTodos(todos.map((t) => t.id === todo.id ? { ...t, completed: !t.completed } : t))
          }
          onDelete={() => setTodos(todos.filter((t) => t.id !== todo.id))}
          onEdit={() => setEditingTodo(todo)}
        />
      ))}

      {editingTodo && (
        <EditModal
          todoText={editingTodo.text}
          onSave={handleEditSave}
          onClose={() => setEditingTodo(null)}
        />
      )}
    </div>
  );
};

export default App;
