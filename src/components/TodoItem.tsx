import React from "react";

import { BiEdit as EditIcon } from "react-icons/bi";
import { RiDeleteBin2Fill as DeleteIcon } from "react-icons/ri";
import { HiClipboardCheck as CheckIcon } from "react-icons/hi";
import { Link } from "react-router-dom";

const TodoItem = () => {
  return (
    <article className="todo-item">
      <div className="todo-wrapper-align">
        <span className="todo-state">
          <CheckIcon />
        </span>
        <h2 className="todo-text">Walk With the Dog</h2>
      </div>

      <div className="todo-btn-container">
        <Link
          to={`/edit-todo/ksdlkmk4134`}
          className="todo-edit"
          aria-label="go to edit page"
        >
          <EditIcon />
        </Link>
        <button className="todo-delete">
          <DeleteIcon />
        </button>
      </div>
    </article>
  );
};

export default TodoItem;
