import React, { useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";

const useStyle = () => ({
  container: {
    width: "300px",
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
  originalPriceTag: {
    fontSize: "15px",
    lineHeight: "19px",
    color: "rgba(0, 0, 0, 0.5)",
    textDecorationLine: "line-through",
    marginRight: "10px",
  },
  priceTagContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Billing({ items }) {
  const styles = useStyle();

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-between"
      style={styles.container}
    >
      <div
        style={{ ...styles.innerContainer, marginBottom: "5px" }}
        className="d-flex flex-column align-items-start"
      >
        <Scrollbar style={{ width: "100%", height: "30vh" }}>
          {items?.items?.length > 0 &&
            items?.items?.map((item) => (
              <>
                <div className="d-flex justify-content-between align-items-center px-2">
                  <img src="assets/delete.png" />
                  <small>
                    {item.quantity}x {item.name}
                  </small>
                  {item.price ? (
                    <div style={styles.priceTagContainer}>
                      {(item?.isDiscount === "flat" ||
                        item?.isDiscount === "percentage") && (
                        <span style={styles.originalPriceTag}>
                          {item?.originalPrice}€
                        </span>
                      )}
                      <p className="m-0">{item.price > 0 ? item.price : 0}€</p>
                    </div>
                  ) : (
                    <span>Free</span>
                  )}
                </div>
                {item?.bundledProduct?.length > 0 &&
                  item?.bundledProduct?.map((productObj) => (
                    <div>
                      <div
                        style={styles.bundlePrdSpacing}
                        className="d-flex justify-content-between mb-1 mr-1"
                      >
                        <div className="d-flex align-items-center">
                          <small className="ml-5" style={styles.productName}>
                            <span>{item?.quantity}x</span>{" "}
                            {productObj?.product?.title}
                          </small>
                        </div>
                        <span>Free</span>
                      </div>
                    </div>
                  ))}
              </>
            ))}
        </Scrollbar>
      </div>
      <div
        style={styles.innerContainer}
        className="d-flex justify-content-between px-4"
      >
        <p className="m-0">Subtotal</p>
        <p className="m-0" style={{ textDecoration: "underline" }}>
          {items?.total}€
        </p>
      </div>
    </div>
  );
}
