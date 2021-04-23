import React, { useEffect, useState } from "react";
import Gallery from "../Gallery/index";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Menu1 from "./menu1";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "../../actions/productActions";

function Menu() {
  const dispatch = useDispatch();
  const { productByCategory } = useSelector((state) => state.productReducer);
  const [key, setKey] = useState(0);

  useEffect(() => {
    dispatch(getProductByCategory());
  }, []);

  return (
    <div>
      <Navbar
        name={"The menu"}
        bg={
          "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        }
      />
      <div className="container w-full  mt-5  mb-8 ">
        <div className="container d-flex  w-75">
          <div className=" w-1/4 mt-3 bg-gray-900 p-4 max-h-80 divide-y divide-gray-100">
            {productByCategory &&
              productByCategory?.map((menu, index) => (
                <p
                  className={` mb-4 text-xs text-left  cursor-pointer py-2 ${
                    key === index ? "text-gold" : "text-white"
                  } `}
                  onClick={() => setKey(index)}
                >
                  {menu?.title}
                </p>
              ))}
          </div>
          <div className=" w-52/3 flex-grow-1 mt-3 ml-4">
            {
              <Menu1
                name={productByCategory?.[key]?.title}
                img={"bg-menu-1"}
                productByCategory={productByCategory?.[key]?.items}
              />
            }
          </div>
        </div>
      </div>
      <Gallery />
      <Footer bg={"white"} />
    </div>
  );
}

export default Menu;
