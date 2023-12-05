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

const Search = () => {
    const { state } = useLocation() 
    const { store } = useContext(Context)
    const { id } = useParams()

    useEffect(() => {
        console.log(state)
        if (state?.from === "search") {
            console.log("penis")
        }else{
            store.setCurrentCatalogId(id)
            store.onLevel(id)
            store.parse(id, store.seletedParams)
            store.parse_params(id, store.seletedParams)
        }
    }, [store, state, id])


    return (
        <div>
            <Header />
            <div className='search_page'>
                    <TypePreview from={store.parentName}
                    childCatalogs={store.childCatalogs}
                    parentCatalogName={store.parentName}
                    parentcatalogId={store.parentId}
                    catalogName={store.catalogName} />
                <div className='vart_block'>
                    <div className='chechboxes_block'>
                        {state?.from != "search" ?
                            <div>
                                <CheckBoxBlock param={store?.params?.["Manufacturer"] ? store?.params?.["Manufacturer"] : null} />
                                <CheckBoxBlock param={store?.params?.["Package"] ? store?.params?.["Package"] : null} />
                            </div>
                            :
                            null
                        }

                    </div>
                    <div className='blocknameelem'>
                        {store?.devices?.map(device =>
                            <DeviceItem key={device.id} device={device} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(Search);