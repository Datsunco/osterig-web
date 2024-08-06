import React, { useEffect, useState } from 'react';
import styles from './MackingOrders.css';
import Header from '../../Components/Header/Header'
import BottomMenu from '../../Components/BottomMenu/BottomMenu';
import CartResultForMAO from '../../Components/CartResultForMAO/CartResultForMAO'
import MakingAnOrders1 from '../../Components/MakingAnOrders/MakingAnOrders1'
import MakingAnOrders2 from '../../Components/MakingAnOrders/MakingAnOrders2'
import MakingAnOrders3 from '../../Components/MakingAnOrders/MakingAnOrders3'
import { Context } from '../../index';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite'; 
import MobileHeader from '../../Components/MobileHeader/MobileHeader';
import MobileFooter from '../../Components/MobileFooter/MobileFooter';

const MackingOrders = () => {
    const { store, device } = useContext(Context)
    // const navigate = useNavigate()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const breakpoints = {
        mobile: 991
       }


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

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.getCurrency()
        }
        device.parseHotProducts()
    }, [store])

    return (
        <div>
            {windowWidth <= breakpoints.mobile ? <MobileHeader/> : <Header/> }
            {store.page == 1 ?
                <MakingAnOrders1 isMobile={windowWidth <= breakpoints.mobile}/>
                :
                (store.page == 2 ?
                    <MakingAnOrders2 isMobile={windowWidth <= breakpoints.mobile}/>
                    :
                    <MakingAnOrders3 isMobile={windowWidth <= breakpoints.mobile}/>
                )
            }
            {windowWidth <= breakpoints.mobile ? <></> : <BottomMenu /> }
        </div>
    );
};

export default observer(MackingOrders);