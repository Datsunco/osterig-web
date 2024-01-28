import {makeAutoObservable} from "mobx";
import proxyService from "../services/proxyService";
import ordersService from "../services/ordersService";

export default class CheckoutStore {
    firstName = 'Даниил';
    lastName = 'Доценко';
    phoneNumber = '89164448299';
    email = 'danya200375@gmail.com';
    patronymic = 'Алексеевич';
    address = 'Мытищи Семашко 4 к 3';
    deliveryType = 'ПВЗ';
    uniqId = 'test';
    totalAmount = 128100;
    userId = '651d45f76bd9ff09147fc61e';
    paymentType = 'CARD'


    constructor() {
        makeAutoObservable(this);
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    setEmail(email) {
        this.email = email;
    }

    setPatronymic(patronymic) {
        this.patronymic = patronymic;
    }

    setAddress(address) {
        this.address = address;
    }

    setDeliveryType(deliveryType) {
        this.deliveryType = deliveryType;
    }

    setUniqId(uniqId) {
        this.uniqId = uniqId;
    }

    setTotalAmount(totalAmount) {
        this.totalAmount = totalAmount;
    }

    setUserId(userId) {
        this.userId = userId;
    }


    async createOrder() {
        try {
            const resp = await ordersService.createOrder()
        } catch (e) {
            console.log(e);
        }
    }

}