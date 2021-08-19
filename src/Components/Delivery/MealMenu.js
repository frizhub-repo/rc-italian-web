import React, { useState } from "react";
import MealType from "./MealType";
import MenuOption from "./MenuOption";

const useStyle = () => ({
  container: {
    background: "#272727",
    padding: "20px",
  },
  innerContainer: {
    border: "5px solid #1d1d1d",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 20px",
  },
});

export default function MealMenu() {
  const styles = useStyle();
  const [optionSelected, setOptionSelected] = useState(2);

  function handleClickOption(id) {
    setOptionSelected(id);
  }

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <MenuOption selected={optionSelected} handleClick={handleClickOption} />
        <MealType />
      </div>
    </div>
  );
}
