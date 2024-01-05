import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Credits({type,id}){
    const [cdata1,csetData1] = useState(0);
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=f89a6c1f22aca3858a4ae7aef10de967`)
        .then(res=>{
            csetData1(res.data.cast)
        })
    },[])
    console.log(cdata1);
    if(cdata1 == 0) return <></>
    return(
        <>
            <article className="castitle">
                <h2>Casts</h2>
                <ul>
                    {
                        cdata1.map(v=>(
                            <li key={v.id}>
                                <img src={`https://image.tmdb.org/t/p/w200${v.profile_path}`}alt=''/>
                                <p>{v.original_name}</p>
                            </li>
                        ))
                    }
                </ul>
            </article>
            </>
    )
}
