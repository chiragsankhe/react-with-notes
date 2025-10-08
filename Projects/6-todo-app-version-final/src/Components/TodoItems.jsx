import { useContext } from "react";
import Todoitem from "./TodoItem";
import TodoItemsContext from "../store/todo-item-store";

const TodoItems = () => {
  const { todoItems, deleteItems } = useContext(TodoItemsContext);

  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <Todoitem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={() => deleteItems(item.name)}
        />
      ))}
    </div>
  );
};

export default TodoItems;
