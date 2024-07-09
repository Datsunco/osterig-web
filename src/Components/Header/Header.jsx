import React, { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './Header.css'
import LogoSVG from './LogoSVG';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { DEVICE_ROUTE } from "../../utils/consts";
import PopUpLogin from '../popUpLogin/popUpLogin';
import HeaderCatalog from '../HeaderCatalog/HeaderCatalog';
import ProfileBlock from '../ProfileBlock/ProfileBlock';
import PopUpNotice from '../popUpNotice/popUpNotice';
import SearchInfo from '../SearchInfo/SearchInfo';


const Header = () => {
    const avaRef = useRef(null)
    const exceptRef = useRef(null)
    const profileRef = useRef(null)
    const [opened, setOpened] = useState(false)
    const [profileOpened, setprofileOpened] = useState(false)
    const navigate = useNavigate()
    const { favorites, search, store, catalog, cart } = useContext(Context)
    const [inputValue, setInputValue] = useState("")

    const get = async () => {
        const stm = await cart.getDevices()
        if (stm === 'auth')
            store.checkAuth()
        else{
            console.log('complete')
        }
    }


    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.setAuth(true)
            favorites.getFavorites()
            get()
        } else {
            store.checkAuth()
        }
    }, [store, favorites, cart])

    useEffect(() => {
        if (cart.noLoginAdd) {
        
          setOpened(true)
          setprofileOpened(true)
    
          const timer = setTimeout(() => {
            setprofileOpened(false)
            setOpened(false)
            cart.setNoLoginAdd(false)
          }, 3000);
    
          return () => {
            clearTimeout(timer); // Очищаем таймер при размонтировании компонента
          };
        }
      }, [cart.noLoginAdd]);

    useEffect(() => {
        if (profileOpened === false) return;

        const handleClick = (e) => {
            if (!profileRef.current) return;
            if (!profileRef.current.contains(e.target) && !avaRef.current?.contains(e.target)) {
                setprofileOpened(false)
            }
        }

        document.addEventListener("click", handleClick)

        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [profileOpened, opened, avaRef, profileRef])

    const onClickButton = (path) => {
        navigate(`/${path}`)
    }

    const onClickSearch = async () => {
        const response = await store.search(inputValue)
        if (response?.data?.result?.isToDetail === true) {
            navigate(DEVICE_ROUTE + '/' + inputValue, { state: { productCode: inputValue } })
        } else {
            navigate(`/search/${inputValue}/search`)
        }
    }

    const onClickOutsideForm = () => {
        const form = document.getElementById("form")
        setprofileOpened(false)
        setOpened(false)
        cart.setNoLoginAdd(false)
        if (opened === true) {
            form.style.display = "none"
            setOpened(false)
        }
        else {
            form.style.display = "block"
            setOpened(true)
        }


    }

    const onClickAVA = () => {
        setprofileOpened(true)
    }

    const onClickSuggestion = () => {
        setInputValue('')
    }

    const onClickAuthorization = () => {

        const form = document.getElementById("form")
        form.style.display = "block"
        setOpened(true)
    }

    const onClickRegistration = () => {
        const form = document.getElementById("form")
        form.style.display = "block"
        const form1 = document.getElementById("screen1")
        form1.style.display = "none"
        const form3 = document.getElementById("screen3")
        form3.style.display = "flex"
        setOpened(true)
    }

    const onClickCatalog = () => {
        catalog.setCatalogOpen(!catalog.catalogOpen)
    }

    const onClickCatalogClose = () => {
        catalog.setCatalogOpen(false)
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            catalog.getCatalogs()
        }
    }, [catalog])


    return (
        <div>
            <div className='Header' onScroll={onClickCatalog}>
            <div class="asdqwe">
                <div class="topHeader">
                    <div class="logo" onClick={() => onClickButton("mainpage")}><LogoSVG /></div>
                    {catalog.catalogOpen === false ?
                        <div className='catalog_button' onClick={() => onClickCatalog()}>
                            <svg className='catalog_image' xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                <line x1="1" y1="1" x2="15" y2="1" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                <line x1="1" y1="7" x2="9.5" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                <line x1="1" y1="13" x2="15" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <p className='catalog_text'>Каталог</p>
                        </div>
                        :
                        <div className='catalog_button' onClick={() => onClickCatalog()}>
                            <svg className='catalog_image' xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                <path d="M1 1.85715L13 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                <path d="M1 13L13 1.85714" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <p className='catalog_text'>Каталог</p>
                        </div>
                    }
                    <div class="search">
                        <input value={inputValue} onChange={(e) => setInputValue(e.target.value) & search.getPreWord(e.target.value)}
                            class="searchInput" type="text" placeholder="Искать товары" />
                        <button class="searchLupa" onClick={() => onClickSearch()}></button>
                    </div>
                    <div class="rightOptions">
                        <div class="margerZ">
                        <div class="cursorP" onClick={() => onClickButton("orders") & onClickCatalogClose()}>
                            <div class="orders"></div>
                            <div class='text-padding-top'>Заказы</div>
                        </div>
                        <div class="cursorP" onClick={() => onClickButton("favorites") & onClickCatalogClose()}>
                            <div className='header_fav_count'>{favorites.favorites.length}</div>
                            <div class="favorits"></div>
                            <div class='text-padding-top' onClick={() => onClickButton("favorites")}>Избранное</div>
                        </div>
                        <div class="cursorP" onClick={() => onClickButton("cart")}>
                            <div className='header_fav_count' style={{marginLeft: '40px'}}>{cart.devices.length}</div>
                            <div class="basket"></div>
                            <div class='text-padding-top' onClick={() => onClickButton("cart")}>Корзина</div>
                        </div>
                        </div>
                        <div class="profile" useRef={avaRef} ref={avaRef} onClick={onClickAVA}></div>
                        {inputValue.length != 0 ?
                            <SearchInfo onClose={onClickSuggestion}/>
                            : null
                        }
                    </div>
                </div>
                {catalog.catalogOpen === false ?
                    <div class="bottomHeader">
                        <div class="ml-custom">
                            <div class="textMoscow">Москва</div>
                            <a class="populars" onClick={() => navigate("/catalog")}>Популярное <div class="firepng"></div></a>
                            <a class="resistors" onClick={() => navigate("/search/308")}>Резисторы</a>
                            <a class="condensators" onClick={() => navigate("/search/312")}>Конденсаторы</a>
                            <a class="inductors" onClick={() => navigate("/search/316")}>Индукторы</a>
                            <a class="processors" onClick={() => navigate("/search/11328")}>Процессоры</a>
                            <a class="preobrazovateli" onClick={() => navigate("/search/615")}>Преобразователи</a>
                        </div>
                    </div>
                    :
                    <div class="caalogHeader">
                        <HeaderCatalog />
                    </div>
                }
            </div></div>
            <PopUpLogin opened={opened} onClose={() => onClickOutsideForm()} ava={exceptRef} />
            <div useRef={profileRef} ref={profileRef}>
                {profileOpened === true ?
                    <div ref={exceptRef} useRef={exceptRef}>
                        <ProfileBlock onLogClick={onClickAuthorization} onRegClick={onClickRegistration} />
                    </div>
                    :
                    null
                }

            </div>
            <PopUpNotice/>
        </div>
    );
};

export default observer(Header);