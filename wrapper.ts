import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

// Backend API wrapper for Pivot
export class Wrapper {

    proxyurl = "https://cors-anywhere.herokuapp.com/";
    URL_BASE = 'https://yqh898xngh.execute-api.us-east-1.amazonaws.com/api/';
    URL_REGISTER = 'register/';
    URL_LOGIN = 'login/';
    URL_HELLO = 'hello/';
    INSTANCE: any;

    constructor(){
        this.INSTANCE = axios.create({
            baseURL: this.proxyurl + this.URL_BASE,
            timeout: 10000,
            headers: {}
        });
    }

    register(username, password){
        // Front end will verify that password is confirmed validated
        let data = {
            username: username,
            password: password
        }
        returnthis.INSTANCE.post(this.URL_REGISTER, data)
            .then(function(response){
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            });
    }

    login(username, password){
        let data = {
            username: username,
            password: password
        }
        this.INSTANCE.post(this.URL_LOGIN, data)
            .then(function(response){
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            })
            .finally(function(response){
                return response;
            })
    }
}
