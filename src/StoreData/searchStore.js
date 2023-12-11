import { makeAutoObservable } from "mobx";
import searchService from "../services/searchService";

export default class SearchStore {
    pre_data = {}

    constructor() {
        makeAutoObservable(this);
    }


    setPreData(data) {
        this.pre_data = data
    }

    async getPreWord(keyword) {
        try {
            const response = await searchService.parsePreData(keyword)
            this.setPreData(response.data.result)
        } catch (e) {
            console.log(e);
        }
    }

    async getPreLink(type, keyword) {
        try {
            const response = await searchService.getPreLink(type, keyword)
            if (response.data.result){
                const start = response.data.result.lastIndexOf('C');
                const end = response.data.result.lastIndexOf('.');
                console.log(response.data.result.slice(start, end))
                console.log(response.data.result)
                return response.data.result.slice(start, end)
            }
            return null
        } catch (e) {
            console.log(e);
        }
    }
}