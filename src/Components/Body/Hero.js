import React, { useEffect } from "react";
import { fetchAllResInfo } from "../../actions/appActions";
import { useSelector, useDispatch } from "react-redux";
import StatusBox1 from "./StatusBox1";
import StatusBox2 from "./StatusBox2";

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
          (statusBoxFormat === 1 ? (
            <StatusBox1 isOpened={true} />
          ) : (
            <StatusBox2 isOpened={true} />
          ))}
      </div>
    </section>
  );
}

export default Hero;
