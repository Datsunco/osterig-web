import React from 'react';
import styles from './MakingAnOrders2.css';
import Header from '../../Components/Header/Header'
import BottomMenu from '../../Components/BottomMenu/BottomMenu';
import CartResultForMAO from '../../Components/CartResultForMAO/CartResultForMAO'
import { Context } from '../../index';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import DeviceItem from '../DeviceItem/DeviceItem';
import ArrowLe from '../../static/Arrow.png.png'

const MackingAnOrders2 = () => {
    const { store } = useContext(Context)
    const navigate = useNavigate()
    let textbutton = '2'
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
                                <div className='MAO_text_h1'>Адрес</div>
                                <div className='MAO_steps'>
                                    ШАГ 2<div className='MAO_step3'> / 3</div>
                                </div>

                            </div>
                            <div className='MAO_imputs_frame'>
                                <div className='d-flex'>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>Страна</div>
                                        <input type='text' className='MAO_input' placeholder='Россия' disabled />
                                    </div>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>Точный адрес</div>
                                        <input type='text' className='MAO_input1' placeholder='Город, улица, дом, квартира и др.' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='choose_delivery_body'>
                            <div className='cd_header'>
                                <div className='cd_h1_text_black'>Пункты выдачи</div>
                                <div className='cd_slash'>/</div>
                                <div className='cd_h1_text_gray'>Доставка до двери</div>
                                <div className='cd_slash'>/</div>
                                <div className='cd_h1_text_gray'>Самовывоз</div>
                            </div>
                            <hr className='cd_line'></hr>
                            <div className='cd_points'>
                                <img src='https://www.cdek.ru/storage/source/logo/1/WwRC73vQdmjyYz-FuqiKlHCMWdW2xv0P.svg' className='cd_img' />
                                <div className='cd_box_for_org'>
                                    <div className='cd_name_org'>СДЭК ПВЗ</div>
                                </div>
                                <div className='cd_time'>5-7 дней</div>
                                <div className='cd_prise'>600 ₽</div>
                                <div className='cd_choose_deliviry'>Выбрать</div>
                            </div>
                            <hr className='cd_line'></hr>
                            <div className='cd_points'>
                                <img src='https://www.cdek.ru/storage/source/logo/1/WwRC73vQdmjyYz-FuqiKlHCMWdW2xv0P.svg' className='cd_img' />
                                <div className='cd_box_for_org'>
                                    <div className='cd_name_org'>СДЭК ПВЗ</div>
                                    <div className='cd_org_addres'>Адрес: Пришвина, д. 25, офис 128</div>
                                </div>
                                <div className='cd_time'>5-7 дней</div>
                                <div className='cd_prise'>600 ₽</div>
                                <div className='cd_choose_deliviry'>Выбрать</div>
                            </div>
                        </div>
                    </div>
                    <div className='MAO_right_menu'>
                        <CartResultForMAO />
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

export default MackingAnOrders2;