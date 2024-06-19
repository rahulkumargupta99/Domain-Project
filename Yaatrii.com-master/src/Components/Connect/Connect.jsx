import React, { useState } from 'react'
import './Connect.css'
import { Link } from 'react-router-dom';

const Connect = () => {
  const [menu,setMenu]= useState("Homes");
  return (
    <div className="yatriconnect" >
        <div className="connect">
          <h1 className='yatriconnect-headings'>YAATRII CONNECT</h1>
        </div>
       
        <div className="yaatriconnectboxs">

        <div className="yaatriconnectbox" id="yaatriconnectbox1">
         <div className="yaatriconnectbox-content">
    <h1 className='yaatriconnectbox-feedback'>FeedBack</h1>
    <p className="yaatriconnectbox-text">Concise and impactful feedback headings drive clarity and action.</p>
    <button className="yaatriconnectbox-button">
    <ul  onClick={()=> {setMenu("Feedback")}}><Link  to='/Feedback'>Let's Go</Link>{menu==="Feedback"}</ul>
    </button>
  </div>
</div>
<div className="yaatriconnectbox" id="yaatriconnectbox2">
  <div className="yaatriconnectbox-content">
  <h1 className='yaatriconnectbox-feedback'>Contact Support</h1>
    <p className="yaatriconnectbox-text">Get in Touch with Our Team for Assistance</p>
    <button className="yaatriconnectbox-button">
    <ul  onClick={()=> {setMenu("ContactApp")}}><Link  to='/ContactApp'>Let's Go</Link>{menu==="ContactApp"}</ul>
    </button>
  </div>
</div>
<div className="yaatriconnectbox" id="yaatriconnectbox3">
  <div className="yaatriconnectbox-content">
  <h1 className='yaatriconnectbox-feedback'>Unlock Rewards</h1>
    <p className="yaatriconnectbox-text">Explore Exclusive Benefits and Perks</p>
    <button className="yaatriconnectbox-button">Let's Go</button>
  </div>
</div>
        </div>

     <div className="troubleshoot" >
      <div className="troubleshoot-text">
        <h1>How To Connect </h1>
        <span>with Yaatrii</span>
        <p> STEP 1:   Visit yaatrii.com website.</p>
        <p> STEP 2:   Browse available packages.</p>
        <p> STEP 3:  Select desired package.</p>
        <p> STEP 4: Fill out booking details and make payment.</p>
        <p> STEP 5: Receive confirmation and prepare for travel.</p>
      </div>
      
      <div class="videos-container">
      <div class="videos">
      

      <h1 className='videos-heading'>Tutorial Videos</h1>
    <p className="videos-text">Explore Exclusive Benefits and Perks</p>
    <button className="videos-button">Click Me</button>
      </div>
</div>

      
      </div>  


      </div>
  )
}

export default Connect
