import AllergyAlert from "./AllergyAlert";
import React from "react";
import classes from "./ActionBox.module.css";
import OrderPickUp from "./OrderPickUp";

export default function ActionBox() {
  const orders = [
    { qty: 1, price: 10, currency: "€", name: "Spaghetti alla Puttanesca" },
    { qty: 1, price: 10, currency: "€", name: "Spaghetti alla Puttanesca" },
    { qty: 1, price: 10, currency: "€", name: "Spaghetti alla Puttanesca" },
    { qty: 1, price: 10, currency: "€", name: "Spaghetti alla Puttanesca" },
    { qty: 1, price: 10, currency: "€", name: "Spaghetti alla Puttanesca" },
    { qty: 1, price: 10, currency: "€", name: "Spaghetti alla Puttanesca" },
    { qty: 1, price: 10, currency: "€", name: "Spaghetti alla Puttanesca" },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.timings}>
        <h4>Now Delivery</h4>
        <h4>From 12:00 - To 15:00</h4>
      </div>
      <div className={classes.actionsContainer}>
        <AllergyAlert />
        <OrderPickUp />
        <div>
          {orders.length && (
            <div className={`${classes.ordersContainer} custom-scroll`}>
              {orders.map((order, index) => (
                <div key={index} className={classes.orderItem}>
                  <img src="assets/delete.png" width={30} />
                  <div className={classes.orderContent}>
                    <small>
                      <span>{order.qty}x</span> {order.name}
                    </small>
                    <small>
                      {order.price}
                      {order.currency}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          )}
          <hr className={classes.divider} />
          <div className="d-flex justify-content-between text-black mt-2">
            <p className="mb-0">Subtotal</p>
            <p className="m-0">
              {orders.reduce((prev, curr) => prev + curr.qty * curr.price, 0)}
              {orders[0].currency}
            </p>
          </div>
        </div>
        <div className={classes.btnContainer}>
          <button className={classes.proceedBtn}>
            Add more 5€ to your order to proceed
          </button>
          <button className={classes.methodBtn}>Choose a Payment method</button>
        </div>
      </div>
    </div>
  );
}
