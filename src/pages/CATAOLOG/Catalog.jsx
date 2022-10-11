import React from "react";
import Navbar from "../../COMPONENTS/NAVBAR/Navbar";
import arrow from '../../ASSETS/arrow.svg'
import '../../pages/CATAOLOG/Catalog.scss'

const Catalog = () => {
  return (
    <div className="main">
      <div>
      <Navbar/>
      <a href="/" >Главная</a>
      <img className="vec" src={arrow}/>
      <a>Каталог</a>
      <div className="sidebar">
        <h3>Каталог</h3>
        <div className="list">
          <ul>
            <li>New</li>
            <li>Bestsellers</li>
            <li>Вверхняя одежда</li>
            <li>Шубы</li>
            <li>Тренчи</li>
            <li>Пальто</li>
            <li>Пуховки и Жилеты</li>
            <li>Костюмы</li>
            <li>Жакеты</li>
            <li>Платья</li>
            <li>Рубашки и Блузки</li>
            <li>Юбки</li>
            <li>Футболки и топы</li>
            <li>Аксессуары</li>
            <li>Sale</li>
            <li>Summer</li>
            <a href="">Посмотреть все</a>
          </ul>
        </div>
      </div>
      <a href="/">Размер</a>
      <img src={arrow}/>
      <a href="/">Цвет</a>
      <img src={arrow}/>
      <a href="/">Цена</a>
      <img src={arrow}/>
      <a href="/">Сортировать по</a>
      <img src={arrow}/>
    </div>
    </div>
  );
};

export default Catalog;
