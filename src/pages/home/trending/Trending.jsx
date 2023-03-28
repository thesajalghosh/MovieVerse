import { data } from 'browserslist'
import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from "../../../hooks/useFetch"
import Carousel from "../../../components/carousel/Carousel"


const Trending = () => {

  const [endpoint, setEndPoint] = useState("day");

  const {data, loading} = useFetch(`/trending/all/${endpoint}`)
  console.log(data)

    const onTabChange = (tab) =>{
        setEndPoint(tab === "Day" ? "day" : "week");
    }


  return (
    <div className="carouselSection">
    <ContentWrapper>
        <span className="carouselTitle">
           <div className='tranding__title'> Tranding </div>
        
        <SwitchTabs data={["Day", "week"]} onTabChange={onTabChange}/>
        </span>
        <Carousel data={data?.result} loading={loading}/>
    </ContentWrapper>
      
    </div>
  )
}

export default Trending
