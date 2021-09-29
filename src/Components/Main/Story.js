import Testimonial from "Components/Body/testimonial";
import React from "react";

const useStyle = () => ({
  container: {
    padding: "60px",
    background: "#272727",
  },
  header: {
    fontFamily: "Clicker Script",
    fontSize: "10vw",
    color: "#B29051",
  },
  storyText: {
    color: "white",
  },
  restaurantRange: {
    fontSize: "20px",
  },
  better: {
    fontStyle: "italic",
  },
});

export default function Story({ reviews }) {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our Story</h1>
      <div className="row mt-5">
        <div className="d-none d-md-block col-md-6">
          <Testimonial reviews={reviews} showHeader={false} />
        </div>
        <div className="col col-md-6" style={styles.storyText}>
          <h2 className="mb-4">
            Da Ciccio
            <br /> <span style={styles.better}>Italians do it better</span>
          </h2>
          <p style={styles.restaurantRange}>
            Restaurants range from inexpensive and informal lunching or dining
            places catering to people working nearby, with modest food served in
            simple settings at low prices, to expensive establishments serving
            refined food and fine wines in a formal setting. In the former case,
            customers usually wear casual clothing. In the latter case,
            depending on culture and local traditions, customers might wear
            semi-casual, semi-formal or formal wear. Typically, at mid- to
            high-priced restaurants, customers sit at tables, their orders are
            taken by a waiter, who brings the food when it is ready. After
            eating, the customers then pay the bill.
          </p>
        </div>
      </div>
    </div>
  );
}
