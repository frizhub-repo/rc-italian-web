import React from "react";
import OptionSelector from "./OptionSelector";

const useStyle = () => ({
  container: {
    background: "#272727",
    paddingTop: "40px",
  },
});

export default function OptionSelection({
  specialMenu,
  setSelectedOffer,
  selectedOffer,
}) {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <OptionSelector
        specialMenu={specialMenu}
        setSelectedOffer={setSelectedOffer}
        selectedOffer={selectedOffer}
      />
    </div>
  );
}
