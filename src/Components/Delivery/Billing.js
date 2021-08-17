import React, { useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";

const useStyle = () => ({
  container: {
    width: "280px",
    color: "white",
    height: "100%",
  },
  innerContainer: {
    width: "100%",
    margin: "0px",
    background: "#B29051",
    borderRadius: "20px",
    padding: "10px 15px",
  },
  itemsContainer: {},
});

export default function Billing() {
  const styles = useStyle();

  const [items, setItems] = useState([
    { qty: 1, name: "Spaghetti alla Puttanesca", price: 10 },
    { qty: 2, name: "Spaghetti alla Puttanesca", price: 10 },
  ]);

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-between"
      style={styles.container}
    >
      <div
        style={{ ...styles.innerContainer, marginBottom: "5px" }}
        className="d-flex flex-column align-items-start"
      >
        <Scrollbar style={{ width: "100%", height: "11vh" }}>
          {items.map((item) => (
            <div className="d-flex justify-content-between align-items-center px-2">
              <img src="assets/delete.png" />
              <small>
                {item.qty}x {item.name}
              </small>
              <p className="m-0">{item.price}€</p>
            </div>
          ))}
        </Scrollbar>
      </div>
      <div
        style={styles.innerContainer}
        className="d-flex justify-content-between px-4"
      >
        <p className="m-0">Subtotal</p>
        <p className="m-0" style={{ textDecoration: "underline" }}>
          {items.reduce((prev, curr) => prev + curr.qty * curr.price, 0)}€
        </p>
      </div>
    </div>
  );
}
