import React, { useState } from 'react';

import styles from './MobileCategoryComponent.module.css'

const MobileCategoryComponent = ({ catalogElement }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCatalog = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* {!isOpen ?
                <>
                    <div className={styles.openedMenuButton}>
                        {catalogElement.catalogNameEn}
                    </div>
                    <div className={styles.devider} />
                </>
                :
                <>
                    <div>
                        <div className={styles.openedMenuButton}>
                            {catalogElement.catalogNameEn}
                        </div>
                        {catalogElement.childCatelogs.slice(0,6).map((subcatalog, index) => {
                            <div className={styles.backButton}>catalogNameEn</div>
                        })}
                        
                    </div>
                    <div className={styles.devider} />
                </>
            } */}
            <div className={styles.openedMenuButton}  style={{padding: isOpen ? '20px 0px 0 0': '20px 0'}} onClick={() => toggleCatalog()}>
                {catalogElement.catalogNameEn}
            </div>
            {isOpen && catalogElement.childCatelogs.slice(0, 6).map((subcatalog, index) => {
                return (
                <div key={index} className={styles.backButton}>{subcatalog.catalogNameEn}</div>
                )
            })}
            <div className={styles.devider} style={{marginTop: isOpen ? '20px' : ''}}/>

        </>
    );
};

export default MobileCategoryComponent;