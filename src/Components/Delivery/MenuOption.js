import React, { useState } from "react";
import classes from "./mealOption.module.css";

const useStyle = () => ({
  optionsContainer: {
    width: "100%",
    maxWidth: "800px",
    minWidth: "250px",
    color: "white",
    background: "#272727",
    border: "2px solid #1d1d1d",
    marginTop: "-5px",
  },
  optionContainer: {
    cursor: "pointer",
    width: "20%",
  },
});

export default function MenuOption({ selected, handleClick }) {
  const styles = useStyle();

  const [options, setOptions] = useState([
    { name: "Hot Deals", image: "assets/flames.png" },
    { name: "Newest Deals", image: "assets/hot-deal.png" },
    { name: "Menu 1", image: "assets/menu.png" },
    { name: "Menu 2", image: "assets/menu.png" },
    { name: "Menu 3", image: "assets/menu.png" },
  ]);

  return (
    <div
      className="d-flex justify-content-around align-items-center"
      style={styles.optionsContainer}
    >
      {options.map((option, index) => (
        <div
          style={styles.optionContainer}
          onClick={(e) => handleClick(index)}
          className={`d-flex flex-column align-items-center justify-content-center ${
            selected === index ? classes.active : classes.un_active
          }`}
        >
          <img src={option.image} width={50} />
          <p className="m-0">{option.name}</p>
        </div>
      ))}
    </div>
  );
}
