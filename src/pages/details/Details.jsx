import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Recommendation from './carousels/Recommendation'
import Similar from './carousels/Similar'
import Cast from './cast/Cast'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'

import './Details.css'

import DetailsBanner from './detailsBanner/DetailsBanner'
import VideoSection from './videosSection/VideoSection';




const Details = () => {
 
  const {mediaType, id} = useParams();
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`)
  const {data: credits, loading: creditsLoading} = useFetch(`/${mediaType}/${id}/credits`)

console.log(data)

  return (
    <div className='details'>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideoSection data={data} loading={loading}/>
      <ContentWrapper><Similar mediaType={mediaType} id={id}/></ContentWrapper>
      <ContentWrapper><Recommendation mediaType={mediaType} id={id}/></ContentWrapper>
    </div>
  )
}

export default Details
