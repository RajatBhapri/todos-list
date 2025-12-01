import React, { useState } from "react";
import Header from "./myComponent/Header";
import Footer from "./myComponent/Footer";
import Todos from "./myComponent/Todos";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <Header />
      <Todos todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
      <Footer />
    </div>
  );
}
