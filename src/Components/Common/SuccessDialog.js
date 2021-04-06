import React from "react";
import { Modal } from "react-bootstrap";
import { makeStyles } from "@material-ui/styles";
import SuccessIcon from "../../images/checked (1).png";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "black",
    width: "100px",
    height: "40px",
    borderRadius: "6px",
    color: "#fff",
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: '30px'
  },
  heading: {
    fontSize: "30px",
    fontWeight: "600",
    textAlign: "center",
  },
  body: {
    padding: "40px",
  },
  infoBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  },
  textColor: {
    color: "rgba(245, 158, 11, 1)",
  },
  img: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
});

export default function SuccessModal({ show, handleClose, text, title }) {  
  const classes = useStyles();
  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className={classes.title}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={classes.body}>
        <div className={classes.img}>
          <img src={SuccessIcon} alt="Success icon" width="100px" height="100px" />
        </div>
        <p className={classes.heading}>{text}</p>
      </Modal.Body>
      <Modal.Footer>
        <button className={classes.btn} onClick={handleClose}>
          OK
        </button>
      </Modal.Footer>
    </Modal>
  );
}
