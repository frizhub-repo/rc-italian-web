import * as React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classes from "./CustomSelect.module.css";

export default function CustomSelect({ register, name, placeholder, values }) {
  const [selected, setSelected] = React.useState(undefined);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div className={classes.menu} onClick={() => setIsOpen((prev) => !prev)}>
        <div className={classes.content}>
          <div style={{ color: selected !== undefined ? "white" : "rgb(87, 87, 87)" }}>
            {selected === undefined ? placeholder : selected}
          </div>
          <div>
            <ExpandMoreIcon
              className={`${classes.expandIcon} ${isOpen && classes.rotate}`}
            />
          </div>
        </div>
        <div
          className={`${classes.optionsContainer} ${isOpen && classes.opened
            } custom-scroll`}
        >
          {values.map((value) => (
            <div
              className={`${classes.option} ${value === selected && classes.selected
                }`}
              selected={value === selected}
              onClick={() => setSelected(value)}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
