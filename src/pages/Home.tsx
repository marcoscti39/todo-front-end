import React from "react";
import Notification from "../components/Notification";
import TodoItem from "../components/TodoItem";
import { useGetTodos } from "../hooks/useGetTodos";
import { useNotification } from "../hooks/useNotification";

const Home = () => {
  const { data: todos } = useGetTodos();
  console.log(todos);
  const { activateNotification, isNotificationShowing, notificationData } =
    useNotification();

  const handleTodoSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    activateNotification("testing", "fulfilled");
  };

  return (
    <section className="home-section">
      <header className="header-todo">
        <h1 className="title">Task Manager</h1>
        <form onSubmit={handleTodoSubmit} className="home-form">
          <input
            type="text"
            className="home-input"
            placeholder="e.g wash dishes"
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        {isNotificationShowing && <Notification {...notificationData} />}
      </header>

      <section className="todo-container">
        <TodoItem />
      </section>
    </section>
  );
};

export default Home;
