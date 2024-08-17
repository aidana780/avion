import React from 'react'
import Cd from '../cd/cd'
import "../card/Card.modules.css"
import { useTranslation } from 'react-i18next'

const Card = () => {
  const {t}=useTranslation()
  return (
    <div>
      <div className='card'>
        <h1>{t("What makes our brand different")}</h1>
      </div>
      <div className='card-1'><Cd/></div>
    </div>
  )
}

export default Card
