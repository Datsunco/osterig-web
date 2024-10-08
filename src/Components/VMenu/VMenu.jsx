import React from 'react';
import ReactDOM from "react-dom";
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { observer } from "mobx-react-lite";
import './VMenu.css'


const VMenu = ({ params,isMobile }) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div class="bgcqa"  style={{backgroundColor: isMobile ? 'white': 'rgb(241, 243, 244)'}}>
      <button class="qweqas" style={{backgroundColor: isMobile ? 'white': 'rgb(241, 243, 244)'}} onClick={() => setVisible(!visible)}>
        <div class="dflexand"  style={{backgroundColor: isMobile ? 'white': 'rgb(241, 243, 244)'}}>
          <h class='harakter'>Характеристики</h>
          {/* <div class='svgd'>
          </div>
          <br />
          <hr align="center" width="500" size="2" color="#BFC2C7" class='lineout' /> */}
        </div>
        <svg style={{marginLeft: 'auto', cursor: 'pointer'}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12L20 12M12 4.00002L12 20" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="square" stroke-linejoin="round" /></svg>
      </button>
      <div style={{ background: 'black', height: '1px', minWidth: '200px',maxWidth: '500px' }} />
      <div class="xz"></div>
      {visible && <Row className='d-flex flex-column mt-3' style={{ flexDirection: 'column' }}>
        {params?.map((info, index) =>
          <div class="mttop">
            <Row key={info.index}
              style={{ background: index % 2 === 0 ? '#F1F3F4;' : '#F1F3F4;', padding: 0 }}
            >
              <div class='td'>
                <div class="infot">{info.paramNameEn}:</div><div class='infod'>{info.paramValueEn}</div>
              </div>
            </Row>
          </div>
        )}
      </Row>}
    </div>
  );
};

const root = document.querySelector('#root');


export default observer(VMenu);