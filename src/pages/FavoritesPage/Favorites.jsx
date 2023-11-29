import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import Header from '../../Components/Header/Header';
import FavoritesDevice from '../../Components/FavoritesDevice/FavoritesDevice';
import DeviceItem from '../../Components/DeviceItem/DeviceItem';
import CartFavHeader from '../../Components/Cart&FavHeader/CartFavHeader';
import BottomMenu from '../../Components/BottomMenu/BottomMenu';
import './Favorites.css'
import PopularTovar from '../../Components/PopularTovar/PopularTovar';

const Favorites = () => {
    const { cart, favorites } = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            favorites.getFavorites()
            cart.getDevices()
        }

    }, [favorites, cart])

    return (
        <div className='favorite_component'>
            <Header/>
            <div className='fav_elements'>
            <CartFavHeader state={'fav'} />
                <div className='fav_items'>
                    {favorites.favorites.map(device =>
                        // <FavoritesDevice deviceId={device.deviceId} typeId={device.typeId} />
                        <DeviceItem device={device}/>
                        )}
                </div>
            </div>
            <PopularTovar/>
            <BottomMenu />
            {/* {favorites.favorites.map(favorite => 
                <FavoritesDevice deviceId={favorite.deviceId} typeId={favorite.typeId}/>
            )} */}
        </div>
    );
};

export default observer(Favorites);