import React from 'react'
import '../footer/Footer.modules.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'



const Footer = () => {
  const {t}=useTranslation()
  return (
    <div className='footer'>
      <div className='uls'>
      <div>
        <ul>
          <li>{t("Menu")}</li>
          <li>{t("New arrivals")}</li>
          <li>{t("Best sellers")}</li>
          <li>{t("Recently viewed")}</li>
          <li>{t("Popular this week")}</li>
          <NavLink to={"products"}>{t("All products")}</NavLink>
        </ul>
      </div>
      <div>
        <ul>
          <li>{t("Categories")}</li>
          <li>{t("Crockery")}</li>
          <li>{t("Furniture")}</li>
          <li>{t("Homeware")}</li>
          <li>{t("Plant pots")}</li>
          <li>{t("Chairs")}</li>
          <li>{t("Crockery")}</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>{t("Our company")}</li>
          <NavLink to={"about"} >{t("About us")}</NavLink>
          <li>{t("Vacancies")}</li>
          <li>{t("Contact us")}</li>
          <li>{t("Privacy")}</li>
          <li>{t("Returns policy")}</li>
        </ul>
      </div>
      <div className='list'>
        <body>{t("Join our mailing list")}</body>
        <div className='inp'><input type="text" placeholder='your@email.com' /><button>Sign up</button></div>
      </div>
      </div><hr />
       <div className='LTD' >
          <body>{t("Copyright 2022 Avion LTD")}</body>
          <div className='icons'>
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-facebook"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-skype"></i>
              <i class="bi bi-twitter"></i>
              <i class="bi bi-pinterest"></i>
          </div>
       </div>
    </div>
  )
}

export default Footer