import React, { useEffect, useState } from "react";
import Gallery from "../Gallery/index";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Table } from "react-bootstrap";
import axiosIntance from "../../utils/axios-configured";
import { useSelector } from "react-redux";

function Reservation() {
  const { loading } = useSelector((state) => state.loadingReducer);
  const [reservation, setReservation] = useState([]);
  useEffect(() => {
    axiosIntance
      .get("/api/v1/reservations/customers")
      .then((res) => {
        setReservation(res?.data?.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  return (
    <div>
      <Navbar
        name={"My Reservations"}
        bg={
          "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        }
      />
      <div className="container w-full  mt-5  mb-8 ">
        <div className="container d-flex  w-75">
          {loading ? (
            "Loading..."
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Services</th>
                  <th>Number of People</th>
                  <th>Start Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {reservation &&
                  reservation?.map((reservation, index) => (
                    <tr key={reservation?._id}>
                      <td>{index + 1}</td>
                      <td style={{ textTransform: "capitalize" }}>
                        {reservation?.services}
                      </td>
                      <td>{reservation?.numberOfPeople}</td>
                      <td>
                        {new Date(reservation?.startTime).toLocaleString()}
                      </td>
                      <td>
                        <span
                          style={{
                            borderRadius: "50rem",
                            backgroundColor:
                              reservation?.status === "pending"
                                ? "red"
                                : reservation?.status === "accepted"
                                ? "#008000"
                                : "#F32013",
                            padding: "6px",
                          }}
                        >
                          {reservation?.status}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          )}
        </div>
      </div>
      <Gallery />
      <Footer bg={"white"} />
    </div>
  );
}

export default Reservation;
