
import React from 'react'
import "../cd/Cd.modules.css"
import { useTranslation } from 'react-i18next'

const Cd = () => {
  const {t}=useTranslation()
  return (
    <div>
          <div className='cd'>
      <div className='cd-1'>
        <span><i class="bi bi-car-front-fill"></i></span>
        <h4>{t("Next day as standard")}</h4>
        <p>{t("Order before 3pm and get your order the next day as standard")}</p>
      </div>
      <div className='cd-2'>
        <span><i class="bi bi-check-circle"></i></span>
        <h4>{t("Made by true artisans")}</h4>
        <p>{t("Handmade crafted goods made with real passion and craftmanship")}</p>
      </div>
      <div className='cd-3'>
        <span><i class="bi bi-credit-card"></i></span>
        <h4>{t("Unbeatable prices")}</h4>
        <p>{t("For our materials and quality you won’t find better prices anywhere")}</p>
      </div>
      <div className='cd-4'>
        <span><i class="bi bi-tree"></i></span>
        <h4>{t("Recycled packaging")}</h4>
        <p>{t("We use 100% recycled packaging to ensure our footprint is manageable")}</p>
      </div>
    </div>
    </div>
  )
}

export default Cd

