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
            if (element.deviceId != device.deviceId)
                changed.push({deviceId: element.deviceId, typeId: element.typeId})
        });
        this.devices = changed
    }

    async addDevice(productModel, catalogId) {
        try {
            await cartService.addDevice(productModel, catalogId)
            this.appendDevice({deviceId: productModel, typeId: catalogId})

        } catch (e) {
            console.log(e);
        }
    }

    async removeDevice(deviceId, typeId) {
        try {
            await cartService.removeDevice(deviceId, typeId)
            this.sliceDevice({deviceId, typeId})

        } catch (e) {
            console.log(e);
        }
    }

    async getDevices() {
        try {
            const devices = await cartService.getDevices()
            console.log(devices.data)
            this.setDevices(devices.data)
        } catch (e) {
            console.log(e);
        }
    }

}