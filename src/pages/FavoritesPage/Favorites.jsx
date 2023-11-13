import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import FavoritesDevice from '../../Components/FavoritesDevice/FavoritesDevice';
import DeviceItem from '../../Components/DeviceItem/DeviceItem';
import CartFavHeader from '../../Components/Cart&FavHeader/CartFavHeader';
import BottomMenu from '../../Components/BottomMenu/BottomMenu';
import './Favorites.css'

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
            <div className='fav_elements'>
            <CartFavHeader state={'fav'} />
                <div className='fav_items'>
                    {favorites.favorites.map(device =>
                        // <FavoritesDevice deviceId={device.deviceId} typeId={device.typeId} />
                        <DeviceItem device={
                            {productCode: "C908213",
                            catalogNameEn: "TVS",
                            productImageUrl: "https://assets.lcsc.com/images/lcsc/224x224/20230202_FUXINSEMI-SMF5-0A_C908213_front.jpg",
                            brandNameEn: "Chipanalog",
                            productModel: device.deviceId,
                            currencyPrice: 127}
                        }/>
                        )}
                </div>
            </div>

            <BottomMenu />
            {/* {favorites.favorites.map(favorite => 
                <FavoritesDevice deviceId={favorite.deviceId} typeId={favorite.typeId}/>
            )} */}
        </div>
    );
};

export default observer(Favorites);