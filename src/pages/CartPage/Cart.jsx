import React, {useContext, useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import CartDevice from '../../Components/CartDevice/CartDevice';
import './Cart.css'

const Cart = () => {
    const { cart, store} = useContext(Context)

    useEffect(() => {
        cart.getDevices()

    }, [cart])

    return (
        <div>
            <div>
            {cart.devices.map(device => 
                <CartDevice deviceId={device.deviceId} typeId={device.typeId}/>
            )}
            <button onClick={() => store.order()}>Создать заказ</button>
            </div>
        </div>
    );
};

export default observer(Cart);