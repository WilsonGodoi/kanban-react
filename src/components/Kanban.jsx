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

    const afterElement = getDragAfterElement(ev.target, ev.clientY);
    if (afterElement) {
      const ts = cols.find((col) => col.type === afterElement.parentElement.id)
        .tasks;

      const element = ts.find((t) => t.id === afterElement.id);
      const ind = ts.findIndex((obj) => obj.id === element.id);
      ts.splice(ind, 0, task);
    } else {
      cols.find((col) => col.type === targetColumnType).tasks.push(task);
    }

    setColumns(cols);
  }

  function getDragAfterElement(container, y) {
    const draggableElements = [
      ...container.querySelectorAll(".draggable:not(.dragging)"),
      ...container.parentElement.querySelectorAll(".draggable:not(.dragging)"),
    ];
    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }
}

export default Kanban;
