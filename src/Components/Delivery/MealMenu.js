import React, { useState } from "react";
import DicountGenre from "./DicountGenre";
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

  const [genreSelected, setGenreSelected] = useState(0);
  const [optionSelected, setOptionSelected] = useState(2);

  function handleClickGenre(id) {
    setGenreSelected(id);
  }

  function handleClickOption(id) {
    setOptionSelected(id);
  }

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <MenuOption selected={optionSelected} handleClick={handleClickOption} />
        {(optionSelected === 0 || optionSelected === 1) && (
          <DicountGenre
            selected={genreSelected}
            handleClick={setGenreSelected}
          />
        )}
        <MealType
          isDeal={optionSelected === 0 || optionSelected === 1}
          discountGenre={genreSelected}
        />
      </div>
    </div>
  );
}
