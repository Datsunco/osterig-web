import { makeAutoObservable } from "mobx"
import image1 from "../static/DeviceImg/component.png"

import proxyService from "../services/proxyService"

import resistor from "../static/DeviceTypeImages/resistors.png"
import capacitors from "../static/DeviceTypeImages/capacitors.png"
import connectors from "../static/DeviceTypeImages/connectors.png"
import converters from "../static/DeviceTypeImages/converters.png"
import diodes from "../static/DeviceTypeImages/diodes.png"
import exel from "../static/DeviceTypeImages/exel.png"
import inductors from "../static/DeviceTypeImages/inductors.png"
import processors from "../static/DeviceTypeImages/processors.png"
import hand from "../static/DeviceTypeImages/hand.png"


export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 0, name: 'RESISTORS', img: resistor, catalogId: 312, idHref:"#res"},
            { id: 2, name: 'CAPACITORS', img: capacitors, idHref:"#cap" },
            { id: 3, name: 'INDUCTORS', img: inductors, idHref:"#ind" },
            { id: 4, name: 'PROCESSORS', img: processors, idHref:"#pro" },
            { id: 5, name: 'CONVERTERS', img: converters, idHref:"#conv" },
            { id: 6, name: 'DIODES', img: diodes, idHref:"#dio" },
            { id: 7, name: 'CONNECTORS', img: connectors, idHref:"#con" },
            { id: 8, name: 'ПОДОБРАТЬ ЧЕРЕЗ EXEL', img: exel, idHref:"#exel"},
        ]
        this._brands = [
            { id: 1, name: 'Chipanalog' },
            { id: 2, name: 'Apple' },
        ]
        this._devices = [
            { id: 1, name: 'CA-IS3082WX', price: '127,2₽', rating: 5, img: image1 },
            { id: 2, name: 'CA-IS3082WX', price: '127,2₽', rating: 5, img: image1 },
            { id: 3, name: 'CA-IS3082WX', price: '127,2₽', rating: 5, img: image1 },
            { id: 4, name: 'CA-IS3082WX', price: '127,2₽', rating: 5, img: image1 },
            { id: 5, name: 'CA-IS3082WX', price: '127,2₽', rating: 5, img: image1 },
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }
    productDetails = {
        "productId": 3520,
        "productCode": "C3131",
        "productModel": "C3131",
        "parentCatalogId": 395,
        "parentCatalogName": "TVS/Fuse/Board Level Protection",
        "catalogId": 399,
        "catalogName": "Fuse Holders",
        "brandId": 123,
        "brandNameEn": "Xucheng Elec",
        "encapStandard": "-",
        "split": 5,
        "productUnit": "Piece",
        "minPacketUnit": "Bag",
        "minBuyNumber": 5,
        "maxBuyNumber": -1,
        "minPacketNumber": 500,
        "isEnvironment": true,
        "allHotLevel": null,
        "isHot": true,
        "isPreSale": false,
        "isReel": false,
        "reelPrice": null,
        "stockNumber": 45025,
        "shipImmediately": 18575,
        "ship3Days": 26450,
        "stockSz": 18575,
        "stockJs": 26450,
        "productPriceList": [
            {
                "ladder": 5,
                "productPrice": "0.0615",
                "discountRate": "1",
                "currencyPrice": 0.0615,
                "usdPrice": 0.0615,
                "currencySymbol": "US$",
                "cnyProductPriceList": null,
                "isForeignDiscount": null
            },
            {
                "ladder": 50,
                "productPrice": "0.0497",
                "discountRate": "1",
                "currencyPrice": 0.0497,
                "usdPrice": 0.0497,
                "currencySymbol": "US$",
                "cnyProductPriceList": null,
                "isForeignDiscount": null
            },
            {
                "ladder": 150,
                "productPrice": "0.0437",
                "discountRate": "1",
                "currencyPrice": 0.0437,
                "usdPrice": 0.0437,
                "currencySymbol": "US$",
                "cnyProductPriceList": null,
                "isForeignDiscount": null
            },
            {
                "ladder": 500,
                "productPrice": "0.0387",
                "discountRate": "1",
                "currencyPrice": 0.0387,
                "usdPrice": 0.0387,
                "currencySymbol": "US$",
                "cnyProductPriceList": null,
                "isForeignDiscount": null
            },
            {
                "ladder": 2500,
                "productPrice": "0.0369",
                "discountRate": "1",
                "currencyPrice": 0.0369,
                "usdPrice": 0.0369,
                "currencySymbol": "US$",
                "cnyProductPriceList": null,
                "isForeignDiscount": null
            },
            {
                "ladder": 5000,
                "productPrice": "0.0358",
                "discountRate": "1",
                "currencyPrice": 0.0358,
                "usdPrice": 0.0358,
                "currencySymbol": "US$",
                "cnyProductPriceList": null,
                "isForeignDiscount": null
            }
        ],
        "productImages": [
            "https://assets.lcsc.com/images/lcsc/900x900/20221228_Xucheng-Elec-C3131_C3131_front.jpg",
            "https://assets.lcsc.com/images/lcsc/900x900/20221228_Xucheng-Elec-C3131_C3131_back.jpg",
            "https://assets.lcsc.com/images/lcsc/900x900/20221228_Xucheng-Elec-C3131_C3131_blank.jpg"
        ],
        "pdfUrl": "https://datasheet.lcsc.com/lcsc/1811061209_Xucheng-Elec-C3131_C3131.pdf",
        "productDescEn": null,
        "productIntroEn": " -  Fuse Holders ROHS",
        "productArrange": "Bag-packed",
        "productWeight": 0.001774,
        "foreignWeight": 0.0,
        "weight": 1.774,
        "isForeignOnsale": true,
        "isAutoOffsale": false,
        "isHasBattery": false,
        "title": "Xucheng Elec C3131",
        "isFavorite": false,
        "paramVOList": [
            {
                "paramCode": "param_12805",
                "paramName": "保险丝类型",
                "paramNameEn": "Fuse Type",
                "paramValue": "-",
                "paramValueEn": "-",
                "paramValueEnForSearch": -1.0,
                "isMain": true,
                "sortNumber": 1
            },
            {
                "paramCode": "param_10609",
                "paramName": "保险丝座类型",
                "paramNameEn": "Fuseholder Type",
                "paramValue": "-",
                "paramValueEn": "-",
                "paramValueEnForSearch": -1.0,
                "isMain": true,
                "sortNumber": 1
            },
            {
                "paramCode": "param_10612",
                "paramName": "保险丝尺寸",
                "paramNameEn": "Fuse Size",
                "paramValue": "-",
                "paramValueEn": "-",
                "paramValueEnForSearch": -1.0,
                "isMain": false,
                "sortNumber": 1
            }
        ],
        "isAddNotice": null,
        "subscribeQuantity": null
    }
    sameProducts = [ {
        "size": null,
        "productCode": "C1008",
        "catalogNameEn": "Ferrite Beads",
        "productImageUrl": "https://assets.lcsc.com/images/lcsc/224x224/20221227_FH--Guangdong-Fenghua-Advanced-Tech-CBG160808U560T_C1008_front.jpg",
        "brandNameEn": "FH (Guangdong Fenghua Advanced Tech)",
        "productModel": "CBG160808U560T",
        "productLadder": 100,
        "productLadderPrice": 0.0048,
        "split": 100,
        "ladderDiscountRate": "1",
        "minPacketNumber": 4000,
        "brandId": 63,
        "catalogId": 527,
        "isDiscount": false,
        "isHot": false,
        "currencyPrice": 0.0048
    },
    {
        "size": null,
        "productCode": "C1057",
        "catalogNameEn": "Tantalum Capacitors",
        "productImageUrl": "https://assets.lcsc.com/images/lcsc/224x224/20221227_Lelon-SY8-0J476M-RA_C1057_front.jpg",
        "brandNameEn": "Lelon",
        "productModel": "SY8-0J476M-RA",
        "productLadder": 5,
        "productLadderPrice": 0.0807,
        "split": 5,
        "ladderDiscountRate": "1.00",
        "minPacketNumber": 2000,
        "brandId": 1127,
        "catalogId": 314,
        "isDiscount": true,
        "isHot": false,
        "currencyPrice": 0.0807
    },
    {
        "size": null,
        "productCode": "C1358",
        "catalogNameEn": "Chip Resistor - Surface Mount",
        "productImageUrl": "https://assets.lcsc.com/images/lcsc/224x224/20221227_RALEC-RTT05182JTP_C1358_front.jpg",
        "brandNameEn": "RALEC",
        "productModel": "RTT05182JTP",
        "productLadder": 100,
        "productLadderPrice": 0.0019,
        "split": 100,
        "ladderDiscountRate": "1",
        "minPacketNumber": 5000,
        "brandId": 111,
        "catalogId": 439,
        "isDiscount": false,
        "isHot": false,
        "currencyPrice": 0.0019
    },
    {
        "size": null,
        "productCode": "C1731",
        "catalogNameEn": "Multilayer Ceramic Capacitors MLCC - SMD/SMT",
        "productImageUrl": "https://assets.lcsc.com/images/lcsc/224x224/20221227_Samsung-Electro-Mechanics-CL21A225KOFNNNE_C1731_front.jpg",
        "brandNameEn": "Samsung Electro-Mechanics",
        "productModel": "CL21A225KOFNNNE",
        "productLadder": 5,
        "productLadderPrice": 0.0806,
        "split": 5,
        "ladderDiscountRate": "1",
        "minPacketNumber": 2000,
        "brandId": 254,
        "catalogId": 313,
        "isDiscount": false,
        "isHot": false,
        "currencyPrice": 0.0806
    },
    {
        "size": null,
        "productCode": "C1765",
        "catalogNameEn": "Multilayer Ceramic Capacitors MLCC - SMD/SMT",
        "productImageUrl": "https://assets.lcsc.com/images/lcsc/224x224/20221227_FH--Guangdong-Fenghua-Advanced-Tech-0805F153M500NT_C1765_front.jpg",
        "brandNameEn": "FH (Guangdong Fenghua Advanced Tech)",
        "productModel": "0805F153M500NT",
        "productLadder": 50,
        "productLadderPrice": 0.0111,
        "split": 50,
        "ladderDiscountRate": "1",
        "minPacketNumber": 4000,
        "brandId": 63,
        "catalogId": 313,
        "isDiscount": false,
        "isHot": false,
        "currencyPrice": 0.0111
    }]
    hotProducts = []
    images = [
        {
            itemImageSrc: "https://assets.lcsc.com/images/lcsc/900x900/20221228_Xucheng-Elec-C3131_C3131_front.jpg",
            thumbnailImageSrc: "https://assets.lcsc.com/images/lcsc/900x900/20221228_Xucheng-Elec-C3131_C3131_front.jpg",
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: "https://assets.lcsc.com/images/lcsc/900x900/20221228_Xucheng-Elec-C3131_C3131_back.jpg",
            thumbnailImageSrc: "https://assets.lcsc.com/images/lcsc/900x900/20221228_Xucheng-Elec-C3131_C3131_back.jpg",
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: "https://assets.lcsc.com/images/lcsc/900x900/20221228_Xucheng-Elec-C3131_C3131_blank.jpg",
            thumbnailImageSrc:    "https://assets.lcsc.com/images/lcsc/900x900/20221228_Xucheng-Elec-C3131_C3131_blank.jpg",
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
    ]

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setHotProducts(hotProducts) {
        this.hotProducts = hotProducts
    }

    setSameProducts(sameProducts) {
        this.sameProducts = sameProducts
    }

    setProductDetails(productDetails) {
        this.productDetails = productDetails
    }

    setImages(images) {
        const newImages = []
        images.forEach(image => {
            newImages.push({
                itemImageSrc: image,
                thumbnailImageSrc: image,
                alt: 'Description for Image 1',
                title: 'Title 1'
            })
        });
        this.images = newImages
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get selectedType() {
        return this._selectedType
    }


    async parseHotProducts() {
        try {
            const response = await proxyService.parseHotProducts();
            this.setHotProducts(response.data.result.hotProduct)
        } catch (e) {

        }
    }

    async parseProductDetails(productCode) {
        try {
            const response = await proxyService.parseProductDetails(productCode);
            this.setProductDetails(response.data.result)
            this.setImages(response.data.result.productImages)
        } catch (e) {

        }
    }

    async parseSameProducts(productCode) {
        try {
            const response = await proxyService.parseSameProducts(productCode);
            this.setSameProducts(response.data.result.recommends)
        } catch (e) {

        }
    }
}