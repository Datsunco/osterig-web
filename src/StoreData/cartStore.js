import { makeAutoObservable } from "mobx";
import cartService from "../services/cartService";

export default class CartStore {
    devices = []
    cartPrice = 0

    constructor() {
        makeAutoObservable(this);
    }


    setDevices(devices) {
        this.devices = devices
    }

    getCartSumPrice() {
        let changedPrice = 0
        this.devices.forEach(element => {
            const price = element?.price || element?.productPriceList[0].currencyPrice
            const minCount = element?.count
            changedPrice += price * minCount
        });
        return changedPrice
    }


    appendDevice(device) {
        this.devices.push(device)
    }

    sliceDevice(device) {
        let changed = []
        this.devices.forEach(element => {
            if (element.productCode != device.productCode) {
                changed.push(element)
            }

        });
        this.devices = changed
    }

    increaseDeviceCount(device) {
        let changed = []
        this.devices.forEach(element => {
            if (element.productCode != device.productCode) {
                changed.push(element)
            } else {
                changed.push({
                    productModel: element.productModel,
                    catalogId: element.catalogId,
                    count: element.count + element.minCount,
                    productCode: element.productCode,
                    brandNameEn: element.brandNameEn,
                    productImageUrl: element.productImageUrl,
                    price: element.price,
                    minCount: element.minCount
                })
            }

        });
        this.devices = changed
    }

    reduceDeviceCount(device) {
        let changed = []
        this.devices.forEach(element => {
            if (element.productCode != device.productCode) {
                changed.push(element)
            } else {
                changed.push({
                    productModel: element.productModel,
                    catalogId: element.catalogId,
                    count: element.count - element.minCount,
                    productCode: element.productCode,
                    brandNameEn: element.brandNameEn,
                    productImageUrl: element.productImageUrl,
                    price: element.price,
                    minCount: element.minCount
                })
            }

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
            await cartService.removeDevice(device, 0)
            this.sliceDevice(device)

        } catch (e) {
            console.log(e);
        }
    }


    async changeDeviceAmount(device, sign) {
        try {

            if (sign == true) {
                this.increaseDeviceCount(device)
                await cartService.removeDevice(device, device.count + device.minCount)
            } else if (sign == false) {
                if (device.count - device.minCount > 0) {
                    this.reduceDeviceCount(device)
                    await cartService.removeDevice(device, device.count - device.minCount)
                } else {
                    this.removeDevice(device)
                }
            }


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