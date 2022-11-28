import React from 'react';
import s from './mainPage.module.scss'
import Header from '../../Shared elements/Header/Header';
import Footer from '../../Shared elements/Footer/Footer';
import Colection from '../../Shared elements/Collection/Colection';

const MainPage = () => {
    return (
        <div className={s.mainPage}>
            <Header/>
            <Colection/>
            <Footer/>
        </div>
    );
}

export default MainPage;
