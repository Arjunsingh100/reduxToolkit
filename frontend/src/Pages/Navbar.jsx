import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Navbar = () => {

  const storeCarts = useSelector((state) => { return state.cart });

  return (
    <div className='navbar'>
      <span>This is navbar page</span>
      <div className='navbar-links'>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart({storeCarts?.length})</Link>
      </div>
    </div>
  )
}

export default Navbar
