import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from "../..";
import { Row } from "react-bootstrap";
import DeviceItem from "../DeviceItem/DeviceItem";
import "../SearchInfo/SearchInfo.css"

const SearchInfo = () => {
    return (
        <div class="searchInfo" id="searchInfo">
            <div class="CategoriesSearchInfo">
                <div class="TextSearchInfo">Категории</div>
                <div class="CatTextSeatchInfo">Resistors</div>
            </div>

            <div class="ProductsSearchInfo">
                <div class="TextSearchInfo">Продукция</div>
                <div class="ProdTextSeatchInfo">Aluminum Case/Porcelain Tube Resistance</div>
                <div class="ProdTextSeatchInfo">Aluminum Case/Porcelain Tube Resistance</div>
                <div class="ProdTextSeatchInfo">Aluminum Case/Porcelain Tube Resistance</div>
            </div>
        </div>
    );
};

export default observer(SearchInfo);

