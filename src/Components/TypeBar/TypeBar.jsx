import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import './TypeBar.css';


const TypeBar = () => {
    const {device} = useContext(Context )
    return (
    <ListGroup> 
      <div class ="alllist">
      <div class="chelka1">
        <div class="popular2"><h1>ПРОДУКЦИЯ</h1></div>
        <button class="atovar1">
          Все товары <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989593 0.403806 1.46447 0.696699 1.75736L4.93934 6L0.696699 10.2426C0.403806 10.5355 0.403806 11.0104 0.696699 11.3033C0.989593 11.5962 1.46447 11.5962 1.75736 11.3033L6.53033 6.53033ZM5 6.75H6V5.25H5V6.75Z" fill="white"/></svg>
        </button>
      </div>
      <div class="pop">
      {device.types.map(type =>
          <ListGroupItem
          style={{cursor: 'pointer'}}
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}  
          key={type.id}
        >
          {type.name}
          <div class = 'components12'>
            <img src={type.img}/>
          </div>
        </ListGroupItem>
      )}
      </div>
      </div>
    </ListGroup>
    );
};

export default observer(TypeBar);