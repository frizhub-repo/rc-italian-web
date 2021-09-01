import React from "react";
import { Carousel } from "react-bootstrap";

const useStyle = () => ({
  container: {
    padding: "30px 60px",
    background: "#272727",
  },
  header: {
    fontFamily: "Clicker Script",
    fontSize: "10vw",
    color: "#B29051",
  },
  carouselContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    minHeight: "50vh",
    width: "100%",
  },
  carouselMessage: {
    width: "70%",
  },
});

export default function Testimonial({ reviews }) {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our client says</h1>
      <Carousel interval={1000}>
        {reviews?.length > 0 &&
          reviews.map((review) => {
            return (
              <Carousel.Item interval={5000}>
                <div style={styles.carouselContent}>
                  <img src={review.profile_photo_url} className="mb-3" />
                  <p style={styles.carouselMessage}>‘’{review.text}’’</p>
                </div>
                <Carousel.Caption>
                  <p>-{review?.author_name}-</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </div>
  );
}
