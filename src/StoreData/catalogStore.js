import {makeAutoObservable} from "mobx";
import proxyService from "../services/proxyService";

export default class CatalogStore {
    catalogs = [{
        "catalogId": 601,
        "parentId": 1,
        "parentName": null,
        "catalogName": "ADC/DAC/数据转换",
        "catalogNameEn": "ADC/DAC/Data Conversion",
        "childCatelogs": [
            {
                "catalogId": 11294,
                "parentId": 601,
                "parentName": "ADC/DAC/Data Conversion",
                "catalogName": "V/F和F/V转换芯片",
                "catalogNameEn": "Voltage-to-Frequency / Frequency-to-Voltage Converters",
                "childCatelogs": null,
                "productNum": 86
            },
            {
                "catalogId": 619,
                "parentId": 601,
                "parentName": "ADC/DAC/Data Conversion",
                "catalogName": "电能计量芯片",
                "catalogNameEn": "Energy Metering ICs",
                "childCatelogs": null,
                "productNum": 179
            },
            {
                "catalogId": 11295,
                "parentId": 601,
                "parentName": "ADC/DAC/Data Conversion",
                "catalogName": "ADC/DAC-专用型",
                "catalogNameEn": "ADC/DAC - Specialized",
                "childCatelogs": null,
                "productNum": 1355
            },
            {
                "catalogId": 614,
                "parentId": 601,
                "parentName": "ADC/DAC/Data Conversion",
                "catalogName": "模数转换芯片ADC",
                "catalogNameEn": "Analog To Digital Converters (ADCs)",
                "childCatelogs": null,
                "productNum": 6553
            },
            {
                "catalogId": 11293,
                "parentId": 601,
                "parentName": "ADC/DAC/Data Conversion",
                "catalogName": "RMS-DC转换器",
                "catalogNameEn": "RMS-to-DC Converters",
                "childCatelogs": null,
                "productNum": 68
            },
            {
                "catalogId": 861,
                "parentId": 601,
                "parentName": "ADC/DAC/Data Conversion",
                "catalogName": "直接数字频率合成(DDS)",
                "catalogNameEn": "Direct Digital Synthesis (DDS)",
                "childCatelogs": null,
                "productNum": 87
            },
            {
                "catalogId": 620,
                "parentId": 601,
                "parentName": "ADC/DAC/Data Conversion",
                "catalogName": "数字电位器",
                "catalogNameEn": "Digital Potentiometers",
                "childCatelogs": null,
                "productNum": 2046
            },
            {
                "catalogId": 11038,
                "parentId": 601,
                "parentName": "ADC/DAC/Data Conversion",
                "catalogName": "触摸屏控制器",
                "catalogNameEn": "Touch Screen Controllers",
                "childCatelogs": null,
                "productNum": 186
            },
            {
                "catalogId": 615,
                "parentId": 601,
                "parentName": "ADC/DAC/Data Conversion",
                "catalogName": "数模转换芯片DAC",
                "catalogNameEn": "Digital To Analog Converters (DACs)",
                "childCatelogs": null,
                "productNum": 5274
            },
            {
                "catalogId": 11296,
                "parentId": 601,
                "parentName": "ADC/DAC/Data Conversion",
                "catalogName": "模拟前端(AFE)",
                "catalogNameEn": "Analog Front End (AFEs)",
                "childCatelogs": null,
                "productNum": 339
            }
        ],
        "productNum": 16173
    },
    {
        "catalogId": 385,
        "parentId": 1,
        "parentName": null,
        "catalogName": "音频器件/振动马达",
        "catalogNameEn": "Audio Components/Vibration Motors",
        "childCatelogs": [
            {
                "catalogId": 906,
                "parentId": 385,
                "parentName": "Audio Components/Vibration Motors",
                "catalogName": "振动马达",
                "catalogNameEn": "Vibration Motor",
                "childCatelogs": null,
                "productNum": 57
            },
            {
                "catalogId": 11250,
                "parentId": 385,
                "parentName": "Audio Components/Vibration Motors",
                "catalogName": "MEMS麦克风",
                "catalogNameEn": "MEMS Microphones",
                "childCatelogs": null,
                "productNum": 150
            },
            {
                "catalogId": 538,
                "parentId": 385,
                "parentName": "Audio Components/Vibration Motors",
                "catalogName": "扬声器/喇叭",
                "catalogNameEn": "Speakers",
                "childCatelogs": null,
                "productNum": 1851
            },
            {
                "catalogId": 539,
                "parentId": 385,
                "parentName": "Audio Components/Vibration Motors",
                "catalogName": "咪头/麦克风",
                "catalogNameEn": "Microphones",
                "childCatelogs": null,
                "productNum": 1282
            },
            {
                "catalogId": 11251,
                "parentId": 385,
                "parentName": "Audio Components/Vibration Motors",
                "catalogName": "蜂鸣片",
                "catalogNameEn": "Piezo Buzzers",
                "childCatelogs": null,
                "productNum": 124
            },
            {
                "catalogId": 386,
                "parentId": 385,
                "parentName": "Audio Components/Vibration Motors",
                "catalogName": "蜂鸣器",
                "catalogNameEn": "Buzzers",
                "childCatelogs": null,
                "productNum": 1448
            }
        ],
        "productNum": 4912
    },
    {
        "catalogId": 10991,
        "parentId": 1,
        "parentName": null,
        "catalogName": "磁珠/滤波器/EMI优化",
        "catalogNameEn": "Bead/Filter/EMI Optimization",
        "childCatelogs": [
            {
                "catalogId": 11247,
                "parentId": 10991,
                "parentName": "Bead/Filter/EMI Optimization",
                "catalogName": "晶体滤波器",
                "catalogNameEn": "Crystal Filters",
                "childCatelogs": null,
                "productNum": 22
            },
            {
                "catalogId": 527,
                "parentId": 10991,
                "parentName": "Bead/Filter/EMI Optimization",
                "catalogName": "磁珠",
                "catalogNameEn": "Ferrite Beads",
                "childCatelogs": null,
                "productNum": 5719
            },
            {
                "catalogId": 11057,
                "parentId": 10991,
                "parentName": "Bead/Filter/EMI Optimization",
                "catalogName": "EMI滤波器(RC,LC网络)",
                "catalogNameEn": "EMI Filters (LC, RC Networks)",
                "childCatelogs": null,
                "productNum": 234
            },
            {
                "catalogId": 10997,
                "parentId": 10991,
                "parentName": "Bead/Filter/EMI Optimization",
                "catalogName": "馈通电容滤波器",
                "catalogNameEn": "Filters - Feed Through Capacitors",
                "childCatelogs": null,
                "productNum": 1545
            },
            {
                "catalogId": 11060,
                "parentId": 10991,
                "parentName": "Bead/Filter/EMI Optimization",
                "catalogName": "EMC滤波器",
                "catalogNameEn": "EMC Filters",
                "childCatelogs": null,
                "productNum": 31
            },
            {
                "catalogId": 11058,
                "parentId": 10991,
                "parentName": "Bead/Filter/EMI Optimization",
                "catalogName": "钳位滤波器",
                "catalogNameEn": "Clamp Filters (Ferrite Core with Case)",
                "childCatelogs": null,
                "productNum": 79
            },
            {
                "catalogId": 11059,
                "parentId": 10991,
                "parentName": "Bead/Filter/EMI Optimization",
                "catalogName": "有源滤波器",
                "catalogNameEn": "Active Filters",
                "childCatelogs": null,
                "productNum": 221
            },
            {
                "catalogId": 11249,
                "parentId": 10991,
                "parentName": "Bead/Filter/EMI Optimization",
                "catalogName": "噪音抑制/磁性片",
                "catalogNameEn": "Noise Suppressors",
                "childCatelogs": null,
                "productNum": 268
            },
            {
                "catalogId": 640,
                "parentId": 10991,
                "parentName": "Bead/Filter/EMI Optimization",
                "catalogName": "共模滤波器",
                "catalogNameEn": "Common Mode Filters",
                "childCatelogs": null,
                "productNum": 4072
            },
            {
                "catalogId": 11248,
                "parentId": 10991,
                "parentName": "Bead/Filter/EMI Optimization",
                "catalogName": "开关电容滤波器",
                "catalogNameEn": "Switched Capacitor Filters",
                "childCatelogs": null,
                "productNum": 192
            },
            {
                "catalogId": 10994,
                "parentId": 10991,
                "parentName": "Bead/Filter/EMI Optimization",
                "catalogName": "陶瓷滤波器",
                "catalogNameEn": "Ceramic Filters",
                "childCatelogs": null,
                "productNum": 729
            }
        ],
        "productNum": 13112
    }]
    catalogOpen = false

    activeCatalog = 601

    constructor() {
        makeAutoObservable(this);
    }

    setCatalogOpen(bool) {
        this.catalogOpen = bool;
    }


    setActiveCatalog(activeCatalog){
        this.activeCatalog = activeCatalog
    }

    setCatalogs(catalogs){
        this.catalogs = catalogs.slice(0,  13) //Почемуто после 14 элемента крашится все нахер хз почему ебать
    }

    async getCatalogs() {
        try {
            const devices = await proxyService.parseCatalogs()
            this.setCatalogs(devices.data.result)
        } catch (e) {
            console.log(e);
        }
    }

}