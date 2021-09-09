import { useUserContext } from "Context/userContext";
import React from "react";
import Gallery from "../Body/Gallery";
import Hero from "../Body/Hero";
import Testimonial from "../Body/testimonial";
import Info from "./Info";
import OptionSelection from "./OptionSelection";
import Status from "./Status";

export default function TableReservation() {
  const {
    restaurant: { placeData },
  } = useUserContext();
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
            <OptionSelection />
          </div>
          <div style={{ width: "35%", paddingTop: "50px" }}>
            <Info placeData={placeData} />
          </div>
        </div>
      </section>
      <section>
        <Gallery />
      </section>
    </div>
  );
}
