import React from "react";
import "./Result.css";

function Result({quotes}) {
  return (
    <div className="Result">
      <div className="result-container">
        <h3>Famous Quotes Generator</h3>
        <div className="result-contents">
          <h2>"{quotes.text}"</h2>
          {quotes.author ? <p>{quotes.author}</p> :  <p>Anonymous</p> }
          
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

export default Result;
