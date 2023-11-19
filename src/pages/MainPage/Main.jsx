import React, { useEffect, useState, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Popular from '../../Components/Popular/Popular';
import Info from '../../Components/Info/Info';
import BottomMenu from '../../Components/BottomMenu/BottomMenu';
import TypeBar from '../../Components/TypeBar/TypeBar';
import Header from '../../Components/Header/Header';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';


import './Main.css'


const Main = () => {
    const { device } = useContext(Context)
    const [data, setData] = useState('')

    useEffect(() => {
        device.parseHotProducts()
    })



    return (
        <div>
            <Container>
                <Header/>
                {/* <Catalog />  Выезжающее меню каталог при на ведении,  в разарботке*/}
                <Row className='mt-2'>
                    <Info />
                    <Popular />
                </Row>
            </Container>
            <div>
                <TypeBar />
                {/* <Resistors /> */}
            </div>
            <BottomMenu />
        </div>

    );
};

export default observer(Main);