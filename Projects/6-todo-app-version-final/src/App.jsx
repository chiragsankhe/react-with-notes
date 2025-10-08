import { useReducer } from "react";
import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItems from "./Components/TodoItems";
import Welcomemsg from "./Components/Welcomemsg";
import TodoItemsContext from "./store/todo-item-store";

const todoItemsReducer = (currTodoItems, action) => {
  let newIodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newIodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newIodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newIodoItems;
};

function App() {
  // const [toDoItems, setToDoItems] = useState([]);
  

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItems,
        deleteItems,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <Welcomemsg />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
