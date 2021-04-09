import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import { Box, Divider, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialogTopBorder: {
    borderTop: "9px solid #C8A97E",
  },
  tab: {
    display: "flex",
  },
  tabTextColor: {
    fontSize: "15px",
    cursor: "pointer",
  },
  tabBorderColor: {
    borderBottom: "4.3px solid #C8A97E",
    color: "#C8A97E",
  },
  tabSpacing: {
    marginLeft: "35px",
  },
  categoriesWrapper: {
    position: "relative",
    width: "100px",
    height: "100px",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  categoryInput: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 55,
    opacity: 1,
  },
}));

const DialogContent = withStyles((theme) => ({
  root: {
    padding: "30px 40px !important",
  },
}))(MuiDialogContent);

export default function IngredientsDialog({ open, setOpen }) {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Dialog
      maxWidth="xs"
      scroll="body"
      onClose={() => setOpen(false)}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogContent className={classes.dialogTopBorder}>
        <Box className={classes.tab}>
          <Typography
            onClick={() => setActiveTab(0)}
            className={`${activeTab === 0 && classes.tabBorderColor} ${
              classes.tabTextColor
            }`}
          >
            Select Promotion
          </Typography>
          <Typography
            onClick={() => setActiveTab(1)}
            className={`${activeTab === 1 && classes.tabBorderColor} ${
              classes.tabTextColor
            } ${classes.tabSpacing}`}
          >
            Your Ingredients
          </Typography>
        </Box>
        <Divider />
        <Box style={{ display: "flex" }}>
          <div className={classes.categoriesWrapper}>
            <img
              className={classes.img}
              alt="coke"
              src="https://66.media.tumblr.com/4f3cbb1b66a76a19a9794a162373abc5/tumblr_inline_n258pbAEBc1qhwjx8.png"
            />

            <input
              className={classes.categoryInput}
              type="checkbox"
              checked
              id="checkID"
            />
          </div>
          <div className={classes.categoriesWrapper}>
            <img
              className={classes.img}
              alt="Pepsi"
              src="https://66.media.tumblr.com/4f3cbb1b66a76a19a9794a162373abc5/tumblr_inline_n258pbAEBc1qhwjx8.png"
            />

            <input
              className={classes.categoryInput}
              type="checkbox"
              checked
              id="checkID"
            />
          </div>
          <div className={classes.categoriesWrapper}>
            <img
              className={classes.img}
              alt="Sprite"
              src="https://66.media.tumblr.com/4f3cbb1b66a76a19a9794a162373abc5/tumblr_inline_n258pbAEBc1qhwjx8.png"
            />

            <input
              className={classes.categoryInput}
              type="checkbox"
              checked
              id="checkID"
            />
          </div>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
