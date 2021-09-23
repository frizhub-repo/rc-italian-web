import { getSpecialMenus } from "api/Public";
import { useUserContext } from "Context/userContext";
import React from "react";
import Gallery from "../Body/Gallery";
import Hero from "../Body/Hero";
import Info from "./Info";
import OptionSelection from "./OptionSelection";

export default function TableReservation() {
  const [selectedOffer, setSelectedOffer] = React.useState({});
  const {
    restaurant: { placeData },
  } = useUserContext();

  const [specialMenu, setSpecialMenus] = React.useState([]);

  React.useEffect(() => {
    async function getSpecialMenuHandler() {
      try {
        const res = await getSpecialMenus();
        setSpecialMenus(res?.data?.data);
      } catch (error) {
        console.log(error);
      }
    }
    getSpecialMenuHandler();
  }, []);

  return (
    <div>
      <section>
        <Hero
          showStatusBox={false}
          height="80vh"
          heroImage="assets/reservation-hero.png"
        />
      </section>
      <section>
        <div style={{ display: "flex", backgroundColor: "rgb(39, 39, 39)" }}>
          <div style={{ width: "65%" }}>
            <OptionSelection
              specialMenu={specialMenu}
              setSelectedOffer={setSelectedOffer}
              selectedOffer={selectedOffer}
            />
          </div>
          <div style={{ width: "35%", paddingTop: "50px" }}>
            <Info
              placeData={placeData}
              specialMenu={specialMenu}
              selectedOffer={selectedOffer}
            />
          </div>
        </div>
      </section>
      <section>
        <Gallery />
      </section>
    </div>
  );
}
