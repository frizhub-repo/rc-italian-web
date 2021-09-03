import { getDeliverableMenus } from "api/Public";
import React, { useEffect, useState } from "react";
import DicountGenre from "./DicountGenre";
import MealType from "./MealType";
import MenuOption from "./MenuOption";
import { Backdrop, CircularProgress } from "@material-ui/core";

const useStyle = () => ({
  container: {
    background: "#272727",
    padding: "20px",
  },
  innerContainer: {
    border: "5px solid #1d1d1d",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 20px",
  },
  backdrop: {
    zIndex: 1,
    color: "#fff",
  },
});

export default function MealMenu() {
  const styles = useStyle();

  const [loading, setLoading] = useState(false);
  const [menus, setMenus] = useState([]);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(1);
  const [activeSection, setActiveSection] = useState(0);

  const handleChangeSelectedMenuIndex = (index) => {
    setSelectedMenuIndex(index);
    setActiveSection(0);
  };

  const fetchDeliverableMenus = async () => {
    try {
      setLoading(true);
      const res = await getDeliverableMenus();
      setMenus(res?.data?.data);
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDeliverableMenus();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <MenuOption
          menus={menus}
          selected={selectedMenuIndex}
          handleClick={handleChangeSelectedMenuIndex}
        />
        {selectedMenuIndex === 0 ? (
          <DicountGenre />
        ) : (
          <MealType
            items={menus?.[selectedMenuIndex - 1]?.items}
            selected={activeSection}
            setSelected={setActiveSection}
          />
        )}
      </div>
      <Backdrop style={styles.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
