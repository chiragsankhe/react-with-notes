import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ foodItems }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    console.log(event);
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleByButton={(event) => onBuyButton(item, event)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
