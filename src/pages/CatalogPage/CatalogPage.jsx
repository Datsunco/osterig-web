import React, { useContext, useEffect, useCallback } from 'react';
import CatalogComponent from '../../Components/CatalogComponent/CatalogComponent.jsx';
import Header from '../../Components/Header/Header.jsx';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index.js';
import "./CatalogPage.css"
import BottomMenu from '../../Components/BottomMenu/BottomMenu.jsx';

const CatalogPage = () => {
    const {catalog} = useContext(Context)

    useEffect(() => {
        window.scrollTo(0, 0)
        if (localStorage.getItem('token')) {
            catalog.getCatalogs()
        }
    }, [catalog])

    return (
        <div className='catalog_page'>
            <Header/>
            <CatalogComponent />
            <BottomMenu/>
        </div>
    );
};

export default observer(CatalogPage);