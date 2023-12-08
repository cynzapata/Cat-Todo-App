import React, {useState, useEffect} from 'react'
import './RandomQuote.css'


export const RandomQuote = () => {
  const [quote, setQuote] = useState({
    quote: "\"You cannot find purr-peace by avoiding life, nya~.\" – Virginia Whiskers",
    photo: "logo-512"
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
        
        <img src="images/sit_pusheen_86.png" id="cat" alt="Sitting Pusheen Cat" />
        
        <div className="title"><span className="font-link">TASKS FOR PRODUCTIVITY</span></div>
        

        <div className='content-container'>

        <div className='inner-container'>
          

        <div className="task-subtitle"><img src="images/sit_pusheen_86.png" alt="Sitting Pusheen Cat" /><span className="font-link">HIGHEST PURIORITY</span></div>
        <label>
        <input type="checkbox" onChange={() => {}} />
        <span><input type="text" placeholder="My task goes here"/></span>
      </label>
      <label>
        <input type="checkbox" onChange={() => {}} />
        <span><input type="text" placeholder="My task goes here"/></span>
      </label>

      <div className="task-subtitle"><img src="images/sit_pusheen_86.png" alt="Sitting Pusheen Cat" /><span className="font-link">HIGHEST PURIORITY</span></div>
      <label>
        <input type="checkbox" onChange={() => {}} />
        <span><input type="text" placeholder="My task goes here"/></span>
      </label>
      <label>
        <input type="checkbox" onChange={() => {}} />
        <span><input type="text" placeholder="My task goes here"/></span>
      </label>

      <div className="task-subtitle"><img src="images/sit_pusheen_86.png" alt="Sitting Pusheen Cat" /><span className="font-link">HIGHEST PURIORITY</span></div>
      <label>
        <input type="checkbox" onChange={() => {}} />
        <span><input type="text" placeholder="My task goes here"/></span>
      </label>
      <label>
        <input type="checkbox" onChange={() => {}} />
        <span><input type="text" placeholder="My task goes here"/></span>
      </label>
      </div>

      <div className='inner-container'>
        <div className="quote-subtitle"><span className="font-link">LOOKING PUR MOTIVATION?</span></div>
        <div className="quote">
            <span className="font-link">{quote.quote}</span>
            {/* Render the photo here */}
            <img src={`${process.env.PUBLIC_URL}/images/${quote.photo}.png`}  alt="Motivational cat photo"/>
          </div>
      </div>
      </div>
      </div>
    );
  };
  
  export default RandomQuote;

