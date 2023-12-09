import React, { useContext, useEffect } from 'react';
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import styles from "./HeaderSubSubCatalog.module.css"

const HeaderSubSubCatalog = ({ catalogElement }) => {
    const navigate = useNavigate()
    const { catalog, userStore } = useContext(Context)

    const onClickCatalog = (child) => {
        navigate(`/search/${child.catalogId}`)
        catalog.setCatalogOpen(!catalog.catalogOpen)
    }

    return (
        <div id={catalogElement.catalogId} className={styles.catalogTypesBlock}>
            <b className={styles.typeHeader}>
                {catalogElement.catalogNameEn}
            </b>
            <div className={styles.catalogTypesBlockElements}>
                {catalogElement.childCatelogs.slice(0,9).map(child => (
                    child.productNum != 0 ? 
                    <div className={styles.block} onClick={() => onClickCatalog(child)}>
                        <div className={styles.catalogTypesElement}>
                            {child.catalogNameEn}
                        </div>
                        <div className={styles.catalogTypesStock}>
                            <div className={styles.catalogTypesStockPoint} />
                            <div className={styles.catalogTypesStockText}>В наличии:  {child.productNum} шт.</div>
                        </div>
                    </div>
                    :
                    null
                    )
                )}
            </div>
        </div>
    );
};

export default observer(HeaderSubSubCatalog);