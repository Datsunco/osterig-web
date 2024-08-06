import React, { useContext, useEffect, useState } from 'react';
import './Search.css'
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import Header from '../../Components/Header/Header';
import Shop from '../../Components/Shop/Shop';
import CheckBoxBlock from '../../Components/CheckBoxBlock/CheckBoxBlock';
import TypePreview from '../../Components/TypePreview/TypePreview';
import DeviceItem from '../../Components/DeviceItem/DeviceItem';
import { useLocation, useParams } from 'react-router-dom';
import BottomMenu from '../../Components/BottomMenu/BottomMenu';
import MobileHeader from '../../Components/MobileHeader/MobileHeader';
import MobileFooter from '../../Components/MobileFooter/MobileFooter';
import MobileDeviceItem from '../../Components/MobileDeviceItem/MobileDeviceItem';
import CheckBoxBlockMobile from '../../Components/CheckBoxBlockMobile/CheckBoxBlockMobile';
// import CheckBoxBlockMobile from '../../Components/CheckBoxBlockMobile/CheckBoxBlockMobile';

const Search = () => {
    const { state } = useLocation()
    const { store } = useContext(Context)
    const { id, type } = useParams()
    const [page, setPage] = useState(1)
    const [params, setParams] = useState(Object.keys(store?.params))
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mobileCatalogOpened, setMobileCatalogOpened] = useState(false)

    const breakpoints = {
        mobile: 991
    }

    const [tempParams, setTempParams] = useState(['tmp', 'tmp2'])

    const handleResize = () => {
        console.log(window.innerWidth)
        setWindowWidth(window.innerWidth);
    };

    const toggleCatalog = () => {
        if (!mobileCatalogOpened) {
            window.scrollTo(0, 0)
            document.body.style.overflowY = 'hidden'
        }
        else document.body.style.overflowY = 'scroll'
        setMobileCatalogOpened(!mobileCatalogOpened)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (type === "search") {
            store.search(id)
        } else {
            store.setCurrentCatalogId(id)
            store.onLevel(id)
            store.parse(id, store.seletedParams, 1)
            store.parse_params(id, store.seletedParams)
            // setParams(Object.keys(
        }

    }, [store, state, id])

    const loadPage = async () => {
        const res = await store.parseByPage(id, store.seletedParams, store.currPage)
        if (res)
            store.setCurrPage(store.currPage + 1)
    }

    const onClickClearCheck = (param) => {
        console.log(param)
        store.setCurrPage(1)
        store.clearSelectedParam(param)
        store.parse(store.currentCatalogId, store.seletedParams, true)
        store.parse_params(store.currentCatalogId, store.seletedParams, true)
        //store.appendSelectedParam(param)
    }

    console.log(params)
    // useEffect(() => {
    //     setParams(store?.params.result)
    //     console.log('params', store?.params)
    // }, [store])

    useEffect(() => {
        store.getCurrency()
        window.scrollTo(0, 0)
        return () => {
            store.setCurrPage(1)
        }
    }, [])

    // console.log(Object.keys(store?.params))

    // Object.keys(params).forEach((item) => {
    //     console.log(store?.params[item])
    // })
    return (
        <div >
            {windowWidth <= breakpoints.mobile ? <MobileHeader /> : <Header />}
            <div className='search_page' style={{ padding: '0 20px' }}>
                <TypePreview from={type}
                    childCatalogs={store.childCatalogs}
                    parentCatalogName={store.parentName}
                    parentcatalogId={store.parentId}
                    catalogName={store.catalogName} />
                {/* {params ? <div>{Object.keys(store.params)} </div> : 'loading'} */}
                <div className='filterBlock' style={{ cursor: 'pointer', display: 'flex', justifyContent: 'end', marginTop: '50px', padding: '0 20px' }}>
                    {windowWidth <= breakpoints.mobile &&
                        <div className='filter' onClick={() => toggleCatalog()}>ФИЛЬТРЫ</div>
                    }

                </div>
            </div>
            {windowWidth <= breakpoints.mobile && mobileCatalogOpened &&
                <div className='mobileFilterSelect' style={{ display: mobileCatalogOpened ? 'block' : 'none' }}>
                    <div className='backButtonfilters' onClick={() => toggleCatalog()}>
                        <img
                            // className={}
                            style={{ height: '22px', width: '22px', marginRight: '20px'}}
                            loading="lazy"
                            alt=""
                            src="/crosswhite.png"
                        />
                        ФИЛЬТРЫ
                    </div>
                    <div className='buttonsBlock'>
                        {
                            Object.keys(store.params).map((item, index) => {
                                if (item != 'totalCount' && item != 'paramNameValueMap')
                                    return (
                                        <CheckBoxBlockMobile text={item} param={store?.params?.[`${item}`] ? store?.params?.[`${item}`] : null} />
                                    )
                            }
                            )
                        }
                    </div>
                    <div className='buttonsFiltersBlock' style={{ padding: '20px 20px', marginBottom: '100px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <button style={{ height: '50px', width: '-webkit-fill-available', background: '#252525', border: 'none', color: '#A7AEB5', fontFamily: 'Gilroy' }} onClick={() => { toggleCatalog(); onClickClearCheck() }}>ОЧИСТИТЬ ВСЕ</button>
                        <button style={{ height: '50px', width: '-webkit-fill-available', background: '#FFF', border: 'none', color: 'black', padding: '20px', borderRadius: '5px', fontFamily: 'Gilroy' }} onClick={() => toggleCatalog()}>ПРИМЕНИТЬ</button>
                    </div>
                </div>
            }
            <div className='vart_block' style={{display: 'flex', justifyContent: 'center'}}>
                <div className='chechboxes_block' style={{ display: windowWidth <= breakpoints.mobile ? 'none' : 'block' }}>
                    {
                        Object.keys(store.params).map((item, index) => {
                            if (item != 'totalCount' && item != 'paramNameValueMap')
                                return (
                                    // <CheckBoxBlock text={item} param={store?.params?.[`${item}`] ? store?.params?.[`${item}`] : null} />
                                    <CheckBoxBlock text={item} param={store?.params?.[`${item}`] ? store?.params?.[`${item}`] : null} />
                                    // <div key={index}> {JSON.stringify(store?.params?.[`${item}`])}</div>
                                )
                        }
                        )
                    }
                </div>
                <div className='loadBut_block' style={{ width: '-webkit-fill-available' }}>
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
            {windowWidth <= breakpoints.mobile ? <MobileFooter /> : <BottomMenu />}
        </div>

        // </div>
    );
};

export default observer(Search);