import React, { useContext, useEffect } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import styles from "./CartResultForMAO.module.css"

const CartResultForMAO = ({ textbutton, isButtonDisabled, dileviry}) => {
    const { device, cart, store } = useContext(Context)

    useEffect(() => {
        
    }, [cart])

    const nextPage = () => {
        store.nextPage()
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
                                        <div className={styles.div1}>{cart.getCartSumPrice()} ₽</div>
                                    </div>
                                </div>
                                <div className={styles.group}>
                                    <b className={styles.b}>Итог</b>
                                    <b className={styles.b1}>13 600 ₽</b>
                                </div>
                            </div>
                            {
                                store.isAuth ?
                                    <button className={styles.b21} disabled={isButtonDisabled} onClick={() => store.switchPage()}>{textbutton}</button>
                                    :
                                    <button className={styles.b2} >{textbutton}</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(CartResultForMAO);