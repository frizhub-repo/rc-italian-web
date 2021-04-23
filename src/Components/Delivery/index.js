import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/index";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import Product from "./Product";
import Control from "./Control";
import Gallery from "../Gallery";
import Footer from "../Footer";
import axiosIntance from "../../utils/axios-configured";
import { useSelector } from "react-redux";
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  category: {
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
  },
  selected: {
    color: "#C8A97E",
    borderBottom: "5px solid #C8A97E",
  },
}));

function Delivery() {
  const classes = useStyles();
  const [item, setItem] = useState({});
  const [key, setKey] = useState(0);
  const [category, setCategory] = useState([]);
  const { loading } = useSelector((state) => state.loadingReducer);
  useEffect(() => {
    axiosIntance
      .get("/api/v1/product/customers/public")
      .then((res) => {
        setCategory(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar
        name={"Delivery"}
        bg={
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        }
      />
      <div className="container w-full  mt-5  mb-8 ">
        <div className="container d-flex  w-75">
          <div className=" w-2/3  mt-3 ml-4 mr-3">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="carousel-container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass="carousel-item-padding-30-px"
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 1,
                  partialVisibilityGutter: 0,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 0,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 1,
                  partialVisibilityGutter: 0,
                },
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <div className={"ml-4"}>
                <Card img={"bg-slides"} />
              </div>
              <div className={"ml-4"}>
                <Card img={"bg-slides"} />
              </div>
              <div className={"ml-4"}>
                <Card img={"bg-slides"} />
              </div>
            </Carousel>
            <div className="w-full divide-y divide-gray-300 divide-dashed ">
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                // partialVisible
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 4,
                    partialVisibilityGutter: 40,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 2,
                    partialVisibilityGutter: 30,
                  },
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {category?.map((categry, index) => (
                  <p
                    className={`${classes.category} ${
                      key === index && classes.selected
                    }`}
                    onClick={() => setKey(index)}
                  >
                    {categry?.category?.name}
                  </p>
                ))}
              </Carousel>
              {loading &&
                [1, 2, 3].map(() => (
                  <Skeleton
                    style={{ marginLeft: "28px", marginTop: "10px" }}
                    variant="rect"
                    width={500}
                    height={100}
                  />
                ))}
              {category &&
                category?.[key]?.products.map((product, index) => {
                  if (product?.title === item?.name) {
                    return (
                      <Product
                        product={product}
                        item={item}
                        setItem={setItem}
                      />
                    );
                  } else {
                    return <Product product={product} />;
                  }
                })}
            </div>
          </div>
          <div className=" w-1/3 mt-3   max-h-80 ">
            <Control setItem={setItem} />
          </div>
        </div>
      </div>
      <Gallery />
      <Footer bg={"white"} />
    </div>
  );
}

export default Delivery;
