import React from "react";
import Dropdown from "../Dropdown";
import DropdownItem from "../DropdownItem";
import Task from "../Task/Task";
import TaskModal from "../TaskModal";
import "./Column.css";
const $ = window.$;

const Column = ({ column, onDrop, createTask, deleteColumn }) => {
  return (
    <div className="container">
      <div className="container-head">
        <Dropdown icon="fas fa-ellipsis-v three-dots">
          <DropdownItem
            title="Create Task"
            onClick={() => $("#mymodal").modal()}
          />
        </Dropdown>
        <TaskModal
          id="mymodal"
          createTask={createTask}
          columnType={column.type}
        />
        <h4>
          {column.type.length > 12
            ? column.type.substring(0, 10) + "..."
            : column.type}
        </h4>
      </div>
      <div
        className="column-body"
        id={column.type}
        onDragOver={onDragOver}
        onDrop={onDrop}
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
};

export default Column;
