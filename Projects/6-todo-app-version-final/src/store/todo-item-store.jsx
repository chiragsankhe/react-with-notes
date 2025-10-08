import { createContext } from "react";

const TodoItemsContext = createContext({
  toDoItems:[],
  addNewItems:() => {},
  deleteItems:() =>{},
});

export default TodoItemsContext;

const TodoItemsContextProvider = () = >{
     
    const [todoItems, dispatchtodoItems] = useReducer(todoItemsReducer, []);

  const addNewItems = (itemName, itemDueDate) => {
    const newItemsAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };

    dispatchtodoItems(newItemsAction);
  };

  const deleteItems = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };

    dispatchtodoItems(deleteItemAction);
  };
}
export default TodoItemsContextProvider;