import React from "react";
import { Carousel } from "react-bootstrap";
import ReserveTableForm from "./ReserveTableForm";
import ReserveTableMenu from "./ReserveTableMenu";
import "./reserveTableCard.css";

const useStyle = () => ({
  container: {
    backgroundColor: "white",
  },
  carousel: {},
});

export default function ReserveTableCard() {
  const styles = useStyle();

  return (
    <div style={styles.container} className="row">
      {/* left */}
      <div className="col-12 col-lg-6 px-0">
        {/* carousel */}
        <div className="row m-0">
          <Carousel style={styles.carousel} className="p-0 bg-dark">
            <Carousel.Item interval={5000}>
              <img className="d-block w-100" src="assets/carousel-img1.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="assets/carousel-img1.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="assets/carousel-img1.png" />
            </Carousel.Item>
          </Carousel>
        </div>
        {/* menu list */}
        <div className="d-none d-md-block row">
          <ReserveTableMenu />
        </div>
      </div>
      {/* right */}
      <div className="col-12 col-lg-6">
        <ReserveTableForm />
      </div>
    </div>
  );
}
