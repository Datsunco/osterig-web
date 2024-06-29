import React, { useEffect } from 'react';
import { Context } from '../..';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './ProfileBlock.module.css'
import imgExit from '../../static/exit.png'
import NoUserIcon from '../icons/NoUsericon';

const ProfileBlock = ({ onLogClick, onRegClick }) => {
    const { store, cart, favorites} = useContext(Context)

    // const onClickAVA = () => {
    //     const form = document.getElementById("form")
    //     form.style.display = "block"
    //     setOpened(true)
    // }
    // if (!localStorage.getItem('token'))
    //     return (
    //         <button onClick={() => onProfileClick()}>Авторизуйся, тварь</button>
    //     )    

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.getData()
            favorites.getFavorites()
            const resp = cart.getDevices()
            if (resp.status === 401) store.checkAuth()
        } else {
            store.checkAuth()
        }
    }, [store, favorites, cart])

    return (
        <div>
            {store.isAuth ?
                <div className={styles.profile_component} id='profileblock'>
                    <div className={styles.vertical_block}>
                        <div className={styles.profile_data_block}>
                            <div className={styles.profile_data_vertical_block}>
                                <h className={styles.nickname_text}>
                                    {store.user.id}
                                </h>
                                <h6 className={styles.email_text}>
                                    {store.user.email}
                                </h6>
                            </div>
                            <div  className={styles.profile_img_block}>
                            <NoUserIcon/>
                            </div>
                            {/* <img src='./UserNoPlus.svg' alt='TMP' className={styles.profile_img_block} /> */}
                            
                        </div>
                        <div className={styles.profile_buttons_block}>
                            <div className={styles.orders_button_block}>
                                <button className={styles.orders_button}>Заказы</button>
                            </div>
                            <div className={styles.favorites_button_block}>
                                <button className={styles.favorites_button}>Избранное</button>
                            </div>
                            <div className={styles.settings_button_block}>
                                <button className={styles.settings_button}>Настройки</button>
                            </div>
                        </div>
                        <div className={styles.profile_logout_block}>
                            <div className={styles.logout_button_block}>
                                <button className={styles.logout_button} onClick={() => store.logout()}>
                                    Выйти
                                    <img className={styles.imgExit} src={imgExit} />
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className={styles.profile_login_block}>
                        <div className={styles.login_button_block}>
                            <img className='' src='./addUser.svg' />
                            <button className={styles.login_button}>Добавить пользователя</button>

                        </div>
                    </div>
                </div>

                :
                <div className={styles.profile_component1} id='profileblock'>
                    <div className={styles.vertical_block}>
                        <div className={styles.profile_data_block}>
                            <div className={styles.profile_data_vertical_block}>
                                <h className={styles.nickname_text}>
                                    Гость
                                </h>
                            </div>
                            <img src='./UserNoPlus.svg' className={styles.profile_img_block} />
                        </div>
                        <div className={styles.profile_buttons_block}>
                            <div className={styles.need_authorization}>
                                Перед началом покупок нужно авторизироваться
                            </div>
                        </div>
                        <div className={styles.profile_nologin_block}>
                            <button onClick={() => onLogClick()} className={styles.sign_in_button}>Войти</button>
                            <button onClick={() => onRegClick()} className={styles.registration_button}>Зарегестрироваться</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default observer(ProfileBlock);