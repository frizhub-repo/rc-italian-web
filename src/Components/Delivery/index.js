import React from "react";
import Hero from "../Body/Hero";
import ActionBox from "./ActionBox";

export default function Delivery() {
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
        <ActionBox />
      </section>
    </div>
  );
}
