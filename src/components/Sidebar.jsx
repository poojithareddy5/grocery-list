import React, { useEffect } from 'react'
import { FaAlignRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaQuestionCircle } from "react-icons/fa";

import { IoIosMap } from "react-icons/io";
import User from '../assets/img/user.jpg'
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({}) => {
  const Navigate = useNavigate()
  const logOutEvent = () => {
    localStorage.setItem('auth', JSON.stringify(false))
    Navigate('/')
    window.location.reload();
  }
  return (
    <div className='sidebar-container' >
      <div className='sidebar-heading' >
        <h3>ADMINS</h3>
        <FaAlignRight />
      </div>
      <div className='sidebar-photo-container' >
        <img src={User} alt='user-photo' />
        <h2>Shannu</h2>
        <span>VP Fancy Admin</span>
      </div>
      <div className='sidebar-menu' >
        <li>
          <Link to='/' className='nav-link'>
            <FaHome />
            <span>Dashboard</span>
          </Link>
        </li>
      </div>

      <div className='sidebar-menu'>
        <span>Pages</span>
        <li>
          <Link to='store' className='nav-link'>
            <CgProfile />
            <span>Stores</span>
          </Link>
        </li>
        <li>
          <Link to='maps' className='nav-link'>
            <IoIosMap />
            <span>Maps</span>
          </Link>
        </li>
        <li>
          <Link to='storeOwner' className='nav-link'>
            <FaQuestionCircle />
            <span>Products Details</span>
          </Link>
        </li>
        <li>
          <Link to='orderDetails' className='nav-link'>
            <FaQuestionCircle />
            <span>Order Details</span>
          </Link>
        </li>
        <li>
          <Link to='contacts' className='nav-link'>
            <FaQuestionCircle />
            <span>Contacts</span>
          </Link>
        </li>
      </div>
      <button onClick={logOutEvent} className='logoutBtn' >logout</button>
    </div>
  )
}

export default Sidebar