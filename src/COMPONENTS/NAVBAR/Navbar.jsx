import React from 'react'
import Search from '../../ASSETS/search.svg'
import User from '../../ASSETS/user.svg'
import Love from '../../ASSETS/love.svg'
import Cart from '../../ASSETS/cart.svg'
import Vector from '../../ASSETS/vector.svg'
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase'
import '../NAVBAR/Navbar.scss'
import { useState } from "react";

const Navbar_Home = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
          <div className='first-block'>
             <div onClick={(e) => setIsOpen(!isOpen)}  className='hamburger' >
                <Hamburger />
              </div>
                <Link>New</Link>
                <Link>Каталог</Link>
                <Link>О нас</Link>
            </div>
            {isOpen && (
            <div style={{ position: 'absolute' }} className='toggle'>
                <Link>Оплата и доставка</Link>
                <Link>Условия возврата</Link>
                <Link>Контакты</Link>
            </div>
            )}
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
  )
}

export default Navbar_Home