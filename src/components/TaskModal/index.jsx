import React, { useState } from "react";

const TaskModal = ({ id, createTask, columnType, task }) => {
  const [taskTitle, setTaskTitle] = useState((task && task.title) || "");
  const [taskDescription, setTaskDescription] = useState(
    (task && task.description) || ""
  );
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Create Task
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={clearForm}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value.toUpperCase())}
            />
            <label>Description</label>
            <textarea
              className="form-control"
              rows="6"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value.toUpperCase())}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={clearForm}
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
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
    // setTaskTitle("");
    // setTaskDescription("");
  }

  function accepCreateTask() {
    createTask(columnType, taskTitle, taskDescription);
    setTaskTitle("");
  }
};

export default TaskModal;
