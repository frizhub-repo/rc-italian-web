import {
  Button,
  Divider,
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
  },
  heading: {
    fontSize: "20px",
  },
  signInButton: {
    borderRadius: "30px",
    padding: "12px 20px",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
}));

export default function ContactMethod() {
  const classes = useStyle();
  const [value, setValue] = React.useState("email");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid>
      <h4>Contact Method</h4>
      <Divider />
      <Grid container direction="column" spacing={2} className={classes.root}>
        <Grid item>
          <Typography
            variant="subtitle1"
            className={classes.heading}
            gutterBottom
          >
            I would like to receive updates via
          </Typography>
          <RadioGroup
            aria-label="contactMethod"
            name="contactMethod"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="sms"
              control={<Radio />}
              label="SMS (Important update only)"
            />
            <FormControlLabel
              value="email"
              control={<Radio />}
              label="Email (Order Detail are send by email)"
            />
          </RadioGroup>
        </Grid>
        <Grid item>
          <Button
            disableElevation
            className={classes.signInButton}
            type="submit"
          >
            Save changes
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
