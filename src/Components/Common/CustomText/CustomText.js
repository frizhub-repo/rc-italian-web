import * as React from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { IconButton } from "rsuite";
import classes from "./CustomText.module.css";

export default function CustomText({ name, placeholder, register, validationRule, isPassword = false, isVisible = true, setIsVisible, type = null, value, minValue }) {

  return (
    <div className={classes.passwordContainer}>
      <input
        name={name}
        className={classes.authInput}
        type={type ?? (isVisible ? "text" : "password")}
        placeholder={placeholder}
        ref={register(validationRule)}
        min={minValue}
      />
      {isPassword &&
        <IconButton
          className={classes.iconContainer}
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      }
    </div>
  )
}
