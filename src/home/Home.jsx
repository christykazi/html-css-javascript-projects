import React from 'react'
import { Link} from 'react-router-dom'
import "./home.css"


const Home = () => {
  return (
    <div className='banner'>
       
        <h2 className='hea'> My Unique Projects</h2>
        <div className="navbar">
        <ul>
        <li> <Link to="/facebook">FaceBook</Link></li>
        <li> <Link to="/linkedin">Linkedin</Link></li>
        <li> <Link to="/youtube">Youtube</Link></li>
        <li> <Link to="/netflix">Netflix</Link></li>
        <li> <Link to="/airbnb">Airbnb</Link></li>
        
            <li> <Link to="/projectone">Project 1</Link></li>
           <li> <Link to="/projectwo"> Project 2</Link></li>
           <li> <Link to="/projecthree">Project 3</Link></li>
      
       
             
        </ul>
        <div className='content'>
        <h1>Welcome to my Abode </h1>
        <div>
        <button type="button" ><span></span>CLICK  ALL</button>
            <button type="button"><span></span>PROJECTS ABOVE</button>
        </div>
           
        </div>
        </div> 
    </div>
  )
}

export default Home