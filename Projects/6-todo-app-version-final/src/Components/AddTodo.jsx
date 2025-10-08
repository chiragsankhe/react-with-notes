import { useContext, useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import TodoItemsContext from "../store/todo-item-store";

function AddTodo() {
  const { addNewItems } = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const duoDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = duoDateElement.current.value;
    console.log(`${todoName}  due on : ${dueDate}`);

    todoNameElement.current.value = "";
    duoDateElement.current.value = "";

    addNewItems(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form action="" onSubmit={handleAddButtonClicked} className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter TODO here"
          ></input>
        </div>
        <div className="col-4">
          <input type="date" ref={duoDateElement}></input>
        </div>
        <div className="col-2 ">
          <button type="submit" className={`btn btn-success kg-button`}>
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
