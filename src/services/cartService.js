import $api from "../http";

export default class CartService{
    static async addDevice(deviceId, typeId){
        try{
            const count = 1
            console.log(deviceId, typeId)
            console.log('Корзина')
            return $api.post('/cart/add', {deviceId, typeId, count})
        }catch(e){
            console.log(e)
        }
    }

    static async removeDevice(deviceId, typeId){
        try{
            const count = 0
            console.log(deviceId, typeId)
            console.log('Корзина')
            return $api.post('/cart/remove', {deviceId, typeId, count})
        }catch(e){
            console.log(e)
        }
    }

    static async getDevices() {
        try {
            return $api.get('/cart/get')
        } catch (e) {
            console.log(e)
        }
    }
}