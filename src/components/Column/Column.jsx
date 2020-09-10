import React, { useState } from "react";
import Task from "../Task/Task";
import "./Column.css";

const Column = ({ column, onDrop, createTask, deleteColumn }) => {
  const [taskTitle, setTaskTitle] = useState("");
  return (
    <div className="container">
      <h4>{column.type}</h4>
      <button onClick={() => deleteColumn(column.type)}>Delete Column</button>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value.toUpperCase())}
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          createTask(column.type, taskTitle);
          setTaskTitle("");
        }}
      >
        Create Task
      </button>
      <div
        className="column-body"
        id={column.type}
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e)}
      >
        {column.tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

function onDragOver(e) {
  e.preventDefault();
}

export default Column;
