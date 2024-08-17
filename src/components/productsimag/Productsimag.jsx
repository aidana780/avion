import React from "react";
import "../productsimag/Productsimag.modules.css";
import Basket from "../../pages/Basket";

const Productsimag = ({
  productImg,
  productName,
  productPrice,
  productDes,
  productDis,
  productCat,
  productWe,
  productHe,
  productDe,
}) => {
  const getbasket = () => {
    console.log(1543);
  };
  return (
    <div className="pro">
      <img src={productImg} />
      <div className="pro-1">
        <body>{productName}</body>
        <div>{productPrice}</div>
        <div>
          <p className="pro-2">{productDes}</p>
        </div>
        <div className="pro-3">{productDis}</div>
        <ul>
          <li className="pro-4"> {productCat}</li>
        </ul>
        <div className="pro-6">Dimensions</div>
        <div className="pro-5">
          <div className="pro-7">
            <p>Width</p>
            {productWe}
          </div>
          <div>
            <p>Height</p>
            {productHe}
          </div>
          <div className="pro-8">
            <p>Depth</p>
            {productDe}
          </div>
        </div>
        <div className="pro-9">
          <div className="pro-10"> Amount:</div>
          <button>-</button>
          <button>1</button>
          <button>+</button>
          <div className="pro-10-bt">
            <button onClick={getbasket}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productsimag;
