import $api from "../http";

export default class FavoritesService {

    static async addFavorite(device) {
        try {
            const imageUrl = device?.productImageUrlBig || device?.productImageUrl || "https://cdn-icons-png.flaticon.com/512/4021/4021581.png"
            const price =  device?.price || device?.productPriceList[0].currencyPrice 
            const minCount =  device?.minCount || device?.productPriceList[0].ladder 
            return $api.post('/favorites/add', { 
                productModel: device.productModel,
                catalogId: device.catalogId,
                productCode: device.productCode,
                brandNameEn: device.brandNameEn,
                productImageUrl: imageUrl,
                price: price,
                minCount: minCount,
            })
        } catch (e) {
            console.log(e)
        }
    }

    static async removeFavorite(productModel, catalogId) {
        try {
            return $api.post('/favorites/remove', { productModel, catalogId })
        } catch (e) {
            console.log(e)
        }
    }

    static async getFavorites() {
        try {
            return $api.get('/favorites/get')
        } catch (e) {
            console.log(e)
        }
    }
}