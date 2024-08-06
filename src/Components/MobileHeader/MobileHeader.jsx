import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './MobileHeader.module.css'
import LogoSVG from '../Header/LogoSVG';
import { Context } from '../..';
import MobileCategoryComponent from './MobileCategoryComponent/MobileCategoryComponent';
import { useNavigate } from 'react-router-dom';
import PopUpLogin from '../popUpLogin/popUpLogin';

const MobileHeader = () => {
  const { catalog, cart } = useContext(Context)
  const [isOpen, setIsOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const navigate = useNavigate()

  const [opened, setOpened] = useState(false)
  const [profileOpened, setprofileOpened] = useState(false)
  const avaRef = useRef(null)
  const exceptRef = useRef(null)
  const profileRef = useRef(null)

  const onClickOutsideForm = () => {
    const form = document.getElementById("form")
    setprofileOpened(false)
    setOpened(false)
    cart.setNoLoginAdd(false)
    if (opened === true) {
      form.style.display = "none"
      setOpened(false)
    }
    else {
      form.style.display = "block"
      setOpened(true)
    }

  }

  const onClickAuthorization = () => {

    const form = document.getElementById("form")
    form.style.display = "block"
    setOpened(true)
  }

  const onClickRegistration = () => {
    const form = document.getElementById("form")
    form.style.display = "block"
    const form1 = document.getElementById("screen1")
    form1.style.display = "none"
    const form3 = document.getElementById("screen3")
    form3.style.display = "flex"
    setOpened(true)
  }

  useEffect(() => {
    if (cart.noLoginAdd) {

      setOpened(true)
      setprofileOpened(true)

      const timer = setTimeout(() => {
        setprofileOpened(false)
        setOpened(false)
        cart.setNoLoginAdd(false)
      }, 3000);

      return () => {
        clearTimeout(timer); // Очищаем таймер при размонтировании компонента
      };
    }
  }, [cart.noLoginAdd]);

  useEffect(() => {
    if (profileOpened === false) return;

    const handleClick = (e) => {
      if (!profileRef.current) return;
      if (!profileRef.current.contains(e.target) && !avaRef.current?.contains(e.target)) {
        setprofileOpened(false)
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [profileOpened, opened, avaRef, profileRef])

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
    <div className={styles.block} style={{ minHeight: isOpen ? '100%' : '0' }}>
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
      <PopUpLogin opened={opened} onClose={() => onClickOutsideForm()} ava={exceptRef} />
      <div className={styles.openedmenu} style={{ display: isOpen ? 'block' : 'none' }}>
        {!isCatalogOpen ?
          <>
            <div className={styles.buttonsBlock}>
              <div className={styles.openedMenuButton} onClick={() => toggleCatalog()}>КАТАЛОГ ТОВАРОВ</div>
              <div className={styles.devider} />
              <div className={styles.openedMenuButton} onClick={onClickAuthorization}>ПРОФИЛЬ</div>
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
                <MobileCategoryComponent key={id} catalogElement={catalog} triggerCatalog={toggleMenu} />
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