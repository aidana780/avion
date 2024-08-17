
import React, { useTransition } from 'react'
import Botton from '../botton/Botton'
import '../teble/Teable.modules.css'
import RO from '../../assets/image/Right.image.png'
import { useTranslation } from 'react-i18next'




const Teble = () => {
  const {t}=useTranslation()

  return (
    <div className='teble'>
      <div className='teble-1'>
        <div>
        <h1>{t("The furniture brand for the future, with timeless designs")}</h1>
        <div>{<Botton/>}</div>
        <p>{t('A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies')}.</p>
         </div>  
      </div>
      <div>
       <img  className='ima' src={RO} />
       </div>
    </div>
  )
}

export default Teble
