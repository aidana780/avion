import React from 'react'
import Ceramics from '../components/ceramics/Ceramics'
import Products from './Products'
import Teble from '../components/teble/teble'
import Card from '../components/card/Card'
import Text from '../components/text/Text'
import Hove from '../components/hove/Hove'
import Footer from '../components/footer/Footer'


const Home = () => {
  return (
    <div>
      <Teble/>
      <Card/>
      <Ceramics/>
       <Products/>
      <Text/>
      <Hove/>
      <Footer/>
    </div>
  )
}

export default Home
