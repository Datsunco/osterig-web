import React, { useEffect, useState, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PopUpLogin from '../../Components/popUpLogin/popUpLogin';
import Header from '../../Components/Header/Header';
import Popular from '../../Components/Popular/Popular';
import Info from '../../Components/Info/Info';
import BottomMenu from '../../Components/BottomMenu/BottomMenu';
import TypeBar from '../../Components/TypeBar/TypeBar';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import Resistors from '../../Components/BottomProducts/Resistors';
import Capacitors from '../../Components/BottomProducts/Capacitors';
import Inductors from '../../Components/BottomProducts/Inductors';
import Processors from '../../Components/BottomProducts/Processors';
import Сonverters from '../../Components/BottomProducts/Сonverters';
import Diodes from '../../Components/BottomProducts/Diodes';
import Connectors from '../../Components/BottomProducts/Connectors';

import './Main.css'


const Main = () => {
    const { device, favorites, cart} = useContext(Context)
    const [data, setData] = useState('')

    useEffect(() => {
        if (localStorage.getItem('token')) {
            device.parseHotProducts()
            // favorites.getFavorites()
            // cart.getDevices()
        }
    }, [device, favorites, cart])



    return (
        <div>
                <Header/>
                <Container>
                {/* <Catalog />  Выезжающее меню каталог при на ведении,  в разарботке*/}
                <div class="MainPageMargin">
                <Row className='mt-2'>
                    <Info />
                    <Popular />
                </Row>
                </div>
            </Container>
            <div>
                <TypeBar />
                <Resistors/>
                <Capacitors/>
                <Inductors/>
                <Processors/>
                <Сonverters/>
                <Diodes/>
                <Connectors/>
            </div>

            <BottomMenu />
        </div>

    );
};

export default observer(Main);