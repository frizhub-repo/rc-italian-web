import React from "react";
import ContactForm from "./ContactForm";
import classes from "./contactForm.module.css";

const useStyle = () => ({
  container: {
    background: "#272727",
    padding: "20px 60px",
  },
  header: {
    fontFamily: "Clicker Script",
    fontSize: "10vw",
    color: "#B29051",
  },
  formContainer: {
    padding: "20px",
    border: "5px solid #1d1d1d",
    borderRadius: "20px",
  },
  contactDetail: {
    width: "100%",
    margin: "20px 0px",
    padding: "20px 30px",
    border: "5px solid #1d1d1d",
    borderRadius: "20px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default function Touch() {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Keep in touch with us</h1>
      <div style={styles.formContainer} className="row">
        <div className="col-sm-12 col-lg-6">
          <ContactForm />
        </div>
        <div className="col-sm-12 col-lg-6">
          <div>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              className={classes.iframe}
            ></iframe>
            <div style={styles.contactDetail}>
              <p>
                <span className={classes.title}>Address: </span>Vis mario rossi
                Milan Italy
              </p>
              <p>
                <span className={classes.title}>Email: </span>starters@cafe.com
              </p>
              <p>
                <span className={classes.title}>Phone: </span>33344455566
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
