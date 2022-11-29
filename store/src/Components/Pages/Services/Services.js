import React from 'react';
import s from './services.module.scss'
const Services = () => {
    return (
        <div className={s.services}>
            <div className={s.wrapper}>
                <h4>Services</h4>
                <div className={s.block1}>
                    <div>1. We will find the perfect suit for you, with our experts</div>
                    <div>2. If you choose a gift, we will also give you advice and
                        help you arrange a gift</div>
                </div>
                <div className={s.block2}>
                    <img src='./15.png' alt='Services'></img>
                </div>
                <div className={s.block3}>
                    <span>3. And of course, we have a special delivery for you</span>
                </div>
            </div>
        </div>
    );
}

export default Services;
