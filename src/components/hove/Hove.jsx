import React from 'react'
import '../hove/Hove.modules.css'
import LO from "../../assets/image/Image .png"
import { useTranslation } from 'react-i18next'

const Hove = () => {
  const{t}=useTranslation()
  return (
    <div className='hove'>
        <div className='hove-1'>
            <h1>{t("From a studio in London to a global brand with over 400 outlets")}</h1>
            <p>{t("When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.")}</p>
            <p>{t("Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.")}</p>
            <button  className='bu'>Get in touch</button>
        </div>
        <div>
            <img className='imag' src={LO} />
        </div>
      
    </div>
  )
}

export default Hove
