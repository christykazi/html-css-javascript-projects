import React from 'react'
import { Link} from 'react-router-dom'


const Home = () => {
  return (
    <div className='banner'>
       
        <h2>Html - Css - Javascript Projects</h2>
        <div className="navbar">
        <ul>
            <li> <Link to="/projectone">Project 1</Link></li>
           <li> <Link to="/projectwo"> Project 2</Link></li>
           <li> <Link to="/projecthree">Project 3</Link></li>
           <li>  <Link to="/projectfour">Project 4</Link></li>
       
             
        </ul>
        <div className='content'>
        <h1>Welcome to my Abode </h1>
        <div>
        <button type="button" ><span></span>WATCH OUT</button>
            <button type="button"><span></span>CLICK PROJECT ABOVE</button>
        </div>
           
        </div>
        </div> 
    </div>
  )
}

export default Home