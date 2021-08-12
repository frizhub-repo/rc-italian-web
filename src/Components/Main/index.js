import React from "react";
import { Section, ScrollingProvider } from "react-scroll-section";
import "./index.css";
import ReserveTable from "./ReserveTable";
import Hero from "./Hero";
import Story from "./Story";
import FindUs from "./FindUs";
import OpeningHours from "./OpeningHours";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";

function Main() {
  return (
    <div>
      <ScrollingProvider>
        <Hero />
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
