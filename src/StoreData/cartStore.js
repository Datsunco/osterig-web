import {makeAutoObservable} from "mobx";
import cartService from "../services/cartService";
import axios from 'axios';

export default class CartStore {
    devices = [{deviceId: "443", typeId: "111"}]

    constructor() {
        makeAutoObservable(this);
    }


    setDevices(devices){
        this.devices = devices
    }


    appendDevice(device){
        this.devices.push(device)
    }

    sliceDevice(device){
        const changed = []
        this.devices.forEach(element => {
            if (element.productCode != device.productCode)
                changed.push(element)
        });
        this.devices = changed
    }

    async addDevice(device) {
        try {
            await cartService.addDevice(device)
            this.appendDevice(device)

        } catch (e) {
            console.log(e);
        }
    }
    

    async removeDevice(device) {
        try {
            await cartService.removeDevice(device)
            this.sliceDevice(device)

        } catch (e) {
            console.log(e);
        }
    }

    async getDevices() {
        try {
            const devices = await cartService.getDevices()
            this.setDevices(devices.data)
        } catch (e) {
            console.log(e);
        }
    }

}