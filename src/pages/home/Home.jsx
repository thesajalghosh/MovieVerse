import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import './Home.css'
import Tranding from "./trending/Trending"
// import SwitchTabs from '../../components/switchTabs/SwitchTabs'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'



const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Tranding/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home
