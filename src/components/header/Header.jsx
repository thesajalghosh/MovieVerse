import React, { useState, useEffect } from 'react'
import './Header.css'
import { HiOutlineSearch } from 'react-icons/hi'
import { SlMenu } from 'react-icons/sl'
import { VscChromeClose } from 'react-icons/vsc'
import { useNavigate, useLocation } from 'react-router-dom'

import ContentWrapper from "../contentWrapper/ContentWrapper"
import logo from "../../assets/movie-logo.png"

const Header = () => {

  // const [show, setShow] = useState("top");
  // const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setquery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  const openSearch = () => {
    setMobileMenu(false)
    setShowSearch(true)
  }

  const openMobileMenu = () => {
    setMobileMenu(true)
    setShowSearch(false)
  }
  const searchQueryHandler = (event) => {

    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)

      setTimeout(() => {
        setShowSearch(false)
      }, 1000);
    }

  }

  const navigateHandlar = (type) => {
    if (type === "movie") {
      navigate("/explore/movie")
    }
    else {
      navigate("/explore/tv")
    }

  }

  console.log(mobileMenu)
  console.log(openMobileMenu)
  console.log(SlMenu)



  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""}`}>

      <div className='Header__container'>
        <div className='logo'>
          <img src={logo} alt='logo' onClick={() => {
            navigate("/")
          }} />
        </div>


        <div className='menuItems'>
          <div className='menuItem'><HiOutlineSearch onClick={openSearch} /></div>
          <div className='menuItem' onClick={() => { navigateHandlar("movie") }}>Movies</div>
          <div className='menuItem' onClick={() => { navigateHandlar("tv") }}>TV Shows</div>


        </div>

      
      <div className='mobileMenuItems'>
        <HiOutlineSearch onClick={openSearch} />
        {mobileMenu ? (<VscChromeClose onClick={() => {
          setMobileMenu(false)
        }} />) : (<SlMenu onClick={openMobileMenu} />)}


      </div>
</div>
      {showSearch && <div className='header__searchBar'>
        <ContentWrapper>
          <div className='header__search__input'>
            <input type='text' placeholder='search for a movie or tv shows ...'
              onChange={(e) => setquery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <VscChromeClose className='close__input' onClick={() => setShowSearch(false)} />
          </div>
        </ContentWrapper>

      </div>}
    </header>
  )
}

export default Header
