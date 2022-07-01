import React from 'react'
import Result from './Result'
import Search from './Search'
import "./Home.css"

function Home({click,quotes}) {
  return (
    <div className='Home'>
        <div className="home-container">
            <Result quotes = {quotes} />
            <Search datas= {click}/>
        </div>
    </div>
  )
}

export default Home