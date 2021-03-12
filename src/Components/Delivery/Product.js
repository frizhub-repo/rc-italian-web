import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem, setTotal } from "../actions";

function Product({ product }) {
  const [count, setCount] = useState(0);
  const disp = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (count > 0) {
      const item = {
        product: product._id,
        price: product.price,
        quantity: count,
        name: product.title,
      };
      const total = count * product.price;
      disp(addItem(item));
      disp(setTotal(total));
      setCount(0);
    }
  };
  return (
    <section className="text-gray-700 body-font mt-0  h-28 w-full mb-8">
      <div className="px-2 py-4">
        <div className="  flex  align-content-center m-2">
          <img
            alt="ecommerce"
            className="lg:w-1/3 w-full h-24 object-cover object-center rounded"
            src={process.env.REACT_APP_LOCAL_URL + "/" + product.images[0]}
          />
          <div className="lg:w-1/2 w-full px-3   flex-grow-1">
            <div className="d-flex w-full justify-content-between ">
              <h1 className="text-gray-500 text-sm text-left title-font font-medium mb-1 flex-grow-1">
                {product.title}
              </h1>
              <span className=" font-medium text-sm  text-gold">
                {product.price}
              </span>
            </div>
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={
                <Tooltip id={`tooltip-bottom`}>{product.description}</Tooltip>
              }
            >
              <p
                className="leading-relaxed text-xs mb-0 text-left text-gray-400 font-weight-light"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {product.description}
              </p>
            </OverlayTrigger>
            <div className="flex  items-center mt-1  ">
              <div className="flex  items-center">
                <div className="d-flex justify-content-around">
                  <form onSubmit={handleSubmit}>
                    <input
                      value={count}
                      type="number"
                      min="0"
                      onChange={(e) => setCount(e.target.value)}
                      className={
                        " border border-gray-300  p-1 rounded max-w-24 mr-1 ml-0 text-xs w-12"
                      }
                    />
                    <button className="h-6 text-black border border-gray-300 text-center   text-xs focus:outline-none py-1 px-4 rounded">
                      Add
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
