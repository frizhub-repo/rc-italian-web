import { getHotDeals } from "api/Public";
import React from "react";
import classes from "./discountGenre.module.css";
import MenuList from "./MenuList";
import { Backdrop, CircularProgress } from "@material-ui/core";

const useStyle = () => ({
  container: {
    marginTop: "30px",
  },
  backdrop: {
    zIndex: 1,
    color: "#fff",
  },
});

export default function DicountGenre() {
  const styles = useStyle();
  const [activeStep, setActiveStep] = React.useState(0);
  const [discountList, setDiscountList] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const getHotDealsFn = async () => {
    setLoading(true);
    try {
      const res = await getHotDeals();
      setDiscountList(res?.data?.data);
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getHotDealsFn();
  }, []);

  const options = ["Bundle", "Flat", "%"];

  return (
    <div style={styles.container}>
      <div className="d-flex justify-content-between">
        {options.map((option, index) => (
          <div
            onClick={(e) => setActiveStep(index)}
            className={`${classes.option} ${
              activeStep === index
                ? classes.option_active
                : classes.option_un_active
            }`}
          >
            <h5>{option}</h5>
          </div>
        ))}
      </div>
      {activeStep === 0 && (
        <MenuList
          products={discountList?.bundled}
          discountList={discountList}
          setDiscountList={setDiscountList}
        />
      )}
      {activeStep === 1 && (
        <MenuList
          products={discountList?.flat}
          discountList={discountList}
          setDiscountList={setDiscountList}
        />
      )}
      {activeStep === 2 && (
        <MenuList
          products={discountList?.percentage}
          discountList={discountList}
          setDiscountList={setDiscountList}
        />
      )}
      <Backdrop style={styles.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
