import {
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React from "react";
export default function ContactMethod() {
  const [value, setValue] = React.useState("email");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid>
      <h4>Contact Method</h4>
      <Divider />
      <Grid
        container
        direction="column"
        spacing={2}
        style={{ marginTop: "10px" }}
      >
        <Grid item>
          <Typography
            variant="subtitle1"
            style={{ fontSize: "20px" }}
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
      </Grid>
    </Grid>
  );
}
