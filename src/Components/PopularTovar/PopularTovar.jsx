import React, { useContext } from "react";
import { Context } from "../..";
import { Row } from "react-bootstrap";
import DeviceItem from "../DeviceItem/DeviceItem";
import { observer } from "mobx-react-lite";
import './PopularTovar.css'
import { useNavigate } from "react-router-dom";
import ArrowLe from "../../static/Arrow.png.png"

const PopularTovar = ({isMobile}) => {
    const navigate = useNavigate()
    const { device } = useContext(Context)

    return (
        <div class="PopularBody1" id="con">
                <div className="chelka">
                    <div className="popular1" style={{fontSize: isMobile ? '14px': '26px'}}>
                        <h1>ПОХОЖИЕ ТОВАРЫ</h1>
                    </div>
                    {/* <button className="atovar12" onClick={() => navigate("/catalog")}>
                        Все товары
                        <div class="strelka1SVG">
                            <img src={ArrowLe} class="filter-green"></img>
                        </div>
                    </button> */}
                </div>
            <div class="rowitems" style={{paddingLeft: isMobile ? '10px': '0px', justifyContent: 'center'}}>
                    {device.sameProducts.map(device =>
                        <DeviceItem key={device.id} device={device} />
                    )}
            </div>
            
        </div>
    );
};

export default observer(PopularTovar);