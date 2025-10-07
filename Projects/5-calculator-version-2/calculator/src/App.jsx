import styles from "./App.module.css";
import Display from "./Components/Display";
import BottonContainer from "./Components/ButtonsContainers";
import { useState } from "react";

function App() {
  let [calval, setCalval] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalval("");
    } else if (buttonText === "=") {
      const result = eval(calval);
      setCalval(result);
    } else {
      let currval = calval + buttonText;
      setCalval(currval);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display cval={calval} />
      <BottonContainer onButtonClick={onButtonClick}></BottonContainer>
    </div>
  );
}

export default App;
