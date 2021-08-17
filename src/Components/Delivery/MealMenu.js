import React, { useState } from "react";
import MealOption from "./MealOption";

const useStyle = () => ({
  container: {
    background: "#272727",
    padding: "20px",
  },
  innerContainer: {
    border: "5px solid #1d1d1d",
    borderRadius: "10px",
    padding: "0px 20px",
    display: "flex",
    justifyContent: "center",
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
        <MealOption selected={optionSelected} handleClick={handleClickOption} />
      </div>
    </div>
  );
}
