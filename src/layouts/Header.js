import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Header.css";

import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";

const Header = () => {
  const images = [img1, img2, img3];
  const index = Math.floor(Math.random() * 3);

  const img = images[index];

  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img} alt="beach" />} />
        <Route path="/products" render={() => <img src={img1} alt="beach" />} />
        <Route path="/contact" render={() => <img src={img2} alt="beach" />} />
        <Route path="/login" render={() => <img src={img3} alt="beach" />} />
        <Route render={() => <img src={img} alt="beach" />} />
      </Switch>
      {/* <img src={img} alt="beach" /> */}
    </>
  );
};

export default Header;
