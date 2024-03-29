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

    useEffect(() => {
        window.scrollTo(0, 0)
    },)

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

                    </div>
                    <div className='blocknameelem'>
                        {store?.devices?.map(device =>
                            <DeviceItem key={device.id} device={device} />
                        )}
                    </div>
                </div>
            </div>
            <BottomMenu />
        </div>
    );
};

export default observer(Search);