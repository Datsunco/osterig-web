import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from "../..";
import { Row } from "react-bootstrap";
import DeviceItem from "../DeviceItem/DeviceItem";
import { useNavigate } from "react-router-dom";
import ArrowLe from "../../static/Arrow.png.png"

const Connectors = ({isMobile}) => {
    const navigate = useNavigate()
    const { device, favorites, cart } = useContext(Context)

    return (
        <div class="PopularBody1" id="con">
                <div class="chelka">
                    <div class="popular1" style={{fontSize: isMobile ? '14px': '20px'}}><h1>CONNECTORS</h1></div>
                    <button class="alltovars" onClick={() => navigate("/search/365")}>
                        Все товары 
                        <div class="strelka1SVG">
                            <img src={ArrowLe} class="filter-green"></img>
                        </div>
                    </button>
                </div>
            <div class="rowitems" style={{marginBottom: '50px',paddingLeft: isMobile ? '10px': '0px', justifyContent: isMobile ? '' : 'center'}}>
                {device.hotProducts.slice(0, 5).map(device =>
                        <DeviceItem key={device.id} device={device} />
                    )}
            </div>
        </div>
    );
};

export default observer(Connectors);