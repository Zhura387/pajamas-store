import React from 'react';
import MainPage from '../MainPage/MainPage';
import Card from '../Card/Card';
import { Routes, Route } from 'react-router-dom'
import Header from '../../Shared elements/Header/Header';
import Footer from '../../Shared elements/Footer/Footer';
import Services from '../Services/Services';
import Quality from '../Quality/Quality';
import NewCollection from '../NewCollection/NewCollection';
const Menu = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='Catalog' element={<Card />} />
                <Route path='Quality' element={<Quality />} />
                <Route path='NewCollection' element={<NewCollection />} />
                <Route path='Services' element={<Services />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default Menu;
