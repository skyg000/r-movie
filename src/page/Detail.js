import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {totalDb} from './Data';
import Credits from './Credits';
function Detail() {
    const [data,setData] = useState();
    let db;
    let {type,id} = useParams();
    useEffect(()=>{  
        const res = totalDb.db_Movie(`${type}/${id}`);
        res.then((res) => { setData(res) }); 
    },[])
    if(!data) return <></>
    return (
        <>
            <article className="backgi">
                <figure>
                    <img className="dback1"src={` https://image.tmdb.org/t/p/original/${data.data.backdrop_path}`}/>
                </figure>
            </article>
            <article className="detail">
                <article className="poster">
                    <figure>
                        <img className="dpos" src={`https://image.tmdb.org/t/p/w500${data.data.poster_path}`}/>
                    </figure>
                </article>
                <article className="d-con">
                    <h2>{ type == 'movie' ? data.data.title : data.data.name }</h2>
                <article className="d-btn">
                    {
                        data.data.genres.map((v)=>(
                            <span>{v.name}</span>
                        ))
                    }
                </article>
                    <p>{data.data.overview}</p>
                <article className='cred'>
                    <Credits type={type} id={id}/>
                </article>
                </article>
            </article>
        </>
    )
}

export default Detail