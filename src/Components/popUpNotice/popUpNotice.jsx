import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import styles from './popUpNotice.module.css'

const PopUpNotice = ({ device }) => {
  const navigate = useNavigate()
  const { cart } = useContext(Context)
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (cart.previewAddedDevice) {
    
      setShowMessage(true)

      const timer = setTimeout(() => {
        setShowMessage(false);
        cart.setPreviewAddedDevice(null)
      }, 500000);

      return () => {
        clearTimeout(timer); // Очищаем таймер при размонтировании компонента
      };
    }
  }, [cart.previewAddedDevice]); // Зависимость от сообщения в стейте

  const onCloseClick = (() =>{
    cart.setPreviewAddedDevice(null)
    setShowMessage(false);
  })



  if (showMessage) return (
    <div className={styles.noticeBg}>
    <div className={styles.frameParent} >
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameChild} />
          <img
            className={styles.frameItem}
            alt=""
            src={cart.previewAddedDevice?.productImages?.[0]}
          />
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>Добавлено</div>
          <div className={styles.chipanalogParent}>
            <div className={styles.chipanalog}>{cart.previewAddedDevice?.brandNameEn}</div>
            <div className={styles.caIs3082wx}>{cart.previewAddedDevice?.productModel}</div>
            <div className={styles.caIs3082wx}>{cart.previewAddedDevice?.productPriceList?.[0].ladder} шт</div>
          </div>
          <b className={styles.b}>{cart.previewAddedDevice?.productPriceList?.[0].currencyPrice}123</b>
        </div>
      </div>
      <div className={styles.secondaryButton} onClick={() => navigate("/cart") && cart.setPreviewAddedDevice(null) } >
        <div className={styles.div2}>перейти В корзину</div>
        {/* <img className={styles.icon} alt="" src="/1.svg" /> */}
      </div>
      <div className={styles.close} onClick={onCloseClick}>
        <img
          className={styles.vectorStrokeIcon}
          alt=""
          src="/vector-stroke.svg"
        />
      </div>
    </div>
    </div>
  );
};

export default observer(PopUpNotice);