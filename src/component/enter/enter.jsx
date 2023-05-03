import "./enter.css";

const Entercomponent = ({ onFormSubmit, onTyping }) => {
  return (
    <form className="todo-form" onSubmit={onFormSubmit}>
      <input
        type="text"
        className="input-todo"
        id="todo"
        placeholder="Enter your tasks for today"
        onChange={onTyping}
      />
      <input type="submit" className="todo-submit" />
    </form>
  );
};
export default Entercomponent;
