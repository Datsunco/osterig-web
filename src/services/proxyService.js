import $api from "../http";

export default class ProxyService {

    static async parse(catalogId, seletedParams=null) {
        try {
            return $api.get(`/proxy/catalog/parse/data/${catalogId}/${JSON.stringify(seletedParams)}`)
        } catch (e) {
            console.log(e)
        }

    }

    static async parse_by_page(catalogId, seletedParams=null, page) {
        try {
            return $api.get(`/proxy/catalog/parsebypage/data/${catalogId}/${page}/${JSON.stringify(seletedParams)}`)
        } catch (e) {
            console.log(e)
        }

    }

    static async parse_hot_by_page(seletedParams=null, page) {
        try {
            return $api.get(`/proxy/catalog/parsebypage/hotdata/${page}/${JSON.stringify(seletedParams)}`)
        } catch (e) {
            console.log(e)
        }

    }

    static async parse_params(catalogId, seletedParams=null) {
        try {
            return $api.get(`/proxy/catalog/parse/params/${catalogId}/${JSON.stringify(seletedParams)}`)
        } catch (e) {
            console.log(e)
        }

    }

    static async parse_hot_params(seletedParams=null) {
        try {
            return $api.get(`/proxy/catalog/parse/params/hot/${JSON.stringify(seletedParams)}`)
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

    static async parseCatalogs() {
        try {
            return $api.get(`/proxy/catalogs/parse`)
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

    static async onLevel(keyword) {
        try {
            return $api.get(`/proxy/onlevel/${keyword}`)
        } catch (e) {
            console.log(e)
        }

    }
}