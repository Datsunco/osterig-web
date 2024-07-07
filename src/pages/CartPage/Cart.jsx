import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import CartDevice from '../../Components/CartDevice/CartDevice';
import BottomMenu from '../../Components/BottomMenu/BottomMenu';
import CartResult from '../../Components/CartResult/CartResult';
import CartFavHeader from '../../Components/Cart&FavHeader/CartFavHeader';
import './Cart.css'
import PopUpLogin from '../../Components/popUpLogin/popUpLogin';


const Cart = () => {
    const navigate = useNavigate()
    const { cart, favorites, store, userStore } = useContext(Context)
    const [opened, setOpened] = useState(false)

    const get = async () => {
        const stm = await cart.getDevices()
        if (stm === 'auth')
            store.checkAuth()
        else {
            console.log('complete')
        }
    }

    const onClickAuthorization = () => {

        const form = document.getElementById("form")
        form.style.display = "block"
        setOpened(true)
    }

    useEffect(() => {
        console.log('auth', userStore._isAuth)
        if (localStorage.getItem('token')) {
            favorites.getFavorites()
            get()

        }

    }, [favorites, cart])

    return (
        <div className='cart_component'>
            <Header />
            {!localStorage.getItem('token') ?
                <div className='cart_elements_empty'>
                    <CartFavHeader state={'cart'} />
                    <h3 className='cart_elements_empty_main_text'>ЧТОБЫ ПОЛУЧИТЬ ДОСТУП К КОРЗИНЕ, СНАЧАЛА АВТОРИЗИРУЙТЕСЬ</h3>
                    <h4 className='cart_elements_empty_secondary_text'>В каталоге можно найти много товаров</h4>
                    <button onClick={() => navigate("/catalog")} className='cart_elements_empty_button'>В каталог</button>
                </div>
                :
                (
                    <>
                        {cart.devices.length != 0 ?
                            <div className='cart_elements'>
                                <div className='cart_items'>
                                    <CartFavHeader state={'cart'} />
                                    {cart.devices.slice(0).reverse().map(device =>
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
                    </>

                )
            }
            {/* <PopUpLogin opened={opened} onClose={() => onClickOutsideForm()} ava={exceptRef} />
            <div useRef={profileRef} ref={profileRef}>
                {profileOpened === true ?
                    <div ref={exceptRef} useRef={exceptRef}>
                        <ProfileBlock onLogClick={onClickAuthorization} onRegClick={onClickRegistration} />
                    </div>
                    :
                    null
                }

            </div> */}
            <BottomMenu />
        </div>
    );
};

export default observer(Cart);