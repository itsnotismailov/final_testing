import React from 'react'
import './MainPage.scss'
import { Link } from 'react-router-dom';
import Navbar from '../../COMPONENTS/NAVBAR/Navbar';
import Catalog from '../CATAOLOG/Catalog';

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
        <div className='second container'>
        </div>
    </div>
  )
}

export default MainPage