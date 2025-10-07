import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

function AddTodo({ updateToDo }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    updateToDo(name, date);
    setDate("");
    setName("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            value={name}
            placeholder="Enter TODO here"
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            value={date}
            onChange={(event) => handleDateChange(event)}
          ></input>
        </div>
        <div className="col-2 ">
          <button
            type="button"
            className={`btn btn-success kg-button`}
            onClick={handleAddButtonClicked}
          >
           <IoIosAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
