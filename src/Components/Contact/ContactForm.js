import React from "react";
import "./contactForm.css";

export default function ContactForm() {
  return (
    <div>
      <form>
        <div className="row d-flex justify-content-between">
          <div className="col-sm-12 col-md-6 d-flex flex-column pb-4">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="col-sm-12 col-md-6 d-flex flex-column pb-4">
            <label>Email</label>
            <input type="text" />
          </div>
        </div>
        <div className="d-flex flex-column pb-4">
          <label>Message</label>
          <input type="text" />
        </div>
        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}
