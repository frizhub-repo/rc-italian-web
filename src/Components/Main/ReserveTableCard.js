import React from "react";
import { Carousel } from "react-bootstrap";
import ReserveTableForm from "./ReserveTableForm";

const useStyle = () => ({
  container: {
    width: "80%",
    backgroundColor: "white",
  },
});

export default function ReserveTableCard() {
  const styles = useStyle();

  return (
    <div style={styles.container} className="row">
      {/* left */}
      <div className="col-12 col-lg-4 col-xl-6">
        {/* carousel */}
        <div className="row">
          <Carousel className="p-0">
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
        {/* <div className="row">
          <h1>Hello</h1>
        </div> */}
      </div>
      {/* right */}
      <div className="col-12 col-lg-8 col-xl-6">
        <ReserveTableForm />
      </div>
    </div>
  );
}
