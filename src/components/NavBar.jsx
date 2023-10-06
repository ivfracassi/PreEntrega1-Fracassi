import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav>
        <h3>TECNOCOM</h3>
        <div>
            <button>Accesorios</button>
            <button>Telefonos</button>
        </div>
        <CartWidget/>
    </nav>    
  )
}

export default NavBar