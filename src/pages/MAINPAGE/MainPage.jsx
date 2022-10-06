import React, { useEffect, useState } from 'react'
import './MainPage.scss'
import { Link } from 'react-router-dom';
import Navbar from '../../COMPONENTS/NAVBAR/Navbar';
import axios from 'axios';


const MainPage = () => {

  const [data, setData] = useState([])

useEffect(() => {
  const options = {
    method: 'GET',
    url: 'https://kara-balta.p.rapidapi.com/products',
    headers: {
      'X-RapidAPI-Key': '3a51998120msh0c0766059662c27p13690cjsn79a06260df4d',
      'X-RapidAPI-Host': 'kara-balta.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
    console.log(response.data);
    setData(response.data)
  }).catch(function (error) {
    console.error(error);
  });
}, [])




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
        <div className='second-container'>
          {data.map(item => (
            <div key={item.id}>{item.title}</div>
          ))}
        </div>
    </div>
  )
}

export default MainPage