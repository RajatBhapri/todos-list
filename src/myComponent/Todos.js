import React, { useState } from "react";
import Todo from "./Todo";

export default function Todos({ todos, addTodo, deleteTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <div style={{ padding: "20px"}}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: "8px", width: "70%" }}
        />
        <button type="submit" style={{ padding: "8px" }}>Add</button>
      </form>

      <ul style={{ marginTop: "20px" }}>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}
