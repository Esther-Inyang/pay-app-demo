import React, { useContext } from "react";
import { AppContext } from "./context";
import phoneImg from "../images/phone.svg";

function Hero() {
  const contextItems = useContext(AppContext);
  console.log(contextItems);
  return <div>Hero</div>;
}

export default Hero;
