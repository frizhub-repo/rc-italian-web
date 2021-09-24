import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Divider, Typography } from "@material-ui/core";
import classes from "./DiscountCarousel.module.css";
import { Skeleton } from "@material-ui/lab";
import ArrowBackIcon from "images/IconComponent/ArrowBackIcon";
import { ArrowForwardIcon } from "images/IconComponent/ArrowForwardIcon";
import { getReservationOffers } from "api/Public";

const DiscountCarousel = ({ setSelectedOffer, selectedOffer }) => {
  const [discounts, setDiscounts] = React.useState([]);
  const fetchDiscounts = async () => {
    try {
      const res = await getReservationOffers();
      setDiscounts(res?.data?.data);
    } catch (error) {
      console.log({ error });
    }
  };

  React.useEffect(() => {
    fetchDiscounts();
  }, []);

  const handleChangeReservationOffer = (offer) => {
    if (selectedOffer?._id === offer?._id) {
      setSelectedOffer({});
    } else {
      setSelectedOffer(offer);
    }
  };

  return (
    <div>
      {discounts?.length ? (
        <Carousel
          className={`carouselRoot `}
          swipeable={true}
          showStatus={false}
          showIndicators={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className={classes.forwardArrow}
            >
              <ArrowBackIcon />
            </button>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className={classes.backwordArrow}
            >
              <ArrowForwardIcon />
            </button>
          )}
        >
          {discounts?.map((discount) => (
            <div className={classes.carouselDiv}>
              <div
                className={`${classes.carousel} ${classes.rmvCarouselSpacing}`}
              >
                <div
                  style={{
                    width: "40%",
                    borderTopLeftRadius: "30px",
                    borderBottomLeftRadius: "30px",
                    display: "flex",
                  }}
                >
                  <img
                    alt="Offer"
                    src={`${process.env.REACT_APP_API_BASE_URL}/${discount?.imageUrl}`}
                    style={{
                      borderTopLeftRadius: "30px",
                      borderBottomLeftRadius: "30px",
                      backgroundSize: "cover",
                      backgroundPositionX: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "60%",
                    background: "#b29051",
                    color: "#fff",
                    borderTopRightRadius: "30px",
                    borderBottomRightRadius: "30px",
                    padding: "20px",
                  }}
                >
                  <Typography
                    variant="h4"
                    className={`${classes.discountTitle} ${classes.rmvdiscountTitleFont}`}
                  >
                    {discount?.title}
                  </Typography>
                  <Typography variant="h4">{discount?.description}</Typography>
                  {discount?.items?.length ? (
                    <>
                      <Divider className={classes.discountDivider} />
                      <div className="discount-custom-scroll">
                        {discount?.items?.map((item) => (
                          <Typography
                            variant="h5"
                            className={classes.titleSpacing}
                          >
                            {item}
                          </Typography>
                        ))}
                      </div>
                    </>
                  ) : null}
                  <Divider />
                  <div className={classes.actionBtnRoot}>
                    <Typography
                      variant="h4"
                      className={classes.discountPriceTxt}
                    >
                      {discount?.discountPrice &&
                        "€ " + discount?.discountPrice}
                    </Typography>
                    <button
                      className={classes.reserveBtn}
                      onClick={() => handleChangeReservationOffer(discount)}
                    >
                      {selectedOffer?._id === discount?._id
                        ? "Remove Offer"
                        : "Add offer"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <Skeleton
          variant="rect"
          height={400}
          className={classes.skeletongSpaing}
        />
      )}
    </div>
  );
};

export default DiscountCarousel;
