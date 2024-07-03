import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Link} from'react-router-dom'
function Nav() {
  return (
    <div className='navbar'>
      
      <ul>
           <Link to='/React-Project'><li>Home</li></Link>
           <Link to='/about'><li>PRODUCTS</li></Link>
           <Link to='/services'><li>Services</li></Link>
           <Link to='/contact'><li>Contact</li></Link>

      </ul>
      

    </div>
  )
}

export default Nav
