import $api from "../http";

export default class ordersService {

    static async getOrders() {
        try {
            return $api.get('/order/get')
        } catch (e) {
            console.log(e)
        }
    }

    static async createOrder() {
        try {
            return $api.post('/order/post')
        } catch (e) {
            console.log(e)
        }
    }
}