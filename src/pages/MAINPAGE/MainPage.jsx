import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from "../../Firebase";
import './MainPage.scss'
import { Link } from 'react-router-dom';
import Search from '../../ASSETS/search.svg'
import User from '../../ASSETS/user.svg'
import Love from '../../ASSETS/love.svg'
import Cart from '../../ASSETS/cart.svg'
import Yanki from '../../ASSETS/yanki.svg'
import Vector from '../../ASSETS/vector.svg'
import Hamburger from 'hamburger-react';

const MainPage = () => {
  return (
    <div className='wrapper-all'>
        <div className='first-container'>
          <nav>
            <div className='first-block'>
            <div className='hamburger' >
                <Hamburger />
              </div>
              <Link>New</Link>
              <Link>КАТАЛОГ</Link>
              <Link>О НАС</Link>
            </div>
            <div className='second-block'>
                <h1 className='h1'>YANKI</h1>
            </div>
            <div className='third-block'>
              <div className='language'>
                  <p>RU</p>
                  <img src={Vector} alt=''/>
              </div>
                <p className='uah'>UAH</p>
                <img className='uah' style={{ left: '100px' }} src={Vector} alt=''/>
            </div>
            <div className='fourth-block'>
                <img className='disappear' src={Search} alt='' />
                <img className='disappear' onClick={() => signOut(auth)} src={User} alt='' />
                <img src={Love} alt='' />
                <img src={Cart} alt='' />
            </div>
          </nav>

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