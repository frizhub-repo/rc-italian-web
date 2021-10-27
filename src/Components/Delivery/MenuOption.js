import React, { useState } from "react";
import classes from "./mealOption.module.css";
import { useUserContext } from "Context/userContext";

const useStyle = () => ({
  optionsContainer: {
    width: "100%",
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

export default function MenuOption({ menus, selected, handleClick }) {
  const styles = useStyle();
  const { restaurant } = useUserContext();
  return (
    <div
      className="d-flex justify-content-around align-items-center"
      style={styles.optionsContainer}
    >
      <div
        style={styles.optionContainer}
        onClick={(e) => handleClick(0)}
        className={`d-flex flex-column align-items-center justify-content-center ${
          selected === 0 ? classes.active : classes.un_active
        }`}
      >
        <img src={`assets/flames.png`} width={50} />
        <p className="m-0">Hot Deals</p>
      </div>
      {menus?.length > 0 &&
        menus?.map((menu, index) => (
          <div
            style={styles.optionContainer}
            onClick={(e) => handleClick(index + 1)}
            className={`d-flex flex-column align-items-center justify-content-center ${
              selected === index + 1 ? classes.active : classes.un_active
            }`}
          >
            <img
              src={
                menu?.imageUrl
                  ? `${process.env.REACT_APP_API_BASE_URL}/${menu?.imageUrl}`
                  : `${process.env.REACT_APP_API_BASE_URL}/${restaurant?.restaurant?.logoUrl}`
              }
              width={50}
            />
            <p className="m-0">{menu?.title}</p>
          </div>
        ))}
    </div>
  );
}
