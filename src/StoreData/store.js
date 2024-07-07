import {makeAutoObservable} from "mobx";
import AuthService from "../services/authService";
import ProxyService from "../services/proxyService";
import CurrencyService from "../services/currencyService";
import CartStore from "./cartStore";
import FavoritesStore from "./favoritesStore";
import axios from 'axios';
import $api from "../http";
import DeliveryService from "../services/deliveryService";


export default class Store {
    favStore;
    currency = 1;
    tariffs = []
    user = {}
    isAuth = false;
    isLoading = false;
    isParsed = false;
    devices = [{productId: 1},{productId: 2}]

    page = 1
    defaultUrl = "https://cdn-icons-png.flaticon.com/512/2339/2339070.png"
    params = {"Manufacturer": [
        {
            "name": "3PEAK",
            "id": "926"
        },
        {
            "name": "ABLIC",
            "id": "215"
        },
        {
            "name": "Acam Messelectronic Gmbh",
            "id": "786"
        },
        {
            "name": "Advanced Monolithic Systems",
            "id": "190"
        },
        {
            "name": "AMS",
            "id": "454"
        },
        {
            "name": "Analog Devices",
            "id": "178"
        },
        {
            "name": "Analog Devices Inc./Maxim Integrated",
            "id": "234"
        },
        {
            "name": "analogysemi",
            "id": "15183"
        },
        {
            "name": "Asahi Kasei Microdevices",
            "id": "285"
        },
        {
            "name": "Avia Semicon (Xiamen)",
            "id": "756"
        },
        {
            "name": "AWINIC(Shanghai Awinic Tech)",
            "id": "11339"
        },
        {
            "name": "BL(Shanghai Belling)",
            "id": "158"
        },
        {
            "name": "Broadcom/AVAGO",
            "id": "205"
        },
        {
            "name": "Broadic",
            "id": "12102"
        },
        {
            "name": "CHIPLON",
            "id": "12061"
        },
        {
            "name": "CHIPSEA",
            "id": "757"
        },
        {
            "name": "Cirrus Logic",
            "id": "198"
        },
        {
            "name": "Corebai Microelectronics",
            "id": "12115"
        },
        {
            "name": "COREX",
            "id": "12217"
        },
        {
            "name": "Cypress Semicon",
            "id": "199"
        },
        {
            "name": "Diodes Incorporated",
            "id": "296"
        },
        {
            "name": "EG Micro",
            "id": "857"
        },
        {
            "name": "ESHINE",
            "id": "15374"
        },
        {
            "name": "Everest-semi(Everest Semiconductor)",
            "id": "11902"
        },
        {
            "name": "FocalTech Systems",
            "id": "799"
        },
        {
            "name": "Guestgood",
            "id": "12543"
        },
        {
            "name": "Hangzhou Ruimeng Tech",
            "id": "1183"
        },
        {
            "name": "Hangzhou SDIC Microelectronics",
            "id": "12036"
        },
        {
            "name": "HANSCHIP semiconductor",
            "id": "13175"
        },
        {
            "name": "HARRIS",
            "id": "206"
        },
        {
            "name": "HGSEMI",
            "id": "11543"
        },
        {
            "name": "Hiliwei Tech",
            "id": "958"
        },
        {
            "name": "HTCSEMI",
            "id": "12706"
        },
        {
            "name": "Infineon Technologies",
            "id": "330"
        },
        {
            "name": "ISSI(Integrated Silicon Solution)",
            "id": "230"
        },
        {
            "name": "JRC",
            "id": "231"
        },
        {
            "name": "JSMSEMI",
            "id": "12313"
        },
        {
            "name": "Keysemi",
            "id": "12054"
        },
        {
            "name": "LETO",
            "id": "15256"
        },
        {
            "name": "MaxLinear",
            "id": "350"
        },
        {
            "name": "Microchip Tech",
            "id": "169"
        },
        {
            "name": "Nuvoton Tech",
            "id": "147"
        },
        {
            "name": "NXP Semicon",
            "id": "89"
        },
        {
            "name": "onsemi",
            "id": "94"
        },
        {
            "name": "PTC(Princeton Tech)",
            "id": "243"
        },
        {
            "name": "Recom Power",
            "id": "875"
        },
        {
            "name": "RENERGY",
            "id": "906"
        },
        {
            "name": "RENESAS",
            "id": "134"
        },
        {
            "name": "Richtek Tech",
            "id": "244"
        },
        {
            "name": "ROHM Semicon",
            "id": "170"
        },
        {
            "name": "SEMTECH",
            "id": "351"
        },
        {
            "name": "SGMICRO",
            "id": "280"
        },
        {
            "name": "Shanghai Siproin Microelectronics",
            "id": "11694"
        },
        {
            "name": "Shenzhen Better Life Elec S&T",
            "id": "1027"
        },
        {
            "name": "Shenzhen Nsiway Tech",
            "id": "11502"
        },
        {
            "name": "SILICON LABS",
            "id": "197"
        },
        {
            "name": "Slkor(SLKORMICRO Elec.)",
            "id": "11608"
        },
        {
            "name": "Solomon Systech",
            "id": "431"
        },
        {
            "name": "STMicroelectronics",
            "id": "74"
        },
        {
            "name": "Sungine",
            "id": "15250"
        },
        {
            "name": "SX-globalchip",
            "id": "15540"
        },
        {
            "name": "TECH PUBLIC",
            "id": "12241"
        },
        {
            "name": "Texas Instruments",
            "id": "100"
        },
        {
            "name": "TM(Shenzhen Titan Micro Elec)",
            "id": "380"
        },
        {
            "name": "Tokmas",
            "id": "12489"
        },
        {
            "name": "Tontek Design Tech",
            "id": "914"
        },
        {
            "name": "uPI Semiconductor",
            "id": "1060"
        },
        {
            "name": "UTC(Unisonic Tech)",
            "id": "207"
        },
        {
            "name": "Vcare",
            "id": "15380"
        },
        {
            "name": "XINLUDA",
            "id": "12211"
        },
        {
            "name": "Yunchip",
            "id": "12000"
        },
        {
            "name": "ZLG Zhiyuan Elec",
            "id": "475"
        },
        {
            "name": "ZYMICRO",
            "id": "13163"
        },
        {
            "name": "Zynalog",
            "id": "15499"
        }
    ],
    "Package": [
        {
            "name": "-"
        },
        {
            "name": "BGA-100"
        },
        {
            "name": "BGA-108"
        },
        {
            "name": "BGA-12"
        },
        {
            "name": "BGA-135"
        },
        {
            "name": "BGA-140"
        },
        {
            "name": "BGA-144"
        },
        {
            "name": "BGA-15"
        },
        {
            "name": "BGA-16"
        },
        {
            "name": "BGA-160"
        },
        {
            "name": "BGA-164"
        },
        {
            "name": "BGA-169"
        },
        {
            "name": "BGA-170"
        },
        {
            "name": "BGA-192"
        },
        {
            "name": "BGA-196"
        },
        {
            "name": "BGA-20"
        },
        {
            "name": "BGA-221"
        },
        {
            "name": "BGA-256"
        },
        {
            "name": "BGA-28"
        },
        {
            "name": "BGA-289"
        },
        {
            "name": "BGA-292"
        },
        {
            "name": "BGA-30"
        },
        {
            "name": "BGA-36"
        },
        {
            "name": "BGA-48(4x4)"
        },
        {
            "name": "BGA-64"
        },
        {
            "name": "BGA-74"
        },
        {
            "name": "BGA-80"
        },
        {
            "name": "BGA-84"
        },
        {
            "name": "CDIP-20-SB"
        },
        {
            "name": "CDIP-24"
        },
        {
            "name": "CDIP-28"
        },
        {
            "name": "CERDIP-14"
        },
        {
            "name": "CLCC-20(8.9x8.9)"
        },
        {
            "name": "COF-320"
        },
        {
            "name": "CSBGA-16(4x4)"
        },
        {
            "name": "CSBGA-160"
        },
        {
            "name": "CSPBGA-105(8x8)"
        },
        {
            "name": "CSPBGA-124(15x15)"
        },
        {
            "name": "CSPBGA-160(12x12)"
        },
        {
            "name": "CSPBGA-49(7x7)"
        },
        {
            "name": "DFN-10"
        },
        {
            "name": "DFN-10(2.5x3)"
        },
        {
            "name": "DFN-10(2x3)"
        },
        {
            "name": "DFN-10(3x3)"
        },
        {
            "name": "DFN-10(3x4)"
        },
        {
            "name": "DFN-10-EP"
        },
        {
            "name": "DFN-10-EP(3x3)"
        },
        {
            "name": "DFN-12(2x3)"
        },
        {
            "name": "DFN-12(3x3)"
        },
        {
            "name": "DFN-12(3x4)"
        },
        {
            "name": "DFN-12(4x4)"
        },
        {
            "name": "DFN-12-EP(3x3)"
        },
        {
            "name": "DFN-14(3x3)"
        },
        {
            "name": "DFN-14(3x4)"
        },
        {
            "name": "DFN-14(4x4)"
        },
        {
            "name": "DFN-16(3x4)"
        },
        {
            "name": "DFN-16(4x5)"
        },
        {
            "name": "DFN-24(4x7)"
        },
        {
            "name": "DFN-6"
        },
        {
            "name": "DFN-6(2.2x2.5)"
        },
        {
            "name": "DFN-6(2x2)"
        },
        {
            "name": "DFN-6-EP(3x3)"
        },
        {
            "name": "DFN-8"
        },
        {
            "name": "DFN-8(2x2)"
        },
        {
            "name": "DFN-8(2x3)"
        },
        {
            "name": "DFN-8(3x3)"
        },
        {
            "name": "DFN-8-EP(2.2x2.2)"
        },
        {
            "name": "DFN-8-EP(2x3)"
        },
        {
            "name": "DFN-8-EP(3x3)"
        },
        {
            "name": "DIP-12"
        },
        {
            "name": "DIP-14"
        },
        {
            "name": "DIP-16"
        },
        {
            "name": "DIP-18"
        },
        {
            "name": "DIP-20"
        },
        {
            "name": "DIP-24"
        },
        {
            "name": "DIP-28"
        },
        {
            "name": "DIP-32"
        },
        {
            "name": "DIP-40"
        },
        {
            "name": "DIP-40L"
        },
        {
            "name": "DIP-8"
        },
        {
            "name": "DIP-8-300mil"
        },
        {
            "name": "DMP-8"
        },
        {
            "name": "DSBGA-16(2.2x2.2)"
        },
        {
            "name": "DSBGA-24(2.5x3.5)"
        },
        {
            "name": "DSBGA-24(2.6x2.6)"
        },
        {
            "name": "DSBGA-30(2.1x2.6)"
        },
        {
            "name": "DSBGA-36(2.6x2.6)"
        },
        {
            "name": "DSBGA-36(3.6x3.7)"
        },
        {
            "name": "eMSOP10"
        },
        {
            "name": "ESOP-10"
        },
        {
            "name": "ESOP-10-EP-150mil"
        },
        {
            "name": "ESOP-8"
        },
        {
            "name": "ESSOP-10"
        },
        {
            "name": "ESSOP-10-150mil"
        },
        {
            "name": "FCBGA-144"
        },
        {
            "name": "FCBGA-144(10x10)"
        },
        {
            "name": "FCBGA-400"
        },
        {
            "name": "FlipChip-12(1.1x1.4)"
        },
        {
            "name": "GQFN-70(6x10)"
        },
        {
            "name": "HLQFP-128(20x20)"
        },
        {
            "name": "HTQFP-100(14x14)"
        },
        {
            "name": "HTQFP-48(7x7)"
        },
        {
            "name": "HTQFP-64"
        },
        {
            "name": "HTQFP-64(10x10)"
        },
        {
            "name": "HTQFP-80(12x12)"
        },
        {
            "name": "HTSSOP-16-EP"
        },
        {
            "name": "HTSSOP-24"
        },
        {
            "name": "HTSSOP-24-EP"
        },
        {
            "name": "HTSSOP-28"
        },
        {
            "name": "HTSSOP-28-EP-4.5mm"
        },
        {
            "name": "HTSSOP-32-6.1mm"
        },
        {
            "name": "HTSSOP-38"
        },
        {
            "name": "HTSSOP-48"
        },
        {
            "name": "HTSSOP-48-EP-6.1mm"
        },
        {
            "name": "HTSSOP-64"
        },
        {
            "name": "HVQFN-24-EP(4x4)"
        },
        {
            "name": "HVQFN-32-EP(5x5)"
        },
        {
            "name": "HVSON-14-EP(3x4.5)"
        },
        {
            "name": "HWSON-8-EP(2x3)"
        },
        {
            "name": "LCC-20(9x9)"
        },
        {
            "name": "LCC-28(11.4x11.4)"
        },
        {
            "name": "LCC-44(16.5x16.5)"
        },
        {
            "name": "LCC-44(16.6x16.6)"
        },
        {
            "name": "LCCC-20(8.9x8.9)"
        },
        {
            "name": "LFBGA-323"
        },
        {
            "name": "LFCSP-10"
        },
        {
            "name": "LFCSP-10-WD"
        },
        {
            "name": "LFCSP-10-WD(3x3)"
        },
        {
            "name": "LFCSP-16"
        },
        {
            "name": "LFCSP-16(3x3)"
        },
        {
            "name": "LFCSP-16-EP(3x3)"
        },
        {
            "name": "LFCSP-16-WQ"
        },
        {
            "name": "LFCSP-16-WQ(3x3)"
        },
        {
            "name": "LFCSP-16-WQ(4x4)"
        },
        {
            "name": "LFCSP-20"
        },
        {
            "name": "LFCSP-20(4x4)"
        },
        {
            "name": "LFCSP-20-WQ"
        },
        {
            "name": "LFCSP-20-WQ(4x4)"
        },
        {
            "name": "LFCSP-24"
        },
        {
            "name": "LFCSP-28"
        },
        {
            "name": "LFCSP-28(4x4)"
        },
        {
            "name": "LFCSP-28(5x5)"
        },
        {
            "name": "LFCSP-28-WQ"
        },
        {
            "name": "LFCSP-28-WQ(4x4)"
        },
        {
            "name": "LFCSP-32"
        },
        {
            "name": "LFCSP-32-EP"
        },
        {
            "name": "LFCSP-32-VQ"
        },
        {
            "name": "LFCSP-32-WQ"
        },
        {
            "name": "LFCSP-32-WQ(5x5)"
        },
        {
            "name": "LFCSP-36"
        },
        {
            "name": "LFCSP-40"
        },
        {
            "name": "LFCSP-40(6x6)"
        },
        {
            "name": "LFCSP-40-VQ"
        },
        {
            "name": "LFCSP-40-VQ(6x6)"
        },
        {
            "name": "LFCSP-40-WQ"
        },
        {
            "name": "LFCSP-40-WQ(6x6)"
        },
        {
            "name": "LFCSP-48"
        },
        {
            "name": "LFCSP-48-VQ"
        },
        {
            "name": "LFCSP-48-WQ"
        },
        {
            "name": "LFCSP-56"
        },
        {
            "name": "LFCSP-56-VQ"
        },
        {
            "name": "LFCSP-56-WQ"
        },
        {
            "name": "LFCSP-6"
        },
        {
            "name": "LFCSP-64"
        },
        {
            "name": "LFCSP-64-EP"
        },
        {
            "name": "LFCSP-64-VQ"
        },
        {
            "name": "LFCSP-64-VQ(9x9)"
        },
        {
            "name": "LFCSP-64-WQ(9x9)"
        },
        {
            "name": "LFCSP-72"
        },
        {
            "name": "LFCSP-72-EP"
        },
        {
            "name": "LFCSP-72-VQ"
        },
        {
            "name": "LFCSP-8"
        },
        {
            "name": "LFCSP-8-UD"
        },
        {
            "name": "LFCSP-8-UD(2x2)"
        },
        {
            "name": "LFCSP-84"
        },
        {
            "name": "LFCSP-88"
        },
        {
            "name": "LFCSP-88-VQ"
        },
        {
            "name": "LFSCP-48-VQ"
        },
        {
            "name": "LGA-12(2.8x5)"
        },
        {
            "name": "LGA-20"
        },
        {
            "name": "LGA-20(5x8)"
        },
        {
            "name": "LGA-24"
        },
        {
            "name": "LPCSP-32"
        },
        {
            "name": "LQFP-100(14x14)"
        },
        {
            "name": "LQFP-100-EP(14x14)"
        },
        {
            "name": "LQFP-128(14x14)"
        },
        {
            "name": "LQFP-128(14x20)"
        },
        {
            "name": "LQFP-144(20x20)"
        },
        {
            "name": "LQFP-32(7x7)"
        },
        {
            "name": "LQFP-44(10x10)"
        },
        {
            "name": "LQFP-48"
        },
        {
            "name": "LQFP-48(7x7)"
        },
        {
            "name": "LQFP-52(10x10)"
        },
        {
            "name": "LQFP-64"
        },
        {
            "name": "LQFP-64(10x10)"
        },
        {
            "name": "LQFP-64(7x7)"
        },
        {
            "name": "LQFP-64-EP(10x10)"
        },
        {
            "name": "LQFP-64L"
        },
        {
            "name": "LQFP-80(12x12)"
        },
        {
            "name": "LQFP-80(14x14)"
        },
        {
            "name": "Micro-10"
        },
        {
            "name": "MQFN-20"
        },
        {
            "name": "MQFN-20(5x5)"
        },
        {
            "name": "MQFP-128(14x20)"
        },
        {
            "name": "MQFP-44(10x10)"
        },
        {
            "name": "MSOP-10"
        },
        {
            "name": "MSOP-10-EP"
        },
        {
            "name": "MSOP-12"
        },
        {
            "name": "MSOP-16"
        },
        {
            "name": "MSOP-16-EP"
        },
        {
            "name": "MSOP-8"
        },
        {
            "name": "MSOP-8(3x3)"
        },
        {
            "name": "MSOP10L"
        },
        {
            "name": "NFBGA-100(9x9)"
        },
        {
            "name": "NFBGA-144(10x10)"
        },
        {
            "name": "NFBGA-192(9x9)"
        },
        {
            "name": "NFBGA-196(12x12)"
        },
        {
            "name": "NFBGA-196(15x15)"
        },
        {
            "name": "NFBGA-198(9x15)"
        },
        {
            "name": "NFBGA-216(10x15)"
        },
        {
            "name": "NFBGA-25"
        },
        {
            "name": "NFBGA-25(4x4)"
        },
        {
            "name": "NFBGA-289(15x15)"
        },
        {
            "name": "NFBGA-64(8x8)"
        },
        {
            "name": "PDIP-14"
        },
        {
            "name": "PDIP-14-300mil"
        },
        {
            "name": "PDIP-16"
        },
        {
            "name": "PDIP-18"
        },
        {
            "name": "PDIP-20"
        }
        ]
    }
    seletedParams = []
    errorMessage = ""
    currentCatalogId = null
    childCatalogs = []
    parentName = null
    catalogName = ""
    parentId = null
    catalogOpen = false

