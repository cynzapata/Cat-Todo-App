import React, {useState, useEffect} from 'react'
import './RandomQuote.css'


export const RandomQuote = () => {
    const [quote, setQuote] = useState({
      quote: "\"You cannot find purr-peace by avoiding life, nya~.\" – Virginia Whiskers"
    });
  
    async function loadQuotes() {
      const response = await fetch("quotes.json");
      const quotes = await response.json();
      const select = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(select);
    }
  
    useEffect(() => {
      // Load initial quote
      loadQuotes();
  
      // Set an interval to load a new random quote every 30 minutes
      const interval = setInterval(loadQuotes, 30 * 60 * 1000);
  
      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return (
      <div className='container'>
        <div className="title"><span className="font-link">TASKS FOR PRODUCTIVITY</span></div>
        <div className="task-subtitle"><span className="font-link">HIGHEST PURIORITY</span></div>
        <label>
        <input type="checkbox" onChange={() => {}} />
        <span><input type="text" placeholder="My task goes here"/></span>
      </label>
      <label>
        <input type="checkbox" onChange={() => {}} />
        <span><input type="text" placeholder="My task goes here"/></span>
      </label>

      <div className="task-subtitle"><span className="font-link">HIGHEST PURIORITY</span></div>
      <label>
        <input type="checkbox" onChange={() => {}} />
        <span><input type="text" placeholder="My task goes here"/></span>
      </label>
      <label>
        <input type="checkbox" onChange={() => {}} />
        <span><input type="text" placeholder="My task goes here"/></span>
      </label>

      <div className="task-subtitle"><span className="font-link">HIGHEST PURIORITY</span></div>
      <label>
        <input type="checkbox" onChange={() => {}} />
        <span><input type="text" placeholder="My task goes here"/></span>
      </label>
      <label>
        <input type="checkbox" onChange={() => {}} />
        <span><input type="text" placeholder="My task goes here"/></span>
      </label>
      
        <div className="quote-subtitle"><span className="font-link">LOOKING PUR MOTIVATION?</span></div>
        <div className="quote"><span className="font-link">{quote.quote}</span></div>
      </div>
    );
  };
  
  export default RandomQuote;

