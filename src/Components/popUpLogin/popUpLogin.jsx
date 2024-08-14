import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import styles from "./popUpLogin.module.css"
import LogoSVG from '../Header/LogoSVG';

const PopUpLogin = ({ opened, onClose, ava, isMobile}) => {
    const { store } = useContext(Context)
    const loginPopUpRef = useRef(null)
    const loginSecPopUpRef = useRef(null)
    const regPopUpRef = useRef(null)
    const regSecPopUpRef = useRef(null)
    const loadButRef = useRef(null)
    const [emailValue, setEmailValue] = useState("")
    const [passValue, setPassValue] = useState("")
    const [confirmPassValue, setConfirmPassValue] = useState("")
    const [isLogin, setIsLogin] = useState(false)
    const [isEmailCorrect, setIsEmailCorrect] = useState(true)
    const [isPassCorrect, setIsPassCorrect] = useState(true)
    const [isPassRight, setIsPassRight] = useState(true)
    const [isPassSame, setIsPassSame] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (opened == false) {
            document.body.style.overflowY = 'scroll'
            return;
        } else document.body.style.overflowY = 'hidden'


        const handleClick = (e) => {
            if (opened == false) return

            if (!loginPopUpRef.current && !ava.current && !loginSecPopUpRef.current && !regPopUpRef.current && !regSecPopUpRef.current && !loadButRef.current) return;

            if (!loginPopUpRef.current?.contains(e.target) && !ava.current?.contains(e.target) && !loginSecPopUpRef.current?.contains(e.target) && !regPopUpRef.current?.contains(e.target) && !regSecPopUpRef.current?.contains(e.target) && !loadButRef.current?.contains(e.target)) {
                console.log("check contains")
                const form2 = document.getElementById("screen2")
                form2.style.display = "none"
                const form3 = document.getElementById("screen3")
                form3.style.display = "none"
                const form4 = document.getElementById("screen4")
                form4.style.display = "none"
                const form1 = document.getElementById("screen1")
                form1.style.display = "flex"
                onClose()
            }
        }

        document.body.style.overflowY = 'hidden'
        document.addEventListener("mousedown", handleClick)

        return () => {
            document.removeEventListener("mousedown", handleClick)
            setIsEmailCorrect(true)
            setIsPassCorrect(true)
            setEmailValue('')
            setPassValue('')
        }
    }, [opened, onClose, loginPopUpRef, ava])

    const handleLoginClick = () => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (re.test(emailValue)) {
            setIsLogin(true)
            const form = document.getElementById("screen1")
            form.style.display = "none"
            const form2 = document.getElementById("screen2")
            form2.style.display = "flex"
        } else {
            setIsEmailCorrect(false)
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
        } else {
            setIsEmailCorrect(false)
        }

    }

    const handleRegClick = () => {
        const form1 = document.getElementById("screen1")
        form1.style.display = "none"
        const form2 = document.getElementById("screen2")
        form2.style.display = "none"
        const form3 = document.getElementById("screen3")
        form3.style.display = "flex"
        // loginPopUpRef = document.getElementById("screen3")

    }
    const handleLogClick = () => {
        const form3 = document.getElementById("screen3")
        form3.style.display = "none"
        const form4 = document.getElementById("screen4")
        form4.style.display = "none"
        const form2 = document.getElementById("screen1")
        form2.style.display = "flex"
        // loginPopUpRef = document.getElementById("screen1")

    }

    const handleLoginPassClick = async () => {
        setIsPassCorrect(true)
        setIsLoading(true)
        await store.login(emailValue, passValue)
        if (store.isAuth === true) {
            const form2 = document.getElementById("form")
            form2.style.display = "none"
            document.body.style.overflowY = 'scroll'
        } else {
            setIsPassCorrect(false)
        }
        setIsLoading(false)
    }

    
    const handleRegPassClick = async () => {
        setIsLoading(true)
        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*.,?])[a-zA-Z0-9!@#$%^&*.,?]{6,16}$/;
        if (regularExpression.test(passValue)) {
            if (passValue == confirmPassValue) {
                await store.registration(emailValue, passValue)
                if (store.isAuth == true) {
                    const form2 = document.getElementById("form")
                    form2.style.display = "none"
                    document.body.style.overflowY = 'scroll'
                } else {
                    setIsPassCorrect(false)
                }
            } else {
                setIsPassSame(false)
            }
        } else {
            setIsPassRight(false)
        }
        setIsLoading(false)
    }

    const handlePassChange = (e) => {
        setPassValue(e)
        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*.,?])[a-zA-Z0-9!@#$%^&*.,?]{6,16}$/;
        // var regularExpression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
        if (!regularExpression.test(e)) {
            setIsPassRight(false)
            console.log(e, regularExpression.test(e))
        } else {

            setIsPassRight(true)
        }
    }

    const handleConfirmPassChange = (e) => {
        setConfirmPassValue(e)
        if (e.length < 8) return

        if (e !== passValue) {
            setIsPassSame(false)
            // console.log('"' + e + '"', '"' + passValue + '"',typeof(passValue),typeof(e), e === passValue)
        } else {
            setIsPassSame(true)
        }
    }


    return (
        <div className={styles.popup_background } id="form">
            <div ref={loginPopUpRef} className={isMobile ? styles.mob_popup_login_main_block: styles.popup_login_main_block} id="screen1">
                <div className={styles.popup_login_main_block_all}>
                    <div className={styles.popup_login_top_block_log}>
                        <div className={isMobile ? styles.mob_popup_login_top_block_log : styles.popup_login_top_block_logo}>
                            <LogoSVG />
                        </div>
                        <b className={styles.popup_login_top_block_text}>Войдите в свой аккаунт Osterrig</b>
                    </div>

                    <div className={styles.popup_login_input_block}>
                        <b className={styles.popup_login_input_text}>ПОЧТА</b>
                        <input value={emailValue} type="text" onChange={(e) => setEmailValue(e.target.value) || setIsEmailCorrect(true)} className={styles.popup_login_input} placeholder='Ваш email' ></input>
                        {!isEmailCorrect ?
                            <b className={styles.popup_login_input_alert}>Почтовый адрес недействителен</b>
                            :
                            null
                        }

                    </div>
                    <div className={styles.popup_login_buttons_block}>
                        <button className={isMobile ? styles.mob_popup_login_buttons_block_regist : styles.popup_login_buttons_block_regist} onClick={handleLoginClick}>
                            Войти
                        </button>
                        <button className={styles.popup_login_buttons_block_login} onClick={handleRegClick}>
                            зарегестрироваться
                        </button>
                    </div>
                </div>
            </div>
            <div ref={loginSecPopUpRef} useRef={loginSecPopUpRef} className={isMobile ? styles.mob_popup_login_sec_block : styles.popup_login_sec_block} id="screen2">
                <div className={styles.popup_login_main_block_all}>
                    <div className={styles.popup_login_top_block_log}>
                        <div className={styles.popup_login_top_block_logo}>
                            <LogoSVG />
                        </div>
                        <b className={styles.popup_login_top_block_text}>Войдите в свой аккаунт Osterrig</b>
                    </div>

                    <div className={styles.popup_login_input_block}>
                        <b className={styles.popup_login_input_text}>{emailValue}</b>
                        <input value={passValue} onChange={(e) => setPassValue(e.target.value) || setIsPassCorrect(true)} style={{ '-webkit-text-security': 'square' }} className={styles.popup_login_input} placeholder='Ваш пароль' ></input>
                        {!isPassCorrect ?
                            <b className={styles.popup_login_input_alert}>Неверная почта или пароль</b>
                            :
                            null
                        }
                    </div>
                    <div className={styles.popup_login_buttons_block}>
                        <button
                            className={isMobile ? styles.mob_popup_login_buttons_block_regist : styles.popup_login_buttons_block_regist}
                            onClick={(e) => handleLoginPassClick()}
                            disabled={isLoading}
                        >
                            {!isLoading ? "Войти" : "Загрузка"}
                        </button>
                        <button className={styles.popup_login_buttons_block_login} onClick={handleRegClick}>
                            зарегестрироваться
                        </button>
                    </div>
                </div>
            </div>
            <div ref={regPopUpRef} useRef={regPopUpRef} className={isMobile ? styles.mob_popup_login_sec_block : styles.popup_login_sec_block} id="screen3">
                <div className={styles.popup_login_main_block_all}>
                    <div className={styles.popup_login_top_block_reg}>
                        <div className={styles.popup_login_top_block_logo}>
                            <LogoSVG />
                        </div>
                        <b className={styles.popup_login_top_block_text} style={{width: isMobile ? ''  : ''}}>Зарегестрируйте свой аккаунт Osterrig</b>
                    </div>

                    <div className={styles.popup_login_input_block}>
                        <b className={styles.popup_login_input_text}>ПОЧТА</b>
                        <input value={emailValue} onChange={(e) => setEmailValue(e.target.value) || setIsEmailCorrect(true)} className={styles.popup_login_input} placeholder='Ваш email' ></input>
                        {!isEmailCorrect ?
                            <b className={styles.popup_login_input_alert}>Почтовый адрес недействителен</b>
                            :
                            null
                        }
                    </div>
                    <div className={styles.popup_login_buttons_block}>
                        <button className={isMobile ? styles.mob_popup_login_buttons_block_regist : styles.popup_login_buttons_block_regist} onClick={handleRegistartionClick}>
                            зарегестрироваться
                        </button>
                        <button className={styles.popup_login_buttons_block_login} onClick={handleLogClick}>
                            войти
                        </button>
                    </div>
                </div>
            </div>
            <div ref={regSecPopUpRef} useRef={regSecPopUpRef} className={styles.popup_login_four_block} id="screen4">
                <div className={styles.popup_login_main_block_all}>
                    <div className={styles.popup_login_top_block_reg_pass}>
                        <div className={styles.popup_login_top_block_logo}>
                            <LogoSVG />
                        </div>
                        <b className={styles.popup_login_top_block_text}>Придумайте пароль</b>
                    </div>

                    <div className={styles.popup_login_input_block_reg_pass}>
                        <input disabled value={emailValue} onChange={(e) => setEmailValue(e.target.value)} className={styles.popup_login_input} ></input>
                        <input value={passValue} onChange={(e) => handlePassChange(e.target.value)} className={styles.popup_login_input} style={{ '-webkit-text-security': 'square' }} placeholder='Ваш пароль' ></input>
                        <input value={confirmPassValue} onChange={(e) => handleConfirmPassChange(e.target.value)} className={styles.popup_login_input} style={{ '-webkit-text-security': 'square' }} placeholder='Повторите ваш пароль' ></input>
                        <div className={styles.popup_login_alert_block}>
                            {passValue !== "" ?
                                (!isPassRight ?
                                    <b className={styles.popup_login_input_alert}>Пароль не соответствует условиям</b>
                                    :
                                    <b className={styles.popup_login_input_alert_right}>Пароль соответствует условиям</b>
                                )
                                :
                                <b className={styles.popup_login_input_alert_invise}>TMP</b>
                            }
                            {passValue !== "" && confirmPassValue !== "" ?
                                (!isPassSame ?
                                    <b className={styles.popup_login_input_alert}>Пароли не совпадают</b>
                                    :
                                    <b className={styles.popup_login_input_alert_right}>Пароли совпадают</b>
                                )
                                :
                                <b className={styles.popup_login_input_alert_invise}>TMP</b>
                            }
                            {store.errorMessage != "" ?
                                <b className={styles.popup_login_input_alert}>{store.errorMessage}</b>
                                :
                                <b className={styles.popup_login_input_alert_invise}>TMP</b>
                            }
                        </div>
                    </div>

                    <div className={styles.popup_login_buttons_block}>
                        {/* disabled={isPassSame || isPassRight} */}
                        <button className={styles.popup_login_buttons_block_regist} disabled={isLoading} onClick={handleRegPassClick}>
                            {!isLoading ? "Зарегистрироваться" : "Загрузка"}
                        </button>
                        <button className={styles.popup_login_buttons_block_login} onClick={handleLogClick}>
                            войти
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(PopUpLogin);