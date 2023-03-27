import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import './Home.css'
import Tranding from "./trending/Trending"
import SwitchTabs from '../../components/switchTabs/SwitchTabs'


const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Tranding/>
    </div>
  )
}

export default Home
