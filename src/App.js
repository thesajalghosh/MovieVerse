
import './App.css';
import { fetchDataFromApi} from "./Utils/api"
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
    <div className="App">
    App
    {url?.total_pages}
      
    </div>
  );
}

export default App;
