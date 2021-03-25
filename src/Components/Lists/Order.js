import React, { useEffect, useState } from "react";
import Gallery from "../Gallery/index";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Table, Card } from "react-bootstrap";
import axiosIntance from "../../utils/axios-configured";
import { useSelector } from "react-redux";
import "../../App.css";

const ContentCard = ({ order }) => {
  return (
    <Card>
      <Card.Body>
        <div
          className="row"
          style={{
            justifyContent: "space-between",
            padding: "0px 15px 0px 15px",
          }}
        >
          <p>
            <b>{new Date(order?.createdAt).toLocaleString()}</b>
          </p>
          <p>{order?.total} €</p>
        </div>
        <Card.Text style={{ paddingLeft: "15px" }}>
          <div
            className="row"
            style={{
              justifyContent: "space-between",
              padding: "0px 15px 0px 15px",
            }}
          >
            <div>
              {order?.products?.map((odr) => (
                <span>
                  {odr?.quantity}x {odr?.product?.title}, {` `}
                </span>
              ))}
            </div>
            <div>
              <span
                style={{
                  textTransform: "capitalize",
                  color: "white",
                  borderRadius: "50rem",
                  backgroundColor:
                    order?.status === "pending"
                      ? "red"
                      : order?.status === "accepted" ||
                        order?.status === "completed"
                      ? "#008000"
                      : "limegreen",
                  padding: "6px",
                }}
              >
                {order?.status}
              </span>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

function Order() {
  const { loading } = useSelector((state) => state.loadingReducer);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axiosIntance
      .get("/api/v1/orders/customers")
      .then((res) => {
        setOrders(res?.data?.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  return (
    <div>
      <Navbar
        name={"My Orders"}
        bg={
          "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        }
      />
      <div className="container w-full  mt-5  mb-8 ">
        <h1 className={`text-center`}>Orders</h1>
        <div className="container d-flex  w-75">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <div className="container OverRide">
              <div className="column">
                {orders?.length &&
                  orders?.map((order, index) => (
                    <div key={index} className="mb-3">
                      <ContentCard order={order} />
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Gallery />
      <Footer bg={"white"} />
    </div>
  );
}

export default Order;
