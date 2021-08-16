import React from "react";
import { Section, ScrollingProvider } from "react-scroll-section";
import ReserveTable from "./ReserveTable";
import Hero from "../Body/Hero";
import Story from "./Story";
import FindUs from "./FindUs";
import OpeningHours from "./OpeningHours";
import Gallery from "../Body/Gallery";
import Testimonial from "../Body/testimonial";

function Main() {
  return (
    <div>
      <ScrollingProvider>
        <section>
          <Hero
            heroImage="assets/hero.png"
            showStatusBox={true}
            statusBoxFormat={"home"}
          />
        </section>
        <section>
          <ReserveTable />
        </section>
        <section>
          <Story />
        </section>
        <section>
          <Gallery />
        </section>
        <Section id="opening-hour">
          <OpeningHours />
        </Section>
        <section>
          <Testimonial />
        </section>
        <section>
          <FindUs />
        </section>
      </ScrollingProvider>
    </div>
  );
}

export default Main;
