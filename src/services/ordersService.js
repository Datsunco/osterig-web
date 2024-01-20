import $api from "../http";

export default class ordersService {


    static async getOrders() {
        try {
            return $api.get('/order/get')
        } catch (e) {
            console.log(e)
        }
    }
}