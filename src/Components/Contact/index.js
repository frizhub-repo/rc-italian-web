import React from "react";
import Hero from "../Body/Hero";
import Touch from "./Touch";

export default function index() {
  return (
    <div>
      <section>
        <Hero
          heroImage="assets/contact-hero.png"
          showStatusBox={false}
          height="80vh"
        />
      </section>
      <section>
        <Touch />
      </section>
    </div>
  );
}
