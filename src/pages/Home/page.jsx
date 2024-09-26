import React from 'react'
import SubHeader from '../../components/layout/header/subHeader'
import MainHeader from "../../components/layout/header/mainHeader"


import MainFooter from '../../components/layout/footer/mainFooter'
import SubFooter from '../../components/layout/footer/subFooter'
import TopFooter from '../../components/layout/footer/topFooter'


const HomePage = () => {
  return (
    <div>
      <SubHeader/>
      <MainHeader/>


      <TopFooter/>
      <MainFooter/>
      <SubFooter/>


    </div>
  )
}

export default HomePage
