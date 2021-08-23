import React from "react";
import { Scrollbar } from "react-scrollbars-custom";
import InformationOption from "./InformationOption";
import OptionListItem from "./OptionListItem";

const useStyle = () => ({
  container: {
    paddingTop: "20px",
    paddingBottom: "20px",
    marginTop: "20px",
    marginBottom: "20px",
    width: "90%",
    border: "5px solid #1d1d1d",
    borderRadius: "10px",
  },
  header: {
    color: "#B29051",
  },
  menus: {
    maxHeight: "60vh",
    overflowY: "scroll",
    padding: "10px",
  },
  groupContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "30px 0px",
  },
  groupImageContainer: {
    background: "white",
    padding: "5px",
    borderRadius: "10px 0px 0px 10px",
  },
  groupButton: {
    background: "#B29051",
    borderRadius: "0px 10px 10px 0px",
    fontSize: "18px",
  },
});

export default function OptionContent({ selected }) {
  const styles = useStyle();

  if (selected === "INFORMATIONS")
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>{selected}</h1>
        <InformationOption />
      </div>
    );
  else
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>{selected}</h1>
        <div style={styles.menus} className="row">
          <div className="col-sm-12 col-lg-6">
            <OptionListItem header="Primi Piatti" />
          </div>
          <div className="col-sm-12 col-lg-6">
            <OptionListItem header="Secondi Piatti" />
          </div>
          <div className="col-sm-12 col-lg-6">
            <OptionListItem header="Primi Piatti" />
          </div>
          <div className="col-sm-12 col-lg-6">
            <OptionListItem header="Secondi Piatti" />
          </div>
        </div>
        <div style={styles.groupContainer} className="input-group">
          <div
            style={styles.groupImageContainer}
            className="input-group-prepend"
          >
            <img src="assets/button-menu.png" width={50} />
          </div>
          <button style={styles.groupButton}>CHECK ALSO OUR MENU!</button>
        </div>
      </div>
    );
}
