import React, { useState } from 'react';

import styles from './MobileCategoryComponent.module.css'
import { useNavigate } from 'react-router-dom';

const MobileCategoryComponent = ({ catalogElement, triggerCatalog }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

    const toggleCatalog = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={styles.openedMenuButton} style={{ padding: isOpen ? '20px 0px 0 0' : '20px 0', textTransform: 'uppercase',  display: 'flex', justifyContent: 'space-between'}} onClick={() => toggleCatalog()}>
                {catalogElement.catalogNameEn}
                {isOpen ?
                    <img
                        className={styles.vectorIcon1}
                        loading="lazy"
                        alt=""
                        src="/ChevronUp.png"
                    />
                    :
                    <img
                        className={styles.vectorIcon1}
                        loading="lazy"
                        alt=""
                        src="/ChevronDown.png"
                    />
                }
            </div>
            <div style={{ marginBottom: isOpen ? '20px' : '0px' }}>
                {isOpen && catalogElement.childCatelogs.slice(0, 6).map((subcatalog, index) => {
                    return (
                        <div key={index} className={styles.backButton} style={{ textTransform: 'uppercase' }} onClick={() => { triggerCatalog(); navigate(`/search/${subcatalog.catalogId}`); }}>{subcatalog.catalogNameEn}</div>
                    )
                })}
            </div>
            {/* <div className={styles.devider} style={{marginTop: isOpen ? '20px' : ''}}/> */}
        </>
    );
};

export default MobileCategoryComponent;