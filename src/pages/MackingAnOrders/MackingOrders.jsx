import React, { useEffect } from 'react';
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

const MackingOrders = () => {
    const { store } = useContext(Context)
    const navigate = useNavigate()

    // useEffect(() => {

    //     console.log(store.page)
    // }, [store])

    return (
        <div>
            <Header />
            
            {store.page == 1 ?
                <MakingAnOrders1 />
                :
                (store.page == 2 ?
                    <MakingAnOrders2 />
                    :
                    <MakingAnOrders3 />
                )
            }
            {/* {store.page == 1 ?
                <MakingAnOrders1 />
                :
                <MakingAnOrders2 />

            } */}
            <BottomMenu />
        </div>
    );
};

export default observer(MackingOrders);