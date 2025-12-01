import React from "react";

export default function Todo({ todo, deleteTodo }) {
  return (
    <li style={{ marginBottom: "10px" }}>
      {todo.text}
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{ marginLeft: "10px", padding: "4px" }}
      >
        Delete
      </button>
    </li>
  );
}
