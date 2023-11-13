import React, { useContext, useState, useEffect } from "react";
import { Card, Col, Image } from "react-bootstrap";
import { DEVICE_ROUTE } from "../../utils/consts";
import { useNavigate } from "react-router-dom";
import "./DeviceItem.css"
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const DeviceItem = ({ device }) => {
    const { cart, favorites } = useContext(Context)
    const [isFavorite, setIsFavorite] = useState(true);
    const [isCart, setIsCart] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (favorites.isLoaded == true) {
            console.log('test')
            // favorites.favorites.forEach(fav => {
            //     console
            //     if (device.productModel === fav.deviceId)
            //         setIsFavorite(true)
            // });
            cart.devices.forEach(dev => {
                if (device.productModel == dev.deviceId)
                    setIsCart(true)
            });
        }

    }, [favorites, device])

    return (
        <div  className={"mt-3"}
            onClick={() => navigate(DEVICE_ROUTE + '/' + device.productCode, { state: { productCode: device.productCode } })}>
            <div class="md3">
                <Card style={{ width: 150, cursor: 'pointer' }} border={"light"} class="card">
                    <div class="amg"><Image width={150} height={149} src={device.productImageUrl} />
                        {isFavorite ?
                            <div class="favorits1">
                                <a href="#action1" data-rr-ui-event-key="#action1" class="nav-link">
                                </a>
                            </div>
                            :
                            <div class="favorits2">
                                <a href="#action1" data-rr-ui-event-key="#action1" class="nav-link">
                                </a>
                            </div>
                        }
                    </div>
                    <div className="mt-1 d-flex" justify-content-between align-items-center class="card2">

                        <div class="text11">{device.brandNameEn}</div>
                        <div class="text12">{device.name} {device.productModel}</div>
                    </div>
                    <div class="text13">{device.currencyPrice} </div>
                    <button class="busket1" href=''>В корзину</button>
                </Card>
            </div>
        </div>
    );
};

export default observer(DeviceItem);