    name=''
    surname=''
    middlename=''
    phone=''
    email=''
    address=''
    deliveryType=''
    deliveryPrice=''
    paymentType = ''

    totalPage = 1
    currPage = 1

    // const [name, setName] = useState('')
    // const [surname, setSurname] = useState('')
    // const [middlename, setMiddlename] = useState('')
    // const [phone, setPhone] = useState('')
    // const [email, setEmail] = useState('')

    constructor(favStore) {
        this.favStore = favStore
        makeAutoObservable(this);
    }

    setFavStore(fav){
        this.favStore = fav
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    setErrorMessage(message) {
        this.errorMessage = message;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    setName(name) {
        this.name = name;
    }

    setTotalPage(name) {
        this.totalPage = name;
    }

    setCurrPage(name) {
        this.currPage = name;
    }

    setDeliveryType(name) {
        this.deliveryType = name;
    }

    setDeliveryPrice(name) {
        this.deliveryPrice = name;
    }

    setPaymentType(name) {
        this.paymentType = name;
    }

    setSurname(name) {
        this.surname = name;
    }
    setMiddlename(name) {
        this.middlename = name;
    }
    setEmail(name) {
        this.email = name;
    }
    setPhone(name) {
        this.phone = name;
    }

    setAddress(name) {
        this.address = name;
    }

    setParsed(bool) {
        this.isParsed = bool;
    }

    setDevices(devices){
        this.devices = devices?.data?.result?.dataList
    }

    setAppendDevices(devices){
        console.log([...devices?.data?.result?.dataList, ...this.devices])
        this.devices = [...devices?.data?.result?.dataList, ...this.devices]
    }

    setSearchedDevices(devices){
        this.devices = devices?.data?.result?.productSearchResultVO?.productList
    }

    setParams(params){
        this.params = params
    }

    setSelectedParam(seletedParams){
        this.seletedParams = seletedParams
        
    }

    setCurrentCatalogId(catalogId){
        this.currentCatalogId = catalogId
    }

    setSearchData(data){
        this.currentCatalogId = data.catalogId
        this.parentId = data.parentId
        this.parentName = data.parentName
        this.catalogName = data.catalogNameEn
        this.childCatalogs = data.childCatelogs

    }

    setCatalogOpen(bool) {
        this.catalogOpen = bool;
    }

    setCurrency(currency) {
        this.currency = currency;
    }

    sliceSelectedParam(param){
        const changed = []
        let flag = false
        this.seletedParams.forEach(element => {
            if (element.id != param.id && element.name != param.name){
                changed.push({id: element.id, name: element.name })
            }
            else{ 
                flag = true
            }
        });
        if (flag == false) changed.push(param)


        this.seletedParams = changed
    }

    setTariffs(tariff_codes){
        var new_tariffs = {}
        var tmp_tariffs = tariff_codes.filter(element => element.tariff_code === 139 || element.tariff_code === 138 )
        tmp_tariffs.forEach(element => {
            new_tariffs[element.tariff_code] = element
        })

        this.tariffs = new_tariffs
    }

    isSelectedparam(param){
        let flag = false
        this.seletedParams.forEach(element => {
            if (element.id == param.id && element.name == param.name){
                flag = true
            }
        });
        if (flag == true) {
            return true
        }
        else{
            return false
        }
    }

    nextPage() {
        this.page = this.page + 1;
    }

    previousPage() {
        if (this.page > 1){
            this.page = this.page - 1;
            return 'yes'
        }
        
            return 'back'
    }

    async switchPage() {
        try {
            this.nextPage()
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            this.favStore.getFavorites()
            this.setErrorMessage("")
        } catch (e) {
            this.setErrorMessage(e.response?.data?.message)
            console.log(e.response?.data?.message);
        }
    }

    async getData(email, password) {
        try {
            const response = await AuthService.getData();
            this.setAuth(true);
            this.setUser(response.data.user);
            this.favStore.getFavorites()
            this.setErrorMessage("")
        } catch (e) {
            this.setErrorMessage(e.response?.data?.message)
            console.log(e.response?.data?.message);
        }
    }

    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            this.setErrorMessage("")
        } catch (e) {
            this.setErrorMessage(e.response?.data?.message)
            console.log(e.response?.data?.message);
        }
    }

