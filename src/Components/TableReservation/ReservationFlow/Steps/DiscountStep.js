import * as React from "react";
import classes from "./Step.module.css";
import { CircularProgress } from "@material-ui/core";
import { useUserContext } from "Context/userContext";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { reserveTable } from "api/customer";

function DiscountCard({ content, isActive, handleClick }) {
  return (
    <div className={classes.detailsCardContainer} onClick={handleClick}>
      <div className={classes.detailsCardContentContainer}>
        <div className={classes.detailsCardHeaderContainer}>
          {content?.discountPrice && (
            <div className={classes.detailsCardNameContainer}>
              <h5>-{content?.discountPrice}%</h5>
            </div>
          )}
          <h5 className={classes.detailsCardHeader}>{content?.title}</h5>
        </div>
        <div>
          <p style={{ textAlign: "start" }}>{content?.description}</p>
        </div>
      </div>
      <div
        className={`${classes.detailsCardSelector} ${
          isActive && classes.detailsCardSelector_active
        } shadow-md`}
      ></div>
    </div>
  );
}

export default function DiscountStep({ offers, parameters, setParameters }) {
  const [chooseOffer, setChooseOffer] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { token } = useUserContext();
  const history = useHistory();

  React.useEffect(() => {
    for (const offer of offers) {
      debugger;
      let numPeople = parseInt(parameters?.people?.count);
      const isPeopleExist =
        offer?.numberOfPeople?.includes(numPeople) ||
        (offer?.peopleGreaterThanSix && numPeople >= 6);
      let isDateExist = false;
      for (
        let date = new Date(offer?.startDate);
        date <= new Date(offer?.endDate);
        date.setDate(date.getDate() + 1)
      ) {
        if (
          new Date(date).toLocaleDateString() ===
          new Date(parameters?.date?.value).toLocaleDateString()
        ) {
          isDateExist = true;
        }
      }
      let isSlotExist = false;
      if (
        offer?.hourlyTimeSlots?.includes(parameters?.time?.slot) ||
        (parameters?.time?.slot >= offer?.groupTimeSlot?.startHour &&
          parameters?.time?.slot <= offer?.groupTimeSlot?.endHour)
      ) {
        isSlotExist = true;
      }
      if (isPeopleExist && isDateExist && isSlotExist) {
        setChooseOffer((prevOffer) => [...prevOffer, offer]);
      }
    }
  }, []);

  const noDiscount = {
    title: "Don’t use any discounts",
    description: "No one Discounts will be used with this order",
  };

  function updateDiscount(discount) {
    setParameters({ ...parameters, discount });
  }

  const createReservation = async () => {
    setLoading(true);
    try {
      if (!token) {
        toast.info("Please login first");
        history.push("/signIn");
        return;
      }
      if (!parameters?.discount) {
        toast.error("Please choose discount");
        return;
      }
      const payload = {
        startTime: parameters?.date?.value,
        numberOfPeople: parseInt(parameters?.people?.count),
        timeSlot: parameters?.time?.slot,
        services: parameters?.time?.name,
        offer: parameters?.discount === -1 ? null : parameters?.discount,
      };
      const res = await reserveTable(payload);
      toast.success("Reservation has been created successfully");
      setLoading(false);
    } catch (error) {
      toast.error("Error while creating offer");
      console.log({ error });
      setLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      <h3 className={classes.header}>Choose a Discount</h3>
      <div className={`${classes.contentContainer} custom-scroll-secondary`}>
        <div className="mx-2">
          {chooseOffer?.length > 0 &&
            chooseOffer?.map((discount, index) => (
              <DiscountCard
                content={discount}
                isActive={discount?._id === parameters?.discount?._id}
                handleClick={() => updateDiscount(discount)}
              />
            ))}
          {chooseOffer?.length > 0 && (
            <h5 className={classes.secondaryHeader}>Or:</h5>
          )}
          <div className="mt-2"></div>
          <DiscountCard
            content={noDiscount}
            isActive={parameters?.discount === -1}
            handleClick={() => updateDiscount(-1)}
          />
        </div>
      </div>
      <div
        className={classes.createReservationBtnRoot}
        onClick={createReservation}
      >
        <button className={classes.createReservationBtn}>
          {loading && (
            <CircularProgress
              color="inherit"
              size={20}
              style={{ marginRight: "8px" }}
            />
          )}
          Create Reservation
        </button>
      </div>
    </div>
  );
}