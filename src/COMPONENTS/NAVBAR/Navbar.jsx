import React from 'react'
import Search from '../../ASSETS/search.svg'
import User from '../../ASSETS/user.svg'
import Love from '../../ASSETS/love.svg'
import Cart from '../../ASSETS/cart.svg'
import Vector from '../../ASSETS/vector.svg'
import Hamburger from 'hamburger-react';
import { Link, matchPath, useLocation } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase'
import './Navbar.scss'
import { useState } from "react";
import searchBlack from '../../ASSETS/searchBlack.svg';
import userYellow from '../../ASSETS/userYellow.svg';
import loveYellow from '../../ASSETS/loveYellow.svg';
import cartYellow from '../../ASSETS/cartYellow.svg';
import vectorBlack from '../../ASSETS/vectorBlack.svg';
import { useNavigate } from "react-router-dom";

const Navbar = ({ size }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState(false)
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const catalog = matchPath("/catalog", pathname)
    const productPage = matchPath("/catalog/:id", pathname)
    const order = matchPath("/order", pathname)
    const signin = matchPath("/signin", pathname)
    const signup = matchPath("/signup", pathname)
    const favourite = matchPath("/favourite", pathname)
    const contacts = matchPath("/contacts", pathname)
    const exchange = matchPath("/exchange", pathname)
    const delivery = matchPath("/delivery", pathname)

   



  return (
    <nav style={signin ? {display: 'none'} : signup ? {display: 'none'} : null}>
          <div className='first-block'>
             <div style={catalog ? {color: '#E0BEA2'} : productPage ? {color: '#E0BEA2'} : order ? {color: '#E0BEA2'} : favourite ? {color: '#E0BEA2'} : contacts ? {color: '#E0BEA2'} : exchange ? {color: '#E0BEA2'} : delivery ? {color: '#E0BEA2'}  : null} onClick={(e) => setIsOpen(!isOpen)}  className='hamburger' >
                <Hamburger />
              </div>
                <Link style={catalog ? {color: 'black'} : productPage ? {color: 'black'} : order ? {color: 'black'} : favourite ? {color: 'black'} : contacts ? {color: 'black'} : exchange ? {color: 'black'} : delivery ? {color: 'black'} : null} onClick={() => alert("Ошибка Сервера")}>NEW</Link>
                <Link style={catalog ? {color: 'black'} : productPage ? {color: 'black'} : order ? {color: 'black'} : favourite ? {color: 'black'} : contacts ? {color: 'black'} : exchange ? {color: 'black'} : delivery ? {color: 'black'} : null} to='/catalog'>КАТАЛОГ</Link>
                <Link style={catalog ? {color: 'black'} : productPage ? {color: 'black'} : order ? {color: 'black'} : favourite ? {color: 'black'} : contacts ? {color: 'black'} : exchange ? {color: 'black'} : delivery ? {color: 'black'} : null} to='/contacts'>О НАС</Link>
          </div>
          {isOpen && (
                  <div style={catalog ? {backgroundColor: '#E0BEA2'} : productPage ? {backgroundColor: '#E0BEA2'} : order ? {backgroundColor: '#E0BEA2'} : favourite ? {backgroundColor: '#E0BEA2'} : contacts ? {backgroundColor: '#E0BEA2'} : exchange ? {backgroundColor: '#E0BEA2'} : delivery ? {backgroundColor: '#E0BEA2'} : null} className='toggle'>
                      <Link to='/delivery'>ОПЛАТА И ДОСТАВКА</Link>
                      <Link to='/exchange'>УСЛОВИЯ ВОЗВРАТА</Link>
                      <Link to='/contacts'>КОНТАКТЫ</Link>
                  </div>
            )}
            <div className='second-block'>
                <h1 onClick={() => navigate('/catalog')} style={catalog ? {color: '#E0BEA2'} : productPage ? {color: '#E0BEA2'} : order ? {color: '#E0BEA2'} : favourite ? {color: '#E0BEA2'} : contacts ? {color: '#E0BEA2'} : exchange ? {color: '#E0BEA2'} : delivery ? {color: '#E0BEA2'} : null} className='h1'>YANKI</h1>
            </div>
            <div className='third-block'>
              <div className='language'>
                  <p onClick={() => alert("Ошибка с сервером ☹")} style={catalog ? {color: 'black'} : productPage ? {color: 'black'} : order ? {color: 'black'} : favourite ? {color: 'black'} : contacts ? {color: 'black'} : exchange ? {color: 'black'} : delivery ? {color: 'black'} : null}>RU</p>
                  <img onClick={() => alert("Ошибка с сервером ☹")}  src={catalog ? vectorBlack : productPage ? vectorBlack : order ? vectorBlack : favourite ? vectorBlack : contacts ? vectorBlack : exchange ? vectorBlack : delivery ? vectorBlack : Vector} alt=''/>
              </div>
                <p onClick={() => alert("Ошибка с сервером ☹")}  style={catalog ? {color: 'black'} : productPage ? {color: 'black'} : order ? {color: 'black'} : favourite ? {color: 'black'} : contacts ? {color: 'black'} : exchange ? {color: 'black'} : delivery ? {color: 'black'} : null} className='uah'>UAH</p>
                <img onClick={() => alert("Ошибка с сервером ☹")}  className='uah' style={{ left: '100px' }} src={catalog ? vectorBlack : productPage ? vectorBlack : order ? vectorBlack : favourite ? vectorBlack : contacts ? vectorBlack : exchange ? vectorBlack : delivery ? vectorBlack : Vector} alt=''/>
            </div>
            <div className='fourth-block'>
                <img className='disappear' src={catalog ? searchBlack : productPage ? searchBlack : order ? searchBlack : Search} alt='' />
                <img className='disappear' onClick={() => signOut(auth)} src={catalog ? userYellow : productPage ? userYellow : order ? userYellow : User} alt='' />
                <img onClick={() => navigate("/favorites")} src={catalog ? loveYellow : productPage ? loveYellow : order ? loveYellow : Love} alt='' />
                <img onClick={() => navigate("/order")} src={catalog ? cartYellow : productPage ? cartYellow : order ? cartYellow : Cart} alt='' />
                <div className='numberofitems'>{size}</div>
            </div>
        </nav>
  )
}

export default Navbar
