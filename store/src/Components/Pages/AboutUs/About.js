import React from 'react';
import s from './aboutUs.module.scss'
import { useNavigate } from 'react-router-dom'
const About = () => {
    const navigate = useNavigate()
    const Back = () => {
        navigate(-1)
    }
    return (
        <div className={s.aboutUs}>
            <div className={s.wrapper}>
                <button className={s.btnBack} onClick={Back}>Go Back</button>
                <h4>about us</h4>
                <div className={s.block1}>
                    <div>We opened our shop in 2018</div>
                    <div>Our online store is a small team of people with a common goal.
                        We are always happy to help you find the perfect sleep suit,
                        as well as find the perfect gift for your loved ones</div>
                    <div>We work exclusively in Belarus. We are always in touch with you
                        and do our job with love</div>
                </div>
                <div className={s.block2}>
                    <span>We are always glad to see you
                        <svg width="16" height="15" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4417 1.9092C17.7892 -4.71898 33.6592 6.8796 11.4417 21.7937C-10.7758 6.88106 5.09425 -4.71898 11.4417 1.9092Z" fill="#BA0909" fill-opacity="0.85" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default About;
