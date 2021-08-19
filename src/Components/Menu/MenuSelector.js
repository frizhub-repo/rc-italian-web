import React, { useState } from "react";
import MenuContent from "./MenuContent";
import "./menuSelector.css";

const useStyle = () => ({
  menuButton: {
    width: "100px",
    height: "auto",
  },
});

export default function MenuSelector() {
  const styles = useStyle();
  const [selected, setSelected] = useState(2);
  const [options, setOptions] = useState([
    "Dinner Menu",
    "Desserts",
    "Lunch Menu",
    "Breakfasts",
    "Drinks",
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
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex justify-content-between">
        <button onClick={(e) => handleButtonClick(0)}>
          <img src="assets/menu-left.png" style={styles.menuButton} />
        </button>
        <div className="d-none d-md-flex justify-content-center shadow-lg row">
          {options.map((option, index) => (
            <button
              onClick={(e) => setSelected(index)}
              className={`lead col-auto ${selected === index && "active"}`}
            >
              {option}
            </button>
          ))}
        </div>
        <button onClick={(e) => handleButtonClick(1)}>
          <img src="assets/menu-right.png" style={styles.menuButton} />
        </button>
      </div>
      <MenuContent selected={options[selected]} />
    </div>
  );
}
