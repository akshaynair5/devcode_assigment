import './home.css'
import Navbar from '../../components/Navbar/navbar'
import { useContext, useEffect, useRef, useState } from 'react'
import { Authcontext } from '../../contextprovider'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home(){
    const {currentUser} = useContext(Authcontext)
    const [news,setNews] = useState([])
    const [i,seti] = useState(10)
    const [latest10,set10] = useState([])
    const [moreinfo,setMoreinfo] = useState({})
    const [vis,setVis] = useState('hidden')
    const pui = useRef(null)
    useEffect(()=>{
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-03-05&sortBy=publishedAt&apiKey=d3750bcc6383482d8d76b4b0e61413c4')
        .then((response)=>{
            console.log(response.data.articles)
            setNews(response.data.articles)
        })
        let temp = []
        temp = news.slice(i-10,i)
        console.log(temp)
        set10(temp)
    },[])
    const moreInfo = (news)=>{
        setMoreinfo(news)
        setVis('visible')
    }
    const incre = ()=>{
        seti(i+10)
    }
    const decre = ()=>{
        seti(i-10)
    }
    useEffect(()=>{
        console.log(i)
    },[i])
    useEffect(()=>{
        let temp = news.slice(i-10,i)
        console.log(temp)
        set10(temp)
        window.scrollTo({
            top:pui.current.offsetTop,
            behavior: "smooth"
        })
    },[i])
    return(
        <div className="Home">
            <Navbar/>
            <div className="NewsBlock">
                {
                    latest10.map((news)=>(
                        <div className='News' onClick={()=>{moreInfo(news)}}>
                            <img src={news.urlToImage} className='np'></img>
                            <div className='content'>
                                <p className='headline'>{news.title}</p>
                                <p className='author'><b>Author - </b> {news.author},   <b>Published At - </b>{news.publishedAt}</p>
                            </div>
                        </div>
                    ))
                }
                <div className='pag-btns'>
                    {i!=10 &&
                        <button onClick={()=>{decre()}}>⇦ Prev</button>
                    }
                    {
                        i<100 &&
                        <button onClick={()=>{incre()}}>More ⇨</button>
                    }
                </div>
            </div>
            <div className="popupInfo" style={{visibility:`${vis}`}} onClick={()=>{setVis('hidden')}} ref={pui}>
                <button onClick={()=>{setVis('hidden')}}>X</button>
                <div className='popupcontent' style={{backgroundImage:`url(${moreinfo.urlToImage})`}}>
                    <div className='content'>
                        <p className='headline'>{moreinfo.title}</p>
                        <p className='news'>{moreinfo.content}</p>
                        <a href={`${moreinfo.url}`} style={{textDecoration:'none',fontWeight:'700'}}>Click to Visit full article</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home