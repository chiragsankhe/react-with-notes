import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleByButton }) => {
  return (
    <li className={`${styles.kgItem} list-group-item  ${bought && "active"}`}>
      <span className={styles.kgspan}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-warning`}
        onClick={handleByButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
