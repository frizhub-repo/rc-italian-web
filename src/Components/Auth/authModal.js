import React, { useState } from "react";
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import SignIn from "./signIn";
import SignUp from "./signUp";

const DialogContent = withStyles((theme) => ({
  root: {
    padding: "40px !important"
  },  
}))(MuiDialogContent);

export default function AuthModal({ open, handleClose }) {
  const [activeTab1, setActivetab1] = useState(true);
  const [activeTab2, setActivetab2] = useState(false);

  const check1 = () => {
    setActivetab2(false);
    setActivetab1(true);
  };

  const check2 = () => {
    setActivetab1(false);
    setActivetab2(true);
  };

  return (
    <Dialog
      maxWidth="xs"
      scroll="body"
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogContent style={{ borderTop: "9px solid #C8A97E" }}>
        {activeTab1 && <SignIn check2={check2} handleClose={handleClose} />}
        {activeTab2 && <SignUp check1={check1} handleClose={handleClose} />}
      </DialogContent>
    </Dialog>
  );
}
