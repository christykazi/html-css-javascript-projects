import React from 'react'
import "./facebook.css"


const Home = () => {
  return (
    <div className='all'>
    <div className="grouper">

       <h1 className="roup"> </h1>
        <h1 className="fa">facebook</h1>
        <h3>
        Facebook helps you connect and share with the people in your life. </h3>
    </div>



    <div className="grouper">
       
    <div> 
        <p className="lo"> Log in to Facebook</p>
        <button className="button1" > Email address or phone number</button><br/>
        <button className="cup">Password</button>
    </div>
    <div className='gath'>
    
        <button className="summit"> <a href="./start">Log in</a></button>
        
        
        
        <p className="clos">Forgotten account?</p> 
        <div className='linee'></div>
        <div className="opo">or</div>
        <button className="box"> Create new account</button>
    </div>
         <div>
            <p> <a href="https://www.facebook.com/pages/create/?ref_type=registration_form"> Create a Page</a> for a celebrity, brand or business.</p>
         </div>
        </div>


         <div className="group">
        <div>
    <h1 className="fa">facebook</h1>
   
    <p className="lo"> Log in to Facebook</p>
    <button className="button1" > Email address or phone number</button> <br/> 
    <button className="cup">Password</button>
</div>

<div>
<button className="summit"> <a href="./start">Log in</a></button>
    <p className="clos">Forgotten account?</p> 
    <div className='linee'></div>
    <p className="good">or</p>
    <button class="box"> Create new account</button>
    
</div>
</div>
     
    

    </div>
  )
}

export default Home