import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

import './CartDevice.css'

const CartDevice = ({ deviceId, typeId }) => {
    const { store, cart, favorites } = useContext(Context)
    return (
        <div className='device' >
            <h4>{deviceId}</h4>
            <h4>{typeId}</h4>
            <div class="container">
                <input onClick={() => favorites.addFavorite(deviceId, typeId)} type="checkbox" id="check" />
                <button onClick={() => cart.removeDevice(deviceId, typeId)}>Удалить из корзину</button>
            </div>
        </div>
    );
};

export default observer(CartDevice);