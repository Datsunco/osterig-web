import React, { useContext, useEffect, useCallback } from 'react';
import CatalogComponent from '../../Components/CatalogComponent/CatalogComponent.jsx';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index.js';
import "./CatalogPage.css"

const CatalogPage = () => {
    const {catalog} = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            catalog.getCatalogs()
        }
    }, [catalog])

    return (
        <div className='catalog_page'>
            <CatalogComponent />
        </div>
    );
};

export default observer(CatalogPage);