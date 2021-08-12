import React from "react";
import { Carousel } from "react-bootstrap";
import ReserveTableForm from "./ReserveTableForm";
import ReserveTableMenu from "./ReserveTableMenu";

const useStyle = () => ({
  container: {
    backgroundColor: "white",
  },
});

export default function ReserveTableCard() {
  const styles = useStyle();

  return (
    <div style={styles.container} className="row">
      {/* left */}
      <div className="col-12 col-lg-6">
        {/* carousel */}
        <div className="row">
          <Carousel className="p-0" interval={5000}>
            <Carousel.Item>
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
