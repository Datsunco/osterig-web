import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import styles from "./popUpLogin.module.css"
import LogoSVG from '../Header/LogoSVG';

const PopUpLogin = ({ opened, onClose, ava }) => {
    const { store } = useContext(Context)
    const loginPopUpRef = useRef(null)
    const loginSecPopUpRef = useRef(null)
    const regPopUpRef = useRef(null)
    const regSecPopUpRef = useRef(null)
    const [emailValue, setEmailValue] = useState("")
    const [passValue, setPassValue] = useState("")
    const [confirmPassValue, setConfirmPassValue] = useState("")
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if (opened == false) {
            document.body.style.overflowY =  'scroll'
            return;
        } else document.body.style.overflowY =  'hidden'
        

        const handleClick = (e) => {
            if (opened == false) return
            if (!loginPopUpRef.current && !ava.current && !loginSecPopUpRef.current && !regPopUpRef.current && !regSecPopUpRef.current) return;
            
            if (!loginPopUpRef.current?.contains(e.target) && !ava.current?.contains(e.target) && !loginSecPopUpRef.current?.contains(e.target) && !regPopUpRef.current?.contains(e.target) && !regSecPopUpRef.current?.contains(e.target)) {
                onClose()
            }
        }

        document.body.style.overflowY =  'hidden'
        document.addEventListener("click", handleClick)

        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [opened, onClose,loginPopUpRef, ava])

    const handleLoginClick = () => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (re.test(emailValue)) {
            setIsLogin(true)
            const form = document.getElementById("screen1")
            form.style.display = "none"
            const form2 = document.getElementById("screen2")
            form2.style.display = "flex"
        }

    }

    const handleRegistartionClick = () => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (re.test(emailValue)) {
            setIsLogin(true)
            const form = document.getElementById("screen3")
            form.style.display = "none"
            const form2 = document.getElementById("screen4")
            form2.style.display = "flex"
        }

    }

    const handleRegClick = () => {
        const form = document.getElementById("screen1")
        form.style.display = "none"
        const form2 = document.getElementById("screen3")
        form2.style.display = "flex"
        // loginPopUpRef = document.getElementById("screen3")

    }
    const handleLogClick = () => {
        const form = document.getElementById("screen3")
        form.style.display = "none"
        const form2 = document.getElementById("screen1")
        form2.style.display = "flex"
        // loginPopUpRef = document.getElementById("screen1")

    }

    const handleLoginPassClick = async () => {
        await store.login(emailValue, passValue)
        if (store.isAuth == true) {
            const form2 = document.getElementById("form")
            form2.style.display = "none"
            document.body.style.overflowY =  'scroll'
        }
    }

    const handleRegPassClick = async () => {
        if (passValue == confirmPassValue) {
            await store.registration(emailValue, passValue)
            if (store.isAuth == true) {
                const form2 = document.getElementById("form")
                form2.style.display = "none"
                document.body.style.overflowY =  'scroll'
            }
        }
    }

    return (
        <div className={styles.popup_background} id="form">
            <div ref={loginPopUpRef}  useRef={loginPopUpRef} className={styles.popup_login_main_block} id="screen1">
                <div className={styles.popup_login_main_block_all}>
                    <div className={styles.popup_login_top_block_log}>
                        <div className={styles.popup_login_top_block_logo}>
                            <LogoSVG />
                        </div>
                        <b className={styles.popup_login_top_block_text}>Войдите в свой аккаунт Osterrig</b>
                    </div>

                    <div className={styles.popup_login_input_block}>
                        <b className={styles.popup_login_input_text}>ПОЧТА</b>
                        <input value={emailValue} onChange={(e) => setEmailValue(e.target.value)} className={styles.popup_login_input} placeholder='Ваш email' ></input>
                    </div>
                    <div className={styles.popup_login_buttons_block}>
                        <button className={styles.popup_login_buttons_block_regist} onClick={handleLoginClick}>
                            Войти
                        </button>
                        <button className={styles.popup_login_buttons_block_login} onClick={handleRegClick}>
                            зарегестрироваться
                        </button>
                    </div>
                </div>
            </div>
            <div ref={loginSecPopUpRef}  useRef={loginSecPopUpRef} className={styles.popup_login_sec_block} id="screen2">
                <div className={styles.popup_login_main_block_all}>
                    <div className={styles.popup_login_top_block_log}>
                        <div className={styles.popup_login_top_block_logo}>
                            <LogoSVG />
                        </div>
                        <b className={styles.popup_login_top_block_text}>Войдите в свой аккаунт Osterrig</b>
                    </div>

                    <div className={styles.popup_login_input_block}>
                        <b className={styles.popup_login_input_text}>{emailValue}</b>
                        <input value={passValue} onChange={(e) => setPassValue(e.target.value)} className={styles.popup_login_input} placeholder='Ваш пароль' ></input>
                    </div>
                    <div className={styles.popup_login_buttons_block}>
                        <button className={styles.popup_login_buttons_block_regist} onClick={handleLoginPassClick}>
                            Войти
                        </button>
                        {/* <button className={styles.popup_login_buttons_block_login}>
                            зарегестрироваться
                        </button> */}
                    </div>
                </div>
            </div>
            <div ref={regPopUpRef}  useRef={regPopUpRef}  className={styles.popup_login_sec_block} id="screen3">
                <div className={styles.popup_login_main_block_all}>
                    <div className={styles.popup_login_top_block_reg}>
                        <div className={styles.popup_login_top_block_logo}>
                            <LogoSVG />
                        </div>
                        <b className={styles.popup_login_top_block_text}>Зарегестрируйте свой аккаунт Osterrig</b>
                    </div>

                    <div className={styles.popup_login_input_block}>
                        <b className={styles.popup_login_input_text}>ПОЧТА</b>
                        <input value={emailValue} onChange={(e) => setEmailValue(e.target.value)} className={styles.popup_login_input} placeholder='Ваш email' ></input>
                    </div>
                    <div className={styles.popup_login_buttons_block}>
                        <button className={styles.popup_login_buttons_block_regist} onClick={handleRegistartionClick}>
                            зарегестрироваться
                        </button>
                        <button className={styles.popup_login_buttons_block_login} onClick={handleLogClick}>
                            войти
                        </button>
                    </div>
                </div>
            </div>
            <div ref={regSecPopUpRef}  useRef={regSecPopUpRef} className={styles.popup_login_four_block} id="screen4">
                <div className={styles.popup_login_main_block_all}>
                    <div className={styles.popup_login_top_block_reg_pass}>
                        <div className={styles.popup_login_top_block_logo}>
                            <LogoSVG />
                        </div>
                        <b className={styles.popup_login_top_block_text}>Придумайте пароль</b>
                    </div>

                    <div className={styles.popup_login_input_block_reg_pass}>
                        <input value={emailValue} onChange={(e) => setEmailValue(e.target.value)} className={styles.popup_login_input} ></input>
                        <input value={passValue} onChange={(e) => setPassValue(e.target.value)} className={styles.popup_login_input} placeholder='Ваш пароль' ></input>
                        <input value={confirmPassValue} onChange={(e) => setConfirmPassValue(e.target.value)} className={styles.popup_login_input} placeholder='Повторите ваш пароль' ></input>
                    </div>
                    <div className={styles.popup_login_buttons_block}>
                        <button className={styles.popup_login_buttons_block_regist} onClick={handleRegPassClick}>
                            зарегестрироваться
                        </button>
                        {/* <button className={styles.popup_login_buttons_block_login} onClick={handleLogClick}>
                            войти 
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(PopUpLogin);