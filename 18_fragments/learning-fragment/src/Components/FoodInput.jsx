import styles from "./FoodInput.module.css";
const FoodInput = ({handleKeyDown}) => {
    
  return (
    <input
      type="text"
      className={styles.input}
      placeholder="Enter Food Item here"
      onKeyDown={handleKeyDown}
    ></input>
  );
};
export default FoodInput;
