import "./task.css";

const Task = ({ todoTask }) => {
  return (
    <div className="todo-task-container">
      <form className="todo-item">
        <input type="text" value={todoTask} disabled className="task-text" />
        <button type="button" className="edit-button btn">
          {" "}
          Edit
        </button>
        <button type="button" className="delete-button btn">
          Delete
        </button>
      </form>
    </div>
  );
};
export default Task;
