import { createContext, useReducer } from "react";

const TodoItemsContext = createContext({
  toDoItems:[],
  addNewItems:() => {},
  deleteItems:() =>{},
});

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


const TodoItemsContextProvider = ({children}) =>{
     
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
  return (
     <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItems,
        deleteItems,
      }}
      >
      {children}
      
    </TodoItemsContext.Provider>

    

  )
}
export default TodoItemsContextProvider;
