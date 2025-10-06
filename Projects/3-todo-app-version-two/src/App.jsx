import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2024",
    },
    {
      name: "go to college",
      dueDate: "4/10/2024",
    },
    {
      name: "like the video ",
      dueDate: "4/10/2025",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
