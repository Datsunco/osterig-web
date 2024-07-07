import React, { useContext, useEffect } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import styles from "./CartResultForMAO.module.css"
import ordersService from '../../services/ordersService';

const CartResultForMAO = ({textbutton, disabled}) => {
    const { device, cart, store, order} = useContext(Context)

    useEffect(() => {
        console.log(cart.getCartSumPrice())
    }, [cart])

    const mainButtonClick = () => {
        if (textbutton === 'Оплатить')
            ordersService.createOrder(store.user.userId, (cart.getCartSumPrice() * store.currency * 3).toFixed(3), store.paymentType)
        if (disabled) 
            store.switchPage() 
      }

    return (
        <div className={styles.rectangleParent}>
            <div className={styles.frameWrapper}>
                <div className={styles.frameContainer}>
                    <div className={styles.frameDiv}>
                        <div className={styles.frameParent}>
                            <div className={styles.frameGroup}>
                                <div className={styles.frameDiv}>
                                    <div className={styles.parent}>
                                        <div className={styles.div}>Товары</div>
                                        <div className={styles.div1}>{(cart.getCartSumPrice() * store.currency * 3).toFixed(3) } ₽</div>
                                    </div>
                                </div>
                                { store.deliveryType != '' && (
                                    <div className={styles.frameDiv}>
                                    <div className={styles.parent}>
                                        <div className={styles.div}>Доставка</div>
                                        <div className={styles.div1}>{store.deliveryPrice } ₽</div>
                                    </div>
                                </div>
                                ) }
                                <div className={styles.group}>
                                    <b className={styles.b}>Итог</b>
                                    <b className={styles.b1}>{(cart.getCartSumPrice() * store.currency * 3).toFixed(3) } ₽</b>
                                </div>
                            </div>
                            {
                                store.isAuth ?
                                <div className={styles.frameParent9} onClick={() => mainButtonClick()}>
                                    <div className={disabled ? styles.wrapper1 : styles.wrapper}>
                                        <b className={styles.b21}>{textbutton}</b>
                                    </div>
                                </div>
                            :
                            <div className={styles.frameParent9}>
                                <div className={styles.wrapper}>
                                    <b className={styles.b2}>{textbutton}</b>
                                </div>
                            </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(CartResultForMAO);