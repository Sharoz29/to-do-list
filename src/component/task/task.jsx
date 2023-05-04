import "./task.css";
import { useState } from "react";

const Task = ({ todoTask, onFormSubmit }) => {
  const [editing, setEditing] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [task, setTask] = useState(todoTask);
  const [completed, setCompleted] = useState(true);
  const [checked, setchecked] = useState(false);

  const handleEditing = () => {
    setEditing(false);
    setSaving(true);
  };
  const handleSaving = () => {
    setEditing(true);
    setSaving(false);
  };

  const handleDeleting = () => {
    setIsDeleted(true);
  };
  const editingTask = (e) => {
    setTask(e.target.value);
  };
  const handleEntering = (e) => {
    if (e.key === "Enter" && task) {
      setEditing(true);
      setSaving(false);
    }
  };

  const handleCompleted = () => {
    setCompleted(!completed);
    setchecked(!checked);
  };

  return (
    <div className="todo-task-container">
      {!isDeleted && (
        <form className="todo-item" onSubmit={onFormSubmit}>
          <input
            type="text"
            value={task}
            disabled={editing}
            className="task-text"
            autoFocus
            onChange={editingTask}
            onKeyDown={handleEntering}
          />
          {checked && (
            <span className="completed" onClick={handleCompleted}>
              ✅
            </span>
          )}
          {completed && (
            <button
              type="button"
              className="done-button btn"
              onClick={handleCompleted}
            >
              Completed
            </button>
          )}
          {!saving && (
            <button
              type="button"
              className="edit-button btn"
              onClick={handleEditing}
            >
              {" "}
              Edit
            </button>
          )}
          {saving && (
            <button
              type="button"
              className="save-button btn"
              onClick={handleSaving}
            >
              Save
            </button>
          )}
          <button
            type="button"
            className="delete-button btn"
            onClick={handleDeleting}
          >
            Delete
          </button>
        </form>
      )}
    </div>
  );
};
export default Task;
