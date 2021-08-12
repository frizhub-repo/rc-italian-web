import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import StatusBox from "./StatusBox";
import { fetchAllResInfo } from "../../actions/appActions";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton } from "@material-ui/lab";
import { Link } from "react-router-dom";

function Hero() {
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
          backgroundImage: "url(assets/hero.png)",
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="assets/hero-logo.png"
          width={400}
          style={{ margin: "20px" }}
        />
        <StatusBox isOpened={true} />
      </div>
    </section>
  );
}

export default Hero;
