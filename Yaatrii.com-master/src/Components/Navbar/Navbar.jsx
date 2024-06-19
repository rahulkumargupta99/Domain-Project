import React, { useState } from 'react'
import './navbar.css'
import menubar from '../Assets/menu.png'
import { Link } from 'react-router-dom'




const Navbar = () => {
  
    const [showMenu , setShowMenu]=useState(false);
    const [menu,setMenu]= useState("Homes");
  return (
    <div>
         <nav className="navbar">
      <ul className="navbar-nav">
        <li onClick={()=> {setMenu("Homes")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="Homes"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("About")}}><Link style={{textDecoration: 'none'}} to='/About'>About</Link>{menu==="About"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("Tour")}}><Link style={{textDecoration: 'none'}} to='/Tour'>Tour Package</Link>{menu==="Tour"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("Guide")}}><Link style={{textDecoration: 'none'}} to='/Guide'>Tour Guide</Link>{menu==="Guide"?<hr/>:<></>}</li>
        {/* <li onClick={()=> {setMenu("ContactApp")}}><Link style={{textDecoration: 'none'}} to='/ContactApp'>Contact</Link>{menu==="ContactApp"?<hr/>:<></>}</li> */}
        <li onClick={()=> {setMenu("Signups")}}><Link style={{textDecoration: 'none'}} to='/Signups'>Signup</Link>{menu==="Signups"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("Wishlist")}}><Link style={{textDecoration: 'none'}} to='/Wishlist'>Wishlist</Link>{menu==="Wishlist"?<hr/>:<></>}</li>
       
      </ul>
      <div className="mobmenuies">
      <img src={menubar} alt="Menu" className='mobMenu'onClick={()=> setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
                <Link activeClass='active' to='/'   spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='/About'  spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='/Tour'   spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Tour Package</Link>
                <Link activeClass='active' to='/Guide' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Tour Guide</Link>
                {/* <Link activeClass='active' to='/ContactApp' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>ContactApp</Link> */}
                <Link activeClass='active' to="/Signups" spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Signup</Link>
                <Link activeClass='active' to='/Wishlist' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Wishlist</Link>
                
            </div>
            </div>
    </nav>
      
    </div>
  )
}

export default Navbar
