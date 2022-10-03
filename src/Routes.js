import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Basket from './pages/basketPage/Basket';
import Catalog from './pages/catalogPage/Catalog';
import Contacts from './pages/contactsPage/Contacts';
import Favorite from './pages/favoritePage/Favorite';
import Home from './pages/homePage/Home';
import Payment from './pages/paymentPage/Payment';
import Product from './pages/productPage/Product';
import Return from './pages/returnPage/Return';
import History from './pages/historyPage/History'
import Data from './pages/dataPage/Data';
import Registr from './pages/regPage/Registr';
import Login from './pages/loginPage/Login'

const Routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
                <Route path='/exchange_return' element={<Return/>}/>
                <Route path='/payment_delivery' element={<Payment/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/basket_clearance' element={<Basket/>}/>
                <Route path='/favorite' element={<Favorite/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/history_products' element={<History/>}/>
                <Route path='/personal_data' element={<Data/>}/>
                <Route path='/registration' element={<Registr/>}/>
                <Route path='/login' element={<Login/>}/>

            </Routes>
        </BrowserRouter>
    );
};

export default Routes;