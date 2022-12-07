import React from "react";
import { Link } from "react-router-dom";

const EditTodo = () => {
  return (
    <section className="edit-section">
      <header className="header-todo">
        <h1 className="title">Edit Todo</h1>
        <form className="edit-form">
          <div className="inline-grid">
            <span className="bold-text">Todo ID</span>
            <span className="bold-text">313413knkjn1324jn41</span>
          </div>
          <label className="inline-grid">
            <span className="bold-text">Name</span>
            <input type="text" className="edit-input" />
          </label>
          <label className="inline-grid">
            <span className="bold-text">Completed</span>
            <input type="checkbox" name="" id="" className="edit-todo-state" />
          </label>
          <button type="submit" className="edit-btn">
            Edit
          </button>
        </form>
      </header>

      <Link to="/" className="back-todo-link">
        Back To Todos
      </Link>
    </section>
  );
};

export default EditTodo;
