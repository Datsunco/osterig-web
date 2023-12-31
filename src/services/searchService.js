import $api from "../http";

export default class SearchService {

    static async parsePreData(keyword) {
        try {
            return $api.get(`/proxy/pre/${keyword}`)
        } catch (e) {
            console.log(e)
        }

    }

    static async getPreLink(type, keyword) {
        try {
            return $api.get(`/proxy/pre/link/${type}/${keyword}`)
        } catch (e) {
            console.log(e)
        }

    }
}