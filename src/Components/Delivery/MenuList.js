import React from "react";
import MenuItem from "./MenuItem";

const useStyle = () => ({
  container: {
    marginTop: "30px",
    background: "white",
    borderRadius: "20px",
    width: "100%",
  },
  itemContainer: {
    padding: "20px",
    maxHeight: "60vh",
    overflowY: "scroll",
  },
});

export default function MenuList({
  sectionTitle = "",
  products,
  discountList = {},
  setDiscountList = {},
}) {
  const styles = useStyle();
  return (
    <div style={styles.container}>
      {products?.length > 0 ? (
        <>
          <bold className="h1">{sectionTitle}</bold>
          <div className="row">
            {products?.map((product) => (
              <div className="col-md-6">
                <MenuItem
                  product={product?.product ? product?.product : product}
                  size={product?.size ? product?.size : product?.sizes?.[0]}
                  offer={product?.offer}
                  discountList={discountList}
                  setDiscountList={setDiscountList}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <span>This section don't have any products</span>
      )}
    </div>
  );
}
