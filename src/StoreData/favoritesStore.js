import {makeAutoObservable} from "mobx";
import favoritesService from "../services/favoritesService";
import axios from 'axios';

export default class FavoritesStore {
    favorites = []

    constructor() {
        makeAutoObservable(this);
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
            if (element.deviceId != device.deviceId)
                changed.push({deviceId: element.deviceId, typeId: element.typeId})
        });
        this.favorites = changed
    }

    async addFavorite(productModel, catalogId) {
        try {
            await favoritesService.addFavorite(productModel, catalogId)
            this.appendFavorite({deviceId: productModel, typeId: catalogId})
        } catch (e) {
            console.log(e);
        }
    }

    async removeFavorite(productModel, catalogId) {
        try {
            await favoritesService.removeFavorite(productModel, catalogId)
            this.sliceFavorite({deviceId: productModel, typeId: catalogId})
        } catch (e) {
            console.log(e);
        }
    }

    async isFavorite(productModel, catalogId) {
        try {
            this.appendFavorite({deviceId: productModel, typeId: catalogId})
        } catch (e) {
            console.log(e);
        }
    }

    async getFavorites() {
        try {
            const favorites = await favoritesService.getFavorites()
            this.setFavorites(favorites.data)
        } catch (e) {
            console.log(e);
        }
    }

}