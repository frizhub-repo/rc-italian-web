import React, { useState } from "react";

const useStyle = () => ({
  container: {
    background: "white",
    borderRadius: "10px",
  },
  mainText: {
    color: "#B29051",
    fontWeight: "bold",
  },
  allergyTxt: {
    textAlign: "left",
  },
});

export default function MenuListItem({ header, products }) {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <bold className="h1">{header}</bold>
      <ul>
        {products?.length > 0 ? (
          products.map((product) => (
            <li className="d-flex justify-content-between px-4 pt-2">
              <div className="d-flex align-items-start">
                <img className="mr-2" src="assets/list-style.png" />
                <div className="d-flex flex-column align-items-start">
                  <h5 className="mb-1" style={styles.mainText}>
                    {product?.title}
                  </h5>
                  <p style={styles.allergyTxt}>
                    {product?.allergies?.map(
                      (allergy, index) =>
                        `${allergy}${
                          product?.allergies?.length === index + 1 ? "" : ", "
                        }`
                    )}
                  </p>
                </div>
              </div>
              <div>
                <h5 style={styles.mainText}>{product?.sizes?.[0]?.price}</h5>
              </div>
            </li>
          ))
        ) : (
          <span>This section don't have any products</span>
        )}
      </ul>
    </div>
  );
}
