import React from "react";
import "./Column.css";
import Task from "./Task/Task";

const Column = ({ column, onDrop }) => (
  <div className="container">
    <h4>{column.type}</h4>
    <div
      className="column-body"
      id={column.type}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e)}
    >
      {column.tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  </div>
);

function onDragOver(e) {
  e.preventDefault();
}

export default Column;
