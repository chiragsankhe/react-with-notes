function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter TODO here"></input>
        </div>
        <div className="col-4">
          <input type="date"></input>
        </div>
        <div className="col-2 " style={{}}>
          <button type="button" className={`btn btn-success kg-button`}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
