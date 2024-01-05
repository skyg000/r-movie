import React, { useEffect, useState }  from 'react'
import { Link ,useParams } from 'react-router-dom'
import {totalDb} from './Data'
function List() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })}
/* =================================topbtn======================== */
    const [searchQuery,setSearchQuery] = useState("");
    async function searchD (){
        const load = await totalDb.db_search(`search/${param.type}`,searchQuery);
        setData1(load.data.results)
    }
    useEffect(()=>{ if(searchQuery != '') searchD() },[searchQuery]) 
/* =================================search======================== */
    const param = useParams();
    const [data1,setData1] = useState([]);
    const [count, setCount] = useState(1);

    const countadd = ()=>{ setCount(count + 1); loadD('more')}
    async function loadD (type){
        switch(type){
            case 'more' : {
                const load = await totalDb.db_Movie(`/${param.type}/popular`,count+1)
                setData1([...data1,...load.data.results])
                break;
            }
            default : const load = await totalDb.db_Movie(`/${param.type}/popular`,count)  
            setData1(load.data.results) 
        }
    }
    useEffect(()=>{ loadD(); },[param.type]); 
    /* 
    페이지 전환이 안 바뀌어서 기본값(default)으로 페이지를 뿌려주고(페이지 전환), countadd 더보기를 클릭 했을때, 
    countadd = loadD('more')가 실행 -> switch(type) 이돌면서 case가 실행하면 값을 뿌려줌 
    */
    return (
        <>
        <article className='list'>
            <h2> {param.type} </h2>
        <article className='search'>
            <form >
                <input type='text' placeholder='검색어를 입력하세요~' value={searchQuery} onChange={(e)=>{
                    setSearchQuery(e.target.value)}}/>
            </form>
        </article>
            <ul>
                {
                    data1.map((e)=>(
                        <li key={e.id}> 
                            <Link to={`/${param.type}/${e.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                                <h3>{e.title}{e.name}</h3>
                            </Link>
                        </li>
                    ))
                }
                <span className='topbtn'>
                    <button className="top" onClick={scrollToTop} type="button"> TOP </button>
                </span>
            </ul>
                <span className='abtn'> <a onClick={countadd}>더 보기</a> </span>
        </article>
        </>
    )
}

export default List