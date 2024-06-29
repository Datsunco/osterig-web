import $api from "../http";

export default class AuthService{
    static async login(email, password){
        return $api.post('/user/login', {email, password})
        
    }

    static async getData(){
        return $api.get('/user/data')
        
    }

    static async parse(catalogId){
        return $api.get(`/proxy/parse/${catalogId}`)
        
    }

    
    static async addFavorite(deviceId, typeId){
        try{
            return $api.post('/favorites/add', {deviceId, typeId})
        }catch(e){
            console.log(e)
        }
    }

    static async registration(email, password){
        return $api.post('/user/registration', {email, password})
    }

    static async logout(){
        return $api.post('/user/logout')
    }

    static async order(){
        return $api.post('/order/create')
    }
}