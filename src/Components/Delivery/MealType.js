import React, { useState } from "react";
import classes from "./mealType.module.css";
import MenuList from "./MenuList";

const useStyle = () => ({
  menuButton: {
    width: "100px",
    height: "auto",
  },
});

export default function MealType() {
  const styles = useStyle();
  const [selected, setSelected] = useState(2);
  const [types, setTypes] = useState([
    { name: "Second Course", image: "assets/omelette.png" },
    { name: "Desserts", image: "assets/dessert.png" },
    { name: "First Course", image: "assets/meal.png" },
    { name: "Breakfast", image: "assets/breakfast.png" },
    { name: "Drinks", image: "assets/soft-drink.png" },
  ]);

  function handleButtonClick(dir) {
    switch (dir) {
      case 0:
        if (selected > 0) setSelected(selected - 1);
        break;
      case 1:
        if (selected < 4) setSelected(selected + 1);
        break;
    }
  }

  return (
    <div className="d-flex flex-column align-items-center my-5">
      <div className="d-flex justify-content-between">
        <button onClick={(e) => handleButtonClick(0)} className="">
          <img src="assets/menu-left.png" style={styles.menuButton} />
        </button>
        <div className="d-none d-md-flex justify-content-center shadow-lg row mx-2">
          {types.map((type, index) => (
            <div
              onClick={(e) => setSelected(index)}
              className={`d-flex flex-column justify-content-center align-items-center ${
                classes.button
              } lead col-auto ${
                selected === index ? classes.active : classes.un_active
              }`}
            >
              <img
                onClick={(e) => setSelected(index)}
                src={type.image}
                width={80}
              />
              {type.name}
            </div>
          ))}
        </div>
        <button onClick={(e) => handleButtonClick(1)} className="">
          <img src="assets/menu-right.png" style={styles.menuButton} />
        </button>
      </div>
      <MenuList />
    </div>
  );
}
