import {makeAutoObservable} from "mobx";
import AuthService from "../services/authService";
import ProxyService from "../services/proxyService";
import axios from 'axios';

//import {API_URL} from "../http";

export default class Store {
    user = {}
    isAuth = false;
    isLoading = false;
    isParsed = false;
    devices = [{productId: 1},{productId: 2}]

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    setParsed(bool) {
        this.isParsed = bool;
    }

    setDevices(devices){
        this.devices = devices?.data?.result?.dataList
    }

    setSearchedDevices(devices){
        this.devices = devices?.data?.result?.productSearchResultVO?.productList
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            //console.log(process.env.SERVER_API_URL)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
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
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async parse(catalogId){
        try{
            const response = await ProxyService.parse(catalogId);
            console.log(response?.data?.result?.dataList)
            this.setDevices(response)
        } catch(e){
            console.log(e);
            console.log(e.response?.data?.message);

        }finally{
            this.setParsed(true)
        }
    }

    async search(keyword){
        try{
            const response = await ProxyService.search(keyword);
            this.setSearchedDevices(response)
            console.log(response?.data?.result?.productSearchResultVO?.productList)
            console.log(response?.data?.result?.productSearchResultVO?.productList)
        } catch(e){
            console.log(e);
            console.log(e.response?.data?.message);

        }finally{
            this.setParsed(true)
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5000/api/user/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e)
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
}