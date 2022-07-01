import React from 'react'
import "./Search.css"

function Search({datas}) {
  return (
    <div className='Search'>
        <div className="search-container">
            <div className="search-contents">
                <button onClick={datas}>Generate Quote</button>   
            </div>
        </div>
    </div>
  )
}

export default Search