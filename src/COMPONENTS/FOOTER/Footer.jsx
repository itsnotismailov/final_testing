import React from 'react'
import './Footer.scss'
import inst from './assets/inst.svg'
import telegram from './assets/telegram.svg'

const Footer = () => {
  return (
      <div className="container">
        <div className="footer">

          <div className="company">
            <h3>Компания</h3>
            <a href="">О нас</a>
            <a href="">Контакты</a>
          </div>

          <div className="useful">
            <h3>Полезное</h3>
            <a href="">Оплата и доставка</a>
            <a href="">Условия возврата</a>
            <a href="">Бонусная система</a>
          </div>

          <div className="buyer">
            <h3>Покупателю</h3>
            <a href="">Избраное</a>
            <a href="">Публичная оферта</a>
            <a href="">Политика конфидециальности</a>
          </div>

          <div className="contacts">
            <h3>Контакты</h3>
            <a href="" className='inst'><img src={inst} alt="" /></a>
            <a href="" className='telegram'><img src={telegram} alt="" /></a>
            <p>+38(073) 096 36 44</p>
            <a href="">info@yanki.com</a>
          </div>

        </div>
          <p className='c'>©️ 2021 Yanki. All rights reserved</p>
      </div>
  )
}

export default Footer