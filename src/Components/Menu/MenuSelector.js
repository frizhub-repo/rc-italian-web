import { customerMenu } from "api/Public";
import React, { useState } from "react";
import MenuContent from "./MenuContent";
import "./menuSelector.css";
import { Backdrop, CircularProgress } from "@material-ui/core";

const useStyle = () => ({
  menuButton: {
    width: "100px",
    height: "auto",
  },
  backdrop: {
    zIndex: 1,
    color: "#fff",
  },
});

export default function MenuSelector() {
  const styles = useStyle();
  const [selected, setSelected] = useState(2);
  const [loading, setLoading] = useState(false);
  const [menus, setMenus] = useState(null);

  React.useEffect(() => {
    async function getCustomerMenu() {
      setLoading(true);
      try {
        const res = await customerMenu();
        setMenus(res?.data?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log({ error });
      }
    }
    getCustomerMenu();
  }, []);

  function handleButtonClick(dir) {
    switch (dir) {
      case 0:
        if (selected > 0) setSelected(selected - 1);
        break;
      case 1:
        if (selected < menus?.length - 1) setSelected(selected + 1);
        break;
    }
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex justify-content-between">
        <button onClick={(e) => handleButtonClick(0)}>
          <img src="assets/menu-left.png" style={styles.menuButton} />
        </button>
        <div className="d-none d-md-flex justify-content-center shadow-lg row">
          {menus?.length > 0 &&
            menus?.map((menu, index) => (
              <button
                onClick={(e) => setSelected(index)}
                className={`lead col-auto ${selected === index && "active"}`}
              >
                {menu?.title}
              </button>
            ))}
        </div>
        <button onClick={(e) => handleButtonClick(1)}>
          <img src="assets/menu-right.png" style={styles.menuButton} />
        </button>
      </div>
      <MenuContent
        selected={menus?.[selected]?.title}
        items={menus?.[selected]?.items}
      />
      <Backdrop style={styles.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
