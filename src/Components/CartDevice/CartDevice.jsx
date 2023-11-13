import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

import './CartDevice.css'

const CartDevice = ({ deviceId, typeId }) => {
    const { cart, favorites } = useContext(Context)
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        console.log('chech')
        setIsFavorite(!isFavorite); // Инвертируем текущее состояние избранного
    };

    useEffect(() => {
        if (favorites.isLoaded == true) {
            favorites.favorites.forEach(fav => {
                if (deviceId === fav.deviceId)
                    setIsFavorite(true)
            });
        }
    }, [favorites, deviceId])


    return (

        <div className="frame-parent">
            <div className="frame-group">
                <div className="frame-child" />
                <img className="frame-item" alt="" src="/frame-1948758489@2x.png" />
            </div>
            <div className="frame-container">
                <div className="chipanalog-parent">
                    <div className="chipanalog">ChipAnalog</div>
                    <div className="ca-is3082wx">{deviceId}</div>
                </div>
                <div className="frame-wrapper">
                    <div className="parent">
                        <div className="div">5 600 ₽</div>
                        <b className="b">5 600 ₽</b>
                    </div>
                </div>
            </div>
            <div className="frame-div">
                <div className="minus-wrapper">
                    <div className="minus">
                        <img className="vector-icon" alt="" src="/vector3.svg" />
                    </div>
                </div>
                <div className="wrapper">
                    <div className="div1">1</div>
                </div>
                <div className="plus-wrapper">
                    <div className="plus">
                        <img className="vector-icon1" alt="" src="/vector4.svg" />
                    </div>
                </div>
            </div>
            <div className="heart-parent">
                {isFavorite == true ?
                    <img className="heart-icon" onClick={() => favorites.addFavorite(deviceId, typeId) && toggleFavorite()} alt="" src="/activeheart.svg" />
                    :
                    <img className="heart-icon" onClick={() => favorites.addFavorite(deviceId, typeId) && toggleFavorite()} alt="" src="/heart.svg" />
                }

                <div className="close" >
                    <img className="vector-stroke-icon" onClick={() => cart.removeDevice(deviceId, typeId)} alt="" src="/vector-stroke.svg" />
                </div>
            </div>
        </div>
    );
};

export default observer(CartDevice);