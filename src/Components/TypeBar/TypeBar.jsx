import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import './TypeBar.css';


const TypeBar = () => {
  const { device } = useContext(Context)
  return (
    <ListGroup>
      <div class="chelka1">
        <div class="popular2"><h1>ПРОДУКЦИЯ</h1></div>
        <button class="atovar1">
          <div class="vset">Все товары</div>
          <div class="vsetStrelka"></div>
        </button>
      </div>
      <div class="pop">
        {device.types.map(type =>
          <ListGroupItem
            style={{ cursor: 'pointer' }}
            active={type.id === device.selectedType.id}
            onClick={() => device.setSelectedType(type)}
            key={type.id}
          >
            {type.name}
            <div class='components12'>
              <img src={type.img} />
            </div>
          </ListGroupItem>
        )}
      </div>
    </ListGroup>
  );
};

export default observer(TypeBar);