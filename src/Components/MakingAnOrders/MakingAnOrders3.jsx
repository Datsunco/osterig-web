import React from 'react';
import styles from './MakingAnOrders3.css';
import Header from '../../Components/Header/Header'
import BottomMenu from '../../Components/BottomMenu/BottomMenu';
import CartResultForMAO from '../../Components/CartResultForMAO/CartResultForMAO'
import { Context } from '../../index';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import SBP from '../../static/SBP.png';
import BCART from '../../static/BCART.png';
import DeviceItem from '../DeviceItem/DeviceItem';
import ArrowLe from '../../static/Arrow.png.png'

const MackingAnOrders3 = () => {
    const { store } = useContext(Context)
    const navigate = useNavigate()
    let textbutton = 'Оплатить'
    const { device } = useContext(Context)

    return (
        <div>
            <Header />
            <div className='MAO_body1'>
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
                                <div className='MAO_text_h1'>Проверьте данные</div>
                                <div className='MAO_steps'>
                                    ШАГ 3<div className='MAO_step3'> / 3</div>
                                </div>

                            </div>
                            <div className='MAO_imputs_frame'>
                                <div className='d-flex'>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>E-Mail</div>
                                        <div className='MAO_text_result'>exampleexample@mail.ru</div>
                                    </div>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>Телефон</div>
                                        <div className='MAO_text_result'>+ 7 999 134 08 35</div>
                                    </div>
                                </div>
                            </div>
                            <div className='MAO_imputs_frame'>
                                <div className='d-flex'>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>Фамилия</div>
                                        <div className='MAO_text_result'>Константинопольский</div>
                                    </div>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>Имя</div>
                                        <div className='MAO_text_result'>Константин</div>
                                    </div>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>Отчество</div>
                                        <div className='MAO_text_result'>Константинович</div>
                                    </div>
                                </div>
                            </div>
                            <div className='MAO_imputs_frame'>
                                <div className='d-flex'>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>Способ доставки</div>
                                        <div className='MAO_text_result'>
                                                <img src='https://www.cdek.ru/storage/source/logo/1/WwRC73vQdmjyYz-FuqiKlHCMWdW2xv0P.svg' className='MAO_RES_IMG'/>
                                                <div className='MAO_text_result1'>СДЭК ПВЗ</div>
                                        </div>
                                    </div>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>Точный адрес доставки</div>
                                        <div className='MAO_text_result'>Санкт-Петербург, Кременчукская, дом 25, кв. 128</div>
                                    </div>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>Индекс</div>
                                        <div className='MAO_text_result'>430024</div>
                                    </div>
                                </div>
                            </div>
                            <div className='MAO_imputs_frame'>
                                <div className='d-flex'>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>КОММЕНТАРИЙ К ДОСТАВКЕ</div>
                                        <input type='text' className='MAO_input1' placeholder='Город, улица, дом, квартира и др.' />
                                    </div>
                                </div>
                            </div>
                            <div className='MAO_paymant_frame'>
                                <div className='MAO_text_h1'>Оплата</div>
                                <div className='MAO_text_chose_paymant'>Выбери способ оплаты</div>
                                <div className='d-flex'>
                                    <button className='B_CART' onClick={console.log(1)}>
                                        <div className='OHUENNIY_KRUG'>
                                            <img src={BCART} className='Image_BCART'/>
                                        </div>
                                        <div className='text_oplata'>Банковской Картой</div>
                                    </button>
                                    <button className='SBP' onClick={console.log(1)}>
                                        <div className='OHUENNIY_KRUG'>
                                            <img src={SBP} className='Image_SBP'/>
                                        </div>
                                        <div className='text_oplata'>Система быстрых платежей</div>
                                    </button>
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

export default MackingAnOrders3;