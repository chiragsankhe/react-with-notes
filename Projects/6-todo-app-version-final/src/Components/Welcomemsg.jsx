import styles from "./Welcomemsg.module.css";
import { useContext } from "react";
import TodoItemsContext from "../store/todo-item-store";

const Welcomemsg = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && <h3 className={styles.msg}>Enjoy your day 😊</h3>
  );
};

export default Welcomemsg;
