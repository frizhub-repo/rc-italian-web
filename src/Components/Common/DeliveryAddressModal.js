import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import { useForm } from "react-hook-form";
import { Box, TextField, Button, FormHelperText } from "@material-ui/core";
import { addDeliveryAddress } from "../../api/DeliveryAddress";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "0px !important",
  },
  "MuiPaper-rounded": {
    borderRadius: "0px !important",
  },
  signInWithSocial: {
    fontSize: "15px",
    fontWeight: "bold",
  },
  signInWithEmail: {
    fontSize: "15px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  dialogTopBorder: {
    borderTop: "9px solid #C8A97E",
  },
  socialIcon: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F2F2F2",
    fontSize: "14px",
    fontWeight: "bolder",
    cursor: "pointer",
  },
  socialIconSpacing: {
    margin: "0px 10px",
  },
  existingUser: {
    fontSize: "12px",
  },
  txtFieldSpacing: {
    marginTop: "10px",
  },
  rememberMe: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  forgotPassword: {
    fontWeight: "borlder",
    fontSize: "14px",
  },
  checkBox: {
    height: "20px",
    width: "20px",
    marginRight: "5px",
  },
  checkboxLabel: {
    fontSize: "13px",
    display: "flex",
    cursor: "pointer",
  },
  signInButton: {
    borderRadius: "30px",
    width: "100%",
    padding: "10px 20px",
    backgroundColor: "black",
    color: "white",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  citySpacing: {
    display: "flex",
  },
  join: {
    textAlign: "center",
    marginTop: "10px",
  },
  recipeSpacing: {
    fontSize: "13px",
    cursor: "pointer",
  },
  termServices: {
    backgroundColor: "#F5F5F5",
    padding: "10px 20px",
    fontSize: "12px",
    textAlign: "center",
    marginTop: "14px",
  },
  helperText: {
    color: "red",
    marginTop: "0px",
  },
  facebookSpacing: {
    marginRight: "6px",
  },
  googleSpacing: {
    marginLeft: "6px",
  },
  helperTextMargin: {
    marginLeft: "7px",
  },
}));

const DialogContent = withStyles((theme) => ({
  root: {
    padding: "30px 40px !important",
  },
}))(MuiDialogContent);

