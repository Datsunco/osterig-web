import { Container } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Slider from '../../Components/Slider/Slider';
import VMenu from '../../Components/VMenu/VMenu';
import PopularTovar from '../../Components/PopularTovar/PopularTovar';
import { observer } from 'mobx-react-lite';
import "./DevicePage.css"
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import { Context } from '../..';
import BottomMenu from '../../Components/BottomMenu/BottomMenu';
import HeartDevice from "../../static/HeartheartDevice.png"

const DevicePage = () => {
  const { id } = useParams()
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const { cart, favorites, device, store} = useContext(Context)

  useEffect(() => {
    window.scrollTo(0, 0)
    device.parseProductDetails(id)
    setIsCart(false)
    setIsFavorite(false)
    device.parseSameProducts(id)
  }, [id])

  useEffect(() => {

    const checkIsAded = async () => {
      cart.devices.forEach(dev => {
        if (id == dev.productCode) {
          setIsCart(true)
        }
      });

      favorites.favorites.forEach(dev => {
        if (id == dev.productCode) {
          setIsFavorite(true)
        }
      });
    }

    checkIsAded();

  }, [favorites.favorites, cart.devices])

  const addToCart = () => {
    cart.addDevice(device.productDetails)
    setIsCart(true)
    cart.setPreviewAddedDevice(device.productDetails)
  }

  const DataComponentDevicePage = ({ device, cartState }) => {
    const { cart } = useContext(Context)
    const [isCart, setIsCart] = useState(cartState)

    useEffect(() => {
      setIsCart(cartState)
      // console.log(device, cartState)
    }, [cartState])
    if (device.productDetails.stockNumber == 0)
      return (
        <div
            class="NetVNal" >
            Нет в наличии
          </div>
      );
    if (isCart)
      return (
        <>
          <button
            class="vkorzine" >
            В корзине
            <div class='svgL'>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                <path d="M10.2 1L4.42505 7L1.42505 4" stroke="#0071E3" stroke-width="1.5" />
              </svg>
            </div>
          </button>
        </>
      )
    else
      return (
        <button onClick={() => addToCart()}
          class="vkorzinu" >
          Добавить в корзину
        </button>
      )
  };

  // const toggleFavorite = () => {
  //   setIsFavorite(!isFavorite)
  // }

  // console.log('rendered')

  return (
    <Container className='mt-3'>
      <Header />
      <div class="alltovarcard">
        <Slider />
        {device.isDetailsLoaded ?
          <div class="assh">
            <h2 class="cb">{device.productDetails.brandNameEn} {device.productDetails.productModel}</h2>
            {device.productDetails.stockNumber != 0 ?
              <div className='d-flex' class="agn">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#55BC72" /></svg>
                <b class='agn1'>В наличии: {device.productDetails.stockNumber} шт.</b>
              </div>
              :
              <div className='d-flex' class="agn">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#C80C0C" /></svg>
                <b class='agn1'>Нет вналичии.</b>
              </div>
            }

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
            <div className='d-flex' class="agn download_button">
              <a class="reddownload" href={device.productDetails.pdfUrl}>Скачать</a>
              <h class='pdf'>PDF, 340 КБ</h>
            </div>
            {device.productDetails.productPriceList?.[0].discountRate != 1 ?
              <>
                <div class='lastprice'>
                  {device.productDetails.productPriceList?.[0].productPrice} ₽
                </div>
                <div class='newprice'>от {(device.productDetails.productPriceList?.[0].discountRate * device.productDetails.productPriceList?.[0].productPrice * store.currency*3).toFixed(2)} ₽</div>
              </>
              :
              <div class='newprice'>от {(device.productDetails.productPriceList?.[0].productPrice   * store.currency*3).toFixed(2)} ₽</div>
            }

            <VMenu params={device.productDetails.paramVOList} />
            <br />

            <div class='dhg'>
              <DataComponentDevicePage device={device} cartState={isCart} />
              <div className='device_page_favorite_block'>
                {!isFavorite ?
                  <div className='devcie_page_fav_button' onClick={() => favorites.addFavorite(device.productDetails) && setIsFavorite(true)}>
                    <a class='izbr' >В ИЗБРАННОЕ</a>
                    <img className="fav_act_heart" src={HeartDevice} />
                  </div>
                  :
                  <div className='devcie_page_fav_button' onClick={() => favorites.removeFavorite(device.productDetails) && setIsFavorite(false)}>
                    <a class='izbr' >В ИЗБРАННОM</a>
                    <img className="fav_act_heart"
                      src="/activeheart.svg" />
                  </div>
                }
              </div>


            </div>
          </div>
          :
          <LoadingComponent />
        }
      </div>
      <PopularTovar />
      <BottomMenu />
    </Container>
  );
}

const LoadingComponent = () => {
  return <div className="loading"> </div>;
};

export default observer(DevicePage);