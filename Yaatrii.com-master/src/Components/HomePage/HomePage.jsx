import React from 'react'
import './HomePage.css'
import backgroundImage from '../Assets/bg1.jpg';
import TypewriterAnimation from '../TypewriterAnimation'

const HomePage = () => {
  return (
    <div className='container' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='container-para'>
        <p>LET's COME WITH</p>
        <p>YAATRII TO</p>
        <p>EXPLORE THE WORLD!</p>
      </div>
      <TypewriterAnimation/>
      <div className="container-text">
      Click here To Explore 
      <br></br><span>watch the video ------→</span>
     
      <div className='containers-boxs'>

    <div className="containers-box" id='box1'>
    <a href="https://www.youtube.com/shorts/S6wJ0WDU650" ><button className='video-link'>Watch Video</button></a>
    </div>

    <div className="containers-box" id='box2'>
    <a href="https://www.youtube.com/shorts/ZvLt_S4GzpY" ><button className='video-link'>Watch Video</button></a>
    </div>

    <div className="containers-box" id='box3'>
    <a href="https://www.youtube-nocookie.com/embed/luDdKCXuKks?playlist=luDdKCXuKks&autoplay=1&iv_load_policy=3&loop=1&start=" ><button className='video-link'>Watch Video</button></a>
    </div>

    <div className="containers-box" id='box4'>
    <a href="https://www.youtube.com/shorts/kXy8HSzVhWg" ><button className='video-link'>Watch Video</button></a>
    </div>

    <div className="containers-box" id='box5'>
    <a href="https://www.youtube.com/shorts/SmBLLWDg-9Q" ><button className='video-link'>Watch Video</button></a>
    </div>
   
    </div>
    </div>   
    </div>
  )
}

export default HomePage
