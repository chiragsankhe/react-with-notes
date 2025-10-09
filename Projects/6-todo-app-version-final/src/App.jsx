import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItems from "./Components/TodoItems";
import Welcomemsg from "./Components/Welcomemsg";
import TodoItemsContextProvider from "./store/todo-item-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <Welcomemsg />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
