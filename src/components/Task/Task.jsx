import React from "react";
import "./Task.css";

const Task = ({ task }) => (
  <div
    draggable="true"
    onDragStart={dragStart}
    onDragEnd={dragEnd}
    id={task.id}
    className="container-task draggable"
  >
    {task.title}
  </div>
);

function dragStart(ev) {
  ev.target.classList.add("dragging");
  ev.dataTransfer.setData("taskId", ev.target.id);
  ev.dataTransfer.setData("taskOriginColumn", ev.target.parentElement.id);
}

function dragEnd(ev) {
  ev.target.classList.remove("dragging");
}

export default Task;
