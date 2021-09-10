import * as React from "react";
import classes from "./Step.module.css";

function DiscountCard({ content, isActive, handleClick }) {
  return (
    <div className={classes.detailsCardContainer} onClick={handleClick}>
      <div className={classes.detailsCardContentContainer}>
        <div className={classes.detailsCardHeaderContainer}>
          {content?.name && (
            <div className={classes.detailsCardNameContainer}>
              <h5>{content.name}</h5>
            </div>
          )}
          <h5 className={classes.detailsCardHeader}>{content.header}</h5>
        </div>
        <div>
          <p style={{ textAlign: "start" }}>{content.description}</p>
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

export default function DiscountStep({ detail, setDetail }) {
  const [discounts, setDiscounts] = React.useState([
    {
      name: "-20%",
      header: "-20% on the checkout",
      description: "This discount could be at selected hour",
    },
    {
      name: "Bundle",
      header: "Fixed discount on selected plates",
      description: "This discount will be applied only on specific plates",
    },
  ]);

  const noDiscount = {
    header: "Don’t use any discounts",
    description: "No one Discounts will be used with this order",
  };

  function updateDiscount(id) {
    setDetail({ ...detail, discount: id });
  }

  return (
    <div className={classes.container}>
      <h3 className={classes.header}>Choose a Discount</h3>
      <div className={`${classes.contentContainer} custom-scroll-secondary`}>
        <div className="mx-2">
          {discounts.map((discount, index) => (
            <DiscountCard
              content={discount}
              isActive={index === detail?.discount}
              handleClick={() => updateDiscount(index)}
            />
          ))}
          {discounts.length && <h5 className={classes.secondaryHeader}>Or:</h5>}
          <div className="mt-2"></div>
          <DiscountCard
            content={noDiscount}
            isActive={detail?.discount === -1}
            handleClick={() => updateDiscount(-1)}
          />
        </div>
      </div>
    </div>
  );
}
