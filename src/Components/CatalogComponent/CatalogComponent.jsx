import styles from "./Catalog.module.css";
import { useCallback, useContext, useEffect } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import SubCatalog from "../SubCatalog/SubCatalog";
import SubSubCatalog from "../SubSubCatalog/SubSubCatalog";
import styles2 from "../SubSubCatalog/SubSubCatalog.module.css"
import { useNavigate } from "react-router-dom";

const CatalogComponent = () => {
  const { catalog } = useContext(Context)
  const navigate = useNavigate()


  useEffect(() => {
    catalog.getCatalogs()
  }, [])

  useEffect(() => {
    document.getElementById(`${catalog.activeCatalog}`).style.display = "block"
  }, [catalog])

  const onClickCatalog = (catalogId) => {
    navigate("/search", {state: {catalogId}})
  }

  const onHoverSubcatalog = useCallback(() => {
    Array.from(document.getElementsByClassName(styles2.catalogTypesBlock)).forEach(element => {
      element.style.display = "none"
    });
    document.getElementById(`${catalog.activeCatalog}`).style.display = "block"
  }, [catalog])

  return (
    <div className={styles.homeDesktop}>
      <div className={styles.catalog}>
        <div className={styles.catalogSubdirectoryBlock}>
          {catalog?.catalogs?.map(catalog =>
            <SubCatalog key={catalog.catalogId}
              catalogElement={catalog}
              onTag={onHoverSubcatalog}/>
          )}
        </div>
        <img className={styles.separatorIcon} alt="" src="/separator.svg" />
        <div className={styles.catalogSubdirectoryBlock}>
          {catalog.catalogs.map(catalog =>
            <SubSubCatalog key={catalog.catalogId} catalogElement={catalog}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default observer(CatalogComponent);
