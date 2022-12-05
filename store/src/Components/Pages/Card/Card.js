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
        <div className={s.card}>
            {status === 'loading' && <p>Loading...</p>}
            {error && <p>ohh:{error} </p>}
            {products.map((item) => (
                <div><p>{item.price}</p></div>
            ))}
        </div>
    );
}

export default Card;
