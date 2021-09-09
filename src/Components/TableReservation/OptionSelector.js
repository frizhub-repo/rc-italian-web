import React, { useState } from "react";
import OptionContent from "./OptionConent";
import "./optionSelector.css";

const useStyle = () => ({
  innerContainer: {
    maxWidth: "80%",
    color: "white",
  },
  iconStyle: {
    width: "60%",
  },
  selectedBtn: {
    borderRadius: "10px",
    border: "2px solid",
  },
});

export default function OptionSelector() {
  const styles = useStyle();
  const [selected, setSelected] = useState(1);
  const options = [
    { content: "DAILY MENU", icon: "assets/option-menu.png" },
    { content: "PROMOTIONS", icon: "assets/option-promotion.png" },
    { content: "INFORMATIONS", icon: "assets/option-information.png" },
  ];

  function handleClick(id) {
    setSelected(parseInt(id));
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div
        style={styles.innerContainer}
        className="d-flex justify-content-between"
      >
        <div className="d-flex justify-content-center shadow-lg row">
          {options.map((option, index) => (
            <button
              id={index}
              onClick={() => handleClick(index)}
              className={`d-flex flex-column align-items-center justify-content-center lead col-auto ${
                selected === index ? "active" : "un-active"
              }`}
              style={selected === index ? styles.selectedBtn : null}
            >
              <img
                onClick={() => handleClick(index)}
                src={option.icon}
                className="d-none d-lg-block"
                style={styles.iconStyle}
              />
              {option.content}
            </button>
          ))}
        </div>
      </div>
      <OptionContent selected={options[selected].content} />
    </div>
  );
}
