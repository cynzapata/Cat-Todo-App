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
          <div className="Title">To-do List</div>
         
        <div className="quote">{quote.quote}</div>
       
       
        </div>
    
  )
}


export default RandomQuote