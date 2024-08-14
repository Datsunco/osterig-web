import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { MAINPAGE_ROUTE } from '../../utils/consts';
import dom from "../../static/dom.png"
import email from "../../static/email.png"
import phone from "../../static/phone.png"
import { observer } from "mobx-react-lite";
import styles from "./MobileFooter.module.css"
import LogoSVG from '../Header/LogoSVG';
import LogoWhiteSVG from '../Header/LogoWhiteSVG';

const MobileBottomMenu = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.root} style={{marginTop: '20px'}}>
    <section className={styles.counter}>
      <div className={styles.counterChild} />
      <div className={styles.countTwo}>
        <div className={styles.countThree}>
          <div className={styles.countFour}>
            <div className={styles.countFive}>
              {/* <img
                className={styles.tracedIcon}
                loading="lazy"
                alt=""
                src="/-1-traced.svg"
              /> */}
              <LogoWhiteSVG />
            </div>
          </div>
          <div className={styles.addressContentParent}>
            <div className={styles.addressContent}>
              <div className={styles.addressDetails}>
                <div className={styles.frameParent}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.div}>{`ПРИЕЗЖАЙТЕ `}</div>
                    <div className={styles.building}>
                      <img
                        className={styles.emptyBuildingIcon}
                        loading="lazy"
                        alt=""
                        src={dom}
                      />
                    </div>
                  </div>
                  <div className={styles.div1}>
                    Москва, ул. Михалковская, дом 63Б строение 1, офис 3/1
                  </div>
                </div>
                <div className={styles.emailDetailsWrapper}>
                  <div className={styles.emailDetails}>
                    <div className={styles.emailDetailsChild} />
                    <div className={styles.div2}>ПИШИТЕ</div>
                    <img
                      className={styles.icroundEmailIcon}
                      alt=""
                      src={email}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.phoneDetailsParent}>
                <div className={styles.phoneDetails}>
                  <div className={styles.phoneContent}>
                    <div className={styles.phoneContentChild} />
                    <div className={styles.div3}>ЗВОНИТЕ</div>
                    <div className={styles.ggphoneWrapper}>
                      <img
                        className={styles.ggphoneIcon}
                        loading="lazy"
                        alt=""
                        src={phone}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.space}>8 993 266-55-96</div>
              </div>
            </div>
            <a
              className={styles.infoosterrigru}
              href="mailto:info@osterrig.ru"
              target="_blank" rel="noreferrer"
            >
              info@osterrig.ru
            </a>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.navigationLinks}>
            <div className={styles.wrapper}>
              <div className={styles.div4}>Меню</div>
            </div>
            <div className={styles.div5}>Главная</div>
            <div className={styles.div6}>Каталог</div>
            <div className={styles.div7}>Заказы</div>
            <div className={styles.div8}>Избранное</div>
            <div className={styles.div9}>Корзина</div>
          </div>
          <div className={styles.clientInfo}>
            <div className={styles.div10}>Для клиентов</div>
            <div className={styles.div11}>Политика конфиденциальности</div>
            <div className={styles.div12}>Доставка и оплата</div>
          </div>
        </div>
        <div className={styles.clientInfo} style={{lineHeight: '22px', fontWeight: '600px', fontFamily: 'Gilroy'}}>
            <div className={styles.div10} style={{lineHeight: '22px', fontWeight: '600px', fontFamily: 'Gilroy'}}>Реквизиты</div>
            <div className={styles.div11} style={{lineHeight: '22px', fontWeight: '600px', fontFamily: 'Gilroy', fontSize: '18px',color: '#9E9E9E'}}>ИП Бархатова Анна<br/> Юрьевна</div>
            <div className={styles.div12} style={{lineHeight: '22px', fontWeight: '600px', fontFamily: 'Gilroy', fontSize: '18px',color: '#9E9E9E',width: '180px'}}>ИНН: 032384275700</div>
            <div className={styles.div12} style={{lineHeight: '22px', fontWeight: '600px', fontFamily: 'Gilroy', fontSize: '18px',color: '#9E9E9E'}}>ОГРН/ОГРНИП: 318502900056762</div>
          </div>
        
      </div>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <img
            className={styles.footerContentChild}
            loading="lazy"
            alt=""
            src="/line-38.svg"
          />
          <div className={styles.designer}>
            <div className={styles.designByLabekinContainer}>
              <span>{`design by `}</span>
              <span className={styles.labekin}>Labekin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
 );
};

export default observer(MobileBottomMenu);