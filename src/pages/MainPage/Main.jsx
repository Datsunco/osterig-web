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
import MobileHeader from '../../Components/MobileHeader/MobileHeader';
import MobileFooter from '../../Components/MobileFooter/MobileFooter';


const Main = () => {
    const { device, favorites, cart, store, search} = useContext(Context)
    const [data, setData] = useState('')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const breakpoints = {
        mobile: 991
       }
    
    useEffect(() => {

    }, [cart.noLoginAdd, search.pre_data])

    useEffect(() => {
        device.parseHotProducts()
        store.getCurrency()
        if (localStorage.getItem('token')) {
            // store.checkAuth()
            // favorites.getFavorites()
            // cart.getDevices()
        }
    }, [device, favorites, cart])

    const handleResize = () => {
        console.log(window.innerWidth)
        setWindowWidth(window.innerWidth);
      };
    
      useEffect(() => {
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const getIsMobile = () => {
        if (windowWidth <= breakpoints.mobile) {
          return true
        }
        console.log('magic')
        return false
       }



    return (
        <div>
            {windowWidth <= breakpoints.mobile ? <MobileHeader/> : <Header/> }
            {/* <Header /> */}
            <Container>
                {/* <Catalog />  Выезжающее меню каталог при на ведении,  в разарботке*/}
                <div class="MainPageMargin">
                    <Row className='mt-2' style={{padding: windowWidth <= breakpoints.mobile ? '0px 10px': '0px'}}>
                        <Info isMobile={windowWidth <= breakpoints.mobile}/>
                        <Popular isMobile={windowWidth <= breakpoints.mobile}/>
                    </Row>
                </div>
            </Container>
            <div>
                <TypeBar isMobile={windowWidth <= breakpoints.mobile}/>
                <Resistors isMobile={windowWidth <= breakpoints.mobile}/>
                <Capacitors isMobile={windowWidth <= breakpoints.mobile}/>
                <Inductors isMobile={windowWidth <= breakpoints.mobile}/>
                <Processors isMobile={windowWidth <= breakpoints.mobile}/>
                <Сonverters isMobile={windowWidth <= breakpoints.mobile}/>
                <Diodes isMobile={windowWidth <= breakpoints.mobile}/>
                <Connectors isMobile={windowWidth <= breakpoints.mobile}/>
            </div>
            {windowWidth <= breakpoints.mobile ? <MobileFooter/> : <BottomMenu /> }
            
        </div>

    );
};

export default observer(Main);