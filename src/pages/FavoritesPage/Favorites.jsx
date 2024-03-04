import React, { useContext, useEffect } from 'react';
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

const Favorites = () => {
    const { cart, favorites } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            favorites.getFavorites()
            cart.getDevices()
        }

    }, [favorites, cart])

    return (
        <div className='favorite_component'>
            <Header />
            {favorites.favorites.length != 0 ?
                <div className='fav_elements'>
                    <CartFavHeader state={'fav'} />
                    <div className='fav_items'>
                        {favorites.favorites.slice(0).reverse().map(device =>
                            <DeviceItem device={device} />
                        )}
                    </div>
                </div>
                :
                <div className='cart_elements_empty'>
                    <CartFavHeader state={'fav'} />
                    <h3 className='cart_elements_empty_main_text'>В ИЗБРАННОМ ПОКА НЕТ ТОВАРОВ</h3>
                    <h4 className='cart_elements_empty_secondary_text'>В каталоге можно найти много товаров</h4>
                    <button onClick={() => navigate("/catalog")} className='cart_elements_empty_button'>В каталог</button>
                </div>
            }
            <BottomMenu />
        </div>
    );
};

export default observer(Favorites);