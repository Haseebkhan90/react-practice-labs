import type { Todo } from "../types/Todo";

const TodoItem = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: () => void;
}) => {
  return (
    <div style={{
      background: todo.completed ? "#d4edda" : "#fff",
      padding: "12px", borderRadius: "8px", marginBottom: "10px",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      border: "1px solid #ccc"
    }}>
      <div onClick={onToggle} style={{ cursor: "pointer", flex: 1 }}>
        <div style={{ fontWeight: 600, textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
        </div>
        <small style={{ color: "#777" }}>Due: {todo.dueDate || "N/A"}</small>
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={onEdit} style={{ background: "#ffc107", border: "none", padding: "6px", borderRadius: "5px" }}>✏️</button>
        <button onClick={onDelete} style={{ background: "#dc3545", border: "none", padding: "6px", color: "white", borderRadius: "5px" }}>❌</button>
      </div>
    </div>
  );
};

export default TodoItem;
