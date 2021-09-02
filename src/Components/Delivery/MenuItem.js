import { addItem, setTotal } from "Components/actions";
import { useUserContext } from "Context/userContext";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { isEmpty } from "utils/common";
import messages from "utils/messages";
import classes from "./menuItem.module.css";

const useStyle = () => ({
  container: {
    margin: "5px 0px",
  },
  detailsContainer: {
    background: "#B29051",
    borderRadius: "20px 20px 0px 0px",
  },
  imageContainer: {
    background: "#272727",
    borderRadius: "20px",
  },
  image: {
    borderRadius: "20px",
  },
  itemHeader: {
    color: "white",
    fontWeight: "bold",
  },
  sizeContainer: {
    background: "#272727",
    color: "#B29051",
    borderRadius: "0px 0px 20px 20px",
  },
  qtySetter: {
    color: "#B29051",
    background: "#272727",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    padding: "0px",
  },
  qtyInput: {
    background: "white",
    color: "black",
    textAlign: "center",
  },
  basketContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#272727",
    borderRadius: "10px 0px 0px 10px",
    padding: "5px",
    marginTop: "5px",
    marginRight: "-4px",
    width: "100%",
    cursor: "pointer",
  },
  priceTextDecoration: {
    fontSize: "15px",
    lineHeight: "19px",
    color: "rgba(0, 0, 0, 0.5)",
    textDecorationLine: "line-through",
    marginRight: "10px",
  },
});

