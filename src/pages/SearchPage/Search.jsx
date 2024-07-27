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

const Search = () => {
    const { state } = useLocation()
    const { store } = useContext(Context)
    const { id, type } = useParams()
    const [page, setPage] = useState(1)
    const [params, setParams] = useState(Object.keys(store?.params))

    const [tempParams,  setTempParams] = useState(['tmp', 'tmp2'])

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
        <div>
            <Header />
            <div className='search_page'>
                <TypePreview from={type}
                    childCatalogs={store.childCatalogs}
                    parentCatalogName={store.parentName}
                    parentcatalogId={store.parentId}
                    catalogName={store.catalogName} />
                {/* {params ? <div>{Object.keys(store.params)} </div> : 'loading'} */}
                <div className='vart_block'>
                    <div className='chechboxes_block'>
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
                    <div className='loadBut_block'>
                        <div className='blocknameelem'>
                            {store?.devices?.map(device =>
                                <DeviceItem key={device.id} device={device} />
                            )}
                        </div>
                        <button className='load_button' onClick={loadPage}>Загрузить еще</button>
                    </div>
                </div>
            </div>
            <BottomMenu />
        </div>
    );
};

export default observer(Search);