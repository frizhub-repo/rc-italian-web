import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Card, Button, CircularProgress } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import { ReactHookFormSelect } from "Components/Common/StyledComponents";
import { addDeliveryItem } from "Components/actions";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "10% 0px",
  },
  title: {
    fontWeight: "600",
    fontSize: "20px",
  },
  formContainer: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "25px",
    border: "1px solid rgba(0,0,0,0.5)",
  },
  btn: {
    borderRadius: "35px",
    width: "200px",
    backgroundColor: "#FDBD00",
    color: "white",
    marginTop: "30px",
    fontSize: "22px",
    "&:hover": {
      backgroundColor: "#FDBD00",
      color: "white",
    },
    height: "60px",
    textTransform: "capitalize",
  },
});

const DeliveryTime = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors, control } = useForm();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const addDeliveryTimeHandler = (data) => {
    try {
      dispatch(
        addDeliveryItem({
          time: data.time ? data.time : "as soon as possible",
          note: data.note ? data.note : "",
        })
      );
      history.push("/order/summary");
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }
  };

  return (
    <Box className={classes.container}>
      <label className={classes.title}>Confirm Delivery Time</label>
      <form onSubmit={handleSubmit(addDeliveryTimeHandler)}>
        <Card className={classes.formContainer}>
          <label
            style={{ display: "flex", color: "#6969fd", fontWeight: "500" }}
          >
            Delivery Time
          </label>

          <ReactHookFormSelect
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            // name="addressKey"
            // ref={register({
            //   required: "Address type Required",
            // })}
            // label="Address Type"
            // labelWidth={100}
            name="time"
            inputRef={register}
            variant="outlined"
            margin="normal"
            control={control}
            error={!!errors?.time}
            defaultValue="as soon as possible"
            className={`my_custom_text_field`}
          >
            <MenuItem value="as soon as possible">As soon as possible</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </ReactHookFormSelect>

          <Box
            mb="15px"
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "7px",
            }}
          >
            <label style={{ fontSize: "10px", display: "flex", color: "grey" }}>
              Leave a note for the restaurant with information they need to be
              aware of (eg"The intercom doesn't work). Do not
            </label>
            <label style={{ fontSize: "10px", display: "flex", color: "grey" }}>
              include here any requests or warnings about any food allergies or
              intollerances.
            </label>
          </Box>

          <TextField
            id="outlined-multiline-static"
            name="note"
            multiline
            rows={8}
            variant="outlined"
            placeholder="I am allergic to gluten"
            inputRef={register}
            className={`my_custom_text_field`}
          />

          <Box mt="15px">
            <label
              style={{
                fontSize: "10px",
                display: "flex",
                color: "#6969fd",
                fontWeight: "500",
              }}
            >
              If you have food allergy or intolerance (or if someone you are
              ordering for has one). Click here
            </label>
          </Box>
        </Card>
        <Box display="flex" justifyContent="flex-end">
          <Button type="submit" className={classes.btn}>
            {loading && (
              <CircularProgress
                color="inherit"
                size={20}
                style={{ marginRight: "8px" }}
              />
            )}
            Continue
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default DeliveryTime;
