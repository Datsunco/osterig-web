import React, { useEffect, useState } from 'react';
import styles from "./CheckBoxBlock.module.css"
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../..';

const CheckBoxBlock = ({ param }) => {
    const { store } = useContext(Context)
    const [isShowAll, setIsShowAll] = useState(false)

    const onClickCheckBox = (param) => {
        store.sliceSelectedParam(param)
        store.parse(store.currentCatalogId, store.seletedParams)
        store.parse_params(store.currentCatalogId, store.seletedParams)
        //store.appendSelectedParam(param)
    }


    return (
        <div className={styles.check_box_block}>
            <b className={styles.check_box_block_text}>Производитель</b>
            <div className={styles.check_box_block_elements}>
                {isShowAll == false ?
                    (param?.slice(0, 5).map(elemo =>
                        <div className={styles.box}>
                            <input onChange={() => onClickCheckBox(elemo)} className={styles.check_box_block_elements_box} checked={store.isSelectedparam(elemo)} type="checkbox" />
                            <a className={styles.check_box_block_elements_text}>{elemo.name}</a>
                        </div>
                    ))
                    :
                    (param?.slice(0, 50).map(elemo =>
                        <div className={styles.box}>
                            <input onChange={() => onClickCheckBox(elemo)} className={styles.check_box_block_elements_box} value={elemo.id} checked={store.isSelectedparam(elemo)} type="checkbox" />
                            <span className={styles.check_box_block_elements_text}>{elemo.name}</span>
                        </div>
                    ))
                }

            </div>
            {isShowAll == false ?
                <div className={styles.check_box_button_show} onClick={() => setIsShowAll(!isShowAll)}>
                    <b className={styles.check_box_button_text}>Показать все</b>
                    <img className={styles.check_box_button_img} src='../arrow-checkbox.png' />
                </div>
                :
                <div className={styles.check_box_button_show} onClick={() => setIsShowAll(!isShowAll)}>
                    <b className={styles.check_box_button_text}>Скрыть</b>
                    <img className={styles.check_box_button_img1} src='../arrow-checkbox.png' />
                </div>
            }
        </div>
    );
};

export default observer(CheckBoxBlock);