import React from 'react'
import '../text/Text.modules.css'
import { useTranslation } from 'react-i18next'


const Text = () => {
  const {t}=useTranslation()

  return (
    <div className='text'>
      <div className='text-1'>
        <h1> {t("Join the club and get the benefits")}</h1>
        <p>{t("Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more")}</p>
        <div className='text-2'> 
            <input type="your@email.com" /><button>{t("Sign up")}</button>
        </div>
      </div>
    </div>
  )
}

export default Text
