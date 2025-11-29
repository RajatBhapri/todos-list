import React from "react";
import "./Header.css"; // optional if you want external CSS

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Todo-List</h1>
      <nav className="nav">
        <a href="/todo" className="nav-link">Todo-List</a>
        <a href="/about" className="nav-link">About</a>
      </nav>
    </header>
  );
}

export default Header;
