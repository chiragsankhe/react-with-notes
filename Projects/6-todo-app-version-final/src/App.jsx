import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import Welcomemsg from "./Components/Welcomemsg";

function App() {
  const [toDoItems, setToDoItems] = useState([]);
  console.log(toDoItems);
  const updateToDo = (name, date) => {
    const addnew = [
      ...toDoItems,
      {
        name: name,
        dueDate: date,
      },
    ];

    setToDoItems(addnew);
  };

  let handleOnDeleteClick = (todoItemName) => {
    let newToDoItems = toDoItems.filter((item) => item.name !== todoItemName);
    setToDoItems(newToDoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo updateToDo={updateToDo}></AddTodo>
      {toDoItems.length == 0 && <Welcomemsg />}
      <TodoItems todoItems={toDoItems} onDeleteClick={handleOnDeleteClick} />
    </center>
  );
}

export default App;
