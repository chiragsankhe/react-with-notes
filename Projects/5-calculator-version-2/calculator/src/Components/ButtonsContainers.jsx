import styles from "./ButtonsContainers.module.css";
const BottonContainer = ({onButtonClick}) => {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonName.map((buttonName) => {
        return <button className={styles.button} onClick={()=> onButtonClick(buttonName)} >
          {buttonName}</button>;
      })}
    </div>
  );
};
export default BottonContainer;
