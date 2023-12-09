import React, { useEffect, useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import styles from './popUpNotice.module.css'

const PopUpNotice = ({device}) => {

    useEffect(() => {
        
    }, [])



    return (  
        <div  className={styles.frameParent} >
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameChild} />
            <img
              className={styles.frameItem}
              alt=""
              src={device.productImageUrl}
            />
          </div>
          <div className={styles.parent}> 
            <div className={styles.div}>Добавлено</div>
            <div className={styles.chipanalogParent}>
              <div className={styles.chipanalog}>{device.brandNameEn}</div>
              <div className={styles.caIs3082wx}>{device.catalogNameEn}</div>
              <div className={styles.caIs3082wx}>{device?.productPriceList?.[0].ladder} шт</div>
            </div>
            <b className={styles.b}>{device?.productPriceList?.[0].currencyPrice}123</b>
          </div>
        </div>
        <div className={styles.secondaryButton}>
          <div className={styles.div2}>перейти В корзину</div>
          <img className={styles.icon} alt="" src="/1.svg" />
        </div>
        <div className={styles.close}>
          <img
            className={styles.vectorStrokeIcon}
            alt=""
            src="/vector-stroke.svg"
          />
        </div>
      </div>

    );
};

export default observer(PopUpNotice);