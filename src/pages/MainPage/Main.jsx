import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import './Main.css'
import axios from "axios";


const Main = () => {
    const [data, setData] = useState('')

    useEffect(() => {
        const formData = new FormData();

        formData.append("currentPage", 1);
        formData.append("pageSize", 25);
        formData.append("catalogIdList", [527]);
        formData.append("paramNameValueMap", {});

        const url = 'https://api.scraperapi.com?api_key=85c2d5006ac7dc5ff4aa77efcf5a537c&url=https://wmsc.lcsc.com/wmsc/product/search/list';
        const url_2 = 'http://localhost:5000/wmsc/product/search/list';

        const param = {
            currentPage: 1,
            pageSize: 25,
            catalogIdList: [527],
            paramNameValueMap: {}
        };

        fetch(url_2, {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка сети');
                }
                return response.json();
            })
            .then(data => {
                // Обработка успешного ответа
                console.log('Ответ:', data);
            })
            .catch(error => {
                // Обработка ошибок
                console.error('Ошибка:', error);
            });
    }, [data])


    return (
        <div>
            <Header></Header>
            <div>
                {data}
            </div>
        </div>

    );
};

export default Main;