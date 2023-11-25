import React, { useContext } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import styles from "./TypePreview.module.css"
import { useNavigate } from 'react-router-dom';

const TypePreview = ({ from, childCatalogs, catalogName, parentCatalogName, parentcatalogId }) => {
    const navigate = useNavigate()
    const { store } = useContext(Context)

    const onClickCatalog = (child) => {
        store.setSelectedParam([])
        navigate("/search", {
            state: {
                catalogId: child.catalogId,
                childs: JSON.stringify(child.childCatelogs),
                catalogNameEn: child.catalogNameEn,
                parentCatalogName: child?.parentName
            }
        })
    }

    const onClickSelectedParam = (param) => {
        store.sliceSelectedParam(param)
        store.parse(store.currentCatalogId, store.seletedParams)
        store.parse_params(store.currentCatalogId, store.seletedParams)
    }


    return (
        <div className={styles.type_preview_block}>
            <h6 className={styles.type_path}>
                <a href='/mainpage'>Home</a>
                /<a href='/catalog'>Catalog</a>
                /<a onClick={() => onClickCatalog({ catalogId: parentcatalogId })}>{parentCatalogName}</a>
                /{catalogName}
            </h6>
            <h1 className={styles.type_preview_block_text}>{catalogName}</h1>
            <div className={styles.type_preview_subtype_elements}>
                {JSON.parse(childCatalogs) != null ? JSON.parse(childCatalogs).map(child =>
                    <div className={styles.type_preview_subtype_element} onClick={() => onClickCatalog(child)}>
                        <a className={styles.type_preview_subtype_text}>
                            {child.catalogNameEn}
                            <b className={styles.type_preview_subtype_num}> ({child.productNum})</b>
                        </a>
                    </div>
                )
                    :
                    null
                }
            </div>
            <div className={styles.type_preview_block_selected_params}>
                {store?.seletedParams?.map(param =>
                    <div className={styles.selected_param}>
                        <div className={styles.selected_param_block}>
                            <b className={styles.param_text}>{param.name}</b>
                        </div>
                        <img onClick={() => onClickSelectedParam(param)} className={styles.selected_param_img} src='./cross.svg' />
                    </div>
                )}
            </div>
        </div>
    );
};

export default observer(TypePreview);