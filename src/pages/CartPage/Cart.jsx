import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import CartDevice from '../../Components/CartDevice/CartDevice';
import BottomMenu from '../../Components/BottomMenu/BottomMenu';
import CartResult from '../../Components/CartResult/CartResult';
import CartFavHeader from '../../Components/Cart&FavHeader/CartFavHeader';
import './Cart.css'


const Cart = () => {
    const navigate = useNavigate()
    const { cart, favorites } = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            favorites.getFavorites()
            cart.getDevices()
        }

    }, [favorites, cart])

    return (
        <div className='cart_component'>
            <Header />
            {cart.devices.length != 0 ?
                <div className='cart_elements'>
                    <div className='cart_items'>
                        <CartFavHeader state={'cart'} />
                        {cart.devices.map(device =>
                            <CartDevice device={device} />
                        )}
                    </div>

                    <CartResult />
                </div>
                :
                <div className='cart_elements_empty'>
                    <CartFavHeader state={'cart'} />
                    <h3 className='cart_elements_empty_main_text'>В КОРЗИНЕ ПОКА НЕТ ТОВАРОВ</h3>
                    <h4 className='cart_elements_empty_secondary_text'>В каталоге можно найти много товаров</h4>
                    <button onClick={() => navigate("/catalog")} className='cart_elements_empty_button'>В каталог</button>
                </div>
            }
            <BottomMenu />
        </div>
    );
};

export default observer(Cart);