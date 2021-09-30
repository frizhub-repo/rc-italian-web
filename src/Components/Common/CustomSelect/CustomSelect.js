import * as React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classes from "./CustomSelect.module.css";

export default function CustomSelect({
  register,
  name,
  placeholder,
  values,
  gender = undefined,
  setGender = () => {},
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div className={classes.menu} onClick={() => setIsOpen((prev) => !prev)}>
        <div className={classes.content}>
          <div
            style={{
              color: gender !== undefined ? "white" : "rgb(87, 87, 87)",
            }}
          >
            {gender === undefined ? placeholder : gender}
          </div>
          <div>
            <ExpandMoreIcon
              className={`${classes.expandIcon} ${isOpen && classes.rotate}`}
            />
          </div>
        </div>
        <div
          className={`${classes.optionsContainer} ${isOpen && classes.opened} ${
            isOpen && "custom-scroll"
          }`}
        >
          {values.map((value) => (
            <div
              className={`${classes.option} ${
                value === gender && classes.selected
              }`}
              selected={value === gender}
              onClick={() => setGender(value)}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
