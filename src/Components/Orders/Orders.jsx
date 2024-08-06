import React, { useEffect, useContext, useState } from 'react';
import styles from './Orders.css';
import Header from '../Header/Header'
import BottomMenu from '../BottomMenu/BottomMenu';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import ordersService from '../../services/ordersService';
import MobileHeader from '../MobileHeader/MobileHeader';
import MobileFooter from '../MobileFooter/MobileFooter';

const stats = [
    {
        status: 'wait',
        text: 'Ожидает оплаты'
    },
    {
        status: 'paid',
        text: 'Оплачен'
    }
]

const Orders = ({ isMobile }) => {
    const { id } = useParams()
    const { orders } = useContext(Context)
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

    const sendConfirm = async (id) => {
        await ordersService.confirmOrder(id)
    }

    const switchStatus = (status) => {
        console.log(stats.find((val) => val.status === status)?.text)
        return stats.find((val) => val.status === status)?.text
    }

    useEffect(() => {
        console.log(isMobile)
    }, [isMobile])

    useEffect(() => {
        console.log(orders.orders.length)
        console.log("renderes")
        orders.getOrders()
        if (localStorage.getItem('token')) {
            orders.getOrders()
        }
    }, [orders])

    useEffect(() => {
        if (id) {
            sendConfirm(id)
        }
    }, [])

    return (
        <div>
            {windowWidth <= breakpoints.mobile ? <MobileHeader /> : <Header />}
            <div className='orders_body' style={{ marginTop: windowWidth <= breakpoints.mobile ? '90px' : '137px', padding: windowWidth <= breakpoints.mobile ? '0 20px' : '' }}>
                <div className='text_orders_h1'>
                    <h1>ЗАКАЗЫ</h1>
                </div>
                {!localStorage.getItem('token') ? (
                    <>
                        <h3 className='cart_elements_empty_main_text'>ЧТОБЫ ПОЛУЧИТЬ ДОСТУП К КОРЗИНЕ, СНАЧАЛА АВТОРИЗИРУЙТЕСЬ</h3>
                        <h4 className='cart_elements_empty_secondary_text'>В каталоге можно найти много товаров</h4>
                        <button onClick={() => console.log('check')} className='cart_elements_empty_button'>В каталог</button>
                    </>
                )
                    :
                    (
                        <div className='frame_for_orders_cart'>
                            {orders.orders.length != 0 ?
                                (
                                    <>
                                        {!(windowWidth <= breakpoints.mobile) ?
                                            <>
                                                {orders.orders.map((order, index) =>
                                                    <>
                                                        <div className='orders_cart'>
                                                            <div className='orders_number'>№{order._id}</div>
                                                            <div className='orders_status_svg'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6">
                                                                    <circle cx="3" cy="3" r="3" fill="#7DF81D" />
                                                                </svg>
                                                            </div>
                                                            <div className='orders_status'>{switchStatus(order.status) ?? 'Ошибка'}</div>
                                                            <div className='orders_date'>10 янв 2023</div>
                                                            <div className='orders_images_block'>
                                                                {order.deviceList.slice(0, 2).map((image) =>
                                                                    <img src={image.productImageUrl} className='orders_images' />
                                                                )}

                                                                {/* <img src='https://assets.lcsc.com/images/lcsc/900x900/20180914_Infineon-Technologies-BTS6143D_C95232_front_10.jpg' className='orders_images' /> */}
                                                                {order.deviceList.length > 3 && <div className='orders_if_images_so_much'>+{order.deviceList.length - 2}</div>}

                                                            </div>
                                                            {/* <div className='orders_price'>110 024 ₽</div> */}
                                                            <div className='orders_price'>{order.totalAmount ?? 'Неизвестно'} ₽</div>
                                                        </div>
                                                        <div className={'orders_line' + (index == orders.orders.length ? 'last' : '')}></div>
                                                    </>
                                                )}
                                            </>

                                            :
                                            <>
                                                {orders.orders.map((order, index) =>
                                                    <>
                                                        <div className='mobile_orders_cart'>
                                                            <div className='mobile_orders_f_row'>
                                                                <div className='orders_number'>№{order._id}</div>
                                                                <div className='orders_status_svg'>
                            
                                                                </div>
                                                                <div className='orders_status'>{switchStatus(order.status) ?? 'Ошибка'}</div>
                                                                <div className='orders_price'>{order.totalAmount ?? 'Неизвестно'} ₽</div>
                                                            </div>
                                                            <div className='mobile_orders_s_row'>
                                                            <div className='mobile_orders_images_block'>
                                                                {order.deviceList.slice(0, 2).map((image) =>
                                                                    <img src={image.productImageUrl} className='orders_images' />
                                                                )}

                                                                {/* <img src='https://assets.lcsc.com/images/lcsc/900x900/20180914_Infineon-Technologies-BTS6143D_C95232_front_10.jpg' className='orders_images' /> */}
                                                                {order.deviceList.length > 3 && <div className='orders_if_images_so_much'>+{order.deviceList.length - 2}</div>}
                                                            </div>
                                                            </div>
                                                            <div className='mobile_orders_date'>10 янв 2023</div>
                                                            
                                                            {/* <div className='orders_price'>110 024 ₽</div> */}
                                                            
                                                        </div>
                                                        <div className={'orders_line' + (index == orders.orders.length ? 'last' : '')}></div>
                                                    </>
                                                )}
                                            </>
                                        }
                                    </>
                                )
                                :
                                (
                                    <>
                                        <h3 className='cart_elements_empty_main_text'>У ВАС ПОКА ЧТО НЕТ АКТИВНЫХ ЗАКАЗАОВ, САМОЕ ВРЕМЯ СДЕЛАТЬ ЗАКАЗ</h3>
                                        <h4 className='cart_elements_empty_secondary_text'>В каталоге можно найти много товаров</h4>
                                        <button onClick={() => console.log('check')} className='cart_elements_empty_button'>В каталог</button>
                                    </>
                                )
                            }

                        </div>
                    )
                }

            </div>
            {windowWidth <= breakpoints.mobile ? <MobileFooter /> : <BottomMenu />}
        </div>
    );
};

export default observer(Orders);