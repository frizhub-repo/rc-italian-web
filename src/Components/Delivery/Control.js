import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axiosIntance from "../../utils/axios-configured";
import { removeOrderItems } from "../actions";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router";

function Control() {
  const total = useSelector((state) => state.orders).total;
  const items = useSelector((state) => state.orders).items;
  const minimum = useSelector((state) => state.orders).minimum;
  const delivery = useSelector((state) => state.orders).delivery;
  const { loading } = useSelector((state) => state.loadingReducer);
  const disp = useDispatch();
  const history = useHistory();

  const orderNow = () => {
    items.length > 0 && history.push("/complete/purchase");
    // items.length > 0 &&
    //   axiosIntance
    //     .post("/api/v1/orders/customers", { products: items })
    //     .then((res) => {
    //       toast.success("Order created successfully");
    //       disp(removeOrderItems());
    //       console.log(res);
    //     })
    //     .catch((err) => console.log(err));
  };

  return (
    <section className="w-full p-4 border border-gray-300">
      <div className="mb-3">
        <p className="text-xs text-left text-gray-500 mb-1">Total</p>
        <div className="flex justify-content-between">
          <h2 className="text-lg text-gold text-left flex-grow-1 font-weight-bold">
            €{total}
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </div>
      </div>
      <div>
        {minimum - total > 0 && (
          <p className="text-xs text-left text-gray-500 mt-1 mb-3">
            €{minimum - total} to reach the minimum order
          </p>
        )}
        <p className="text-black text-left text-sm mt-1">Home delivery</p>

        {items.length > 0 && (
          <div className=" w-full p-2 mt-2 border border-gray-300">
            {items.map((item) => {
              return (
                <div className="flex justify-content-between w-full">
                  <div className="w-1/6 px-1">
                    <p className="text-xs text-left ">x{item.quantity}</p>
                  </div>
                  <div className="flex-grow-1 flex justify-content-between px-1 w-full">
                    <div>
                      <p className="text-gray-500 text-left text-xs mb-1">
                        {item.name}
                      </p>
                      <div className="flex justify-content-start ">
                        <button className="text-xs text-left border-0 bg-white text-black mr-1 w-8">
                          Edit
                        </button>
                        <button className="text-xs text-left border-0 bg-white text-black mr-1 w-12">
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="flex-grow-1 ml-4">
                      <p className="text-black mb-0  text-xs text-right">
                        €{item.price}
                      </p>
                      <p className="text-gold text-xs text-right">
                        Ingredients
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="flex justify-content-between mt-2">
        <p className="flex-grow-1 text-left text-xs text-black">Subtotal</p>
        <p className="text-left text-xs text-black">{total} €</p>
      </div>
      <div className="flex justify-content-between">
        <p className="flex-grow-1 text-left text-xs text-black">Delivery</p>
        <p className="text-left text-xs text-black">{delivery} €</p>
      </div>
      <div className="flex justify-content-between ">
        <p className="flex-grow-1 text-left text-xs text-black">Total</p>
        <p className="text-left text-xs text-black">{total + delivery} €</p>
      </div>
      <button
        className="w-full rounded-pill bg-black text-white text-center text-xs py-2 font-weight-light"
        onClick={orderNow}
        disabled={loading}
      >
        ORDER NOW
      </button>
    </section>
  );
}

export default Control;