export default function MenuItem({
  product,
  offer = {},
  size = {},
  setDiscountList = {},
  discountList = {},
}) {
  const {
    customer: { _id: customerId },
  } = useUserContext();
  const dispatch = useDispatch();
  const styles = useStyle();
  const [price, setPrice] = useState(0);
  const [productSize, setProdctSize] = useState(null);
  const [qty, setQty] = useState(1);

  const discountedPrice = price > 0 ? price : 0;

  function handleQtyMinus() {
    if (qty > 1) setQty(qty - 1);
  }

  function handleQtyAdd() {
    setQty(qty + 1);
  }

  const handleChangeSize = (sizeObj) => {
    if (isEmpty(offer)) {
      setPrice(0);
      setProdctSize(sizeObj);
      setPrice(sizeObj?.price);
    }
  };

  useEffect(() => {
    if (size) {
      calculateDiscountedPrice();
      setProdctSize(size);
    }
  }, [size]);

  const calculateDiscountedPrice = () => {
    if (isEmpty(offer)) {
      setPrice(product?.sizes[0]?.price);
    } else {
      if (offer?.discountType === "flat") {
        setPrice(size?.price - offer?.discountPrice);
      } else if (offer?.discountType === "percentage") {
        setPrice(size?.price - (size?.price * offer?.discountPrice) / 100);
      } else {
        setPrice(size?.price);
      }
    }
  };

  function validateOffer(offer) {
    if (!offer?.isActivated || offer.isDeleted) {
      throw Error(messages.notFound("Offer"));
    }
    if (offer.totalDiscount === 0) {
      throw Error(messages.total_Disocunt);
    }
    if (Date.now() > new Date(offer.endDate)) {
      throw Error(messages.offerExpire);
    }

    const value =
      offer?.discountType === "bundle" ? "bundled" : offer?.discountType;
    let updatedDiscountList = [];
    for (const discount of discountList[value]) {
      if (discount.offer._id === offer?._id) {
        let customerExist = false;
        const updateCustomerUsage = offer?.customerUsage?.map(
          ({ customer, usage }) => {
            if (customer === customerId) {
              if (
                offer?.maxNoOfUsage === usage ||
                offer?.maxNoOfUsage < usage + 1
              ) {
                throw Error(messages.maximumNoOfUsage);
              }
              customerExist = true;
              return { usage: usage + 1, customer };
            } else {
              return { customer, usage };
            }
          }
        );
        if (!customerExist) {
          updateCustomerUsage.push({ customer: customerId, usage: 1 });
        }

        updatedDiscountList.push({
          ...discount,
          offer: {
            ...discount.offer,
            customerUsage: updateCustomerUsage,
            totalDiscount: discount.offer.totalDiscount - 1,
          },
        });
      } else {
        updatedDiscountList.push(discount);
      }
    }
    setDiscountList({
      ...discountList,
      [value]: updatedDiscountList,
    });
  }

  const addToCart = () => {
    try {
      const isDiscount = isEmpty(offer) ? false : offer.discountType;

      isDiscount && validateOffer(offer);

      const productObj = {
        product: product._id,
        name: product.title,
        price: discountedPrice,
        originalPrice: productSize?.price,
        quantity: qty,
        size: productSize,
        isDiscount,
        offer,
        bundledProduct: offer?.bundledProduct ?? [],
      };
      dispatch(addItem(productObj));
      dispatch(setTotal(discountedPrice * qty));
    } catch (error) {
      if (error.message) {
        toast.error(error.message);
        return;
      }
      toast.error("Error while adding product");
    }
  };

  return (
    <div className="d-flex flex-column" style={styles.container}>
      <div
        className="d-flex justify-content-between p-1"
        style={styles.detailsContainer}
      >
        {!isEmpty(offer) && (
          <div className={classes.discount_container}>
            <p className={classes.discount}>
              {offer?.discountType === "bundle"
                ? "1x" + offer?.bundledProduct?.length
                : offer?.discountType === "percentage"
                ? "-" + offer?.discountPrice + "%"
                : "-" + Math.round((size?.price - price) * 100) / 100 + "€"}
            </p>
          </div>
        )}
        {/* image container */}
        <div className="d-none d-sm-flex" style={styles.imageContainer}>
          <img
            style={styles.image}
            src={`${process.env.REACT_APP_API_BASE_URL}/${product?.images?.[0]}`}
            width={100}
          />
          <div className="d-flex flex-column justify-content-between p-1">
            <img
              className={product?.foodType?.vegan && classes.tag_un_active}
              src="assets/vegan.png"
              width={25}
            />
            <img
              className={product?.foodType?.glutenFree && classes.tag_un_active}
              src="assets/gluten-free.png"
              width={25}
            />
            <img
              className={product?.foodType?.spicy && classes.tag_un_active}
              src="assets/hot.png"
              width={25}
            />
          </div>
        </div>
        {/* detail container */}
        <div className="d-flex flex-column align-items-start px-1">
          <h5 style={styles.itemHeader}>{product?.title}</h5>
          <p className="m-0">{product?.ingredients?.map((e) => `${e}, `)}</p>
          {product?.allergies && (
            <small>Allergies: {product?.allergies?.map((e) => `${e}, `)}</small>
          )}
        </div>
        {/* price container */}
        <div className="d-flex flex-column align-items-end">
          <h5 style={styles.itemHeader}>
            {isEmpty(offer) ? (
              <span>€{discountedPrice}</span>
            ) : offer?.discountType === "bundle" ? (
              <span>€{size?.price}</span>
            ) : (
              <div>
                <span style={styles.priceTextDecoration}>€{size?.price}</span>
                <span>€{discountedPrice}</span>
              </div>
            )}
          </h5>
          <div style={styles.qtySetter}>
            <div>
              <button onClick={handleQtyMinus} className="px-1 m-0">
                -
              </button>
            </div>
            <div>
              <input
                value={qty}
                style={styles.qtyInput}
                type="text"
                size={1}
                disabled
              />
            </div>
            <div>
              <button onClick={handleQtyAdd} className="px-1 m-0">
                +
              </button>
            </div>
          </div>
          <div style={styles.basketContainer} onClick={addToCart}>
            <img src="assets/shopping-basket.png" width={40} />
          </div>
        </div>
      </div>
      {product?.sizes?.length > 1 && (
        <div
          style={styles.sizeContainer}
          className="d-flex justify-content-around p-1"
        >
          {product?.sizes?.map((sizeObj, index) => (
            <div
              onClick={() => handleChangeSize(sizeObj)}
              className={
                sizeObj?.title === productSize?.title
                  ? classes.size_active
                  : classes.size_un_active
              }
            >
              <small>{sizeObj?.title}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
