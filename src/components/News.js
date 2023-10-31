import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from './Item'


function News() {
    const [news, setNews] = useState([{}]);
    // const [query, setQuery] = React.useState("docker");
    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });


    const getNews = async () => {
        await axios({
            method: "get",
            url: 'https://newsapi.org/v2/everything?q=Indian Army&from=2023-01-17&sortBy=latest&apiKey=7a5e2b495c614e5c95033625a19b7ebc',

        }).then((res) => {

            setNews(res.data.articles);

        })
    }

    useEffect(() => {

        getNews();
    }, []);

    console.log(news);

    // author
    // : 
    // "https://www.facebook.com/bbcnews"
    // content
    // : 
    // "One pilot has died after two Indian Air Force fighter jets crashed in a mid-air collision in central India. \r\nThe planes were on a routine \"operational flying training mission\" when the incident happ… [+1415 chars]"
    // description
    // : 
    // "The planes were on a routine \"operational flying training mission\" when the incident happened."
    // publishedAt
    // : 
    // "2023-01-28T08:54:16Z"
    // source
    // : 
    // {id: 'bbc-news', name: 'BBC News'}
    // title
    // : 
    // "Pilot dies in Indian army jet mid-air collision"
    // url
    // : 
    // "https://www.bbc.co.uk/news/world-asia-64437573"
    // urlToImage
    // : 
    // "https://ichef.bbci.co.uk/news/1024/branded_news/14018/production/_128444918_993f5b4832c98f179f2cf10648305aa984491708.jpg"

    return (
        <div className="app">
            <ul style={{ width: "75%", marginLeft: "150px", marginTop: "50px" }}>
                {news.map((item, index) => (
                    <li className="item" key={index} >


                        <img className="thumbnail"
                            alt=""
                            src={item.urlToImage}
                        />


                        <h2 className="title">
                            <a href={item.url}>{item.title}</a>
                        </h2>

                        <p className="description">
                            {item.description}
                        </p>


                    </li>
                ))}
            </ul>
        </div>
    )
}

export default News