import React from "react";

const useStyle = () => ({
  container: {
    background: "white",
    borderRadius: "30px",
    padding: "15px 0",
    boxShadow: "inset 0px 0px 10px 7px rgba(0, 0, 0, 0.25)",
  },
  mainText: {
    color: "#B29051",
    fontWeight: "bold",
  },
  allergyTxt: {
    textAlign: "left",
  },
  prodctDetail: {
    fontWeight: "bold",
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
                  {product?.allergies?.length > 0 && (
                    <p style={styles.allergyTxt}>
                      <span style={styles.prodctDetail}>Allergenies:</span>{" "}
                      {product?.allergies?.map(
                        (allergy, index) =>
                          `${allergy}${
                            product?.allergies?.length === index + 1 ? "" : ", "
                          }`
                      )}
                    </p>
                  )}
                  {product?.ingredients?.length > 0 && (
                    <p style={styles.allergyTxt}>
                      <span style={styles.prodctDetail}>Ingredients:</span>{" "}
                      {product?.ingredients?.map(
                        (allergy, index) =>
                          `${allergy}${
                            product?.ingredients?.length === index + 1
                              ? ""
                              : ", "
                          }`
                      )}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <h5 style={styles.mainText}>{product?.sizes?.[0]?.price}€</h5>
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
