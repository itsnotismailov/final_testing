import React from 'react'
import Footer from '../../COMPONENTS/FOOTER/Footer';
import Navbar_lead from '../../COMPONENTS/HEADER/Navbar_lead';
import './Contact.scss'
import inst from '../CONTACT/assets/inst.svg';
import telegram from '../CONTACT/assets/telegram.svg'

function Traid() {
  return (
    <div className="wrapper">
        <div className="container">
            <Navbar_lead />
            <div className="exchange">

              <div className="bread"><a href="">Главная</a> {'>'} <a href="">Контакты</a> </div>

              <div className="content">
                 
                 <h3>Связаться с нами</h3>
                    <p className='info'>В социальных сетях</p>
                    <a href="" className='inst1'><img src={inst} alt="" /></a>
                    <a href="" className='telegram2'><img src={telegram} alt="" /></a>


                <div className="cards">
                <div>
                    <p>По телефону</p>
                    <h1 className='add'>+38(067) 158 82 66</h1>
                    <h5 className='add'>+38(073) 226 39 81</h5>
                </div>
                <div>
                    <p>По почте</p>
                    <h2 className='add1'>example@gmail.com</h2>
                </div>
                <div>
                    <p>Наш офис</p>
                    <h4 className='add2'>г. Киев, улица Батумская, 18</h4>
                  </div>
                </div>
                  <div className='contact'>
                  <form>
                    <h6>Узнайте  первым о новинках</h6>
                    <input required type='text' placeholder='Ваш e-mail*' />
                    <button>ПОДПИСАТЬСЯ</button>
                  </form>
                  </div>

              </div>

            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Traid