import React from "react";
import { Section, ScrollingProvider } from "react-scroll-section";
import ReserveTable from "./ReserveTable";
import Hero from "../Body/Hero";
import Story from "./Story";
import FindUs from "./FindUs";
import OpeningHours from "./OpeningHours";
import Gallery from "../Body/Gallery";
import { useUserContext } from "Context/userContext";
import GoogleMap from "Components/Common/GoogleMap";
import classes from "./index.module.css";

function Main() {
  const {
    restaurant: { placeData },
  } = useUserContext();
  return (
    <div>
      <ScrollingProvider>
        <section>
          <Hero
            heroImage="assets/hero.png"
            showStatusBox={true}
            statusBoxFormat={"home"}
            placeData={placeData}
          />
        </section>
        <section>
          <ReserveTable />
        </section>
        <section>
          <Story reviews={placeData?.reviews} />
        </section>
        <section>
          <Gallery />
        </section>
        <Section id="opening-hour">
          <div className={classes.openingHoursRoot}>
            <div>
              <OpeningHours placeData={placeData} />
            </div>
            <div className={classes.mapRoot}>
              <GoogleMap classname={classes.gogleMap} />
            </div>
          </div>
        </Section>
        <section>
          <FindUs
            formattedAddress={placeData?.formatted_address}
            phoneNumber={placeData?.formatted_phone_number}
          />
        </section>
      </ScrollingProvider>
    </div>
  );
}

export default Main;
