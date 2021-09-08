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
        <div style={{ display: "flex" }}>
          <div style={{ width: "70%" }}>
            <MealMenu />
          </div>
          <div style={{ width: "30%", backgroundColor: "rgb(39, 39, 39)" }}>
            <ActionBox openNow={open_now} />
          </div>
        </div>
      </section>
      <section>
        <Testitmonial reviews={reviews} />
      </section>
    </div>
  );
}
