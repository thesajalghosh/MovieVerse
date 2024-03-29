import React, { useState, useEffect } from 'react'
import './HeroBanner.css'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'


import useFetch from '../../../hooks/useFetch'
import Img from '../../../components/lazyLoadingImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'

import './HeroBanner.css'


const HeroBanner = () => {

  const [background, setBackground] = useState("");
  const [query, setquery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming")

  useEffect(() => {

    const bg = url.backdrop + data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;

    setBackground(bg)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const searchQueryHandler = (event) => {

    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
    }

  }

  return (
    <div className='heroBanner'>
      {!loading && <div className='backdrop'>
        <Img src={background} />

      </div>}
      <div className='opacity__layer'></div>

      <ContentWrapper>

        <div className='wrapper'>
          <div className='heroBanner__content'>
            <span className='title'>Welcome</span>
            <span className='subtitle'>Millions of movies, TV shows and people to discover. Explore now</span>
            <div className='search__input'>
              <input type='text' placeholder='search for a movie or tv shows ...'
                onChange={(e) => setquery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <button>Search</button>
            </div>

          </div>

        </div>
      </ContentWrapper>

    </div>
  )
}

export default HeroBanner
