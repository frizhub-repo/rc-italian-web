import * as React from "react";

export default function GoogleMap({ classname = {} }) {
  return (
    <iframe
      width="100%"
      height="100%"
      frameBorder="0"
      title="map"
      marginHeight="0"
      marginWidth="0"
      scrolling="no"
      src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
      className={classname}
    ></iframe>
  );
}
