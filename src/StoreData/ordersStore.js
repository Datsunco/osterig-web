import {makeAutoObservable} from "mobx";
import ordersService from "../services/ordersService";
import $api from "../http";


export default class ordersStore {
    catalogOpen = false
    orders = []

    constructor() {
        makeAutoObservable(this);
    }

    setOrders(orders){
        this.orders = orders 
    }

    async getOrders(email, password) {
        try {
            const response = await ordersService.getOrders(email, password);
            this.setOrders(response.data)
            console.log(response.data)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

}