    async order() {
        try {
            const response = await AuthService.order();
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            localStorage.removeItem('token');
            this.setAuth(false);
            const response = await AuthService.logout();
            this.setUser({});
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async parse(catalogId, seletedParams = null){
        try{
            const response = await ProxyService.parse(catalogId, seletedParams);
            this.setDevices(response)
        } catch(e){
            console.log(e);
            console.log(e.response?.data?.message);

        }finally{
            this.setParsed(true)
        }
    }

    async parseByPage(catalogId, seletedParams = null, page){
        try{
            const response = await ProxyService.parse_by_page(catalogId, seletedParams, page);
            this.setCurrPage(response?.data?.result?.currPage)
            this.setTotalPage(response?.data?.result?.totalPage)
            if (response?.data?.result?.currPage != 0){
                this.setAppendDevices(response)
            } else{
                this.setDevices(response)
            }
            return true
        } catch(e){
            console.log(e);
            console.log(e.response?.data?.message);

        }finally{
            this.setParsed(true)
        }
    }

    async parse_params(catalogId, seletedParams = null){
        try{
            const response = await ProxyService.parse_params(catalogId, seletedParams);
            console.log(response?.data?.result)
            this.setParams(response?.data?.result)
        } catch(e){
            console.log(e);

        }
    }

    async search(keyword){
        this.setParsed(false)
        try{
            const response = await ProxyService.search(keyword);
            this.setSearchedDevices(response)
            return response
            
        } catch(e){
            console.log(e);
            console.log(e.response?.data?.message);

        }finally{
            this.setParsed(true)
        }
    }

    async onLevel(keyword){
        try{
            const response = await ProxyService.onLevel(keyword);
            this.setSearchData(response.data.result)
            return response
            
        } catch(e){
            console.log(e);
            console.log(e.response?.data?.message);

        }
    }

    async getCurrency(){
        try{
            const response = await CurrencyService.getCurrency();
            this.setCurrency(response.data.Valute['USD'].Value)
        } catch(e){
            console.log(e);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get(`https://osterrig-electronics.vercel.app/api/user/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e)
            this.logout()
        } finally {
            this.setLoading(false);
        }
    }

    async getTariffs(address) {
        try {
            const resp = await DeliveryService.getTariff(address)
            this.setTariffs(resp.data.tariff_codes)
        } catch (e) {
            console.log(e)
        }
    }
}