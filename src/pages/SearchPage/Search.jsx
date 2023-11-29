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
    const { id } = useParams()
    const { favorites, cart, store, device } = useContext(Context)

    const [model, setModel] = useState('')

    useEffect(() => {
        console.log(state)
        if (state?.from === "search") {
            console.log("penis")
        }else{
            store.setCurrentCatalogId(id)
            store.parse(id, store.seletedParams)
            store.parse_params(id, store.seletedParams)
        }
    }, [store, state])


    return (
        <div>
            <Header />
            <div className='search_page'>

                <TypePreview from={state?.from}
                    childCatalogs={state?.childs ? state.childs : null}
                    parentCatalogName={state?.parentCatalogName}
                    parentcatalogId={state?.parentcatalogId}
                    catalogName={state?.catalogNameEn} />
                <div className='vart_block'>
                    <div className='chechboxes_block'>
                        {/* {
                        Object.keys(store?.params).forEach(function(key, index) {
                            if (key != "totalCount" && key != "paramNameValueMap" ){
                                // console.log(store?.params[key], "lol")
                                // <CheckBoxBlock param = {store?.params[key] ? console.log(store?.params[key], "lol"): null} />
                                <CheckBoxBlock param = {store?.params[key] } />
                            }
                            // (key != "totalCount" || key != "paramNameValueMap" ?
                            // // 
                            // console.log(key)
                            // :
                            // null)
                          })
                    } */}
                        {state?.from != "search" ?
                            <div>
                                <CheckBoxBlock param={store?.params["Manufacturer"] ? store?.params["Manufacturer"] : null} />
                                <CheckBoxBlock param={store?.params["Package"] ? store?.params["Package"] : null} />
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