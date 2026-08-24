import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { logout } from "../utils/auth";
import '../assets/style.css'

export default function TodoPage() {
  const [isOpen, setIsOpen] = useState(false);
  function openForm() {
    setIsOpen(!isOpen);
  }

  return (
    <div style={{ padding: 20 }}>
      <header className="header">
        <h1>Neo - Note Dashboard</h1>
        <button onClick={openForm}>Add-Note</button>
        <button onClick={logout}>Logout</button>
      </header>
      {isOpen ? <TodoForm /> : <TodoList />}
   
    </div>
  );
}
