import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosIntance from "../../utils/axios-configured";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    // maxWidth: 500,
  },
  image: {
    width: 200,
    height: 112,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
export default function Order() {
  const classes = useStyles();
  const { loading } = useSelector((state) => state.loadingReducer);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axiosIntance
      .get("/api/v1/orders/customers")
      .then((res) => setOrders(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid>
      <h4>Orders</h4>
      <Divider />
      <Grid container direction="row" spacing={2} style={{ marginTop: "10px" }}>
        {loading && "Loading"}
        {orders.length > 0 &&
          orders.map((order, index) => (
            <Grid item style={{ width: "100%" }} key={index}>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item>
                    <div className={classes.image}>
                      <img
                        className={classes.img}
                        alt="complex"
                        src="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image3-min-1024x569.png"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          {order?.products?.map((odr) => (
                            <span>
                              <b>
                                {odr?.quantity}x {odr?.product?.title}{" "}
                              </b>
                            </span>
                          ))}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Full resolution 1920x1080 • JPEG
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          ID: 1030114
                        </Typography>
                        <Button
                          size="small"
                          style={{ backgroundColor: "#E2E2E2" }}
                        >
                          Reorder
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">
                        <b>${order?.total}</b>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
}
