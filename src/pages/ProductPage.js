import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const ProcutPage = ({ match }) => {
  return (
    <>
      <div>strona produktów</div>
      <Product id={match.params.id} />
      <Link to="/products">Powrót</Link>
    </>
  );
};

export default ProcutPage;
