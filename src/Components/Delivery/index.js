import React from "react";
import Hero from "../Body/Hero";
import ActionBox from "./ActionBox";
import Testitmonial from "../Body/testimonial";
import MealMenu from "./MealMenu";

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
      <section>
        <MealMenu />
      </section>
      <section>
        <Testitmonial />
      </section>
    </div>
  );
}
