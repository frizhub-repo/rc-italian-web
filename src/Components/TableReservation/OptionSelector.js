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
    boxShadow: "0px 0px 5px 10px rgba(0, 0, 0, 0.25)",
  },
  unselectedBtn: {
    boxShadow: "inset 0px 0px 5px 7px rgba(0, 0, 0, 0.25)",
  },
});

export default function OptionSelector({
  specialMenu,
  setSelectedOffer,
  selectedOffer,
}) {
  const styles = useStyle();
  const [selected, setSelected] = useState(0);
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
              style={
                selected === index ? styles.selectedBtn : styles.unselectedBtn
              }
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
      <OptionContent
        specialMenu={specialMenu}
        selected={options[selected].content}
        setSelectedOffer={setSelectedOffer}
        selectedOffer={selectedOffer}
      />
    </div>
  );
}
