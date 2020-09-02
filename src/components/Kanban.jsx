import React, { useState } from "react";
import Column from "./Column";

const state = [
  {
    type: "TODO",
    tasks: [
      { id: "1", title: "Wilson" },
      { id: "2", title: "Daniela" },
    ],
  },
  {
    type: "DOING",
    tasks: [
      { id: "3", title: "Pedro" },
      { id: "4", title: "Leonel" },
    ],
  },
];

function Kanban() {
  const [columns, setColumns] = useState(state);
  return (
    <div className="container-kanban">
      {columns.map((column) => (
        <Column column={column} onDrop={onDrop} key={column.type} />
      ))}
    </div>
  );

  function onDrop(ev) {
    ev.preventDefault();
    var taskId = ev.dataTransfer.getData("taskId");
    var originColumnType = ev.dataTransfer.getData("taskOriginColumn");
    const targetColumnType =
      (ev.target.parentElement && ev.target.parentElement.id) || ev.target.id;

    const cols = Object.assign([], columns);

    const tasks = cols.find((col) => col.type === originColumnType).tasks;

    const task = tasks.find((task) => task.id === taskId);

    const index = tasks.indexOf(task);

    cols.find((col) => col.type === originColumnType).tasks.splice(index, 1);

    cols.find((col) => col.type === targetColumnType).tasks.push(task);

    setColumns(cols);
  }
}

export default Kanban;
