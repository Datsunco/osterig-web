import React, { useContext, useState, useEffect } from "react";
import { Card, Col, Image } from "react-bootstrap";
import { DEVICE_ROUTE } from "../../utils/consts";
import { useNavigate } from "react-router-dom";
import "./DeviceItem.css"
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const DeviceItem = ({ device }) => {
    const { store, cart, favorites } = useContext(Context)
    const [isFavorite, setIsFavorite] = useState(false);
    const [isCart, setIsCart] = useState(false);
    const navigate = useNavigate();

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite); // Инвертируем текущее состояние избранного
    };
    useEffect(() => {
        favorites.favorites.forEach(fav => {
            if (device.productCode == fav.productCode)
                setIsFavorite(true)
        });
        cart.devices.forEach(dev => {
            if (device.productModel == dev.productCode)
                setIsCart(!isCart)
        });

    }, [favorites, cart, device, isFavorite, setIsCart, setIsFavorite])

    return (
        <div className={"mt-3"}>
            <div class="md3">
                {isFavorite == true ?
                    <img className="heart_icon_device"
                        id={device.productModel}
                        onClick={() => favorites.removeFavorite(device) && toggleFavorite()}
                        alt=""
                        src="/activeheart.svg" />
                    :
                    <img className="heart_icon_device"
                        id={device.productModel}
                        onClick={() => favorites.addFavorite(device) && toggleFavorite()}
                        alt=""
                        src="/heart.svg" />
                        
                }
                <button onClick={() => cart.addDevice(device)} class="busket1" href=''>В корзину</button>
                <button onClick={() => cart.addDevice(device)} class="busketUzhe" href=''>Уже в корзине
                    <div class="svgGalka">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M13.2 6L7.42499 12L4.42499 9" stroke="#0071E3" stroke-width="1.5"/>
                        </svg>
                    </div>
                </button>
                <button onClick={() => cart.addDevice(device)} class="busketNetu" href=''>Нет в наличии</button>
                <Card
                    style={{ width: 150, cursor: 'pointer', margin:'auto'}}
                    border={"light"}
                    class="card"
                    onClick={() => navigate(DEVICE_ROUTE + '/' + device.productCode, { state: { productCode: device.productCode } })}>
                    <div className="amg">
                        <Image className="amg" width={150} height={149}
                            src={device.productImageUrlBig || device.productImageUrlBig || device.productImageUrl || store.defaultUrl} />

                    </div>
                </Card>
                <div className="mt-1 d-flex" justify-content-between align-items-center class="card2">

                    <div class="text11">{device.brandNameEn}</div>
                    <div class="text12">{device.productModel}</div>
                </div>
                <div class="text13">{device.price || device.currencyPrice || device?.productPriceList?.[0].currencyPrice}
                </div>
            </div>
        </div>
    );
};

export default observer(DeviceItem);