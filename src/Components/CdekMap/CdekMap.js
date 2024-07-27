// CdekMap.js
import React, { useEffect, useRef, useState } from 'react';
// import { YMaps, Map, Placemark, withYMaps, GeolocationControl, ObjectManager } from 'react-yandex-maps';
import { YMaps, Map, ObjectManager, GeolocationControl } from '@pbe/react-yandex-maps';
import axios from 'axios';
import { Context } from '../../index';
import { useContext } from 'react';

const CdekMap = ({ center, features }) => {
    const { store } = useContext(Context)
    const [objectManagerFeatures, setObjectManagerFeatures] = useState([]);
    const [points, setPoints] = useState([])
    const [centerT, setCenterT] = useState(center ?? [55.9161885, 37.854422]); // Москва
    const [localities, setLocalities] = useState('');

    const mapRef = useRef(null);


    useEffect(() => {
        // Добавляем обработчик событий для кликов на кнопки внутри балуна
        const handleButtonClick = (event) => {
            if (event.target.tagName === 'BUTTON' && event.target.dataset.id) {
                const pointId = event.target.dataset.id;
                const adr = event.target.dataset.adr;
                const type = event.target.dataset.type;
                console.log('Выбран пункт выдачи с ID:', pointId, adr, type);
                store.getTariffByPoint(adr, type)
                // Здесь можно добавить логику обработки выбора пункта выдачи
            }
        };

        document.addEventListener('click', handleButtonClick);

        // Удаляем обработчик событий при размонтировании компонента
        return () => {
            document.removeEventListener('click', handleButtonClick);
        };
    }, []);


    const handlePlacemarkClick = (point) => {
        // Логика обработки выбора пункта выдачи

        console.log('Выбран пункт выдачи:', point);
    };

    const handleBoundsChange = (event) => {
        
        const newCenter = event.get('newCenter');
        console.log(newCenter)
        setCenterT(newCenter);
    };

    useEffect(() => {
        if (mapRef.current) {
          mapRef.current.setCenter(center);
        }
      }, [center]);

    return (
        <YMaps>
            <Map defaultState={{ center: center, zoom: 10 }} width="100%" height="400px" instanceRef={mapRef} 
            // onBoundsChange={handleBoundsChange}
            >
                <GeolocationControl options={{ float: 'left' }} />
                <ObjectManager
                    options={{
                        clusterize: true,
                        gridSize: 32,
                    }}
                    objects={{
                        openBalloonOnClick: true,
                        preset: "islands#greenDotIcon",
                    }}
                    clusters={{
                        preset: "islands#redClusterIcons",
                    }}
                    // filter={(object) => object.id % 2 === 0}
                    // defaultFeatures={objectManagerFeatures}
                    features={{
                        type: 'FeatureCollection',
                        features: features ?? [],
                    }}
                    modules={[
                        "objectManager.addon.objectsBalloon",
                        "objectManager.addon.objectsHint",
                    ]}
                />
                {/* {points?.map(point => (
                    <Placemark
                        key={point.code}
                        geometry={[point.location.latitude, point.location.longitude]}
                        properties={{
                            balloonContent: `<strong>${point.name}</strong><br>${point.address}`,
                        }}
                        onClick={() => handlePlacemarkClick(point)}
                    />
                ))} */}
            </Map>
            {/* <div>Postal Code: {store.points[0].location}</div> */}
        </YMaps>
    );
};

export default CdekMap;