import React, { useEffect } from "react";
import { fetchAllResInfo } from "../../actions/appActions";
import { useSelector, useDispatch } from "react-redux";
import StatusBoxHome from "./StatusBoxHome";
import StatusBoxMenu from "./StatusBoxMenu";

function Hero({ heroImage, showStatusBox, statusBoxFormat, height }) {
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state) => state.appReducer);
  const { loading } = useSelector((state) => state.loadingReducer);
  useEffect(() => {
    dispatch(fetchAllResInfo());
  }, [dispatch]);
  return (
    <section>
      <div
        style={{
          backgroundImage: `url("${heroImage}")`,
          height: `${height ?? "100vh"}`,
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
        {showStatusBox &&
          (statusBoxFormat === "home" ? (
            <StatusBoxHome isOpened={true} />
          ) : (
            <StatusBoxMenu isOpened={true} />
          ))}
      </div>
    </section>
  );
}

export default Hero;
