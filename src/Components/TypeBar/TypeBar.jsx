import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Context } from "../..";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import './TypeBar.css';
import { useNavigate } from "react-router-dom";


const TypeBar = () => {
  const navigate = useNavigate()
  const [ selectedType, setSelectedType ] = useState(2)
  const { device } = useContext(Context)
  return (
    <ListGroup>
      <div class="chelka1">
        <div class="popular2"><h1>ПРОДУКЦИЯ</h1></div>
        <button class="atovar1">
          <div class="vset" onClick={() => navigate("/catalog")}>Все товары</div>
          <div class="vsetStrelka"></div>
        </button>
      </div>
      <div class="pop">
        {device.types.map(type =>
          <a href={type.idHref}>
          <ListGroupItem
            style={{ cursor: 'pointer' }}
            active={type.id == device.selectedType}
            key={type.id}
          >
            {type.name}
            <div className='components12'>
              <img className="type_bar_img" src={type.img} />
            </div>
          </ListGroupItem></a>
        )}
      </div>
    </ListGroup>
  );
};

export default observer(TypeBar);