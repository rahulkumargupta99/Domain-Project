import React from 'react'
import './Packages.css'
import Popular from '../Popular'

const Packages = () => {
  return (
    <div className="packages">
      <Popular/>
    
    <span className='package-info'>Welcome to yaatrii.com, your one-stop shop for all your travel needs. Whether you're 
looking to book a tour, find a guide, or simply learn more about a new destination, 
yaatrii.com has everything you need. We offer a wide variety of tours to choose from, 
including cultural tours, adventure tours, and eco-tours. Our expert guides are 
passionate about their homelands and will ensure you have an unforgettable 
experience. And our comprehensive destination guides will help you plan your trip down 
to the last detail.</span>
    
     <div className="packagedisplay">
     <div className='packagedisplay-texts'>
      <h2 id='top'>TOP POPULAR PACKAGE</h2><br></br>
      <h3 id='top1'>Book Here !</h3><br></br>
      </div>
      <div className='packagesiplays-view'>
      <div className="packagedisplay-view" id='view1'>
        <h4>kashmir 2D/1N
starting at ₹11999-/
per person</h4>
      </div>
      <div className="packagedisplay-view" id='view2'>
        <h4>
        Agra 3D/2N
starting at ₹12999-/
per person 
        </h4>
      </div>
      <div className="packagedisplay-view" id='view3'>
        <h4>
        mumbai 4D/3N
starting at ₹10999-/
per person 
        </h4>
      </div>
      <div className="packagedisplay-view" id='view4'>
        <h4>
        New Delhi 2D/1N
starting at ₹11899-/
per person
        </h4>
      </div>
      <div className="packagedisplay-view" id='view5'>
        <h4>
        jaipur 4D/3N
starting at ₹11999-/
per person
        </h4>
      </div>
      <div className="packagedisplay-view" id='view6'>
        <h4>
        chandigharh 4D/3N
starting at ₹14999-/
per person
        </h4>
      </div>
     </div>
     </div>



     <div className="guidedisplay">
     <div className='guidedisplay-texts'>
      <h2 id='tops'>TOP Rated Tourist Guide</h2><br></br>
      <h3 id='tops1'>Book Here !</h3><br></br>
      </div>
      <div className='guidesiplays-view'>
      <div className="guidedisplay-view" id='guide1'>
        <h4>Gurinder Singh Johal 
Rating ⭐⭐ ⭐ ⭐ 
starting at ₹11999-/
</h4>
<button id='hire'>Book</button>
      </div>
     
      <div className="guidedisplay-view" id='guide2'>
        <h4>
        Sumrita kumar
Rating ⭐⭐ ⭐ ⭐
starting at ₹12999-/
 
        </h4>
        <button id='hire'>Book</button>
      </div>
      <div className="guidedisplay-view" id='guide3'>
        <h4>
        Ravi shankar kumar
Rating ⭐⭐ ⭐ ⭐
starting at ₹10999-/

        </h4>
        <button id='hire'>Book</button>
      </div>
      <div className="guidedisplay-view" id='guide4'>
        <h4>
        Suraj yajpal yadav 
Rating ⭐⭐ ⭐ ⭐
starting at ₹11899-/

        </h4>
        <button id='hire'>Book</button>
      </div>
      <div className="guidedisplay-view" id='guide5'>
        <h4>
        Hadlee Renjith
Rating ⭐⭐ ⭐ ⭐
starting at ₹11999-/

        </h4>
        <button id='hire'>Book</button>
      </div>
      <div className="guidedisplay-view" id='guide6'>
        <h4>
        Prem Sagar mishra
Rating ⭐⭐ ⭐ ⭐
starting at ₹14999-/

        </h4>
       

        <button id='hire'>Book</button>
      </div>
     </div>
     </div>
     </div>
  )
}

export default Packages
