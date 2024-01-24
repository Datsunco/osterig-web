import React, { useContext, useEffect } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import styles from "./CartResultForMAO.module.css"

const CartResultForMAO = ({textbutton}) => {
    const { device, cart, store} = useContext(Context)

    useEffect(() => {
        console.log(cart.getCartSumPrice())
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
                                <div className={styles.frameParent9} onClick={() => store.switchPage()}>
                                    <div className={styles.wrapper1}>
                                        <b className={styles.b21}>{textbutton}</b>
                                    </div>
                                </div>
                            //(textbutton == 1 ?
                          //  <div>asd</div>
                         //   :
                         //   <div>asdsa</div>
                        //)
                            :
                            <div className={styles.frameParent1}>
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