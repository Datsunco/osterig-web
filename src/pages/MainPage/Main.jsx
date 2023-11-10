import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Popular from '../../Components/Popular/Popular';
import Info from '../../Components/Info/Info';
import BottomMenu from '../../Components/BottomMenu/BottomMenu';
import TypeBar from '../../Components/TypeBar/TypeBar';


import './Main.css'


const Main = () => {
    const [data, setData] = useState('')

    useEffect(() => {

    }, [data])

    

    return (
        <div>
            <Container>
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

export default Main;