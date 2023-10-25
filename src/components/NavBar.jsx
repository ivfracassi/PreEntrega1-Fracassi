import React from 'react'
import CartWidget from './CartWidget'
import { NavLink, Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <h3>TECNOCOM</h3>
      </Link>
        <div>
          <NavLink to={"/category/celulares"} className={({isActive})=> isActive? "ActiveOption" : "Option"}>Celulares</NavLink>
          <NavLink to={"/category/accesorios"} className={({isActive})=> isActive? "ActiveOption" : "Option"}>Accesiorios</NavLink>
        </div>
        <CartWidget/>
    </nav>    
  )
}

export default NavBar