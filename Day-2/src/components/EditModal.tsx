import { useState } from "react";

const EditModal = ({
  todoText,
  onSave,
  onClose,
}: {
  todoText: string;
  onSave: (text: string) => void;
  onClose: () => void;
}) => {
  const [newText, setNewText] = useState(todoText);

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%",
      height: "100%", background: "rgba(0,0,0,0.6)",
      display: "flex", justifyContent: "center", alignItems: "center"
    }}>
      <div style={{
        background: "#fff", padding: "20px", borderRadius: "10px", width: "90%", maxWidth: "400px"
      }}>
        <h3>Edit Task</h3>
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <button onClick={onClose} style={{ padding: "8px 12px" }}>Cancel</button>
          <button onClick={() => onSave(newText)} style={{ padding: "8px 12px", background: "#007bff", color: "#fff", border: "none" }}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
