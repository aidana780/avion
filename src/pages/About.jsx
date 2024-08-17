import React from 'react'
import "../pages/About.modules.css"
import Hove from '../components/hove/Hove'
import T from '../assets/image/img.png'
import Card from '../components/card/Card'
import IM from '../assets/image/imag.png'
import Footer from '../components/footer/Footer'
import { useTranslation } from 'react-i18next'

const About = () => {
    const{t}=useTranslation()
  return (
    <div>
      <div className='about'>
        <h1>{t("A brand built on the love of craftmanship quality and outstanding customer service")}</h1>
      </div>
      
        <div>
            <Hove/>
        </div>
        <div className='about-1'>
            <div>
                <img src={T} />
            </div>
            <div>
                <h1>{t("Our service isn’t just personal, it’s actually hyper personally exquisite")}</h1>
                <p>{t("When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.")}</p>
                <p>{t("Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the  hotbed for the London interior design community.")}</p>
                <button>Get in touch</button>
            </div>
        </div>
        <div>
            <div>
                <Card/>
            </div>
            <div className='about--'>
                <div className='about-2'>
                    <input type="text" /><button>Sign up</button>
                </div>
                <div>
                    <img src={IM} />
                </div>
            </div>
        </div>
        <div>
            <div>
                <Footer/>
            </div>
        </div>
       
    </div>
  )
}

export default About
