import Todoitem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className="iteam-container">
        {todoItems.map((item) => (
          <Todoitem todoDate={item.dueDate} todoName={item.name} />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
