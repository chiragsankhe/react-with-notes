import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import Goodmsg from "./Components/Goodmsg";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  // const foodItems = [];

  let [foodItems, setFoodItems] = useState(["water"]);

  const onKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food</h1>
        <ErrorMessage foodItems={foodItems} name="chirag" />
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>

        <FoodItems foodItems={foodItems} />
      </Container>

      <Container>
        <Goodmsg></Goodmsg>
      </Container>
    </>
  );
}

export default App;
