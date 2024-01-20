import React, { useEffect, useContext} from 'react';
import styles from './Orders.css';
import Header from '../Header/Header'
import BottomMenu from '../BottomMenu/BottomMenu';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const Orders = () => {
    const { orders } = useContext(Context)

    useEffect(() => {
        console.log('render')
        if (localStorage.getItem('token')) {
            orders.getOrders()
        }
    }, [orders])

    return (
        <div>
            <Header />
            <div className='orders_body'>
                <div className='text_orders_h1'>
                    <h1>ЗАКАЗЫ</h1>
                </div>
                <div className='frame_for_orders_cart'>

                    <div className='orders_cart'>
                        <div className='orders_number'>№12496</div>
                        <div className='orders_status_svg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                <circle cx="3" cy="3" r="3" fill="#7DF81D" />
                            </svg>
                        </div>
                        <div className='orders_status'>Доставляется</div>
                        <div className='orders_date'>10 янв 2023</div>
                        <div className='orders_images_block'>
                            <img src='https://assets.lcsc.com/images/lcsc/900x900/20180914_Infineon-Technologies-BTS6143D_C95232_front_10.jpg' className='orders_images' />
                            <img src='https://assets.lcsc.com/images/lcsc/900x900/20180914_Infineon-Technologies-BTS6143D_C95232_front_10.jpg' className='orders_images' />
                            <div className='orders_if_images_so_much'>+2</div>
                        </div>
                        <div className='orders_price'>110 024 ₽</div>
                    </div>
                    
                    <div className='orders_line'></div>
                    {orders.orders.map(order => 
                        <div className='orders_cart'>
                        <div className='orders_number'>№{order.order}</div>
                        <div className='orders_status_svg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                <circle cx="3" cy="3" r="3" fill="#7DF81D" />
                            </svg>
                        </div>
                        <div className='orders_status'>Доставляется</div>
                        <div className='orders_date'>10 янв 2023</div>
                        <div className='orders_images_block'>
                            <img src='https://assets.lcsc.com/images/lcsc/900x900/20180914_Infineon-Technologies-BTS6143D_C95232_front_10.jpg' className='orders_images' />
                            <img src='https://assets.lcsc.com/images/lcsc/900x900/20180914_Infineon-Technologies-BTS6143D_C95232_front_10.jpg' className='orders_images' />
                            <div className='orders_if_images_so_much'>+2</div>
                        </div>
                        <div className='orders_price'>110 024 ₽</div>
                    </div>
                    )}
                </div>
            </div>
            <BottomMenu />
        </div>
    );
};

export default observer(Orders);