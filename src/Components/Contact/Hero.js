import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { fetchAllResInfo } from "../../actions/appActions";
import { useSelector, useDispatch } from "react-redux";

export default function Hero() {
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state) => state.appReducer);
  const { loading } = useSelector((state) => state.loadingReducer);
  useEffect(() => {
    dispatch(fetchAllResInfo());
  }, [dispatch]);
  return (
    <section>
      <Navbar />
      <div
        style={{
          backgroundImage: "url(assets/contact-hero.png)",
          height: "75vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="assets/hero-logo.png"
          width={400}
          style={{ margin: "20px" }}
        />
      </div>
    </section>
  );
}