export default function DeliveryAddressDialog({
  openDelivery,
  setOpenDelivery,
}) {
  const classes = useStyles();
  const [services, setService] = useState("home");
  const { register, handleSubmit, errors } = useForm();

  const deliveryAddressPayload = async (data) => {
    data = { ...data, addressKey: services };
    const res = await addDeliveryAddress(data);
    console.log({ res })
    setOpenDelivery(false);
    toast.success(res?.data?.message)
  };

  return (
    <Dialog
      maxWidth="xs"
      scroll="body"
      onClose={() => setOpenDelivery(false)}
      aria-labelledby="customized-dialog-title"
      open={openDelivery}
    >
      <DialogContent className={classes.dialogTopBorder}>
        <Box className={classes.signInWithSocial}>
          Confirm the data for delivery
        </Box>
        <form onSubmit={handleSubmit(deliveryAddressPayload)}>
          <TextField
            className={classes.txtFieldSpacing}
            fullWidth
            placeholder="Name"
            variant="outlined"
            size="small"
            name="name"
            inputRef={register({
              required: "Name required",
            })}
            error={errors?.name ? true : false}
          />
          <FormHelperText className={classes.helperText}>
            {errors?.name?.message}
          </FormHelperText>

          <TextField
            className={classes.txtFieldSpacing}
            fullWidth
            placeholder="Phone Number"
            variant="outlined"
            size="small"
            name="phoneNumber"
            inputRef={register({
              required: "Phone Number required",
            })}
            error={errors?.phoneNumber ? true : false}
          />
          <FormHelperText className={classes.helperText}>
            {errors?.phoneNumber?.message}
          </FormHelperText>

          <TextField
            className={classes.txtFieldSpacing}
            fullWidth
            placeholder="Address Line 1"
            variant="outlined"
            size="small"
            name="addressLine1"
            inputRef={register({
              required: "Address Line 1 required",
            })}
            error={errors?.addressLine1 ? true : false}
          />
          <FormHelperText className={classes.helperText}>
            {errors?.addressLine1?.message}
          </FormHelperText>

          <TextField
            className={classes.txtFieldSpacing}
            fullWidth
            placeholder="Address Line 2"
            variant="outlined"
            size="small"
            name="addressLine2"
            inputRef={register({
              required: "Address Line 2 required",
            })}
            error={errors?.addressLine2 ? true : false}
          />
          <FormHelperText className={classes.helperText}>
            {errors?.addressLine2?.message}
          </FormHelperText>

          <Box className={classes.citySpacing}>
            <Box>
              <TextField
                className={`${classes.txtFieldSpacing} ${classes.facebookSpacing}`}
                fullWidth
                placeholder="City"
                variant="outlined"
                size="small"
                name="city"
                inputRef={register({
                  required: "City required",
                })}
                error={errors?.city ? true : false}
              />
              <FormHelperText className={classes.helperText}>
                {errors?.city?.message}
              </FormHelperText>
            </Box>

            <Box>
              <TextField
                className={`${classes.txtFieldSpacing} ${classes.googleSpacing}`}
                fullWidth
                placeholder="State/ province"
                variant="outlined"
                size="small"
                name="stateOrProvince"
                inputRef={register({
                  required: "State/ province required",
                })}
                error={errors?.stateOrProvince ? true : false}
              />
              <FormHelperText
                className={`${classes.helperText} ${classes.helperTextMargin}`}
              >
                {errors?.stateOrProvince?.message}
              </FormHelperText>
            </Box>
          </Box>

          <Box className={classes.citySpacing}>
            <Box>
              <TextField
                className={`${classes.txtFieldSpacing} ${classes.facebookSpacing}`}
                fullWidth
                placeholder="Zip/ postal code"
                variant="outlined"
                size="small"
                name="zipOrPostalCode"
                inputRef={register({
                  required: "Zip/ postal code required",
                })}
                error={errors?.zipOrPostalCode ? true : false}
              />
              <FormHelperText className={classes.helperText}>
                {errors?.zipOrPostalCode?.message}
              </FormHelperText>
            </Box>

            <Box>
              <TextField
                className={`${classes.txtFieldSpacing} ${classes.googleSpacing}`}
                fullWidth
                placeholder="Country"
                variant="outlined"
                size="small"
                name="country"
                inputRef={register({
                  required: "Country required",
                })}
                error={errors?.country ? true : false}
              />
              <FormHelperText
                className={`${classes.helperText} ${classes.helperTextMargin}`}
              >
                {errors?.country?.message}
              </FormHelperText>
            </Box>
          </Box>

          <TextField
            className={classes.txtFieldSpacing}
            multiline
            rows={4}
            placeholder="Message"
            variant="outlined"
            fullWidth
            size="small"
            name="message"
            inputRef={register({
              required: "Message required",
            })}
            error={errors?.message ? true : false}
          />
          <FormHelperText className={classes.helperText}>
            {errors?.message?.message}
          </FormHelperText>

          <div className="flex flex-wrap justify-content-between mt-2">
            <button
              className={`${
                services === "home"
                  ? "border border-gold  bg-gold text-white"
                  : ""
              }  text-gray-500 font-weight-light text-xs px-6 w-1/4  py-1 border border-gray-500 rounded-pill `}
              onClick={(e) => {
                e.preventDefault();
                setService("home");
              }}
            >
              Home
            </button>
            <button
              className={`${
                services === "work"
                  ? "border border-gold  bg-gold text-white"
                  : ""
              }  text-gray-500 font-weight-light text-xs px-6  w-1/4  py-1 border border-gray-500 rounded-pill `}
              onClick={(e) => {
                e.preventDefault();
                setService("work");
              }}
            >
              Work
            </button>
            <button
              className={`${
                services === "other"
                  ? "border border-gold  bg-gold text-white"
                  : ""
              } text-gray-500 font-weight-light text-xs px-6 w-1/4  py-1 border border-gray-500 rounded-pill `}
              onClick={(e) => {
                e.preventDefault();
                setService("other");
              }}
            >
              Other
            </button>
          </div>

          <Box>
            <Button
              disableElevation
              className={classes.signInButton}
              type="submit"
            >
              continue
            </Button>
          </Box>
        </form>
        <Box className={classes.termServices}>
          <label>
            By signing up, you are agreeing to our <b>Terms of Services</b> and
            our <b>Privacy Policy</b> - Your California Rights
          </label>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
