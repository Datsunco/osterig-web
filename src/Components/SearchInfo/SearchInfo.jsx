import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from "../..";
import "../SearchInfo/SearchInfo.css"

const SearchInfo = () => {
    const { search } = useContext(Context)
    return (
        <div class="searchInfo" id="searchInfo">
            <div class="CategoriesSearchInfo">
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

            </div>

            <div class="ProductsSearchInfo">
                {search.pre_data?.['LCSC Part Number'] ?
                    <div>
                        <div class="TextSearchInfo">Продукция</div>
                        {search.pre_data?.['LCSC Part Number']?.slice(0, 5).map(lcsc =>
                            <div class="ProdTextSeatchInfo">{lcsc}</div>
                        )}
                    </div>
                    :
                    null
                }
                {/* <div class="ProdTextSeatchInfo">Aluminum Case/Porcelain Tube Resistance</div>
                <div class="ProdTextSeatchInfo">Aluminum Case/Porcelain Tube Resistance</div>
                <div class="ProdTextSeatchInfo">Aluminum Case/Porcelain Tube Resistance</div> */}
            </div>
        </div>
    );
};

export default observer(SearchInfo);

