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
}