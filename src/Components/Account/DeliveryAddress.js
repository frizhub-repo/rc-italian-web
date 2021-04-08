import {
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
  containr: {
    marginTop: "10px"
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
    cursor: 'pointer'
  },
  deleteIcon: {
    backgroundColor: "#FADBDB",
    borderRadius: "20px",
    padding: "2px",
    cursor: 'pointer'
  },
  phone: {
    marginTop: "13px"
  },
  action: {
    display: "flex"
  },
  text:{
    marginRight: "30px"
  }
}));

export default function DeliveryAddress() {
  const classes = useStyles();

  return (
    <Grid>
      <h4>Delivery Address</h4>
      <Divider />
      <Grid container direction="row" spacing={2} className={classes.containr}>
        {[1, 2, 3, 4].map((item, index) => (
          <Grid item className={classes.root} key={index}>
            <Paper className={classes.paper}>
              <div className={classes.main}>
                <div className={classes.addressCard}>
                  <div>
                    <Typography variant="h6">Artisanal Kale</Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      className={classes.text}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quos blanditiis tenetur unde suscipit, quam beatae rerum
                      inventore consectetur, neque doloribus, cupiditate numquam
                      dignissimos laborum fugiat deleniti? Eum quasi quidem
                      quibusdam.
                    </Typography>
                    <Typography className={classes.phone} variant="body2">
                      Phone: <b>+001222333454</b>
                    </Typography>
                    <Typography variant="body2">
                      Email: amond@gmail.com
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
    </Grid>
  );
}
