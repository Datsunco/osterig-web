import React from 'react';
import { useNavigate } from 'react-router';
import './Header.css'
import LogoSVG from './LogoSVG';

const Header = () => {
    const navigate = useNavigate()

    const onClickCatalog = (path) => {

        navigate(`/${path}`)
    }

    return (
        <div className='Header'>
            <div class="topHeader">
                <div class="logo" onClick={() => onClickCatalog("mainpage")}><LogoSVG /></div>
                <div className='catalog_button' onClick={() => onClickCatalog("catalog")}>
                    <svg className='catalog_image' xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                        <line x1="1" y1="1" x2="15" y2="1" stroke="white" stroke-width="2" stroke-linecap="round" />
                        <line x1="1" y1="7" x2="9.5" y2="7" stroke="white" stroke-width="2" stroke-linecap="round" />
                        <line x1="1" y1="13" x2="15" y2="13" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    <p className='catalog_text'>Каталог</p>
                </div>
                <div class="search">
                    <input class="searchInput" type="text" placeholder="Искать товары" />
                    <button class="searchLupa"></button>
                </div>
                <div class="rightOptions">
                    <div class="cursorP">
                        <div class="orders"></div>
                        <div class='text-padding-top'>Заказы</div>
                    </div>
                    <div class="cursorP">
                        <div class="favorits"></div>
                        <div class='text-padding-top' onClick={() => onClickCatalog("favorites")}>Избранное</div>
                    </div>
                    <div class="cursorP">
                        <div class="basket"></div>
                        <div class='text-padding-top' onClick={() => onClickCatalog("cart")}>Корзина</div>
                    </div>
                    <div class="profile"></div>
                </div>
            </div>
            <div class="bottomHeader">
                <div class="ml-custom">
                    <div class="textMoscow">Москва</div>
                    <div class="populars">Популярное 🔥</div>
                    <div class="resistors">Резисторы</div>
                    <div class="condensators">Конденсаторы</div>
                    <div class="inductors">Индукторы</div>
                    <div class="processors">Процессоры</div>
                    <div class="preobrazovateli">Преобразователи</div>
                </div>
            </div>
        </div>
    );
};

export default Header;