import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/AppContext";
import "../styles/Products.modules.css";
import "../pages/ProductsDetail";
import { NavLink } from "react-router-dom";

const Products = ({setImage}) => {
  const context = useContext(DataContext);
  const { product, getProduct } = context;


  return (
    <div className="product">
      {product?.slice(1, 5).map((el) => (
        <NavLink
          to={`/productdetail/${el.id}`}
          key={el.id}
          className={"navlink"}
        >
          <div>
            <img className="img" src={el.image} onClick={el.image}
              setImage={setImage} />
            <h2>{el.title}</h2>
            <p>{el.price}</p>
          </div>
        </NavLink>
      ))}
      <div></div>
    </div>
  );
};

export default Products;

