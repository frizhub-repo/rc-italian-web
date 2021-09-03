import React from "react";
import Hero from "../Body/Hero";
import ActionBox from "./ActionBox";
import Testitmonial from "../Body/testimonial";
import MealMenu from "./MealMenu";
import { useUserContext } from "Context/userContext";

export default function Delivery() {
  const {
    restaurant: {
      placeData: { reviews, opening_hours: { open_now } = {} } = {},
    },
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
        <ActionBox openNow={open_now} />
      </section>
      <section>
        <MealMenu />
      </section>
      <section>
        <Testitmonial reviews={reviews} />
      </section>
    </div>
  );
}
