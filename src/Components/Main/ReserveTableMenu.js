import React from "react";
import ReserveTableMenuList from "./ReserveTableMenuList";
import { Tab, Tabs } from "react-bootstrap";
import "./reserveTableMenu.css";

const useStyle = () => ({
  container: {
    padding: "0px",
  },
  tabStyle: {
    color: "white",
  },
});

export default function ReserveTableMenu() {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <h1>Menu</h1>
      <div>
        <Tabs defaultActiveKey="lunch" style={styles.tabStyle}>
          <Tab eventKey="breakfast" title="Breakfast">
            <ReserveTableMenuList />
          </Tab>
          <Tab eventKey="lunch" title="Lunch">
            <ReserveTableMenuList />
          </Tab>
          <Tab eventKey="dinner" title="Dinner">
            <ReserveTableMenuList />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
