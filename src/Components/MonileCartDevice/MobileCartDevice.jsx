import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../../utils/consts';

import './MonileCartDevice.css'
// deviceId, typeId 
const MobileCartDevice = ({ device }) => {
    const navigate = useNavigate()
    const { cart, favorites, store } = useContext(Context)
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite); // Инвертируем текущее состояние избранного
    };

    useEffect(() => {
        if (favorites.isLoaded === true) {
            favorites.favorites.forEach(fav => {
                if (device.productCode === fav.productCode)
                    setIsFavorite(true)
            });
        }
    }, [favorites, device, setIsFavorite])


    return (

        <div className="frame-parent">
            <div className="frame-group">
                <div className="frame-child" />
                <img className="frame-item" alt="" src={device.productImageUrl} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100px' }}>
                <div onClick={() => navigate(DEVICE_ROUTE + '/' + device.productCode, { state: { productCode: device.productCode } })}
                    className="frame-container" >
                    <div className="chipanalog-parent">
                        <div className="chipanalog">{device.brandNameEn}</div>
                        <div className="ca-is3082wx">{device.productModel}</div>
                    </div>
                    {/* <div className="frame-wrapper">
                        <div className="parent">
                            <b className="b">{((device.price || device.currencyPrice || device?.productPriceList?.[0].currencyPrice) * store.currency * 3).toFixed(2)} ₽</b>
                        </div>
                    </div> */}
                </div>
                <div className="frame-div">
                    <div style={{ width: '-webkit-fill-available', display: 'flex', flexDirection: 'row'}}>
                        <div className="minus-wrapper" onClick={() => cart.changeDeviceAmount(device, false)}>
                            <div className="minus" >
                                <img className="vector-icon" alt="" src="/vector3.svg" />
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="div1">{device.count}</div>
                        </div>
                        <div className="plus-wrapper" onClick={() => cart.changeDeviceAmount(device, true)}>
                            <div className="plus" >
                                <img className="vector-icon1" alt="" src="/vector4.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="parent">
                            <b className="b">{((device.price || device.currencyPrice || device?.productPriceList?.[0].currencyPrice) * store.currency * 3).toFixed(2)} ₽</b>
                        </div>
                    </div>
                </div>
            </div>
            <div className="heart-parent">
                {isFavorite == true ?
                    <img className="heart-icon" onClick={() => favorites.removeFavorite(device) && toggleFavorite()} alt="" src="/activeheart.svg" />
                    :
                    <img className="heart-icon" onClick={() => favorites.addFavorite(device) && toggleFavorite()} alt="" src="/heart.png" />
                }

                <div className="close" >
                    <img className="vector-stroke-icon" onClick={() => cart.removeDevice(device)} alt="" src="/vector-stroke.svg" />
                </div>
            </div>
        </div>
    );
};

export default observer(MobileCartDevice);