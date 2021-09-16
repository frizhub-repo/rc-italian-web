import React from "react";
import classes from "./MenuSelector.module.css";

export default function MenuSelector({
  activeStep,
  setActiveStep,
  setIsModalOpen,
}) {
  const menus = [
    "Account",
    "Order History",
    "Customization",
    "Settings",
    "Log Out",
  ];

  function handleClick(id) {
    if (id === 4) setIsModalOpen(true);
    else {
      setActiveStep(id);
    }
  }

  return (
    <div>
      <ul className={classes.container}>
        {menus.map((menu, index) => (
          <li
            className={`${classes.item} ${
              activeStep === index && classes.item_active
            }`}
            onClick={() => handleClick(index)}
          >
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
}
