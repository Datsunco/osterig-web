import React,{ useContext} from 'react';
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import styles from "./HeaderSubCatalog.module.css"

const HeaderSubCatalog = ({ catalogElement, onTag}) => {
  const navigate = useNavigate()
    const { catalog, store} = useContext(Context)

    const onClickCatalog = (child) => {
      navigate(`/search/${child.catalogId}`)
      catalog.setCatalogOpen(!catalog.catalogOpen)
    }

    return (
        <div>
            <div onClick={() => onClickCatalog(catalogElement)}
            onMouseOver={() => catalog.setActiveCatalog(catalogElement.catalogId) || onTag()}  className={styles.catalog_element}>
              <div className={styles.adcdacdataConversion}>
                {catalogElement.catalogNameEn}
              </div>
              <img className={styles.catalogChild} alt="" src="/arrow-1.svg" />
            </div>
            
        </div>
    );
};

export default observer(HeaderSubCatalog);