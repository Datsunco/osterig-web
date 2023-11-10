import { Col, Container, Row } from 'react-bootstrap';
import Slider from '../../Components/Slider/Slider';
import VMenu from '../../Components/VMenu/VMenu';
import PopularTovar from '../../Components/PopularTovar/PopularTovar';
import { observer } from 'mobx-react-lite';
import "./DevicePage.css"


const DevicePage = () => {
  const device = {id:3, name: 'Iphone 7', price: 25000, rating:5, img:'https://ironfriends.ru/wp-content/uploads/2022/10/03_iPhone_13.jpg'}
  return (
    <Container className='mt-3'>
      <Row>
      <Col md={4}>
      <Slider/>
      </Col>
        <div class="assh">
          <h2 class="cb">
          Analog Devices AD8253ARMZ-R7</h2>
          <div className='d-flex' class="agn">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#55BC72"/></svg>
            <b class='agn1'>В наличии: 1312 шт.</b>
          </div>
          <div className='d-flex' class="agn">
            <b class='greytext'>Производитель</b>
            <a class='bka'>: Analog Devices</a>
          </div>
          <div className='d-flex' class="agn">
            <b class='greytext'>Артикул</b>
            <a class="bka">: C33836</a>
          </div>
          <div className='d-flex' class="agn">
            <b class='greytext'>Datasheet</b>
            <a class='bka'>:</a><a class="bka1">Analog Devices AD8253ARMZ-R7 </a>
          </div>
          <div className='d-flex' class="agn">
            <a class="reddownload">Скачать</a>
            <h class='pdf'>PDF, 340 КБ</h>
          </div>
           <div class='lastprice'>{device.price}</div>
           <div class='newprice'>от {device.price} ₽</div>
           <VMenu/>
           <br/>

           <div class='dhg'>
           <button class="vkorzinu" href=''>Добавить в корзину</button>
           <a class='izbr' href='#'>В ИЗБРАННОЕ</a>
            <div class="favorits12"><a href="#action1" data-rr-ui-event-key="#action1" class="nav-link"></a></div>
            </div>
        </div>
        <PopularTovar/>
      </Row>
    </Container>
  );
}

export default observer(DevicePage);