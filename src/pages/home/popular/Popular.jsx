
import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from "../../../hooks/useFetch"
import Carousel from "../../../components/carousel/Carousel"


const Popular = () => {

  const [endpoint, setEndPoint] = useState("movie");

  const {data, loading} = useFetch(`/${endpoint}/popular`)
  console.log(data)

    const onTabChange = (tab) =>{
        setEndPoint(tab === "Movies" ? "movie" : "tv");
    }


  return (
    <div className="carouselSection">
    <ContentWrapper>
        <span className="carouselTitle">
           <div className='tranding__title'> What's Popular </div>
        
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange}/>
        </span>
        <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </ContentWrapper>
      
    </div>
  )
}

export default Popular
