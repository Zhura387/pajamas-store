import React from 'react';
import s from './quality.module.scss'
import { useNavigate } from 'react-router-dom'
const Quality = () => {
    const navigate = useNavigate()
    const Back = () => {
        navigate(-1)
    }
    return (
        <div className={s.quality}>
            <div className={s.wrapper}>
                <button className={s.btnBack} onClick={Back}>Go Back</button>
                <h4>quality</h4>
                <div className={s.block1}>
                    <div className={s.block1Text}>
                        <span>Our products are made from 3 types of fabric:</span>
                        <ul>
                            <li>silk</li>
                            <li>satin</li>
                            <li>cotton</li>
                        </ul>
                        <span>Our pajamas are made in a small factory
                            where people put their love into them</span>
                    </div>
                    <div className={s.img}><img src='./21.png' alt='Quality'></img></div>
                </div>
                <div className={s.block2}>
                    <div>In addition to fabric, plastic fittings are used for the final product.</div>
                    <div>Also our pajamas have all the necessary documents/certificates</div>
                </div>
                <div className={s.block3}>
                    <span>We will select the best option for you</span>
                    <h5>you will fall in love with our pajamas</h5>
                </div>
            </div>
        </div>
    );
}

export default Quality;
