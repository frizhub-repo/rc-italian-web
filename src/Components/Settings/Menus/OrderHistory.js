import * as React from "react";
import classes from "./Menus.module.css";

export default function OrderHistory() {
  const history = [
    {
      createdAt: new Date(),
      total: 21.99,
      products: [
        {
          price: 4.99,
          product: { title: "Italiano Pizza", addOns: [] },
          quantity: 2,
        },
        {
          price: 4.99,
          product: { title: "Italiano Pizza", addOns: [] },
          quantity: 2,
        },
      ],
    },
    {
      createdAt: new Date(),
      total: 21.99,
      products: [
        {
          price: 4.99,
          product: { title: "Italiano Pizza", addOns: [] },
          quantity: 2,
        },
        {
          price: 4.99,
          product: { title: "Italiano Pizza", addOns: [] },
          quantity: 2,
        },
      ],
    },

    {
      createdAt: new Date(),
      total: 21.99,
      products: [
        {
          price: 4.99,
          product: { title: "Italiano Pizza", addOns: [] },
          quantity: 2,
        },
        {
          price: 4.99,
          product: { title: "Italiano Pizza", addOns: [] },
          quantity: 2,
        },
      ],
    },
  ];

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.header}>Order History</h1>
      </div>
      {history.map((record) => (
        <div>
          <h2 className={classes.recordDate}>
            {record.createdAt.toLocaleDateString()}
          </h2>
          <div className={classes.orderContainerWrapper}>
            <table className={classes.orderContainer}>
              <tr className={classes.orderHeader}>
                <th className={classes.columnName}>Plates</th>
                <th className={classes.columnName}>Price</th>
                <th className={classes.columnName}>QTY</th>
                <th className={`${classes.columnName} ${classes.border_none}`}>
                  Actions
                </th>
              </tr>
              {record.products.map((item, index) => (
                <tr className={`${classes.productContainer}`}>
                  <td className={classes.plateContainer}>
                    <img
                      src="assets/order-placeholder.png"
                      width={100}
                      height={100}
                      className={classes.orderImage}
                    />
                    <div>
                      <p className={classes.productText}>
                        {item.product.title}
                      </p>
                      <p>
                        Add-Ons:{" "}
                        {item.product.addOns.length
                          ? item.product.addOns.map((addOn) => `${addOn}, `)
                          : "N/A"}
                      </p>
                    </div>
                  </td>
                  <td className={classes.detailText}>{item.price}</td>
                  <td className={classes.detailText}>{item.quantity}</td>
                  <td className={classes.detailText}>
                    <button className={classes.actionBtn}>
                      Reorder again this plate
                    </button>
                  </td>
                </tr>
              ))}
              <tr className={classes.actionsRow}>
                <td></td>
                <td></td>
                <td></td>
                <td className={classes.btnsColumn}>
                  <button className={classes.actionBtn}>View Order</button>
                  <button className={classes.actionBtn}>
                    Redo the entire order again
                  </button>
                  <button className={classes.actionBtn}>Review</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
