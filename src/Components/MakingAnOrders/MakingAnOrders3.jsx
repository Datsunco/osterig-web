import React, { useEffect, useState } from 'react';
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
import LogoSVG from '../Header/LogoSVG';

const MackingAnOrders3 = ({isMobile}) => {
    const { store } = useContext(Context)
    const navigate = useNavigate()
    let textbutton = 'Оплатить'
    const { device } = useContext(Context)

    const [paymentTypeC, setPaymentTypeC] = useState('')

    useEffect(() => {},[store.paymentType])


    const switchDel = (value) => {
        switch (value){
            case 'PVZ':
                return (
                    <>
                    <img src='https://static.tildacdn.com/tild3062-6166-4665-a463-363636383965/Logo_svg.svg' className='MAO_RES_IMG'/>
                    <div className='MAO_text_result1'>ПВЗ</div>
                    </>
                )
            case 'HOME':
                return (
                    <>
                    <img src='https://static.tildacdn.com/tild3062-6166-4665-a463-363636383965/Logo_svg.svg' className='MAO_RES_IMG'/>
                    <div className='MAO_text_result1'>До двери</div>
                    </>
                )
            case 'SELF':
                    return (
                        <>
                        <LogoSVG/>
                        <div className='MAO_text_result1'>Самовывоз</div>
                        </>
                    )
            
            default:
                return (
                    <>
                    <img src='https://www.cdek.ru/storage/source/logo/1/WwRC73vQdmjyYz-FuqiKlHCMWdW2xv0P.svg' className='MAO_RES_IMG'/>
                    <div className='MAO_text_result1'>{store.deliveryType}</div>
                    </>
                )
        }
    }

    return (
        <div>
            <div className='MAO_body1' style={{marginTop: isMobile ? '40px': '100px', padding:  isMobile ? '20px': '0', height: 'auto'}}>
                <div className='MAO_frame_parent' style={{display: 'flex', flexDirection: isMobile ? 'column': '', width: isMobile ? '-webkit-fill-available' : ''}} >
                    <div className='MAO_left_menu'  style={{height: isMobile ? '950px' : '700px'}}>
                        <div className='back_to_basket'  onClick={() => store.previousPage()}>
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
                                {!isMobile && 
                                <div className='MAO_steps'>
                                    ШАГ 3<div className='MAO_step3'> / 3</div>
                                </div>
}
                            </div>
                            <div className='MAO_imputs_frame'>
                                <div className='d-flex'  style={{flexDirection: isMobile ? 'column' : 'row',width: isMobile ? '-webkit-fill-available': 'auto'}}>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>E-Mail</div>
                                        <div className='MAO_text_result'>{store.email}</div>
                                    </div>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>Телефон</div>
                                        <div className='MAO_text_result'>{store.phone}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='MAO_imputs_frame'>
                                <div className='d-flex'  style={{flexDirection: isMobile ? 'column' : 'row',width: isMobile ? '-webkit-fill-available': 'auto'}}>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>Фамилия</div>
                                        <div className='MAO_text_result'>{store.surname}</div>
                                    </div>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>Имя</div>
                                        <div className='MAO_text_result'>{store.name}</div>
                                    </div>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>отчество</div>
                                        <div className='MAO_text_result'>{store.middlename}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='MAO_imputs_frame'>
                                <div className='d-flex'  style={{flexDirection: isMobile ? 'column' : 'row',width: isMobile ? '-webkit-fill-available': 'auto'}}>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>Способ доставки</div>
                                        <div className='MAO_text_result'>
                                        {switchDel(store.deliveryType)}
                                        </div>
                                    </div>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>Точный адрес доставки</div>
                                        <div className='MAO_text_result'>{store.address}</div>
                                    </div>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>Индекс</div>
                                        <div className='MAO_text_result'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='MAO_imputs_frame'>
                                <div className='d-flex' style={{width: isMobile ? '-webkit-fill-available': '520px'}} >
                                    <div className='MAO_input_frame' style={{width: isMobile ? '-webkit-fill-available': 'auto'}}>
                                        <div className='MAO_input_text'>КОММЕНТАРИЙ К ДОСТАВКЕ</div>
                                        <input type='text' style={{width: isMobile ? '-webkit-fill-available': '520px'}} className='MAO_input9' placeholder='Город, улица, дом, квартира и др.' />
                                    </div>
                                </div>
                            </div>
                            <div className='MAO_paymant_frame'>
                                <div className='MAO_text_h1'>Оплата</div>
                                <div className='MAO_text_chose_paymant'>Выбери способ оплаты</div>
                                <div className='d-flex'>
                                    <button className={` ${ paymentTypeC === 'CARD' ? 'paymantSelected' : 'B_CART'}`} onClick={() => {setPaymentTypeC('CARD'); store.setPaymentType('CARD')}}>
                                        <div className='OHUENNIY_KRUG'>
                                            <img src={BCART} className='Image_BCART'/>
                                        </div>
                                        <div className='text_oplata'>Банковской Картой</div>
                                    </button>
                                    {/* <button className={`${ paymentTypeC === 'SBP' ? 'paymantSelected' : 'B_CART' }`}onClick={() => {setPaymentTypeC('SBP'); store.setPaymentType('SBP')}}>
                                        <div className='OHUENNIY_KRUG'>
                                            <img src={SBP} className='Image_SBP'/>
                                        </div>
                                        <div className='text_oplata'>Система быстрых платежей</div>
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='MAO_right_menu' style={{marginLeft: isMobile ? '0' : '45px'}}>
                        <CartResultForMAO isMobile={isMobile} disabled={paymentTypeC} textbutton={textbutton} />
                    </div>
                </div>
            </div>
            {!isMobile &&
            <>
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
            </>
}
        </div>
    );
};

export default MackingAnOrders3;