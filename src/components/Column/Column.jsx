import React, { useState } from "react";
import Dropdown from "../Dropdown";
import DropdownItem from "../DropdownItem";
import Task from "../Task/Task";
import "./Column.css";

const Column = ({ column, onDrop, createTask, deleteColumn }) => {
  const [taskTitle, setTaskTitle] = useState("");
  return (
    <div className="container">
      <Dropdown icon="fas fa-ellipsis-v">
        <DropdownItem
          title="Create Task"
          onClick={() => {
            createTask(column.type, taskTitle);
            setTaskTitle("");
          }}
        />
        <DropdownItem title="Create Task" />
        <DropdownItem title="Create Task" />
      </Dropdown>
      <h4>{column.type}</h4>
      <button onClick={() => deleteColumn(column.type)}>Delete Column</button>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value.toUpperCase())}
      />
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
