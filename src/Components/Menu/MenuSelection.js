import React from "react";
import MenuSelector from "./MenuSelector";

const useStyle = () => ({
  container: {
    paddingBottom: "20px",
    background: "#272727",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: "Clicker Script",
    fontSize: "8vw",
    color: "#B29051",
  },
});

export default function MenuSelection() {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our Menu Selection</h1>
      <div>
        <MenuSelector />
      </div>
    </div>
  );
}
