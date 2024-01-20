import React from 'react';
import styles from './MakingAnOrders1.css';
import Header from '../../Components/Header/Header'
import BottomMenu from '../../Components/BottomMenu/BottomMenu';
import CartResultForMAO from '../../Components/CartResultForMAO/CartResultForMAO'
import { Context } from '../../index';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import DeviceItem from '../DeviceItem/DeviceItem';
import ArrowLe from '../../static/Arrow.png.png'

const MackingAnOrders1 = () => {
    const { store } = useContext(Context)
    const navigate = useNavigate()
    let textbutton = '1'
    const { device } = useContext(Context)
    return (
        <div>
            <Header />
            <div className='MAO_body'>
                <div className='MAO_frame_parent'>
                    <div className='MAO_left_menu'>
                        <div className='back_to_basket' onClick={() => navigate("/cart")}>
                            <div className='ArrowBackBasketFrame'>
                                <div className='ArrowBackBasket'></div>
                            </div>
                            <div className='text_back_to_busket'>В корзину</div>
                        </div>
                        {store.isAuth ?
                            <div></div>
                            :
                            <div className='MAO_if_noauth'>
                                <div className='text_noauth'>
                                    Войдите в профиль. Если вы у нас уже покупали,<br /> мы заполним данные автоматически
                                </div>
                                <button className='MAO_login_in'>Войти</button>
                            </div>
                        }
                        <div className='MAO_contacts_body'>
                            <div className='MAO_contacts_text_body'>
                                <div className='MAO_text_h1'>Контакты</div>
                                <div className='MAO_steps'>
                                    ШАГ 1<div className='MAO_step3'> / 3</div>
                                </div>

                            </div>
                            <div className='MAO_imputs_frame'>
                                <div className='d-flex'>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>E-MAIL</div>
                                        <input type='text' className='MAO_input' placeholder='example@mail.ru' />
                                    </div>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>Телефон</div>
                                        <input type='text' className='MAO_input' placeholder='+ 7 999 134 08 35' />
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>фамилия</div>
                                        <input type='text' className='MAO_input' placeholder='Иванов' />
                                    </div>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>имя</div>
                                        <input type='text' className='MAO_input' placeholder='Иван' />
                                    </div>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>отчество</div>
                                        <input type='text' className='MAO_input' placeholder='Иванович' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='MAO_right_menu'>
                        <CartResultForMAO textbutton={textbutton} />
                    </div>
                </div>
            </div>
            <div>
                <div class="chelka" id="popularId">
                    <div class="popular1"><h1>ВАМ МОЖЕТ ПОНРАВИТЬСЯ</h1></div>
                    <button class="alltovars" onClick={() => navigate("/catalog")}>
                        Все товары 
                        <div class="strelka1SVG">
                            <img src={ArrowLe} class="filter-green"></img>
                        </div>
                    </button>
                </div>
            </div>
            <div class="rowitems">
                {device.hotProducts.slice(0, 5).map(device =>
                    <DeviceItem key={device.id} device={device} />
                )}
            </div>
        </div>
    );
};

export default MackingAnOrders1;