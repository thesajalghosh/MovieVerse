import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGFlN2IwMjkxNDkyMjg2NTA0YjYzMzdlNWIyNDMyNCIsInN1YiI6IjYzZmQ5YjYxOWYxYmU3MDA4NjllYjFmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rpx496KxZw9QTL-33ls_BwT9qkkKEa1M6VYD_25BB0o"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params) =>{

    try{

        const {data} = await axios.get(
            BASE_URL + url, {headers,params
            })
            return data;

    }
    catch(err){
        console.log(err);
        return err;

    }

}