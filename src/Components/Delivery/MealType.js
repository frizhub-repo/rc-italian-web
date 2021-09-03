import React from "react";
import classes from "./mealType.module.css";
import MenuList from "./MenuList";

const useStyle = () => ({
  menuButton: {
    width: "100px",
    height: "auto",
  },
});

export default function MealType({ items, selected, setSelected }) {
  const styles = useStyle();

  function handleButtonClick(dir) {
    switch (dir) {
      case 0:
        if (selected > 0) setSelected(selected - 1);
        break;
      case 1:
        if (selected < items?.length - 1) setSelected(selected + 1);
        break;
    }
  }

  return (
    <div className="d-flex flex-column align-items-center my-5 w-100">
      <div className="d-flex justify-content-between">
        <button onClick={(e) => handleButtonClick(0)} className="">
          <img src="assets/menu-left.png" style={styles.menuButton} />
        </button>
        <div className="d-none d-md-flex justify-content-center shadow-lg row mx-2">
          {items?.length > 0 ? (
            items.map((section, index) => (
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
                  src={"assets/meal.png"}
                  width={80}
                />
                {section?.category?.name}
              </div>
            ))
          ) : (
            <span className={classes.noSection}>
              This menu don't have any section
            </span>
          )}
        </div>
        <button onClick={(e) => handleButtonClick(1)} className="">
          <img src="assets/menu-right.png" style={styles.menuButton} />
        </button>
      </div>
      <MenuList
        sectionTitle={items?.[selected]?.category?.name}
        products={items?.[selected]?.products}
      />
    </div>
  );
}
