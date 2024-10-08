import React, { useContext, useEffect } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import styles from "./CartResult.module.css"
import { useNavigate } from 'react-router-dom';

const CartResult = ({isMobile}) => {
    const { device, cart,  store} = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        console.log(cart.getCartSumPrice())
    }, [cart])

    return (
        <div className={styles.rectangleParent} style={{width: isMobile ?  '-webkit-fill-available' : '390px', position:  'relative', display: 'flex', justifyContent: isMobile ? 'center': 'flex-end', left: isMobile ? '0px': '', right: isMobile ? '': ''}}>
            <div className={styles.frameWrapper} style={{width: isMobile ?  '-webkit-fill-available' : '390px'}}>
                <div className={styles.frameContainer} style={{width: isMobile ?  '-webkit-fill-available' : 'auto', padding: isMobile ? '20px' : '17px 17px'}}>
                    <div className={styles.frameDiv}>
                        <div className={styles.frameParent}>
                            <div className={styles.frameGroup}>
                                <div className={styles.frameDiv}>
                                    <div className={styles.parent}>
                                        <div className={styles.div}>Товары</div>
                                        <div className={styles.div1}>{(cart.getCartSumPrice() * store.currency * 3).toFixed(3) } ₽</div>
                                    </div>
                                </div>
                                <div className={styles.group}>
                                    <b className={styles.b}>Итог</b>
                                    <b className={styles.b1}>{(cart.getCartSumPrice() * store.currency * 3).toFixed(3) } ₽</b>
                                </div>
                            </div>
                            
                            <div className={styles.frameParent1}>
                                <div className={styles.wrapper} onClick={() => navigate('/checkout')}>
                                    <b className={styles.b2}>к оформлению</b>
                                </div>
                                <div className={styles.div2}>
                                    <p className={styles.p}>{`Доступные способы доставки `}</p>
                                    <p className={styles.p}>
                                        можно выбрать при оформлении заказа
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(CartResult);