import $api from "../http";

export default class DeliveryService {

    static async getTariff() {
        try {
            return $api.get(`/delivery/get`)
        } catch (e) {
            console.log(e)
        }

    }


}