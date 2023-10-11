import React, { useContext, useEffect, useState} from 'react';
import './Search.css'
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import Shop from '../../Components/Shop/Shop';

const Search = () => {
    const {favorites, cart, store} = useContext(Context)

    const [model, setModel] = useState('')

    useEffect(() => {
        //store.search('CWT')
    })

    const handleSearchClick = () => {
        store.search(model)
    }


    return (
        <div>
            <input
            onChange={(e) => setModel(e.target.value)}
            value={model}/>
            <button onClick={handleSearchClick}>Поиск</button>
            <Shop/>
        </div>
    );
};

export default observer(Search);