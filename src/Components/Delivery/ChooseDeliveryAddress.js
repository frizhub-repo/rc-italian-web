import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useUserContext } from "../../Context/userContext";
import { addOrderAddress } from "../actions";

const useStyles = makeStyles((theme) => ({}));

const DialogContent = withStyles((theme) => ({
  root: {
    padding: "30px 40px !important",
  },
  title: {
    fontWeight: "bold",
    fontSize: "20px",
    textAlign: "center",
    width: "100%",
  },
  btn: {
    height: "40px",
    background: "rgba(16, 185, 129,0.3)",
    border: "1px solid rgba(16, 185, 129)",
    marginTop: "20px",
    "&:hover": {
      background: "rgba(16, 185, 129,0.3)",
    },
    color: "rgba(16, 185, 129)",
    textTransform: "capitalize",
    padding: "20px 50px 20px 50px",
  },
}))(MuiDialogContent);

export default function ChooseDeliveryAddress({ visible, setVisible }) {
  const classes = useStyles();
  const disp = useDispatch();
  const [isErr, setIsErr] = React.useState(false);
  const [value, setValue] = React.useState(-1);
  const history = useHistory();
  const { customer } = useUserContext();

  const handleChange = (event) => {
    setIsErr(false);
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    if (value > -1) {
      disp(addOrderAddress(customer.addresses[parseInt(value)]));
      history.push("/complete/purchase");
    } else {
      setIsErr(true);
    }
  };

  const getCompleteAddress = (address) => {
    return `${address?.addressLine1} , ${address?.zipOrPostalCode} , 
      ${address?.city} , ${address?.stateOrProvince} , ${address?.country}`;
  };

  return (
    <Dialog
      maxWidth="sm"
      fullWidth="true"
      scroll="body"
      onClose={() => setVisible(false)}
      aria-labelledby="customized-dialog-title"
      open={visible}
    >
      <DialogContent className={classes.dialogTopBorder}>
        <Box className={classes.signInWithSocial}>
          <label className={classes.title}>Choose your Address</label>
          <Box>
            <RadioGroup
              value={value}
              onChange={handleChange}
              style={{ marginBottom: "10px" }}
            >
              {customer?.addresses?.length
                ? customer?.addresses?.map((address, index) => (
                    <FormControlLabel
                      value={index.toString()}
                      control={<Radio />}
                      label={getCompleteAddress(address)}
                      key={index}
                    />
                  ))
                : null}
            </RadioGroup>
            {isErr && (
              <label style={{ color: "#f44336", fontSize: "0.75rem" }}>
                Please select one option
              </label>
            )}
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button onClick={handleSubmit} className={classes.btn}>
            Continue
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
