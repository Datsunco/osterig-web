import React, { useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router';
import './Header.css'
import LogoSVG from './LogoSVG';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { DEVICE_ROUTE } from "../../utils/consts";
import PopUpLogin from '../popUpLogin/popUpLogin';

const Header = () => {
    const avaRef = useRef(null)
    const [opened, setOpened] = useState(false)
    const navigate = useNavigate()
    const { favorites, cart, store } = useContext(Context)
    const [inputValue, setInputValue] = useState("")

    const onClickCatalog = (path) => {

        navigate(`/${path}`)
    }

    const onClickSearch = async () => {
        //console.log(inputValue)
        const response = await store.search(inputValue)
        console.log(response?.data?.result?.productSearchResultVO?.productList)
        if (response?.data?.result?.isToDetail === true) {
            navigate(DEVICE_ROUTE + '/' + inputValue, { state: { productCode: inputValue } })
        } else {
            navigate("/search",
                {
                    state: {
                        // childs: response.data.result.catalogVOS?.[0],
                        from: "search"
                    }
                }

            )
        }

        // console.log()
    }

    const onClickOutsideForm = () => {
        const form = document.getElementById("form")
        if (opened == true) {
            console.log("2")
            form.style.display = "none"
            setOpened(false)
        }
        else {
            console.log("1")
            form.style.display = "block"
            setOpened(true)
        }


    }

    const onClickAVA = () => {
        console.log("penis")
        const form = document.getElementById("form")
        form.style.display = "block"
        setOpened(true)


    }


    return (
        <div>
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
                        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} class="searchInput" type="text" placeholder="Искать товары" />
                        <button class="searchLupa" onClick={() => onClickSearch()}></button>
                    </div>
                    <div class="rightOptions">
                        <div class="cursorP">
                            <div class="orders"></div>
                            <div class='text-padding-top'>Заказы</div>
                        </div>
                        <div class="cursorP" onClick={() => onClickCatalog("favorites")}>
                        <div className='header_fav_count'>{favorites.favorites.length}</div>
                            <div class="favorits"></div>
                            <div class='text-padding-top' onClick={() => onClickCatalog("favorites")}>Избранное</div>
                        </div>
                        <div class="cursorP"  onClick={() => onClickCatalog("cart")}>
                            <div class="basket"></div>
                            <div class='text-padding-top' onClick={() => onClickCatalog("cart")}>Корзина</div>
                        </div>
                        <div class="profile" useRef={avaRef} onClick={onClickAVA}></div>
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
            <PopUpLogin opened={opened} onClose={() => onClickOutsideForm()} ava={avaRef} />
        </div>
    );
};

export default observer(Header);