import {makeAutoObservable} from "mobx";
import favoritesService from "../services/favoritesService";
import axios from 'axios';

export default class FavoritesStore {
    favorites = [
        // {
        //     "_id": "65253f6e9c60f2de114a4be9",
        //     "favoritesDevice": "651d45f76bd9ff09147fc61e",
        //     "deviceId": "BLM15AG102SN1D",
        //     "typeId": "527",
        //     "__v": 0
        // },
        // {
        //     "_id": "65514103d69bafee96f37f00",
        //     "favoritesDevice": "651d45f76bd9ff09147fc61e",
        //     "deviceId": "GZ1608U600CTF",
        //     "typeId": "527",
        //     "__v": 0
        // }
    ]
    isLoaded = false

    constructor() {
        makeAutoObservable(this);
    }

    // get favorites(){
    //     return this.favorites
    // }
    setIsLoaded(){
        this.isLoaded = true
    }

    setFavorites(favorites){
        this.favorites = favorites
    }

    appendFavorite(favorite){
        this.favorites.push(favorite)
    }

    static async checkFavorite(deviceId){
        this.favorites.forEach(fav => {
            console.log(fav.deviceId, deviceId)
            if (deviceId === fav.deviceId)
                console.log(true)
                return true
        });
        return false
    }

    sliceFavorite(device){
        const changed = []
        this.favorites.forEach(element => {
            if (element.productModel != device.productModel)
                changed.push(element)
        });
        this.favorites = changed
    }

    async addFavorite(device) {
        try {
            await favoritesService.addFavorite(device)
            this.appendFavorite(device)
        } catch (e) {
            console.log(e);
        }
    }

    async removeFavorite(device) {
        try {
            await favoritesService.removeFavorite(device.productModel, device.catalogId)
            this.sliceFavorite({productModel: device.productModel, catalogId: device.catalogId})
        } catch (e) {
            console.log(e);
        }
    }

    async isFavorite(productModel, catalogId) {
        try {
            this.appendFavorite({productModel, catalogId})
        } catch (e) {
            console.log(e);
        }
    }

    async getFavorites() {
        try {
            const favorites = await favoritesService.getFavorites()
            console.log(favorites.data)
            this.setFavorites(favorites.data)
            
        } catch (e) {
            console.log(e);
        }
        finally{
            this.setIsLoaded()
        }
    }

}