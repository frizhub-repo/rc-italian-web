import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  footerRoot: {
    background: "#b29051",
    color: "#fff",
    padding: "20px 20px 10px 20px",
    fontWeight: "normal",
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
  heading: {
    fontSize: "22px",
    textTransform: "uppercase",
  },
  uncleSammyTxt: {
    textAlign: "left",
    paddingTop: "30px",
  },
  subscribeRoot: {
    paddingTop: "10px",
  },
  txtContainer: {
    flex: 1,
    padding: "20px 20px 0 20px",
  },
  leftRightBorder: {
    borderLeft: "3px solid #fff",
    borderRight: "3px solid #fff",
  },
  vatNumber: {
    fontWeight: "bold",
  },
  subscribeBtnRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "20px",
  },
  subscribeTxt: {
    fontStyle: "italic",
    fontSize: "14px",
  },
  emailbtn: {
    padding: "10px",
    color: "rgb(99, 99, 99)",
    background: "white",
    borderRadius: "5px 5px 0px 0px",
    margin: "0px",
    minWidth: "200px",
  },
  subscribeBtn: {
    padding: "10px",
    background: "rgb(39, 39, 39)",
    borderRadius: "0px 0px 5px 5px",
    margin: "0px",
    minWidth: "200px",
  },
  termCondition: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  socialImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "15px",
  },
  divider: {
    borderTop: "3px solid",
    marginTop: "20px",
  },
  allRight: {
    marginTop: "10px",
    textAlign: "left",
    fontStyle: "italic",
  },
  newsLetter: {
    marginBottom: "10px",
  },
  termCond: {
    marginTop: "20px",
  },
  allRightTxt: {
    fontSize: "14px",
  },
});
