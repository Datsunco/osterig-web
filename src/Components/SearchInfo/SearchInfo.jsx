import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router';
import React, { useContext, useEffect } from "react";
import { Context } from "../..";
import "../SearchInfo/SearchInfo.css"

const SearchInfo = ({ onClose }) => {
    const navigate = useNavigate()
    const { search } = useContext(Context)

    // useEffect(() => {

    //     return () => {
    //         onClose()
    //     }
    // })

    const onClickSuggestion = async (type, element) => {
        const resp = await search.getPreLink(type, element)
        if (resp) {
            navigate(`/device/${resp}`)
            onClose()
        }
    }

    const onClickLSCS = async (id) => {
        navigate(`/device/${id}`)
        onClose()
    }

    return (
        <div class="searchInfo" id="searchInfo">
            {/* <div class="CategoriesSearchInfo">
                {search.pre_data?.Category ?
                    <div>
                        <div class="TextSearchInfo">Категории</div>
                        {search.pre_data?.Category?.slice(0, 5).map(category =>
                            <div class="CatTextSeatchInfo">{category}</div>
                        )}
                    </div>
                    :
                    null
                }

            </div> */}
            <div class="ProductsSearchInfo">
                {search.pre_data?.['LCSC Part Number'] ?
                    <div>
                        <div class="TextSearchInfo">Продукция</div>
                        {search.pre_data?.['LCSC Part Number']?.slice(0, 5).map(lcsc =>
                            <div class="ProdTextSeatchInfo" onClick={() => onClickLSCS(lcsc)}>{lcsc}</div>
                        )}
                    </div>
                    :
                    null
                }
            </div>
            <div class="ProductsSearchInfo">
                {search.pre_data?.['MPN'] ?
                    <div>
                        <div class="TextSearchInfo">Артикул</div>
                        {search.pre_data?.['MPN']?.slice(0, 5).map(mpn =>
                            <div class="ProdTextSeatchInfo" onClick={() => onClickSuggestion('MPN', mpn)}>{mpn}</div>
                        )}
                    </div>
                    :
                    null
                }
            </div>
        </div>
    );
};

export default observer(SearchInfo);

