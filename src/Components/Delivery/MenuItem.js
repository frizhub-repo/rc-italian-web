import React, { useState } from "react";
import classes from "./menuItem.module.css";

const useStyle = () => ({
  container: {
    margin: "5px 0px",
  },
  detailsContainer: {
    background: "#B29051",
    borderRadius: "20px 20px 0px 0px",
  },
  imageContainer: {
    background: "#272727",
    borderRadius: "20px",
  },
  image: {
    borderRadius: "20px",
  },
  itemHeader: {
    color: "white",
    fontWeight: "bold",
  },
  sizeContainer: {
    background: "#272727",
    color: "#B29051",
    borderRadius: "0px 0px 20px 20px",
  },
  qtySetter: {
    color: "#B29051",
    background: "#272727",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    padding: "0px",
  },
  qtyInput: {
    background: "white",
    color: "black",
    textAlign: "center",
  },
  basketContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#272727",
    borderRadius: "10px 0px 0px 10px",
    padding: "5px",
    marginTop: "5px",
    marginRight: "-4px",
    width: "100%",
    cursor: "pointer",
  },
});

export default function MenuItem({
  itemName,
  price,
  allergeni,
  ingredients,
  tags,
}) {
  const styles = useStyle();

  const [qty, setQty] = useState(0);
  const [size, setSize] = useState("xs");

  function handleQtyMinus() {
    if (qty > 0) setQty(qty - 1);
  }

  function handleQtyAdd() {
    setQty(qty + 1);
  }

  return (
    <div className="d-flex flex-column" style={styles.container}>
      <div
        className="d-flex justify-content-between p-1"
        style={styles.detailsContainer}
      >
        {/* <p className={classes.discount}>15</p> */}
        {/* image container */}
        <div className="d-none d-sm-flex" style={styles.imageContainer}>
          <img style={styles.image} src="assets/placeholder.png" width={100} />
          <div className="d-flex flex-column justify-content-between p-1">
            <img
              className={tags?.vegan ?? classes.tag_un_active}
              src="assets/vegan.png"
              width={25}
            />
            <img
              className={tags?.gluten_free ?? classes.tag_un_active}
              src="assets/gluten-free.png"
              width={25}
            />
            <img
              className={tags?.hot ?? classes.tag_un_active}
              src="assets/hot.png"
              width={25}
            />
          </div>
        </div>
        {/* detail container */}
        <div className="d-flex flex-column align-items-start px-1">
          <h5 style={styles.itemHeader}>{itemName}</h5>
          <p className="m-0">{ingredients.map((e) => `${e}, `)}</p>
          {allergeni && (
            <small>Allergeni: {allergeni.map((e) => `${e}, `)}</small>
          )}
        </div>
        {/* price container */}
        <div className="d-flex flex-column align-items-end">
          <h5 style={styles.itemHeader}>{price}</h5>
          <div style={styles.qtySetter}>
            <div>
              <button onClick={handleQtyMinus} className="px-1 m-0">
                -
              </button>
            </div>
            <div>
              <input
                value={qty}
                style={styles.qtyInput}
                type="text"
                size={1}
                disabled
              />
            </div>
            <div>
              <button onClick={handleQtyAdd} className="px-1 m-0">
                +
              </button>
            </div>
          </div>
          <div style={styles.basketContainer}>
            <img src="assets/shopping-basket.png" width={40} />
          </div>
        </div>
      </div>
      <div
        style={styles.sizeContainer}
        className="d-flex justify-content-around p-1"
      >
        <div
          onClick={(e) => setSize("xs")}
          className={`d-none d-sm-block ${
            size === "xs" ? classes.size_active : classes.size_un_active
          }`}
        >
          <small>Extra-Small</small>
        </div>
        <div
          onClick={(e) => setSize("s")}
          className={
            size === "s" ? classes.size_active : classes.size_un_active
          }
        >
          <small>Small</small>
        </div>
        <div
          onClick={(e) => setSize("m")}
          className={
            size === "m" ? classes.size_active : classes.size_un_active
          }
        >
          <small>Medium</small>
        </div>
        <div
          onClick={(e) => setSize("l")}
          className={
            size === "l" ? classes.size_active : classes.size_un_active
          }
        >
          <small>Large</small>
        </div>
        <div
          onClick={(e) => setSize("xl")}
          className={`d-none d-sm-block ${
            size === "xl" ? classes.size_active : classes.size_un_active
          }`}
        >
          <small>Extra-Large</small>
        </div>
      </div>
    </div>
  );
}
