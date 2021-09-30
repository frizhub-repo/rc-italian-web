import React from "react";

const useStyle = () => ({
  container: {
    maxHeight: "60vh",
  },
  mainText: {
    color: "#B29051",
    fontWeight: "bold",
  },
});

export default function ReserveTableMenuList({ menuItem }) {
  const styles = useStyle();

  return (
    <div style={styles.container} className="custom-scroll">
      <ul>
        {menuItem?.length > 0 &&
          menuItem?.map((item) =>
            item?.products?.length > 0 ? (
              item?.products?.map((product) => (
                <li className="d-flex justify-content-between px-4 pt-2">
                  <div className="d-flex align-items-start">
                    <img
                      className="mr-2"
                      src="assets/list-style.png"
                      alt="list style"
                    />
                    <div className="d-flex flex-column align-items-start">
                      <h5 className="mb-1" style={styles.mainText}>
                        {product?.title}
                      </h5>
                      {product?.allergies?.length > 0 && (
                        <p>
                          <span className="font-weight-bold">
                            Allergenies:{" "}
                          </span>
                          {product?.allergies?.map(
                            (allergy, index) =>
                              `${allergy}${
                                product?.allergies?.length !== index + 1
                                  ? ", "
                                  : ""
                              }`
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <h5 style={styles.mainText}>{product?.sizes[0]?.price}€</h5>
                  </div>
                </li>
              ))
            ) : (
              <span>This menu don't have any products</span>
            )
          )}
      </ul>
    </div>
  );
}
