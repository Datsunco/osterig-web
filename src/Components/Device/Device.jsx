import React, { useContext, useState, useEffect } from 'react';
import './Device.css'
import { observer } from 'mobx-react-lite';
import { Context } from '../..';


const Device = ({ productModel, catalogName, productPriceList, productImageUrl, catalogId }) => {
    const { store, favorites, cart } = useContext(Context)
    const [isFavorite, setIsFavorite] = useState(false);
    const [isCart, setIsCart] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite); // Инвертируем текущее состояние избранного
    };

    const toggleCart = () => {
        setIsCart(!isCart); // Инвертируем текущее состояние избранного
    };

    useEffect(() => {
        favorites.favorites.forEach(fav => {
            if (productModel == fav.deviceId)
                setIsFavorite(true)
        });
        cart.devices.forEach(dev => {
            if (productModel == dev.deviceId)
                setIsCart(true)
        });
    }, [store, favorites, productModel])

    return (
        <div className='device'>
            <img src={productImageUrl}></img>
            <h3>Модель: {productModel}</h3>
            <h4>артикул: {catalogName}</h4>
            <div class="container">
                <input onClick={() => favorites.addFavorite(productModel, catalogId) && toggleFavorite()} type="checkbox" id="check" />
                <button onClick={() => cart.addDevice(productModel, catalogId) && toggleCart()}>В корзину</button>
            </div>
            {isFavorite == true ? (
                <div style={{ color: 'red' }}>Избранное</div> // Сердце закрашено, если товар в избранном

            ) : (
                <div>Не Избранное</div> // Пустое сердце, если товар не в избранном
            )}
            {isCart == true ? (
                <div style={{ color: 'red' }}>В корзине</div> // Сердце закрашено, если товар в избранном

            ) : (
                <div>Не в козине</div> // Пустое сердце, если товар не в избранном
            )}
        </div>
    );
};

export default observer(Device);