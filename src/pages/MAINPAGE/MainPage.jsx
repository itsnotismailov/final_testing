import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from "../../Firebase";
import './MainPage.scss'
import { Link } from 'react-router-dom';
import Navbar from '../../COMPONENTS/NAVBAR/Navbar';

const MainPage = () => {
  return (
    <div className='wrapper-all'>
        <div className='first-container'>
        <Navbar />
          <div className='after-navbar'>
            <h1>Новая Коллекция</h1>
            <div></div>
            <Link>Смотреть новинки</Link>
          </div>
        </div>
    </div>
  )
}

export default MainPage