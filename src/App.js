
import './App.css';
import { fetchDataFromApi} from "./Utils/api"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import Home from './pages/home/Home';
import Details from "./pages/details/Details"
import SearchResult from "./pages/searchResult/SearchResult"
import Explore from './pages/explore/Explore'
import PageNotFount from "./pages/404/PageNotFound"

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getApiConfiguration} from './store/homeSlice'


function App() {

  const dispatch = useDispatch();
  const {url} = useSelector((state)=>state.home)




useEffect(()=>{
  apitesting()
},[])


  const apitesting = ()=>{

    fetchDataFromApi('/movie/popular')
          .then((res) =>{
            console.log(res);
            dispatch(getApiConfiguration(res))
          })

  }
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/:mediaType/:id" element={<Details/>}/>
<Route path="/search/:query" element={<SearchResult/>}/>
<Route path="/elplore/:mediaType" element={<Explore/>}/>
<Route path="*" element={<PageNotFount/>}/>


    </Routes>


    </BrowserRouter>
  );
}

export default App;
