import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Routes;