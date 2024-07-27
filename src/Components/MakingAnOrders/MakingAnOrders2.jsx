import React, { useEffect, useState } from 'react';
import styles from './MakingAnOrders2.css';
import Header from '../../Components/Header/Header'
import BottomMenu from '../../Components/BottomMenu/BottomMenu';
import CartResultForMAO from '../../Components/CartResultForMAO/CartResultForMAO'
import { Context } from '../../index';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import DeviceItem from '../DeviceItem/DeviceItem';
import ArrowLe from '../../static/Arrow.png.png'
import { observer } from 'mobx-react-lite';
import LogoSVG from '../Header/LogoSVG';
import CdekMap from '../CdekMap/CdekMap';

const MackingAnOrders2 = () => {
    const { store } = useContext(Context)
    const navigate = useNavigate()
    let textbutton = 'К способам оплаты'
    const { device } = useContext(Context)
    const [center, setCenter] = useState([55.9161885, 37.854422])
    const [features, setFeatures] = useState([])

    const [address, setAddress] = useState('Мытизи')
    const [type, setType] = useState('PVZ')

    // useEffect(() => {
    //     store.getTariffs(address)
    // }, [store])

    const onSearchPVZCLICK = async () => {
        const data = await store.getFeaturesByAddress(store.address)
        setCenter(data.cords ?? [55.9161885, 37.854422])
        setFeatures(data.features)
    }

    const onClickPVZOrPostomat = async () => {
        if (store.deliveryPointRes?.tariff_code){
            store.setDeliveryPointRes({})
            store.setTariffs({})
            store.setDeliveryType('')
            store.setDeliveryPrice('')
        }
    }

    const onClickHomeDelivery = async () => {
        if (store.deliveryType === 'HOME'){
            store.setTariffs({})
            store.setDeliveryType('')
        }
    }

    const onClickSELF = async () => {
        store.setDeliveryPointRes({})
        if (store.deliveryType === 'SELF'){
            store.setTariffs({})
            store.setDeliveryType('')
        }
        else {
            store.setTariffs({})
            store.setDeliveryType('SELF');
            store.setDeliveryPrice(0)
        }
    }

    return (
        <div>
            <div className='MAO_body'>
                <div className='MAO_frame_parent'>
                    <div className='MAO_left_menu'>
                        <div className='back_to_basket' onClick={() => store.previousPage()}>
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
                        <div className='MAO_contacts_body' style={{ height: '100px' }}>
                            <div className='MAO_contacts_text_body'>
                                <div className='MAO_text_h1'>Адрес</div>
                                <div className='MAO_steps'>
                                    ШАГ 2<div className='MAO_step3'> / 3</div>
                                </div>

                            </div>
                            {/* {type !== 'SELF' ?
                                <div className='MAO_imputs_frame'>
                                    <div className='d-flex'>
                                        <div className='MAO_input_frame'>
                                            <div className='MAO_input_text'>Страна</div>
                                            <input type='text' className='MAO_input' placeholder='Россия' disabled />
                                        </div>
                                        <div className='MAO_input_frame'>
                                            <div className='MAO_input_text'>Точный адрес</div>
                                            <input type='text' value={store.address} onChange={(e) => store.setAddress(e.target.value)} className='MAO_input1' placeholder='Город, улица, дом, квартира и др.' />
                                        </div>
                                        <button style={{ height: '44px', marginTop: '20px', border: 'none', borderRadius: '2px', background: '#0071E3', color: 'white', padding: '0 25px', fontFamily: 'Gilroy' }} onClick={() => store.getTariffs(store.address)}>Искать</button>
                                    </div>
                                </div>
                                :
                                <div className='MAO_imputs_frame'>
                                    <div className='d-flex' style={{fontFamily: 'Gilroy',}}>
                                        Для самовывоза не нужно указывать адрес
                                    </div>
                                </div>
                            } */}
                        </div>
                        <div className='choose_delivery_body'>
                            <div className='cd_header'>
                                <div className={type === 'PVZ' ? 'cd_h1_text_black' : "cd_h1_text_gray"} onClick={() => setType('PVZ')}>Пункты выдачи</div>
                                <div className='cd_slash'>/</div>
                                <div className={type === 'HOME' ? 'cd_h1_text_black' : "cd_h1_text_gray"} onClick={() => setType('HOME')}>Доставка до двери</div>
                                <div className='cd_slash'>/</div>
                                <div className={type === 'SELF' ? 'cd_h1_text_black' : "cd_h1_text_gray"} onClick={() => setType('SELF')}>Самовывоз</div>
                            </div>
                            {type === 'PVZ' ?
                                <>
                                    <div style={{ marginBottom: '40px' }}>
                                        <hr className='cd_line'></hr>
                                        {store.deliveryPointRes?.tariff_code &&
                                            <div className={store.deliveryPointRes.tariff_code != 138 && store.deliveryPointRes.tariff_code != 366 ? 'cd_points' : 'cd_pointsblack'}>
                                                <img src='https://static.tildacdn.com/tild3062-6166-4665-a463-363636383965/Logo_svg.svg' className='cd_img' />
                                                <div className='cd_box_for_org'>
                                                    <div className='cd_name_org'>СДЭК {store.deliveryPointRes.tariff_code == 138 ? 'ПВЗ' : 'Постомат'}</div>
                                                    <div className='cd_org_addres'> {store.deliveryAddress}</div>
                                                </div>
                                                <div className='cd_time'>{store.deliveryPointRes.period_min}-{store.deliveryPointRes.period_max} дней</div>
                                                <div className='cd_prise'>{store.deliveryPointRes.delivery_sum} ₽</div>
                                                <div className='cd_choose_deliviry' onClick={() => onClickPVZOrPostomat()}>
                                                    {store.deliveryPointRes.tariff_code != 138 && store.deliveryPointRes.tariff_code != 366 ? "Выбрать"
                                                        :
                                                        "Отмена"
                                                    }
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    {!store.deliveryPointRes?.tariff_code &&
                                        <>
                                            <div className='MAO_imputs_frame' style={{ marginBottom: '20px' }}>
                                                <div className='d-flex'>
                                                    <div className='MAO_input_frame'>
                                                        <div className='MAO_input_text'>Страна</div>
                                                        <input type='text' className='MAO_input' placeholder='Россия' disabled />
                                                    </div>
                                                    <div className='MAO_input_frame'>
                                                        <div className='MAO_input_text'>Точный адрес</div>
                                                        <input type='text' value={store.address} onChange={(e) => store.setAddress(e.target.value)} className='MAO_input1' placeholder='Город, улица, дом, квартира и др.' />
                                                    </div>
                                                    <button style={{ height: '44px', marginTop: '20px', border: 'none', borderRadius: '2px', background: '#0071E3', color: 'white', padding: '0 25px', fontFamily: 'Gilroy' }} onClick={() => onSearchPVZCLICK()}>Искать</button>
                                                </div>
                                            </div>
                                            <CdekMap center={center} features={features} />
                                        </>
                                    }
                                </>
                                :
                                null
                            }
                            {type === 'HOME' ?
                                <>
                                    <div style={{ marginBottom: '40px' }}>
                                        <hr className='cd_line'></hr>
                                        {store.tariffs?.[139] &&
                                            <div className={store.deliveryType != 'HOME' ? 'cd_points' : 'cd_pointsblack'}>
                                                <img src='https://static.tildacdn.com/tild3062-6166-4665-a463-363636383965/Logo_svg.svg' className='cd_img' />
                                                <div className='cd_box_for_org'>
                                                    <div className='cd_name_org'>СДЭК до Двери</div>
                                                    <div className='cd_org_addres'> {store.address}</div>
                                                </div>
                                                <div className='cd_time'>{store.tariffs?.[139].period_min}-{store.tariffs?.[139].period_max} дней</div>
                                                <div className='cd_prise'>{store.tariffs?.[139].delivery_sum} ₽</div>
                                                <div className='cd_choose_deliviry' onClick={() => onClickHomeDelivery()}>
                                                    {store.deliveryType != 'HOME' ? "Выбрать"
                                                        :
                                                        "Отмена"
                                                    }
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    {!store.tariffs?.[139] &&
                                        <>
                                            <div className='MAO_imputs_frame' style={{ marginBottom: '20px' }}>
                                                <div className='d-flex'>
                                                    <div className='MAO_input_frame'>
                                                        <div className='MAO_input_text'>Страна</div>
                                                        <input type='text' className='MAO_input' placeholder='Россия' disabled />
                                                    </div>
                                                    <div className='MAO_input_frame'>
                                                        <div className='MAO_input_text'>Точный адрес</div>
                                                        <input type='text' value={store.address} onChange={(e) => store.setAddress(e.target.value)} className='MAO_input1' placeholder='Город, улица, дом, квартира и др.' />
                                                    </div>
                                                    <button style={{ height: '44px', marginTop: '20px', border: 'none', borderRadius: '2px', background: '#0071E3', color: 'white', padding: '0 25px', fontFamily: 'Gilroy' }} onClick={() => store.getTariffs(store.address)}>Искать</button>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </>
                                :
                                null
                            }
                            {type === 'SELF' ?
                                <>
                                    <hr className='cd_line'></hr>
                                    <div className={store.deliveryType !== 'SELF' ? 'cd_points' : 'cd_pointsblack'}>
                                        <LogoSVG />
                                        <div className='cd_box_for_org'>
                                            <div className='cd_name_org'>Самовывоз</div>
                                            <div className='cd_org_addres'> ул. Михалковская 63 Б стр1, подъезд 2, 1 этаж, офис 1-16</div>
                                        </div>
                                        <div className='cd_time'></div>
                                        <div className='cd_prise'>Бесплатно</div>
                                        <div className='cd_choose_deliviry' onClick={() => onClickSELF()}>
                                            {store.deliveryType == 'SELF' ? "Отмена"
                                                :
                                                "Выбрать"
                                            }
                                        </div>
                                    </div>
                                </>
                                :
                                null
                            }
                        </div>

                    </div>
                    <div className='MAO_right_menu' onClick={() => console.log("delivery", store.deliveryAddress, "type", store.deliveryType,"bool", store.deliveryType == 'SELF')}>
                        <CartResultForMAO disabled={store.deliveryAddress && store.deliveryType || (store.deliveryType == 'SELF')} textbutton={textbutton} />
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

export default observer(MackingAnOrders2);