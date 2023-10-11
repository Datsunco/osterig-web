import React, {useContext, useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import FavoritesDevice from '../../Components/FavoritesDevice/FavoritesDevice';
import './Favorites.css'

const Favorites = () => {
    const { favorites } = useContext(Context)

    useEffect(() => {
        favorites.getFavorites()

    }, [favorites])

    return (
        <div>
            {favorites.favorites.map(favorite => 
                <FavoritesDevice deviceId={favorite.deviceId} typeId={favorite.typeId}/>
            )}
        </div>
    );
};

export default observer(Favorites);