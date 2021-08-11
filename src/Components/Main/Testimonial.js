import React, { useState } from "react";
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

export default function Testimonial() {
  const styles = useStyle();
  const [testimonials, setTestimonials] = useState([
    {
      img: "assets/testimonial-client.png",
      content:
        "Birre ottime e panini buoni nel pane e nella farcitura, carne scelta. Locale informale e caldo. Ragazzi preparati e gentili. Patatine buone servite con più salse. Buoni i gelati e i sorbettie buono il soufflé al cioccolato. Da provare indubbiamente",
      author: "Giulia",
    },
    {
      img: "assets/testimonial-client.png",
      content:
        "Birre ottime e panini buoni nel pane e nella farcitura, carne scelta. Locale informale e caldo. Ragazzi preparati e gentili. Patatine buone servite con più salse. Buoni i gelati e i sorbettie buono il soufflé al cioccolato. Da provare indubbiamente",
      author: "Giulia",
    },
  ]);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our client says</h1>
      <Carousel interval={1000}>
        {testimonials.map((testimonial) => {
          return (
            <Carousel.Item interval={5000}>
              <div style={styles.carouselContent}>
                <img src={testimonial.img} className="mb-3" />
                <p style={styles.carouselMessage}>‘’{testimonial.content}’’</p>
              </div>
              <Carousel.Caption>
                <p>-{testimonial.author}-</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
