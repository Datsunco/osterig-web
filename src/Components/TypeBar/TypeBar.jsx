import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Context } from "../..";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import './TypeBar.css';
import { useNavigate } from "react-router-dom";

import popular from "../../static/DeviceTypeImages/popular.png"


const TypeBar = ({isMobile}) => {
  const navigate = useNavigate()
  const [selectedType, setSelectedType] = useState(2)
  const { device } = useContext(Context)
  return (
    <ListGroup style={{marginBottom: '50px', padding: isMobile ? '20px': ''}}>
      <div class="chelka1">
        <div class="popular2"><h1>ПРОДУКЦИЯ</h1></div>
        {/* <button class="atovar1">
          <div class="vset" onClick={() => navigate("/catalog")}>Все товары</div>
          <div class="vsetStrelka"></div>
        </button> */}
      </div>
      <div class="pop" style={{padding: isMobile ? '0 10px' : '0px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'center'}}>
        {device.types.map((type, i) =>
          <a className="test" onClick={() => navigate(type.link)}>
            <ListGroupItem
              className="est"
              style={{ cursor: 'pointer', width: isMobile ? '130px' : '280px', height: isMobile ? '206px' : '315px' , backgroundImage: type.id === 8 ? 'url('+ popular+')' : '', backgroundSize: 'cover',backgroundPosition: 'center', color: type.id === 8 ? 'black' : ''}}
              key={type.id}
            >
               {/* backgroundImage: type.id === 8 ? 'url("static/DeviceTypeImages/popular.png")' : '' */}
              {type.name}
              {type.id != 8 ?
                <div className={'component_' + i}>
                  <img className="type_bar_img" src={type.img} />
                </div>
                :
                <div className={'component_' + i}>
                </div>
              }
            </ListGroupItem>
          </a>
        )}
      </div>
    </ListGroup>
  );
};

export default observer(TypeBar);