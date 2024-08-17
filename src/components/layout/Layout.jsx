
import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Basket from "../../pages/Basket";
import Products from "../../pages/Products";
import ProductsDetail from "../../pages/ProductsDetail";
import PlantsPot from "../../pages/PlantsPot";
import Ceramics from "../../pages/Ceramics";
import Chairs from "../../pages/Chairs";
import Tableware from "../../pages/Tableware";
import Header from "../header/Header";
import "../../components/layout/Layout.modules.css";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("RU");

  const changeling = (language) => {
    setActive(language);
    console.log(language, "----lang");
    i18n.changeLanguage(language.toLowerCase());
  };

  return (
    <div className="container">
      <div className="lay">
        <i className="bi bi-search">
      
        </i>
        
        <div className="lay-1">
          <p>{t("Avion")}</p>
        </div>
        <div className="lay-2">
          <button
            className={active === "RU" ? "active" : ""}
            onClick={(e) => changeling(e.target.innerText)}
          >
            RU
          </button>
          <button
            className={active === "EN" ? "active" : ""}
            onClick={(e) => changeling(e.target.innerText)}
          >
            EN
          </button>
          <NavLink to={`/basket`}><i className="bi bi-cart3"></i>
          <span>0</span></NavLink>
          
          <i className="bi bi-person-circle"></i>
        </div>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetail/:id" element={<ProductsDetail />} />
        <Route path="/plantpot" element={<PlantsPot />} />
        <Route path="/ceramics" element={<Ceramics />} />
        <Route path="/chairs" element={<Chairs />} />
        <Route path="/tableware" element={<Tableware />} />
      </Routes>
    </div>
  );
};

export default Layout;
