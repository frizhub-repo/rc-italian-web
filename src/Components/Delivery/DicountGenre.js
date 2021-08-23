import React, { useState } from "react";
import classes from "./discountGenre.module.css";

const useStyle = () => ({
  container: {
    marginTop: "30px",
  },
});

export default function DicountGenre({ selected, handleClick }) {
  const styles = useStyle();

  const [options, setOptions] = useState(["Bundle", "Flat", "%"]);

  return (
    <div style={styles.container}>
      <div className="d-flex justify-content-between">
        {options.map((option, index) => (
          <div
            onClick={(e) => handleClick(index)}
            className={`${classes.option} ${
              selected === index
                ? classes.option_active
                : classes.option_un_active
            }`}
          >
            <h5>{option}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
