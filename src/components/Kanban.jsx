import React from "react";
import { v4 as uuidv4 } from "uuid";
import Column from "./Column/Column";

function Kanban({ columns, setColumns }) {
  return (
    <>
      {columns.length ? (
        <div className="container-kanban">
          {columns.map((column) => (
            <Column
              column={column}
              onDrop={onDrop}
              key={column.type}
              createTask={createTask}
              deleteColumn={deleteColumn}
            />
          ))}
        </div>
      ) : (
        <div>Crie uma coluna para iniciar!</div>
      )}
    </>
  );

  function deleteColumn(columnType) {
    const cols = Object.assign([], columns);
    const col = cols.find((col) => col.type === columnType);
    if (col.tasks.length) {
      return alert("Não é possível deletar uma coluna com tarefas");
    }
    const index = cols.indexOf(col);
    cols.splice(index, 1);
    setColumns(cols);
  }

  function createTask(columnType, taskTitle) {
    if (taskTitle.trim() === "") return;
    const cols = Object.assign([], columns);
    const col = cols.find((col) => col.type === columnType);
    col.tasks.unshift({ id: uuidv4(), title: taskTitle });
    setColumns(cols);
  }

  function onDrop(ev) {
    ev.preventDefault();

    var taskId = ev.dataTransfer.getData("taskId");
    var originColumnType = ev.dataTransfer.getData("taskOriginColumn");
    if (!taskId || !originColumnType) return;

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
