import React from "react";
import "./Column.scss";
import Task from "../../components/Task/Task.js";

function Column() {
  return (
    <div className="column">
      <header>Brainstorm</header>

      <ul className="task-list">
        <Task />

        <li className="task-item">add what you like</li>
        <li className="task-item">add what you like</li>
        <li className="task-item">add what you like</li>
        <li className="task-item">add what you like</li>
      </ul>
      <footer>add another card</footer>
    </div>
  );
}

export default Column;
