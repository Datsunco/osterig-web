import React, { useContext, useEffect, useState} from 'react';
import './Shop.css'
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import Device from '../Device/Device';

const Shop = () => {
    const { store, favorites} = useContext(Context)


    
    return (
        <div>
            <div>
                {store.devices.map(device =>
                    <Device productModel={device.productModel}
                            // productCode={device.productCode} 
                            // catalogName={device.catalogName}
                            productPriceList={device.productPriceList}
                            productImageUrl={device.productImageUrl}
                            catalogId={device.catalogId}/>
                )}
            </div>
        </div>
    );
};

export default observer(Shop);