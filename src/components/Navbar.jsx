import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Navbar = () => {
  const state = useSelector(state => state.cart);
  return (
    <div style={{display:'flex',justifyContent:"space-between", alignItems: 'center'}}>
      <span className='logo'>
        Redux store
      </span>
      <span>
        <Link className='navLink' to='/'>Home</Link>
        <Link className='navLink' to='/cart'>Cart</Link>
      </span>
      <span>Cart items: {state.length}</span>
    </div>
  )
}

export default Navbar