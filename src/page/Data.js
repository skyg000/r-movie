import React from 'react'
import axios from 'axios';
export const Movie = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params:{api_key:'f89a6c1f22aca3858a4ae7aef10de967'}
})
export let totalDb = {
    title : ['movie','tv'],
    listT : ['upcoming','popular','top_rated'],
    imgL :'https://image.tmdb.org/t/p/original/',
    imgS : 'https://image.tmdb.org/t/p/w500/',
    dbAll : async function(){
        //전체 
        let a = Movie.get(`/${this.title[0]}/${this.listT[1]}`),
            b = Movie.get(`/${this.title[0]}/${this.listT[2]}`),
            c = Movie.get(`/${this.title[1]}/${this.listT[1]}`),
            d = Movie.get(`/${this.title[1]}/${this.listT[2]}`);
        let result = await Promise.all([a,b,c,d]) ;

            return{ 
                '인기 영화':result[0],
                '많이 본 영화':result[1],
                '인기 TV시리즈':result[2],
                '많이 본 TV시리즈':result[3]
            }
    },
    db_Movie : async function(s,n){
        //영화
        return await Movie.get(s,{params:{page:n}})
    },
    db_Tv : async function(s,n){
        //Tv
        return await Movie.get(s,{params:{page:n}})
    },
    db_search : async function(s,n){
        //Tv
        return await Movie.get(s,{params:{query:n}})
    }
}
function Data() {
    return (
        <>
            
        </>
    )
}

export default Data