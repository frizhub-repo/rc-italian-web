import Modal from "@material-ui/core/Modal";
import ActionBox from "./ActionBox/ActionBox";
import * as React from "react";
import Account from "./Menus/Account";
import Customization from "./Menus/Customization";
import Setting from "./Menus/Setting";
import MenuSelector from "./MenuSelector/MenuSelector";
import classes from "./Styles.module.css";
import OrderHistory from "./Menus/OrderHistory";

export default function Settings() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function logout() {
    window.localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <div className={classes.root}>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={`${classes.modalStyle} shadow-lg`}>
          <h5 className={classes.modalText}>Are you sure?</h5>
          <div className={classes.btnsContainer}>
            <button
              className={`${classes.cancelBtn} shadow-md`}
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button className={`${classes.yesBtn} shadow-md`} onClick={logout}>
              Yes
            </button>
          </div>
        </div>
      </Modal>
      <section>
        <MenuSelector
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          setIsModalOpen={setIsModalOpen}
        />
      </section>
      <section className={classes.contentContainer}>
        {activeStep === 0 && <Account />}
        {activeStep === 1 && <OrderHistory />}
        {activeStep === 2 && <Customization />}
        {activeStep === 3 && <Setting />}
        <section>
          <div className={classes.secondaryColumn}>
            <p className={classes.message}>Ciao, Vergingetorige!</p>
            {activeStep === 1 && <ActionBox />}
          </div>
        </section>
      </section>
    </div>
  );
}
