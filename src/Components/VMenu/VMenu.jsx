import React from 'react';
import ReactDOM from "react-dom";
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { observer } from "mobx-react-lite";
import './VMenu.css'

const description = [
  {id:1, title:'Категория', discription:'Operational Amplifier/Comparator/Instrumentation OpAmps'},
  {id:2, title:'Current - Input Bias(Ib)', discription:'5NA'},
  {id:3, title:'Voltage - Input Offset(Vos)', discription:'150uV'},
  {id:4, title:'Operating Temperature', discription:'-40℃~+85℃'},
  {id:5, title:'-3db Bandwidth', discription:'10MHz'},
  {id:6, title:'Number of Circuit',discription:'1'}
]

const VMenu = () => {
    const [visible, setVisible] = React.useState(false);
    return (
      <div class="bgcqa">
         {/* <style>{}</style> */}
        <button class="qweqas" onClick={() => setVisible(!visible)}>
          <div class="dflexand">
            <h class='harakter'>Характеристики</h>
           <div class='svgd'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12L20 12M12 4.00002L12 20" stroke="#1A1A1A" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/></svg>
           </div>
           <br/>
           <hr align="center" width="500" size="2" color="#BFC2C7" class='lineout'/>
          </div>
        </button>
        <div class="xz"></div>
        {visible && <Row className='d-flex flex-column mt-3'>
        {description.map((info, index) => 
          <div class="mttop">
            <Row key={info.id}
          style={{background:index % 2 === 0 ? '#F1F3F4;' : '#F1F3F4;', padding:0}}
          >
            <div class='td'>
              <div class="infot">{info.title}:</div><div class='infod'>{info.discription}</div>
            </div>
          </Row> 
          </div>
        )}
      </Row>}
      </div>
    );
  };
  
  const root = document.querySelector('#root');
  ReactDOM.render(<VMenu />, root );

  export default observer(VMenu);