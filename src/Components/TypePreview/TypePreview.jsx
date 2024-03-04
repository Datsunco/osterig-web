import React, { useContext, useEffect } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import styles from "./TypePreview.module.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { DEVICE_ROUTE } from "../../utils/consts";
import CheckBoxBlock from '../CheckBoxBlock/CheckBoxBlock'
import { useLocation, useParams } from 'react-router-dom';

const TypePreview = ({ from, childCatalogs, catalogName, parentCatalogName, parentcatalogId }) => {
    const navigate = useNavigate()
    const { store } = useContext(Context)
    const [inputValue, setInputValue] = useState("")
    const { search } = useContext(Context)
    const { state } = useLocation()

    const onClickCatalog = (child) => {
        store.setSelectedParam([])
        navigate(`/search/${child.catalogId}`)
    }

    const onClickSelectedParam = (param) => {
        store.sliceSelectedParam(param)
        store.parse(store.currentCatalogId, store.seletedParams)
        store.parse_params(store.currentCatalogId, store.seletedParams)
    }

    const onClickSearch = async () => {
        const response = await store.search(inputValue)
        if (response?.data?.result?.isToDetail === true) {
            navigate(DEVICE_ROUTE + '/' + inputValue, { state: { productCode: inputValue } })
        } else {
            navigate(`/search/${inputValue}/search`)
        }
    }

    const { id, type } = useParams()

    useEffect(() => {
        if (type === "search") {
            store.search(id)
        } else {
            store.setCurrentCatalogId(id)
            store.onLevel(id)
            store.parse(id, store.seletedParams)
            store.parse_params(id, store.seletedParams)
        }
    }, [store, state, id])

    return (
        <div className={styles.type_preview_block}>
            {from != 'search' ?
                <h6 className={styles.type_path}>
                    <a href='/mainpage' className={styles.navigation_link}>Главная</a>
                    /<a href='/catalog' className={styles.navigation_link}>Kаталог</a>
                    /<a onClick={() => onClickCatalog({ catalogId: parentcatalogId })}>{parentCatalogName}</a>
                    /{catalogName}
                </h6>
                :
                <h6 className={styles.type_path}>
                    <a href='/mainpage' className={styles.navigation_link}>Главная</a>
                    /<a href='/catalog' className={styles.navigation_link}>Каталог</a>
                </h6>
            }
            {from != 'search' ?
                <>
                    <h1 className={styles.type_preview_block_text}>{catalogName}</h1>
                    <div className={styles.type_preview_subtype_elements}>
                        {childCatalogs != null ?
                            childCatalogs.map(child =>
                                child.productNum != 0 ?
                                    <div className={styles.type_preview_subtype_element} onClick={() => onClickCatalog(child)}>
                                        <a className={styles.type_preview_subtype_text}>
                                            {child.catalogNameEn}
                                            <b className={styles.type_preview_subtype_num}> ({child.productNum})</b>
                                        </a>
                                    </div>
                                    :
                                    null
                            )
                            :
                            null
                        }
                    </div>
                </>
                :
                <h1 className={styles.type_preview_block_text}>Результаты поиска</h1>
            }
            <div className={styles.search_result}>
                <div class="search">
                    <input value={inputValue} onChange={(e) => setInputValue(e.target.value) & search.getPreWord(e.target.value)}
                        class="searchInput" type="text" placeholder="Искать товары" />
                    <button class="searchLupa" onClick={() => onClickSearch()}></button>
                </div>
            </div>
            <CheckBoxBlock param={store?.params?.["Manufacturer"] ? store?.params?.["Manufacturer"] : null} />
            <CheckBoxBlock param={store?.params?.["Package"] ? store?.params?.["Package"] : null} />
            <div className={styles.type_preview_block_selected_params}>
                {store?.seletedParams?.map(param =>
                    <div className={styles.selected_param}>
                        <div className={styles.selected_param_block}>
                            <b className={styles.param_text}>{param.name}</b>
                        </div>
                        <img onClick={() => onClickSelectedParam(param)} className={styles.selected_param_img} src='../cross.png' />
                    </div>
                )}
            </div>
        </div>
    );
};

export default observer(TypePreview);