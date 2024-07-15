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

            if (store.isAuth){
                setIsFavorite(!isFavorite); 
            } else{
                cart.setNoLoginAdd(true)
                console.log('penis')
            }

       // Инвертируем текущее состояние избранного
    };

    const onAddCartClick = () => {
    
        if (store.isAuth){
            cart.setPreviewAddedDevice(device)
            setIsCart(true)
            cart.addDevice(device)
        }
            
    };

    useEffect(() => {
        favorites.favorites.forEach(fav => {
            if (device.productCode === fav.productCode) {
                setIsFavorite(true)
            }
        });
        cart.devices.forEach(dev => {
            if (device.productCode === dev.productCode){
                setIsCart(true)
            }
        });

        return () => {
            setIsFavorite(false)
            setIsCart(false)
        }
    }, [favorites.favorites, cart.devices, device])

    return (
        <div className={"mt-3"}>
            <div class="md3">
                <div className="tmp">
                {isFavorite === true ?
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
                        src="/heart.png" />

                }
                {/* <DataComponent device={device} cartState={isCart}/> */}
                </div>
                <Card
                    style={{ width: 150, cursor: 'pointer', margin: 'auto', paddingTop: '0px'}}
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
                <div class="text13">{((device.price || device.currencyPrice || device?.productPriceList?.[0].currencyPrice) * store.currency * 3).toFixed(2)} ₽
                </div>
                <DataComponent device={device} cartState={isCart}/>
            </div>
        </div>
    );
};

const DataComponent = ({ device, cartState }) => {
    const { cart, store} = useContext(Context)
    const [isCart, setIsCart] = useState(cartState)

    useEffect(() => {
        setIsCart(cartState)
    }, [cartState])

    const onAddCartClick = () => {
    
        if (store.isAuth){
            cart.setPreviewAddedDevice(device)
            setIsCart(true)
            cart.addDevice(device)
        } else{
            cart.setNoLoginAdd(true)
            console.log('penis')
        }
            
    };

    if (device?.domesticStockVO?.total === 0 && device?.stockNumber === 0 )
        return (
            <button class="busketNetu" href=''>Нет в наличии</button>
        );
    if (isCart)
        return (
            <button class="busketUzhe" href=''>Уже в корзине
                <div class="svgGalka">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M13.2 6L7.42499 12L4.42499 9" stroke="#0071E3" stroke-width="1.5" />
                    </svg>
                </div>
            </button>
        )
    else
        return (
            <button onClick={() =>onAddCartClick()} class="busket1" href=''>В корзину</button>
        )
};

export default observer(DeviceItem);