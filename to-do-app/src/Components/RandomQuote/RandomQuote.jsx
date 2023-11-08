import React, {useState} from 'react'
import './RandomQuote.css'


export const RandomQuote = () => {
    
    let quotes = [];

    async function loadQuotes() {
        const response = await fetch("quote.json");
        quotes = await response.json();
    }

    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select);
    }
  
    const[quote,setQuote] = useState({
        quote: "You cannot find purr-peace by avoiding life, nya~. – Virginia Whiskers"
    });

    loadQuotes();

    return (

    <div className='container'>
          <div className="title"><span className="font-link">To-do List</span></div>
         
        <div className="quote"><span className="font-link">{quote.quote}</span></div>
       
       
        </div>
    
  )
}


export default RandomQuote