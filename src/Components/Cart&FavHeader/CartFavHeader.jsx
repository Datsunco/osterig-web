import React, { useContext, useEffect } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import "./CartFavHeader.css"
import { useNavigate } from 'react-router-dom';

const CartFavHeader = ({state}) => {
    const navigate = useNavigate()
    const { store } = useContext(Context)

    const cases = {
        "cart": 'cart_header_first',
        "fav": 'cart_header_second',
    }

    const handleFavoritesClick = () => {
        navigate('/favorites')
    }

    const handleCartClick = () => {
        navigate('/cart')
    }


    useEffect(() => {
        document.getElementsByClassName(cases[state])[0].style.color = 'black'
    })

    return (
        <div className='cart_header'>
            <b className='cart_header_first' onClick={handleCartClick}>КОРИЗНА</b><b className='cart_header_mid'>/</b>
            <b className='cart_header_second' onClick={handleFavoritesClick}>ИЗБРАННОЕ</b>
        </div>
    );
};

export default observer(CartFavHeader);