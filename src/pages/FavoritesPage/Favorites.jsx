import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import Header from '../../Components/Header/Header';
import FavoritesDevice from '../../Components/FavoritesDevice/FavoritesDevice';
import DeviceItem from '../../Components/DeviceItem/DeviceItem';
import CartFavHeader from '../../Components/Cart&FavHeader/CartFavHeader';
import BottomMenu from '../../Components/BottomMenu/BottomMenu';
import './Favorites.css'
import { useNavigate } from 'react-router-dom';
import PopularTovar from '../../Components/PopularTovar/PopularTovar';
import MobileHeader from '../../Components/MobileHeader/MobileHeader';
import MobileFooter from '../../Components/MobileFooter/MobileFooter';
import MobileDeviceItem from '../../Components/MobileDeviceItem/MobileDeviceItem';

const Favorites = () => {
    const { cart, favorites } = useContext(Context)
    const navigate = useNavigate()
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

    useEffect(() => {
        if (localStorage.getItem('token')) {
            favorites.getFavorites()
            cart.getDevices()
        }

    }, [favorites, cart])

    return (
        <div className='favorite_component'>
            {windowWidth <= breakpoints.mobile ? <MobileHeader/> : <Header/> }
            {!localStorage.getItem('token') ?
                <div className='cart_elements_empty' style={{ marginTop: windowWidth <= breakpoints.mobile ? '137px' : '137px', padding: windowWidth <= breakpoints.mobile ? '0 20px' : '' }}>
                    <CartFavHeader state={'fav'} />
                    <h3 className='cart_elements_empty_main_text'>ЧТОБЫ ПОЛУЧИТЬ ДОСТУП К ИЗБРАННОМУ, СНАЧАЛА АВТОРИЗИРУЙТЕСЬ</h3>
                    <h4 className='cart_elements_empty_secondary_text'>В каталоге можно найти много товаров</h4>
                    <button onClick={() => navigate("/mainpage")} className='cart_elements_empty_button'>В каталог</button>
                </div>
                :
                (
                    <>
                        {favorites.favorites.length != 0 ?
                            <div className='fav_elements' style={{ padding: windowWidth <= breakpoints.mobile  ? '20px': '0', marginTop: windowWidth <= breakpoints.mobile  ? '70px': '140px'}}>
                                <CartFavHeader state={'fav'} />
                                <div className='fav_items'>
                                    {favorites.favorites.slice(0).reverse().map(device =>
                                    <>
                                        {
                                            windowWidth <= breakpoints.mobile ? 
                                            <MobileDeviceItem device={device} />
                                            :
                                            <DeviceItem device={device}/>
                                        }
                                    </>
                                        
                                    )}
                                </div>
                            </div>
                            :
                            <div className='cart_elements_empty'>
                                <CartFavHeader state={'fav'} />
                                <h3 className='cart_elements_empty_main_text'>В ИЗБРАННОМ ПОКА НЕТ ТОВАРОВ</h3>
                                <h4 className='cart_elements_empty_secondary_text'>В каталоге можно найти много товаров</h4>
                                <button onClick={() => navigate("/mainpage")} className='cart_elements_empty_button'>В каталог</button>
                            </div>
                        }
                    </>
                )
            }
            {/* {windowWidth <= breakpoints.mobile ? <MobileFooter/> : <BottomMenu /> } */}
        </div>
    );
};

export default observer(Favorites);