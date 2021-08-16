import React from "react";
import { Scrollbar } from "react-scrollbars-custom";
import MenuListItem from "./MenuListItem";

const useStyle = () => ({
  container: {
    paddingTop: "20px",
    paddingBottom: "20px",
    marginTop: "20px",
    maxWidth: "90%",
    border: "5px solid #1d1d1d",
    borderRadius: "10px",
  },
  header: {
    color: "#B29051",
  },
  menus: {
    maxHeight: "60vh",
    overflowY: "scroll",
  },
});

export default function MenuContent() {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Lunch Menu</h1>
      <div style={styles.menus} className="row">
        <div className="col-sm-12 col-lg-6">
          <MenuListItem header="Primi Piatti" />
        </div>
        <div className="col-sm-12 col-lg-6">
          <MenuListItem header="Secondi Piatti" />
        </div>
        <div className="col-sm-12 col-lg-6">
          <MenuListItem header="Primi Piatti" />
        </div>
        <div className="col-sm-12 col-lg-6">
          <MenuListItem header="Secondi Piatti" />
        </div>
      </div>
    </div>
  );
}
