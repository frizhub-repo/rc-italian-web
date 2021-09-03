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
        <Info placeData={placeData} />
      </section>
      <section>
        <OptionSelection />
      </section>
      <section>
        <Status />
      </section>
      <section>
        <Gallery />
      </section>
      <section>
        <Testimonial />
      </section>
    </div>
  );
}
