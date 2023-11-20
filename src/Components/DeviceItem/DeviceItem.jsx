import React, { useContext, useState, useEffect } from "react";
import { Card, Col, Image } from "react-bootstrap";
import { DEVICE_ROUTE } from "../../utils/consts";
import { useNavigate } from "react-router-dom";
import "./DeviceItem.css"
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const DeviceItem = ({ device }) => {
    const { cart, favorites } = useContext(Context)
    const [isFavorite, setIsFavorite] = useState(false);
    const [isCart, setIsCart] = useState(false);
    const navigate = useNavigate();

    const toggleFavorite = () => {
        console.log('chech')
        setIsFavorite(!isFavorite); // Инвертируем текущее состояние избранного
    };

    useEffect(() => {
        //console.log(device?.productPriceList.productPrice)
            favorites.favorites.forEach(fav => {
                if (device.productModel == fav.deviceId)
                    setIsFavorite(true)
            });
            cart.devices.forEach(dev => {
                if (device.productModel == dev.deviceId)
                    setIsCart(!isCart)
            });
            if (isFavorite == true){
                document.getElementById(device.productModel).style.visibility = 'visible'
            }

    }, [favorites, cart, device])

    return (
        <div className={"mt-3"}>
            <div class="md3">
                {isFavorite == true ?
                    <img className="heart_icon_device" id={device.productModel} onClick={() => favorites.removeFavorite(device.productModel, device.catalogId) && toggleFavorite()} alt="" src="/activeheart.svg" />
                    :
                    <img className="heart_icon_device" onClick={() => favorites.addFavorite(device.productModel, device.catalogId) && toggleFavorite()} alt="" src="/heart.svg" />
                }
                <Card
                    style={{ width: 150, cursor: 'pointer' }}
                    border={"light"}
                    class="card"
                    onClick={() => navigate(DEVICE_ROUTE + '/' + device.productCode, { state: { productCode: device.productCode } })}>
                    <div className="amg">
                        <Image  className="amg" width={150} height={149} 
                        src={device.productImageUrlBig ? device.productImageUrlBig : device.productImageUrl} />
                        {/* ? device.productImageUrlBig : device.productImageUrlBig */}
                    </div>
                    <div className="mt-1 d-flex" justify-content-between align-items-center class="card2">

                        <div class="text11">{device.brandNameEn}</div>
                        <div class="text12">{device.productModel}</div>
                    </div>
                    <div class="text13">{ device?.currencyPrice } </div>
                    {/* != null ? device?.currencyPrice : device?.productPriceList[0].currencyPrice */}
                    <button class="busket1" href=''>В корзину</button>
                </Card>
            </div>
        </div>
    );
};

export default observer(DeviceItem);