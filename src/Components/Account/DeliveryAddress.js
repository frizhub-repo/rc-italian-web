import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Create";
import { useUserContext } from "../../Context/userContext";
import DeliveryAddressDialog from "../Common/DeliveryAddressModal";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
  containr: {
    marginTop: "10px",
  },
  root: {
    width: "100%",
  },
  main: {
    margin: "5px",
  },
  addressCard: {
    display: "flex",
    justifyContent: "space-between",
  },
  editIcon: {
    backgroundColor: "lightgrey",
    borderRadius: "30px",
    padding: "3px",
    marginRight: "5px",
    cursor: "pointer",
  },
  deleteIcon: {
    backgroundColor: "#FADBDB",
    borderRadius: "20px",
    padding: "2px",
    cursor: "pointer",
  },
  phone: {
    marginTop: "13px",
  },
  action: {
    display: "flex",
  },
  text: {
    marginRight: "30px",
  },
  addressKey: {
    fontSize: "15px",
    textTransform: 'capitalize'
  },
  addAddressButton: {
    borderRadius: "30px",
    padding: "0px 12px",
    backgroundColor: "black",
    color: "white",
    margin: "2px",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
}));

export default function DeliveryAddress() {
  const classes = useStyles();
  const { customer } = useUserContext();
  const [openDelivery, setOpenDelivery] = useState(false);

  return (
    <Grid>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4>Delivery Address</h4>
        <Button
          disableElevation
          className={classes.addAddressButton}
          type="submit"
          onClick={() => {setOpenDelivery(true)}}
        >
          Add New Address
        </Button>
      </div>
      <Divider />
      <Grid container direction="row" spacing={2} className={classes.containr}>
        {customer &&
          customer?.addresses?.map((address, index) => (
            <Grid item className={classes.root} key={index}>
              <Paper className={classes.paper}>
                <div className={classes.main}>
                  <div className={classes.addressCard}>
                    <div>
                      <Typography variant="h6">
                        {address?.name}{" "}
                        <span className={classes.addressKey}>
                          ({address?.addressKey})
                        </span>
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        className={classes.text}
                      >
                        <b>Address Line 1: </b>
                        {address?.addressLine1} {address?.city},{" "}
                        {address?.zipOrPostalCode} {address?.stateOrProvince},{" "}
                        {address?.country}
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        className={classes.text}
                      >
                        <b>Address Line 2: </b>
                        {address?.addressLine2} {address?.city},{" "}
                        {address?.zipOrPostalCode} {address?.stateOrProvince},{" "}
                        {address?.country}
                      </Typography>
                      <Typography variant="body2" className={classes.phone}>
                        <b>Phone:</b> {address?.phoneNumber}
                      </Typography>
                      <Typography variant="body2">
                        <b>Email:</b> {customer?.email}
                      </Typography>
                    </div>
                    <div className={classes.action}>
                      <EditIcon className={classes.editIcon} />
                      <DeleteIcon className={classes.deleteIcon} />
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
          ))}
      </Grid>
      <DeliveryAddressDialog
        openDelivery={openDelivery}
        setOpenDelivery={setOpenDelivery}
      />
    </Grid>
  );
}
