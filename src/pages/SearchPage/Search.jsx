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
    const [page, setPage ] = useState(1)

    useEffect(() => {
        if (type === "search") {
            store.search(id)
        } else {
            store.setCurrentCatalogId(id)
            store.onLevel(id)
            store.parse(id, store.seletedParams)
            store.parse_params(id, store.seletedParams)
        }
    }, [store, state, id])

    const loadPage  = async () => {
        const res = await store.parseByPage(id, store.seletedParams, store.currPage)
        if (res)
            store.setCurrPage(store.currPage + 1)
    }

    useEffect(() => {
        // window.scrollTo(0, 0)
        return  () => {
            store.setCurrPage(1 )
        }
    },[])

    return (
        <div>
            <Header />
            <div className='search_page'>
                <TypePreview from={type}
                    childCatalogs={store.childCatalogs}
                    parentCatalogName={store.parentName}
                    parentcatalogId={store.parentId}
                    catalogName={store.catalogName} />
                <div className='vart_block'>
                    <div className='chechboxes_block'>
                        <CheckBoxBlock text='Производитель' param={store?.params?.["Manufacturer"] ? store?.params?.["Manufacturer"] : null} />
                        <CheckBoxBlock text='Характеристики' param={store?.params?.["Package"] ? store?.params?.["Package"] : null} />
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