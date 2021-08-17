import React from "react";

const useStyle = () => ({
  container: {
    width: "100%",
    border: "2px solid red",
    background: "white",
    borderRadius: "20px",
    padding: "5px 8px",
  },
  link: {
    color: "red",
    textDecoration: "underline",
  },
});

export default function AllergyAlert() {
  const styles = useStyle();

  return (
    <div
      style={styles.container}
      className="d-flex flex-column align-items-center justify-content-around"
    >
      <img src="assets/alert.png" />
      <small className="m-0">
        If you’ve got any allergies or intollerances (for you or any one of your
        friends)
      </small>
      <a href="#" style={styles.link}>
        CLICK HERE
      </a>
    </div>
  );
}
