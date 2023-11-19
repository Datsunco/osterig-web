import React from 'react';
import './Header.css'
import LogoSVG from './LogoSVG';

const Header = () => {
    return (
        <div className='Header'>
            <div class="topHeader">
                <div class="logo"><LogoSVG /></div>
                <div className='catalog_button'>
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
                    <div>
                        <div class="orders"></div>
                        <div class='text-padding-top'>Заказы</div>
                    </div>
                    <div>
                        <div class="favorits"></div>
                        <div class='text-padding-top'>Избранное</div>
                    </div>
                    <div>
                        <div class="basket"></div>
                        <div class='text-padding-top'>Корзина</div>
                    </div>
                    <div class="profile"></div>
                </div>
            </div>
            <div class="bottomHeader">
                <div class="location"><div class="locationIMAGE"></div><div class="textMoscow">Москва</div></div>
                <div class="populars">Популярное 🔥</div>
                <div class="resistors">Резисторы</div>
                <div class="condensators">Конденсаторы</div>
                <div class="inductors">Индукторы</div>
                <div class="processors">Процессоры</div>
                <div class="preobrazovateli">Преобразователи</div>
            </div>
        </div>
    );
};

export default Header;