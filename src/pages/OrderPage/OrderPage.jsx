import React from 'react';
import Orders from '../../Components/Orders/Orders';
import { observer } from 'mobx-react-lite';

const OrderPage = () => {
    return (
        <div>
            <Orders/>
        </div>
    );
};

export default observer(OrderPage);