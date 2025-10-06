import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import Todoiteam1 from "./Components/TodoIteam1";
import Todoiteam2 from "./Components/TodoIteam2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo></AddTodo>

      <div className="iteam-container">
        <Todoiteam1></Todoiteam1>
        <Todoiteam2></Todoiteam2>
      </div>
    </center>
  );
}

export default App;
