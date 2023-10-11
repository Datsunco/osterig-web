import $api from "../http";

export default class ProxyService {

    static async parse(catalogId) {
        try {
            return $api.get(`/proxy/parse/${catalogId}`)
        } catch (e) {
            console.log(e)
        }

    }

    static async search(keyword) {
        try {
            return $api.get(`/proxy/search/${keyword}`)
        } catch (e) {
            console.log(e)
        }

    }
}