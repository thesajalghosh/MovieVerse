import React, {useRef} from 'react'
import {BsFillArrowDownLeftCircleFill, BsFillArrowDownRightCircleFill} from "react-icons/bs" 
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import dayjs from "dayjs";

import ContentWrapper from '../contentWrapper/ContentWrapper';
import Img from "../lazyLoadingImage/Img"
import PosterFallback from "../../assets/no-poster.png"
import CircleRating from '../circleRating/CircleRating';

import "./Carousel.css";


const Carousel = ({data, loading, endpoint, title}) => {
  const CarouselContainer = useRef();

  const {url} = useSelector((state) => state.home);
  const navigate = useNavigate(); 

  const navigation = (dir) =>{

    const container = CarouselContainer.current
      const scrollAmount = dir === "left" ? container.scrollLeft - (container.offsetWidth + 30) : container.scrollLeft + (container.offsetWidth + 30)

      container.scrollTo({
        left:scrollAmount,
        behavior: "smooth"
      })
  }

  console.log(data)

  const skItem = () =>{
      return (
      <div className='skeletonItem'>
        <div className='posterBlock skeleton'></div>
        <div className='textBlock'>
          <div className='title skeleton'></div>
          <div className='title skeleton'></div>
        </div>
      </div>
      )
  }

  return (
    <div className="carousel">
    <ContentWrapper>
    {title && <div className="carouselTitle">{title}</div>}
        <BsFillArrowDownLeftCircleFill 
            className="carouselLeftNav arrow"
            onClick={() => navigation("left")}
        />
        <BsFillArrowDownRightCircleFill
            className="carouselRightNav arrow"
            onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className="carouselItems" ref={CarouselContainer}>
            {data?.map((item) =>{
              const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback
               return (
                <div key={item.id} className='carouselItem' onClick={()=>navigate(`/${item.media_type || endpoint}/${item.id}`)}>
                  <div className='posterBlock'>
                    <Img src={posterUrl}/>
                    <div className='rating__div'>
                    <CircleRating rating={item.vote_average.toFixed(1)}
                     
                    /> </div>
                  
                  </div>
                  <div className='textBlock'>
                    <span className='carousel__title'>
                      {item.title || item.name}
                    </span>
                    
                    <span className='date'>
                      {dayjs(item.release_Date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              )
            })}
        </div>
        ) : (
          <div className='loadingSkeleton'>
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
          </div>)}

    </ContentWrapper>
      
    </div>
  )
}

export default Carousel
