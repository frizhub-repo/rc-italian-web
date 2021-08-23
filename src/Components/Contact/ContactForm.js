import React from "react";
import classes from "./contactForm.module.css";

export default function ContactForm() {
  return (
    <div>
      <form>
        <div className="row d-flex justify-content-between">
          <div className="col-sm-12 col-md-6 d-flex flex-column pb-4">
            <label className={classes.label}>Name</label>
            <input className={classes.input} type="text" />
          </div>
          <div className="col-sm-12 col-md-6 d-flex flex-column pb-4">
            <label className={classes.label}>Email</label>
            <input className={classes.input} type="text" />
          </div>
        </div>
        <div className="d-flex flex-column pb-4">
          <label className={classes.label}>Message</label>
          <input className={classes.input} type="text" />
        </div>
        <div>
          <button className={classes.button} type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
