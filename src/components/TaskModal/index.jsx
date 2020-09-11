import React, { useState } from "react";

const TaskModal = ({ id, createTask, columnType }) => {
  const [taskTitle, setTaskTitle] = useState("");
  return (
    <div
      class="modal fade"
      id={id}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Create Task
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={clearForm}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <label for="title">Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value.toUpperCase())}
            />
            <label for="description">Description</label>
            <textarea id="description" className="form-control" rows="6" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={clearForm}
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={accepCreateTask}
              data-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  function clearForm() {
    setTaskTitle("");
  }

  function accepCreateTask() {
    createTask(columnType, taskTitle);
    setTaskTitle("");
  }
};

export default TaskModal;
