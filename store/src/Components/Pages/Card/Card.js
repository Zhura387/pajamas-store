import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productFetch } from '../../../redux/productSlice'
import s from './card.module.scss'
const Card = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.product)
    const { status, error } = useSelector((state) => state.product)
    useEffect(() => {
        dispatch(productFetch());
    }, [dispatch]);


    return (
        <div className={s.cardWrapper}>
            <div className={s.cardContent}>
                {status === 'loading' && <p>Loading...</p>}
                {error && <p>ohh:{error} </p>}
                {products.map((item) => (
                    <div className={s.card}>
                        <span className={s.like}><img src='./heard.png' alt='heard' /></span>
                        <img className={s.img} src={item.imageUrl} alt='pajams'></img>
                        <p className={s.modal}>{item.model}</p>
                        <p className={s.price}>price: {item.price}</p>
                        <p className={s.color}>colot: {item.color}</p>
                        <span className={s.plus}><img src='./plus.png' alt='plus' /></span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
