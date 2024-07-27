import $api from "../http";

export default class DeliveryService {

    static async getTariff(address) {
        try {
            return $api.get(`/delivery/get/${address}`)
        } catch (e) {
            console.log(e)
        }

    }

    static async getTariffByPoint(address, type) {
        try {
            return $api.get(`/delivery/get/tarrifbypoint/${address}/${type}`)
        } catch (e) {
            console.log(e)
        }

    }

    static async getFeaturesByAddress(address) {
        try {
            return $api.get(`/delivery/get/featuresBy/${address}`)
        } catch (e) {
            console.log(e)
        }

    }

    static async getDeliveryPoints(center) {
        const lat = center[0]
        const lon = center[1]
        try {
            return $api.get(`/delivery/deliverypoints/${lat}/${lon}`)
        } catch (e) {
            console.log(e)
        }

    }


}