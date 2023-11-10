import React from 'react';
import ReactDOM from "react-dom";
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { observer } from "mobx-react-lite";

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
         <style>{`
.qweqas {
  color: rgb(241, 243, 244);
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  /* 18.2px */
  text-transform: uppercase;
  border: none;
  height: 45px;
  width: 508px;
  background-color: rgb(241, 243, 244);;
}
.bgcqa {
  background-color: rgb(241, 243, 244);;
}
.dflexand {
  display: flex;
  background-color: rgb(241, 243, 244);;
  flex-wrap: wrap;
}

.svgd {
  display: flex;
  flex-direction: row-reverse;
  margin-left: 65%;
  margin-top:5%;
}

.lineout {
  margin-top: 2%;
}

.harakter {
  margin-top:5%;
}

.mttop {
  margin-top:1%;
}

.infot {
  color: #656565;
font-family: Gilroy;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-transform: uppercase;
}

.infod {
  color: #000;
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin-left:5px;
}

.td {
  display: flex;
  flex-wrap: wrap;
}
`}</style>
        <button class="qweqas" onClick={() => setVisible(!visible)}>
          <div class="dflexand">
            <h class='harakter'>Характеристики</h>
           <div class='svgd'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12L20 12M12 4.00002L12 20" stroke="#1A1A1A" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/></svg>
           </div>
           <br/>
           <hr align="center" width="500" size="2" color="black" class='lineout'/>
          </div>
        </button>
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