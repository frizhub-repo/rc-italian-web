import React from "react";

const useStyle = () => ({
  container: {
    padding: "40px 60px",
    background: "#272727",
  },
  header: {
    fontFamily: "Clicker Script",
    fontSize: "8vw",
    color: "#B29051",
  },
  storyText: {
    color: "white",
  },
});

export default function Story() {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our Story</h1>
      <div className="row mt-5">
        <div className="d-none d-md-block col-md-6">
          <img src="assets/hero-logo.png" width={500} />
        </div>
        <div className="col col-md-6" style={styles.storyText}>
          <h1 style={{ fontSize: "5vm" }}>
            Da Ciccio
            <br /> Italians do it better
          </h1>
          <p style={{ fontSize: "2vm" }}>
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
