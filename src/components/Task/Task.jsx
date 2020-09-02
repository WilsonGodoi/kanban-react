import React from "react";
import "./Task.css";

const Task = ({ task }) => (
  <div
    draggable="true"
    onDragStart={drag}
    id={task.id}
    className="container-task"
  >
    {task.title}
  </div>
);

function drag(ev) {
  ev.dataTransfer.setData("taskId", ev.target.id);
  ev.dataTransfer.setData("taskOriginColumn", ev.target.parentElement.id);
}

export default Task;
