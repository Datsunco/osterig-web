import $api from "../http";

export default class ordersService {

    static async getOrders() {
        try {
            return $api.get('/order/get')
        } catch (e) {
            console.log(e)
        }
    }

    static async createOrder(userId, totalAmount, paymentType) {
        try {
            return $api.post('/payment/initial', {body: {userId, totalAmount, paymentType}})
        } catch (e) {
            console.log(e)
        }
    }
}