import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import Header from '../../Components/Header/Header';
import Shop from '../../Components/Shop/Shop';
import CheckBoxBlock from '../../Components/CheckBoxBlock/CheckBoxBlock';
import TypePreview from '../../Components/TypePreview/TypePreview';
import DeviceItem from '../../Components/DeviceItem/DeviceItem';
import { useLocation, useParams } from 'react-router-dom';
import BottomMenu from '../../Components/BottomMenu/BottomMenu';
import styles from "./Popular.module.css"
import MobileHeader from '../../Components/MobileHeader/MobileHeader';
import MobileFooter from '../../Components/MobileFooter/MobileFooter';
import MobileDeviceItem from '../../Components/MobileDeviceItem/MobileDeviceItem';

const Popular = () => {
    const { state } = useLocation()
    const { store } = useContext(Context)
    // const { id, type } = useParams()
    const [page, setPage] = useState(1)
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
        store.parseHotByPage(store.seletedParams, 1)
        store.parse_hot_params(store.seletedParams)
    }, [store, state])

    const loadPage = async () => {
        const res = await store.parseHotByPage(store.seletedParams, store.currPage)
        if (res)
            store.setCurrPage(store.currPage + 1)
    }

    useEffect(() => {
        store.getCurrency()
        window.scrollTo(0, 0)
        return () => {
            store.setCurrPage(1)
        }
    }, [])

    return (
        <div>
            {windowWidth <= breakpoints.mobile ? <MobileHeader /> : <Header />}
            <div className='search_page' style={{ padding: '0 20px' }}>
                <h1 className={styles.type_preview_block_text}>Популярные товары</h1>
                <div className='vart_block'>
                    {/* <div className='chechboxes_block' style={{ display: windowWidth <= breakpoints.mobile ? 'none' : 'block' }}>
                        <CheckBoxBlock text='Производитель' param={store?.params?.["Manufacturer"] ? store?.params?.["Manufacturer"] : null} />
                        <CheckBoxBlock text='Характеристики' param={store?.params?.["Package"] ? store?.params?.["Package"] : null} />
                    </div> */}
                    <div className='loadBut_block'  style={{maxWidth: '1200px'}}>
                        <div className='blocknameelem' style={{ marginLeft: windowWidth <= breakpoints.mobile ? '0px' : '100px' }}>
                        {store?.devices?.map(device => {
                            if (windowWidth <= breakpoints.mobile)
                                return (
                                    <MobileDeviceItem key={device.id} device={device} />
                                )
                            else
                                return (
                                    <DeviceItem key={device.id} device={device} />
                                )
                        }
                        )}
                        </div>
                        <button className='load_button' onClick={loadPage}>Загрузить еще</button>
                    </div>
                </div>
            </div>
            {windowWidth <= breakpoints.mobile ? <MobileFooter /> : <BottomMenu />}
        </div>
    );
};

export default observer(Popular);