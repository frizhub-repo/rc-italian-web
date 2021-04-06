import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosIntance from "../../utils/axios-configured";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { addItem, setTotal } from "../actions";
import { useHistory } from "react-router";
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
  accepted: {
    border: "1px solid #4caf50",
    borderRadius: '20px',
    padding: "2px 10px",
    color: '#4caf50',
    textTransform: 'capitalize'
  },
  pending: {
    border: "1px solid #ff9800",
    borderRadius: '20px',
    padding: "2px 10px",
    color: '#f57c00',
    textTransform: 'capitalize'
  },
  rejected: {
    border: "1px solid red",
    borderRadius: '20px',
    padding: "2px 10px",
    color: 'red',
    textTransform: 'capitalize'
  },
}));
export default function Order() {
  const classes = useStyles();
  const { loading } = useSelector((state) => state.loadingReducer);
  const [orders, setOrders] = useState([]);
  const disp = useDispatch();
  const history = useHistory()

  const reOrder = (order) => {
    let products = []
    let total = 0;
    order?.map((prod) => {
      let obj = { product: prod.product._id, price: prod.product.price, quantity: prod.quantity, name: prod.product.title }
      products.push(obj);
      total += prod.quantity * prod.product.price;
    })
    disp(addItem(products));
    disp(setTotal(total));
    history.push("/complete/purchase")
  }

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
        {loading &&
          [1, 2, 3, 4].map((item) => (
            <Skeleton
              variant="rect"
              width={700}
              height={140}
              style={{ marginTop: "10px" }}
            />
          ))}
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
                          <DateRangeIcon />{" "}
                          {new Date(order?.createdAt).toLocaleDateString()}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          ID: 1030114
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">
                        <b>${order?.total}</b>
                      </Typography>
                    </Grid>
                    <Grid item container>
                    <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: '100%'
                        }}
                      >
                        <Button
                          size="small"
                          style={{ backgroundColor: "#E2E2E2" }}
                          onClick={() => reOrder(order?.products)}
                        >
                          Reorder
                        </Button>
                        <span
                          className={
                            order?.status === "accepted"
                              ? classes.accepted
                              : order?.status === "pending"
                              ? classes.pending
                              : classes.rejected
                          }
                        >
                          {order?.status}
                        </span>
                      </div>
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
