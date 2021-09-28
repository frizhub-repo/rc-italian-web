import React from "react";
import { Scrollbar } from "react-scrollbars-custom";
import MenuListItem from "./MenuListItem";

const useStyle = () => ({
  container: {
    paddingTop: "20px",
    paddingBottom: "20px",
    marginTop: "20px",
    width: "100%",
    border: "5px solid #1d1d1d",
    borderRadius: "10px",
  },
  header: {
    color: "#B29051",
    fontWeight: "normal",
    fontSize: "60px",
  },
  menus: {
    maxHeight: "90vh",
    overflowY: "scroll",
  },
  noSection: {
    color: "#fff",
  },
});

export default function MenuContent({ selected, items }) {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{selected}</h1>
      <div style={styles.menus} className="row custom-scroll">
        {items?.length > 0 ? (
          items?.map((item) => (
            <div className="col-sm-12 col-lg-6 p-4">
              <MenuListItem
                header={item?.category?.name}
                products={item?.products}
              />
            </div>
          ))
        ) : (
          <span style={styles.noSection}>This menu don't have any section</span>
        )}
      </div>
    </div>
  );
}
