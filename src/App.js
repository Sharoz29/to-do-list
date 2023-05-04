import "./App.css";
import Entercomponent from "./component/enter/enter";
import { useState, useRef } from "react";
import Task from "./component/task/task";

function App() {
  const [typingField, setTypingField] = useState("");
  const [todoTask, setTodoTask] = useState([]);
  const ref = useRef(null);

  const typingToDo = (e) => {
    const typedToDo = e.target.value;
    setTypingField(typedToDo);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    ref.current.value = "";
  };

  const creatingTodo = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setTodoTask([...todoTask, typingField]);
    }
  };

  return (
    <div className="todo-container">
      <h1 className="title">TO DO LIST </h1>
      <Entercomponent
        clearInput={ref}
        onFormSubmit={onFormSubmit}
        onTyping={typingToDo}
        creatingTodo={creatingTodo}
      />
      {todoTask.map((task) => {
        return <Task todoTask={task} onFormSubmit={onFormSubmit} />;
      })}
    </div>
  );
}

export default App;
