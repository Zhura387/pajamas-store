import React from 'react';
import s from './mainPage.module.scss'
import Colection from '../../Shared elements/Collection/Colection';
import { Link } from 'react-router-dom'

const MainPage = () => {
    return (
        <div className={s.mainPage}>
            <Colection />
            <div className={s.Wrapp}>
                <div className={s.contentWrapper}>
                    <div className={s.mainText}>
                        <div >
                            <span>Preparing for the New Year</span>
                        </div>
                        <div>
                            <span>We all love to please our loved ones,
                                especially on holidays such as the new year.
                                And we will gladly help you with this matter!
                                With our new collection</span>
                        </div>
                    </div>
                    <div className={s.infoBlock}>
                        <div>
                            <span>Quality</span>
                            <Link to="Quality"><img src='./11.png' alt='Quality'></img></Link>
                        </div>
                        <div>
                            <span>Catalog</span>
                            <Link to="Catalog"><img src='./12.png' alt='Catalog'></img></Link>
                        </div>
                        <div>
                            <span>Services</span>
                            <Link to="Services"><img src='./13.png' alt='Services'></img></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MainPage;
