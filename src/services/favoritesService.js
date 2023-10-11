import $api from "../http";

export default class FavoritesService {

    static async addFavorite(deviceId, typeId) {
        try {
            console.log(deviceId, typeId)
            return $api.post('/favorites/add', { deviceId, typeId })
        } catch (e) {
            console.log(e)
        }
    }

    static async removeFavorite(deviceId, typeId) {
        try {
            console.log(deviceId, typeId)
            return $api.post('/favorites/remove', { deviceId, typeId })
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