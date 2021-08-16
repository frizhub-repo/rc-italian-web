import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "../../actions/productActions";
import Gallery from "../Body/Gallery";
import Hero from "../Body/Hero";
import MenuSelection from "./MenuSelection";

function Menu() {
  const dispatch = useDispatch();
  const { productByCategory } = useSelector((state) => state.productReducer);
  const [key, setKey] = useState(0);

  useEffect(() => {
    dispatch(getProductByCategory());
  }, []);

  return (
    <div>
      <section>
        <Hero
          heroImage="assets/hero.png"
          showStatusBox={true}
          statusBoxFormat={2}
        />
      </section>
      <section>
        <MenuSelection />
      </section>
      <section>
        <Gallery />
      </section>
    </div>
  );
}

export default Menu;
