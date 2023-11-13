import $api from "../http";

export default class ProxyService {

    static async parse(catalogId) {
        try {
            return $api.get(`/proxy/catalog/parse/${catalogId}`)
        } catch (e) {
            console.log(e)
        }

    }

    static async parseHotProducts() {
        try {
            return $api.get(`/proxy/hotparse`)
        } catch (e) {
            console.log(e)
        }

    }

    static async parseProductDetails(productCode) {
        try {
            return $api.get(`/proxy/product/parse/${productCode}`)
        } catch (e) {
            console.log(e)
        }

    }

    static async parseSameProducts(productCode) {
        try {
            return $api.get(`/proxy/product/same/parse/${productCode}`)
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