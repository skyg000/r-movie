import { useEffect, useState } from 'react'
import axios from 'axios'
import {totalDb} from './Data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useParams } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
function Home() {
    
    const param = useParams();
    const [data,setData] = useState([]);
    const [dataT,setDataT] = useState([]);
    const [tdataP,tsetDataP] = useState([]);
    const [tdataT,tsetDataT] = useState([]);
    const Movie = axios.create({
        baseURL:'https://api.themoviedb.org/3',
        params:{api_key:'f89a6c1f22aca3858a4ae7aef10de967'}
    })

    useEffect(()=>{
        Movie.get('movie/popular')
        .then(res=>{
        const MovieTop = res.data
        setData(MovieTop.results)
    })
    },[])
    useEffect(()=>{
        Movie.get('/movie/top_rated')
        .then(res=>{
        const MovieTopT = res.data
        setDataT(MovieTopT.results)
    })
    },[])
    useEffect(()=>{
        Movie.get('/tv/popular')
        .then(res=>{
        const tvp = res.data
        tsetDataP(tvp.results)
    })
    },[])
    useEffect(()=>{
        Movie.get('/tv/top_rated')
        .then(res=>{
        const tvt = res.data
        tsetDataT(tvt.results)
    })
    },[]);

    return (
        <>
        <article className='back'>  
            <Swiper className='mySwiper'   
                autoplay={{
                    delay: 2000
                }}
                modules={[Autoplay]}
                breakpoints= {{
                    1200: {
                    slidesPerView: 1, 
                    }}} loop
                    >
                {
                    data.map((e)=>(
                        <div className='backm'>
                            <SwiperSlide>
                                <Link to={`/movie/${e.id}`}>
                                    <article className='txt'>
                                        <h3>{e.title}</h3>
                                        <p>{e.overview}</p>
                                        <span className='m-detail'> 상세 보기</span>
                                    </article>
                                    <figure className='backgr'>
                                        <img className='backg' src={` https://image.tmdb.org/t/p/original/${e.backdrop_path}`}/>
                                    </figure>
                                    <a href="/">
                                        <img className='pos' src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}/>
                                    </a>
                                    
                                    
                                </Link>
                            </SwiperSlide>
                        </div>
                    ))
                }
            
            </Swiper>
            </article>
        <article className='Hom'>
            <h2>인기 영화 <a href ="./List#/movie">더 보기</a></h2>
                <Swiper className='mySwiper'loop
                breakpoints= {{
                    0: {
                    slidesPerView: 2,  //브라우저가 0보다 클 때
                    spaceBetween: 4,
                    },
                    480: {
                    slidesPerView: 3,  //브라우저가 480보다 클 때
                    spaceBetween: 4,
                    },
                    780: {
                    slidesPerView: 4,  //브라우저가 780보다 클 때
                    spaceBetween: 2,
                    },
                    1200: {
                    slidesPerView: 7,  //브라우저가 1200보다 클 때
                    spaceBetween: 5,
                    }}}>
                {
                    data.map((e)=>(
                        <li key={e.id}> 
                            <SwiperSlide>
                                <Link to={`/movie/${e.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                                    <h3>{e.title}</h3>
                                </Link>
                            </SwiperSlide>
                        </li>
                    ))
                }
                </Swiper>
        </article>

        <article className='Hom'>
            <h2>많이 본 영화<a href ="./List#/movie">더 보기</a></h2>
                <Swiper className='mySwiper' breakpoints= {{
                    0: {
                    slidesPerView: 2,  //브라우저가 1024보다 클 때
                    spaceBetween: 4,
                    },
                    480: {
                    slidesPerView: 3,  //브라우저가 1024보다 클 때
                    spaceBetween: 4,
                    },
                    780: {
                    slidesPerView: 4,  //브라우저가 1024보다 클 때
                    spaceBetween: 2,
                    },
                    1200: {
                    slidesPerView: 7,  //브라우저가 1024보다 클 때
                    spaceBetween: 5,
                    }
                }}loop>
                {
                    dataT.map((e)=>(
                        <li key={e.id}> 
                            <SwiperSlide>
                                <Link to={`/movie/${e.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                                    <h3>{e.title}</h3>
                                </Link>
                            </SwiperSlide>
                        </li>
                    ))
                }
                </Swiper>
        </article>
        <article className='Hom'>
            <h2>인기 TV시리즈<a href ="./List#/tv">더 보기</a></h2>
                <Swiper className='mySwiper'breakpoints= {{
                    0: {
                    slidesPerView: 2,  //브라우저가 1024보다 클 때
                    spaceBetween: 4,
                    },
                    480: {
                    slidesPerView: 3,  //브라우저가 1024보다 클 때
                    spaceBetween: 4,
                    },
                    780: {
                    slidesPerView: 4,  //브라우저가 1024보다 클 때
                    spaceBetween: 2,
                    },
                    1200: {
                    slidesPerView: 7,  //브라우저가 1024보다 클 때
                    spaceBetween: 5,
                    }
                }} loop>
                {
                    tdataP.map((e)=>(
                        <li key={e.id}> 
                            <SwiperSlide>
                                <Link to={`/tv/${e.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                                    <h3>{e.name}</h3>
                                </Link>
                            </SwiperSlide>
                        </li>
                    ))
                }
                </Swiper>
        </article>
        <article className='Hom'>
            <h2>많이 본 TV시리즈<a href ={Movie.d}>더 보기</a></h2>
                <Swiper className='mySwiper'breakpoints= {{
                    0: {
                    slidesPerView: 2,  //브라우저가 1024보다 클 때
                    spaceBetween: 4,
                    },
                    480: {
                    slidesPerView: 3,  //브라우저가 1024보다 클 때
                    spaceBetween: 4,
                    },
                    780: {
                    slidesPerView: 4,  //브라우저가 1024보다 클 때
                    spaceBetween: 2,
                    },
                    1200: {
                    slidesPerView: 7,  //브라우저가 1024보다 클 때
                    spaceBetween: 5,
                    }
                }}loop>
                {
                    tdataT.map((e)=>(
                        <li key={e.id}> 
                            <SwiperSlide>
                                <Link to={`/tv/${e.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                                    <h3>{e.name}</h3>
                                </Link>
                            </SwiperSlide>
                        </li>
                    ))
                }
                </Swiper>
                
        </article>
        </>
    )
}

export default Home