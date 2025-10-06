import styles from "./App.module.css";
import Display from "./Components/Display";
import BottonContainer from "./Components/ButtonsContainers"

function App() {
  return (
    <div className={styles.calculator}>
      <Display/>
      < BottonContainer ></BottonContainer>
      
     </div>
  );
}

export default App;
