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
        {/* <button onClick={() => signOut(auth)}>ВЫЙТИ</button> */}
        <div className='first-container'>
          <nav>
            <div className='first-block'>
              <Link>New</Link>
              <Link>КАТАЛОГ</Link>
              <Link>О НАС</Link>
              <div className='hamburger' >
                <Hamburger />
              </div>
            </div>
            <div className='second-block'>
                <img src={Yanki} alt=''/>
            </div>
            <div className='third-block'>
                <p>RU</p>
                <img src={Vector} alt=''/>
                <p>UAH</p>
                <img style={{ left: '100px' }} src={Vector} alt=''/>
            </div>
            <div className='fourth-block'>
                <img src={Search} alt='' />
                <img src={User} alt='' />
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