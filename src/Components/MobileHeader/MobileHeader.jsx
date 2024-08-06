import React, { useContext, useEffect, useState } from 'react';
import styles from './MobileHeader.module.css'
import LogoSVG from '../Header/LogoSVG';
import { Context } from '../..';
import MobileCategoryComponent from './MobileCategoryComponent/MobileCategoryComponent';
import { useNavigate } from 'react-router-dom';

const MobileHeader = () => {
  const { catalog } = useContext(Context)
  const [isOpen, setIsOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    catalog.getCatalogs()
  }, [])

  const toggleMenu = () => {
    // if (isOpen == false) {
    //   document.body.style.overflowY = 'hidden'
    // } else document.body.style.overflowY = 'scroll'
    setIsOpen(!isOpen);
  };

  const toggleCatalog = () => {
    setIsCatalogOpen(!isCatalogOpen);
  };

  return (
    <div className={styles.block} style={{minHeight: isOpen ? '100%': '0'}}>
      <div className={styles.header} style={{ background: isOpen ? '#252525' : '#FFFFFF' }}>
        <div className={styles.mainContent} onClick={() => navigate('/mainpage')}>
          <LogoSVG />
        </div>
        <div className={styles.headerInner}>
          <div className={styles.frameParent}>
            <div className={styles.vectorWrapper}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className={styles.vectorContainer} onClick={() => navigate('/cart')}>
              {isOpen ?
                <img
                  className={styles.vectorIcon1}
                  loading="lazy"
                  alt=""
                  src="/cartwhite.png"
                />
                :
                <img
                  className={styles.vectorIcon1}
                  loading="lazy"
                  alt=""
                  src="/cartblack.png"
                />
              }
            </div>
            <div className={styles.closebut} onClick={toggleMenu}>
              {isOpen ?
                <img
                  className={styles.vectorIcon2}
                  style={{ height: '22px' }}
                  loading="lazy"
                  alt=""
                  src="/crosswhite.png"
                />
                :
                <img
                  className={styles.vectorIcon2}
                  loading="lazy"
                  alt=""
                  src="/burgersvg.png"
                />
              }
            </div>
          </div>
        </div>
      </div>
      {/* {isOpen && ( */}
        <div className={styles.openedmenu} style={{display: isOpen ? 'block' : 'none'}}>
          {!isCatalogOpen ?
            <>
              <div className={styles.buttonsBlock}>
                <div className={styles.openedMenuButton} onClick={() => toggleCatalog()}>КАТАЛОГ ТОВАРОВ</div>
                <div className={styles.devider} />
                <div className={styles.openedMenuButton}>ПРОФИЛЬ</div>
                <div className={styles.devider} />
                <div className={styles.openedMenuButton} onClick={() => navigate('/cart')}>КОРЗИНА</div>
                <div className={styles.devider} />
                <div className={styles.openedMenuButton} onClick={() => navigate('/favorites')}>ИЗБРАННОЕ</div>
                <div className={styles.devider} />
                <div className={styles.openedMenuButton} onClick={() => navigate('/orders')}>ЗАКАЗЫ</div>
              </div>
              <div className={styles.infoBlock}>
                <div className={styles.infoElem}>
                  <p>info@osterrig.ru</p>
                </div>
                <div className={styles.infoElem}>
                  <p>8 (993) 266–55–96</p>
                  <p className={styles.subinfotest}>бесплатно по РФ</p>
                </div>
                <div className={styles.infoElem}>
                  <p>Москва, ул. Михалковская, дом<br /> 63Б строение 1, офис 3/1</p>
                  <p className={styles.subinfotest}>адрес офиса</p>
                </div>
              </div>
            </>
            :
            <>
              <div className={styles.backButton} onClick={() => toggleCatalog()}>Назад</div>
              <div className={styles.buttonsBlock}>
                {catalog?.catalogs.slice(0, 8)?.map((catalog, id) =>
                  // <SubCatalog key={catalog.catalogId}
                  //   catalogElement={catalog}
                  //   onTag={onHoverSubcatalog}/>
                  // <div key={id}>
                  // <div className={styles.openedMenuButton}>{catalog.catalogNameEn}</div>
                  //   <div className={styles.devider} />
                  // </div>
                  <MobileCategoryComponent key={id} catalogElement={catalog} triggerCatalog={toggleMenu}/>
                )}
              </div>
            </>
          }
        </div>
      {/* )} */}
    </div>
  );
};


export default MobileHeader;