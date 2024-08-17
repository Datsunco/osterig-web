import React, { useContext, useEffect } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import styles from "./CartResultForMAO.module.css"
import ordersService from '../../services/ordersService';
import { useNavigate } from 'react-router-dom';

const CartResultForMAO = ({textbutton, disabled,isMobile}) => {
    const navigate = useNavigate()
    const { device, cart, store, order} = useContext(Context)

    useEffect(() => {
        console.log(cart.getCartSumPrice())
    }, [cart])

    const mainButtonClick = async () => {
        let resp = null
        if (textbutton === 'Оплатить'){
            resp = await ordersService.createOrder(
                store.user.id,
                (cart.getCartSumPrice() * store.currency * 3).toFixed(3),
                {  
                    paymentType: store.paymentType,
                    email: store.email,
                    name:  store.name,
                    surname: store.surname,
                    middlename: store.middlename,
                    phone: store.phone,
                    address: store.address,
                    deliveryType: store.deliveryType,
                    deliveryPrice: store.deliveryPrice,
                    
                }
            )
            console.log(resp)
            window.location.href = resp.data.payment.confirmation.confirmation_url
            // await navigate(resp.data.payment.confirmation.confirmation_url, { replace: true })
        }
        if (disabled) 
            store.switchPage() 
      }

    return (
        <div className={styles.rectangleParent} style={{width: isMobile ?  '-webkit-fill-available' : '390px', height: '180px', position:'relative', bottom: isMobile ? '0': '', display: 'flex', justifyContent: isMobile ? 'center': 'flex-end', left: isMobile ? '10px': '', right: isMobile ? '10px': ''}}>
            <div className={styles.frameWrapper} style={{width: isMobile ?  '-webkit-fill-available' : '390px', height: '250px',}}>
                <div className={styles.frameContainer}  style={{width: isMobile ?  '-webkit-fill-available' : 'auto', padding: isMobile ? '20px' : '17px 17px'}}>
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