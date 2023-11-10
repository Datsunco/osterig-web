import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { DEVICE_ROUTE } from "../../utils/consts";
import { useNavigate } from "react-router-dom";
import "./DeviceItem.css"
import { observer } from "mobx-react-lite";

const DeviceItem = ({device}) => {
    const navigate = useNavigate();
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <div class= "md3">
            <Card style={{width:150, cursor:'pointer'}} border={"light"} class="card">
                <div class="amg"><Image width={150} height={149} src={device.img} />
                    <div class="favorits1"><a href="#action1" data-rr-ui-event-key="#action1" class="nav-link"></a></div>
                </div>
                <div className="mt-1 d-flex" justify-content-between align-items-center class="card2">
                    
                    <div class="text11">Chipanalog</div>
                    <div class="text12">{device.name}</div>
                </div>
                <div class="text13">{device.price}</div>
                <button class="busket1" href=''>В корзину</button>
            </Card>
            </div>
        </Col>
    );
};

export default observer(DeviceItem);