import React from 'react';
import styles from './MobileHeader.module.css'
import LogoSVG from '../Header/LogoSVG';

const MobileHeader = () => {
    return (
        <div className={styles.header}>
      <div className={styles.mainContent}>
        <LogoSVG/>
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
          <div className={styles.vectorContainer}>
            <img
              className={styles.vectorIcon1}
              loading="lazy"
              alt=""
              src="/profsvg.png"
            />
          </div>
          <div className={styles.closebut}>
            <img
              className={styles.vectorIcon2}
              loading="lazy"
              alt=""
              src="/burgersvg.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default MobileHeader;