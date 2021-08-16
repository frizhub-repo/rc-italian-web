import React from "react";
import Gallery from "../Body/Gallery";
import Hero from "../Body/Hero";
import Testimonial from "../Body/Testimonial";
import Info from "./Info";
import OptionSelection from "./OptionSelection";
import OptionSelector from "./OptionSelector";
import Status from "./Status";

export default function TableReservation() {
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
        <Info />
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
