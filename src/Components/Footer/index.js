import React from "react";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import { Box, Divider } from "@material-ui/core";

function Footer({ bg }) {
  return (
    <footer
      className={`text-gray-700 body-font w-full bg-${bg} divide-y divide-gray-300 mt-0`}
    >
      <Box>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              style={{
                width: "77px",
                height: "76px",
                borderRadius: "50px",
                display: "flex",
                opacity: "0.9",
                background: "#282828",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <RestaurantMenuIcon
                style={{ color: "white", fontSize: "54px" }}
              />
            </Box>
            <label
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                marginTop: "7px",
                marginBottom: "0px",
              }}
            >
              RESTO LOGO
            </label>
            <label
              style={{ fontSize: "7px", fontWeight: "500", lineHeight: "1px" }}
            >
              Teglire goes here
            </label>
          </div>
          <Box style={{ opacity: "0.9" }}>
            <p
              style={{ marginBottom: "5px" }}
              className="mt-2  text-xs  text-gray-500"
            >
              A barbecue grill is a device that cooks food by applying heat from
              below. There
            </p>
            <p
              style={{ marginBottom: "5px" }}
              className="text-xs  text-gray-500"
            >
              are several varities of grills, with most falling into one of two
              categories gas-
            </p>
            <p className="text-xs text-gray-500">fuel or charcoal</p>
          </Box>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
        <Divider style={{ margin: "58px 234px 31px 234px", opacity: "0.7" }} />
        <div style={{ diplay: "flex", justifyContent: "center" }}>
          <p
            style={{ opacity: "0.9", fontSize: "14px" }}
            className="text-gray-500"
          >
            © 2021- Resto logo Restaurants
          </p>
        </div>
      </Box>
    </footer>
  );
}

export default Footer;
