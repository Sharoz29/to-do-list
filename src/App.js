import "./App.css";
import Entercomponent from "./component/enter/enter";
import { useState } from "react";

function App() {
  const [typingField, setTypingField] = useState("");
  const [todoTask, setTodoTask] = useState([]);

  const typingToDo = (e) => {
    // const typedToDo = e.target.value;
    // setTypingField(typedToDo);
    console.log(e, "hrhhr");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      console.log("hi");
    }
  };

  return (
    <div className="todo-container">
      <h1 className="title">TO DO LIST </h1>
      <Entercomponent onFormSubmit={onFormSubmit} onTyping={typingToDo} />
    </div>
  );
}

export default App;
