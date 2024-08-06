import React, { useState } from 'react';
import  './MakingAnOrders1.css';
import Header from '../../Components/Header/Header'
import BottomMenu from '../../Components/BottomMenu/BottomMenu';
import CartResultForMAO from '../../Components/CartResultForMAO/CartResultForMAO'
import { Context } from '../../index';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import DeviceItem from '../DeviceItem/DeviceItem';
import ArrowLe from '../../static/Arrow.png.png'
import { observer } from 'mobx-react-lite'; 

const MackingAnOrders1 = ({isMobile}) => {
    const { store, device} = useContext(Context)
    const navigate = useNavigate()
    const textbutton = 'К выбору доставки'

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [middlename, setMiddlename] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const prevpage = () => {
        const cb = store.previousPage()
        console.log(cb)
        if (cb === 'back'){
            navigate("/cart")
        }
    }

    return (
        <div>
            <div className='MAO_body' style={{marginTop: isMobile ? '50px' : '102px'}}>
                <div className='MAO_frame_parent' style={{width: isMobile ? '-webkit-fill-available': 'auto'}}>
                    <div className='MAO_left_menu'style={{width: isMobile ? '-webkit-fill-available': 'auto', padding: isMobile ? '20px' : ''}}>
                        <div className='back_to_basket'  onClick={() => prevpage()}>
                            <div className='ArrowBackBasketFrame'>
                                <div className='ArrowBackBasket'></div>
                            </div>
                            <div className='text_back_to_busket'>В корзину</div>
                        </div>
                        {store.isAuth ?
                            null
                            :
                            <div className='MAO_if_noauth' style={{flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '20px': '234px', padding: isMobile ? '20px' : '20px'}}>
                                <div className='text_noauth'>
                                    Войдите в профиль. Если вы у нас уже покупали,<br /> мы заполним данные автоматически
                                </div>
                                <button className='MAO_login_in'>Войти</button>
                            </div>
                        }
                        {isMobile && 
                            <div className='MAO_contacts_text_body'>
                                <div className='MAO_text_h1'>Контакты</div>
                            </div>
}
                        <div className='MAO_contacts_body'>
                            {!isMobile && 
                            <div className='MAO_contacts_text_body'>
                                <div className='MAO_text_h1'>Контакты</div>
                                <div className='MAO_steps'>
                                    ШАГ 1<div className='MAO_step3'> / 3</div>
                                </div>

                            </div>
}
                            <div className='MAO_imputs_frame'>
                                <div className='d-flex' style={{flexDirection: isMobile ? 'column' : 'row',width: isMobile ? '-webkit-fill-available': 'auto'}}>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>E-MAIL</div>
                                        <input type='text' style={{width: isMobile ? '-webkit-fill-available': 'auto'}} onChange={(e) => store.setEmail(e.target.value)} value={store.email} className='MAO_input' placeholder='example@mail.ru' />
                                    </div>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>Телефон</div>
                                        <input type='text' style={{width: isMobile ? '-webkit-fill-available': '240px'}} onChange={(e) => store.setPhone(e.target.value)} value={store.phone} className='MAO_input' placeholder='+ 7 999 134 08 35' />
                                    </div>
                                </div>
                                <div className='d-flex' style={{flexDirection: isMobile ? 'column' : 'row',width: isMobile ? '-webkit-fill-available': 'auto'}}>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>фамилия</div>
                                        <input type='text' style={{width: isMobile ? '-webkit-fill-available': '240px'}} onChange={(e) => store.setSurname(e.target.value)} value={store.surname} className='MAO_input' placeholder='Иванов' />
                                    </div>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>имя</div>
                                        <input type='text' style={{width: isMobile ? '-webkit-fill-available': '240px'}} onChange={(e) =>store.setName(e.target.value)} value={store.name} className='MAO_input' placeholder='Иван' />
                                    </div>
                                    <div className='MAO_input_frame'>
                                        <div className='MAO_input_text'>отчество</div>
                                        <input type='text' style={{width: isMobile ? '-webkit-fill-available': '240px'}} onChange={(e) => store.setMiddlename(e.target.value)} value={store.middlename} className='MAO_input' placeholder='Иванович' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='MAO_right_menu'>
                        <CartResultForMAO isMobile={isMobile} disabled={store.name && store.email && store.middlename && store.surname && store.phone } textbutton={textbutton} />
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

export default observer(MackingAnOrders1);