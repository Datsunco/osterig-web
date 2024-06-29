import $api from "../http";

export default class DeliveryService {

    static async getTariff(address) {
        try {
            return $api.get(`/delivery/get/${address}`)
        } catch (e) {
            console.log(e)
        }

    }


}