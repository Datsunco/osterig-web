import $api from "../http";

export default class CartService{
    static async addDevice(device){
        try{
            const imageUrl = device?.productImageUrlBig || device?.productImageUrl || device?.productImages?.[0] || "https://cdn-icons-png.flaticon.com/512/2339/2339070.png"
            const price =  device?.price || device?.productPriceList[0].currencyPrice 
            const minCount =  device?.minCount || device?.productPriceList[0].ladder 
            return $api.post('/cart/add', { 
                productModel: device.productModel,
                catalogId: device.catalogId,
                count: minCount,
                productCode: device.productCode,
                brandNameEn: device.brandNameEn,
                productImageUrl: imageUrl,
                price: price,
                minCount: minCount,
            })
        }catch(e){
            console.log(e)
        }
    }

    static async removeDevice(device, count){
        try{
            return $api.post('/cart/remove', {
                productModel: device.productModel, 
                catalogId: device.catalogId, 
                count
            })
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