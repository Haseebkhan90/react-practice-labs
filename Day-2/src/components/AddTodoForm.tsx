import { useState } from "react";
import type { Todo } from "../types/Todo";

const AddTodoForm = ({ onAdd }: { onAdd: (todo: Todo) => void }) => {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) return;

    onAdd({
      id: Date.now(),
      text,
      completed: false,
      dueDate,
    });

    setText("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Task"
        style={{ flex: 1, padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
      />
      <button type="submit" style={{ padding: "10px 16px", background: "#4CAF50", color: "#fff", border: "none", borderRadius: "6px" }}>
        ➕ Add
      </button>
    </form>
  );
};

export default AddTodoForm;
