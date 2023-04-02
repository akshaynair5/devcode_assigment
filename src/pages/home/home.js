import './home.css'
import Navbar from '../../components/Navbar/navbar'
import { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../../contextprovider'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home(){
    const {currentUser} = useContext(Authcontext)
    const [news,setNews] = useState([])
    const [moreinfo,setMoreinfo] = useState({})
    const [vis,setVis] = useState('hidden')
    useEffect(()=>{
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-03-02&sortBy=publishedAt&apiKey=4b411d14e13a431bb655435986a32cc5')
            .then((response)=>{
                console.log(response.data.articles)
                setNews(response.data.articles)
            })
    },[])
    const moreInfo = (news)=>{
        setMoreinfo(news)
        setVis('visible')
        console.log('hii')
    }
    return(
        <div className="Home">
            <Navbar/>
            <div className="NewsBlock">
                {
                    news.map((news)=>(
                        <div className='News' onClick={()=>{moreInfo(news)}}>
                            <img src={news.urlToImage} className='np'></img>
                            <div className='content'>
                                <p className='headline'>{news.title}</p>
                                <p className='author'><b>Author - </b> {news.author},   <b>Published At - </b>{news.publishedAt}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="popupInfo" style={{visibility:`${vis}`}} onClick={()=>{setVis('hidden')}}>
                <div className='popupcontent' style={{backgroundImage:`url(${moreinfo.urlToImage})`}}>
                    <div className='content'>
                        <p className='headline'>{moreinfo.title}</p>
                        <p className='news'>{moreinfo.content}</p>
                        <Link to={`${moreInfo.url}`}>Click to Visit full article</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home