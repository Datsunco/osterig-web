import { Col, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Slider from '../../Components/Slider/Slider';
import VMenu from '../../Components/VMenu/VMenu';
import PopularTovar from '../../Components/PopularTovar/PopularTovar';
import { observer } from 'mobx-react-lite';
import "./DevicePage.css"
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { Context } from '../..';
import BottomMenu from '../../Components/BottomMenu/BottomMenu';


const DevicePage = () => {
  const {id} = useParams()
  const { state } = useLocation()
  // const { productCode } = state
  const { cart, device } = useContext(Context)

  useEffect(() => {
    window.scrollTo(0, 0)
    device.parseProductDetails(id)
    device.parseSameProducts(id)
  }, [])

  // const deviceData = { id: 3, name: 'Iphone 7', price: 25000, rating: 5, img: 'https://ironfriends.ru/wp-content/uploads/2022/10/03_iPhone_13.jpg' }
  return (
    <Container className='mt-3'>
      <Header />
      <div class="alltovarcard">
        <Slider />
        <div class="assh">
          <h2 class="cb">{device.productDetails.brandNameEn} {device.productDetails.productModel}</h2>
          <div className='d-flex' class="agn">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#55BC72" /></svg>
            <b class='agn1'>В наличии: {device.productDetails.stockNumber} шт.</b>
          </div>
          <div className='d-flex' class="agn">
            <b class='greytext'>Производитель</b>
            <a class='bka'>: {device.productDetails.brandNameEn}</a>
          </div>
          <div className='d-flex' class="agn">
            <b class='greytext'>Артикул</b>
            <a class="bka">: {device.productDetails.productModel}</a>
          </div>
          <div className='d-flex' class="agn">
            <b class='greytext'>Datasheet</b>
            <a class='bka'>:</a><a class="bka1">{device.productDetails.brandNameEn} {device.productDetails.productModel}</a>
          </div>
          <div className='d-flex' class="agn">
            <a class="reddownload" href={device.productDetails.pdfUrl}>Скачать</a>
            <h class='pdf'>PDF, 340 КБ</h>
          </div>
          <div class='lastprice'>{device.productDetails.productPriceList?.[0].productPrice}</div>
          <div class='newprice'>от {device.productDetails.productPriceList?.[0].productPrice} ₽</div>
          <VMenu params={device.productDetails.paramVOList}/>
          <br />

          <div class='dhg'>
            <button onClick={() => cart.addDevice(device.productDetails)} class="vkorzinu" href=''>Добавить в корзину</button>
            <div className='device_page_favorite_block'>
              <a class='izbr' >В ИЗБРАННОЕ</a>
              <div class="favorits12">
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopularTovar />
      <BottomMenu />
    </Container>
  );
}

export default observer(DevicePage);