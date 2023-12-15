import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from "../..";
import { Row } from "react-bootstrap";
import DeviceItem from "../DeviceItem/DeviceItem";
import { useNavigate } from "react-router-dom";

const Processors = () => {
    const navigate = useNavigate()
    const { device, favorites, cart } = useContext(Context)

    return (
        <div class="PopularBody1" id="pro">
                <div class="chelka">
                    <div class="popular1"><h1>PROCESSORS</h1></div>
                    <button class="alltovars" onClick={() => navigate("/search/11328")}>
                        Все товары 
                        <svg width="6" style={{marginLeft: '20px'}} height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.45962 5.95962C5.71346 5.70578 5.71346 5.29422 5.45962 5.04038L1.32304 0.903806C1.0692 0.649965 0.657647 0.649965 0.403806 0.903806C0.149965 1.15765 0.149965 1.5692 0.403806 1.82304L4.08076 5.5L0.403806 9.17696C0.149965 9.4308 0.149965 9.84235 0.403806 10.0962C0.657647 10.35 1.0692 10.35 1.32304 10.0962L5.45962 5.95962ZM4 6.15H5V4.85H4V6.15Z" fill="#0071E3" /></svg>
                    </button>
                </div>
            <div class="rowitems">
                {device.hotProducts.slice(0, 5).map(device =>
                        <DeviceItem key={device.id} device={device} />
                    )}
            </div>
        </div>
    );
};

export default observer(Processors);