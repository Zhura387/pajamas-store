import React from 'react';
import { useNavigate } from 'react-router-dom'
import s from './contacts.module.scss'
const Contacts = () => {
    const navigate = useNavigate()
    const Back = () => {
        navigate(-1)
    }
    return (
        <div className={s.contacts}>
            <div className={s.wrapper}>
                <button className={s.btnBack} onClick={Back}>Go Back</button>
            </div>
        </div>
    );
}

export default Contacts;
