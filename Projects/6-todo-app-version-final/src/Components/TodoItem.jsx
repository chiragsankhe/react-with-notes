import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import TodoItemsContext from "../store/todo-item-store";

function Todoitem({ todoName, todoDate}) {
  const {deleteItems} = useContext(TodoItemsContext)
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger  kg-button"
            onClick={() =>deleteItems(todoName)}
          >
            <MdDelete />

          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
