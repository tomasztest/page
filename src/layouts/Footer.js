import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <h2>stopka</h2>
      <Route
        path="/"
        exact
        render={props => {
          return (
            <p>
              Jesteś na <span>stornie głównej</span>
            </p>
          );
        }}
      />

      <Route
        path="/:page"
        exact
        render={props => (
          <>
            <p>
              Jesteś na <span>{props.match.params.page}</span>
            </p>
          </>
        )}
      />

      <Route
        path="/:page/:idProduct"
        exact
        render={props => (
          <>
            <p>
              Jesteś na <span>{props.match.url}</span>
            </p>
            <p>
              Jesteś na <span>{props.match.params.idProduct}</span>
            </p>
          </>
        )}
      />
    </div>
  );
};

export default Footer;
