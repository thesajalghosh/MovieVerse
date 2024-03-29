import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import './SearchResult.css'

import { fetchDataFromApi } from '../../Utils/api';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
// import noResults from "../../assets/no-results.png"
import Spinner from '../../components/spinner/Spinner';
import MovieCard from '../../components/movieCard/MovieCard';



const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const {query} = useParams();

const fetchInitialData = () =>{
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) =>{
      setData(res)
      setPageNum((prev) => prev + 1)
      setLoading(false)
    })
}

// const fetchNextPageData = () =>{
//   fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) =>{
//     if(data.results){
//       setData({
//         ...data, results: [...data?.results, ...res.results]
//       })
//     } else {
//       setData(res)
//     }
//     setPageNum((prev) => prev + 1)
//   })

// }

useEffect(() =>{
    fetchInitialData();
       // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

console.log(loading)



  return (
    <div className='searchResultsPage'>
     {loading && <Spinner initial={true}/>}
     {!loading && (
       <ContentWrapper>
         {data?.results?.length > 0 ? (
            <>
              <div className='pageTitle'>
                {`Search ${data.total_results > 1 ? "results" : "results"} of '${query}'`}
              </div>
              <InfiniteScroll>
                {data.results.map((item, index) =>{
                  if(item?.media_type ==="person") return null;
                 else  return (
                    <MovieCard key={index} data={item}/>
                  )
                })}
              </InfiniteScroll>
            </>
         ):(
           <span className='resultNotFound'>
             Sorry, Results not found!
           </span>
         )}
       </ContentWrapper>
     )

     }
    </div>
  )
}

export default SearchResult
