import React, { useContext } from "react";
import { AppContext } from "./context";
import phoneImg from "../images/phone.svg";
import "../index.css";

function Hero() {
  const { closeSubmenu } = useContext(AppContext);

  return (
    <section className="hero-section">
      <div className="hero-items-container">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes-from startups to fortune 500s -
            use Stripes's software and APIs to accept payments, send payouts,
            and manage their businesses online.
          </p>
          <button className="hero-btn">Start now</button>
        </article>

        <article className="phone-image">
          <img src={phoneImg} alt="" />
        </article>
      </div>
    </section>
  );
}

export default Hero;
