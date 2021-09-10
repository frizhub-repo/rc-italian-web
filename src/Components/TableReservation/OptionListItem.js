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
});

export default function OptionListItem({ header, products }) {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <bold className="h1">{header}</bold>
      <ul>
        {products?.length > 0 &&
          products?.map((item) => (
            <li className="d-flex justify-content-between px-4 pt-2">
              <div className="d-flex align-items-start">
                <img className="mr-2" src="assets/list-style.png" />
                <div className="d-flex flex-column align-items-start">
                  <h5 className="mb-1" style={styles.mainText}>
                    {item?.title}
                  </h5>
                  <p>{item?.description}</p>
                </div>
              </div>
              <div>
                <h5 style={styles.mainText}>{item?.sizes[0]?.price}</h5>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
