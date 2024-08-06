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
import MobileHeader from '../../Components/MobileHeader/MobileHeader';
import MobileFooter from '../../Components/MobileFooter/MobileFooter';
import MobileCartDevice from '../../Components/MonileCartDevice/MobileCartDevice';
import { isObservableMap } from 'mobx';


const Cart = () => {
    const navigate = useNavigate()
    const { cart, favorites, store, userStore } = useContext(Context)
    const [opened, setOpened] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const breakpoints = {
        mobile: 991
    }


    const handleResize = () => {
        console.log(window.innerWidth)
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
        store.getCurrency()

        console.log('auth', userStore._isAuth)
        if (localStorage.getItem('token')) {
            favorites.getFavorites()
            get()

        }

    }, [favorites, cart])

    return (
        <div className='cart_component'>
            {windowWidth <= breakpoints.mobile ? <MobileHeader /> : <Header />}
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
                            <div className='cart_elements' style={{ flexDirection: windowWidth <= breakpoints.mobile ? 'column' : 'row', padding: windowWidth <= breakpoints.mobile ? '20px' : '0', marginTop: windowWidth <= breakpoints.mobile ? '80px' : '140px' }}>
                                <div className='cart_items'>
                                    <CartFavHeader state={'cart'} />
                                    <div style={ windowWidth <= breakpoints.mobile ? {height: '50vh',overflowY: 'scroll'}: {}}>
                                    {cart.devices.slice(0).reverse().map(device => {
                                        if (windowWidth <= breakpoints.mobile)
                                            return (
                                                <MobileCartDevice device={device} />
                                            )
                                        else return (
                                            <CartDevice device={device} />
                                        )
                                    }
                                    )}
                                    </div>
                                </div>
                                <div style={{zIndex: '50', width: '-webkit-fill-available'}}>
                                <CartResult isMobile={windowWidth <= breakpoints.mobile} />
                                </div>
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
            {windowWidth <= breakpoints.mobile ? <></> : <BottomMenu /> }
        </div>
    );
};

export default observer(Cart);