import React, { useContext, useState, useEffect } from 'react';
import Shop from '../../Components/Shop/Shop';
import { Context } from '../..';
import { useNavigate } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import './Login.css'

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { cart, store, favorites } = useContext(Context);

    const handleCartClick = () => {
        navigate('/cart')
    }

    const handleFavoritesClick = () => {
        navigate('/favorites')
    }



    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
            favorites.getFavorites()
            cart.getDevices()
        }

        store.parse(527)
    }, [store, favorites])

    if (store.isLoading) {
        return (
            <div>Загрузка</div>
        )
    }

    if (store.isAuth) {
        return (
            <div>
                <button onClick={() => handleCartClick()}>Корзина</button>
                <button onClick={() => handleFavoritesClick()}>Избранное</button>
                <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : 'Авторизуйтесь'}</h1>
                <h1>{!store.user.isActivated ? `Подтвердите свою почту ${store.user.email}` : null}</h1>
                <button onClick={() => store.logout()}>
                    Выйти из акканута
                </button>
                <Shop />
            </div>
        )
    }

    return (
        <div>

            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Пароль'
            />
            <button onClick={() => store.login(email, password)}>
                Логин
            </button>
            <button onClick={() => store.registration(email, password)}>
                Регистрация
            </button>

        </div>
    );
};

export default observer(Login);