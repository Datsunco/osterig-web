import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../../services/photoService';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { useContext } from 'react';

const Slider = () => {
    const { device } = useContext(Context)
    const [images, setImages] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, [])

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', borderRadius: '17px'}} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ maxWidth: '100px', margin: '0', marginLeft: 'auto', borderRadius: '17px', marginTop: '16px' }}/>
    }

    return (
        <div className="card">
            <Galleria value={device.images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '425px' }} 
                item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
export default observer(Slider);