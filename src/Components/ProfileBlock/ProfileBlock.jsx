import React from 'react';
import { Context } from '../..';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './ProfileBlock.module.css'

const ProfileBlock = ({ onProfileClick }) => {
    const { store, cart, favorites } = useContext(Context)

    // const onClickAVA = () => {
    //     const form = document.getElementById("form")
    //     form.style.display = "block"
    //     setOpened(true)
    // }
    // if (!localStorage.getItem('token'))
    //     return (
    //         <button onClick={() => onProfileClick()}>Авторизуйся, тварь</button>
    //     )

    return (
        <div className={styles.profile_component} id='profileblock'>
            {store.isAuth ?
                <div>
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
                            <img src='./UserNoPlus.svg' className={styles.profile_img_block} />
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
                                <button className={styles.logout_button} onClick={() => store.logout()}>Выйти</button>
                                <img className='' />
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
                <button onClick={() => onProfileClick()}>Авторизуйся, тварь</button>
            }
        </div>
    );
};

export default observer(ProfileBlock);