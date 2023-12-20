import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from "../..";
import { Row } from "react-bootstrap";
import DeviceItem from "../DeviceItem/DeviceItem";
import "./Popular.css"
import ArrowLe from "../../static/Arrow.png.png"
import { useNavigate } from 'react-router';

const Popular = () => {
    const { device, favorites, cart } = useContext(Context)
    const navigate = useNavigate()
    return (
        <div class="PopularBody">
            <div>
                <div class="chelka" id="popularId">
                    <div class="popular1"><h1>ПОПУЛЯРНЫЕ <h class="tovars">ТОВАРЫ</h></h1></div>
                    <button class="alltovars" onClick={() => navigate("/catalog")}>
                        Все товары 
                        <div class="strelka1SVG">
                            <img src={ArrowLe} class="filter-green"></img>
                        </div>
                    </button>
                </div>
            </div>
            <div class="rowitems">
            {device.hotProducts.slice(0, 5).map(device =>
                        <DeviceItem key={device.id} device={device} />
                    )}
            </div>
        </div>
    );
};

export default observer(Popular);

    