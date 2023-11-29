import styles from "./HeaderCatalog.module.css"
import { useCallback, useContext, useEffect } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import HeaderSubCatalog from "../HeaderSubCatalog/HeaderSubCatalog";
import HeaderSubSuCatalog from "../HeaderSubSubCatalog/HeaderSubSuCatalog";
import styles2 from "../HeaderSubSubCatalog/HeaderSubSubCatalog.module.css"
import { useNavigate } from "react-router-dom";

const HeaderCatalog = () => {
    const { catalog } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        document.getElementById(`${catalog.activeCatalog}`).style.display = "block"
    }, [catalog])


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
                    {catalog.catalogs.slice(0,9).map(catalog =>
                        <HeaderSubCatalog key={catalog.catalogId}
                            catalogElement={catalog}
                            onTag={onHoverSubcatalog} />
                    )}
                </div>
                <img className={styles.separatorIcon} alt="" src="/separator.svg" />
                <div className={styles.catalogSubdirectoryBlock_2}>
                    {catalog.catalogs.slice(0,9).map(catalog =>
                        <HeaderSubSuCatalog key={catalog.catalogId} catalogElement={catalog} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default observer(HeaderCatalog);