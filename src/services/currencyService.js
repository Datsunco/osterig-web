
import axios from "axios";

export default class CurrencyService{
    

    static async getCurrency() {
        const apiUrl = `https://www.cbr-xml-daily.ru/daily_json.js`;
        try {
            return axios.get(apiUrl)
        } catch (e) {
            console.log(e)
        }
    }
}