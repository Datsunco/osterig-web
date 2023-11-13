import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import CartDevice from '../../Components/CartDevice/CartDevice';
import BottomMenu from '../../Components/BottomMenu/BottomMenu';
import CartResult from '../../Components/CartResult/CartResult';
import CartFavHeader from '../../Components/Cart&FavHeader/CartFavHeader';
import './Cart.css'


const Cart = () => {
    const { cart, favorites } = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            favorites.getFavorites()
            cart.getDevices()
        }

    }, [favorites, cart])

    return (
        <div className='cart_component'>

            <div className='cart_elements'>
                <div className='cart_items'>
                    <CartFavHeader state={'cart'}/>
                    {cart.devices.map(device =>
                        <CartDevice deviceId={device.deviceId} typeId={device.typeId} />
                    )}
                </div>

                <CartResult />
            </div>

            <BottomMenu />
        </div>
    );
};

export default observer(Cart);