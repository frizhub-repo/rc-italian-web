import React from "react";
import ReserveTableMenuList from "./ReserveTableMenuList";
import { Tab, Tabs } from "react-bootstrap";
import "./reserveTableMenu.css";
import { customerMenu } from "api/Public";
import { Backdrop, CircularProgress } from "@material-ui/core";

const useStyle = () => ({
  container: {
    padding: "0px",
    margin: "0px",
  },
  tabStyle: {
    color: "white",
  },
  backdrop: {
    zIndex: 1,
    color: "#fff",
  },
});

export default function ReserveTableMenu() {
  const styles = useStyle();
  const [menus, setMenus] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchMenus = async () => {
    try {
      setLoading(true);
      const res = await customerMenu();
      setMenus(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }
  };
  React.useEffect(() => {
    fetchMenus();
  }, []);

  return (
    <div style={styles.container}>
      <h1>Menu</h1>
      <div>
        <Tabs defaultActiveKey={menus?.[0]?.title} style={styles.tabStyle}>
          {menus?.length > 0 &&
            menus?.map((menu) => (
              <Tab eventKey={menu?.title} title={menu?.title}>
                <ReserveTableMenuList menuItem={menu?.items} />
              </Tab>
            ))}
        </Tabs>
      </div>
      <Backdrop style={styles.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
