import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

// Backend API wrapper for Pivot
export class Wrapper {

    URL_BASE = 'https://yqh898xngh.execute-api.us-east-1.amazonaws.com/api/';
    URL_REGISTER = 'register/';
    URL_LOGIN = 'login/';
    URL_HELLO = 'hello/';
    INSTANCE: any;

    constructor(){
        this.INSTANCE = axios.create({
            baseURL: this.URL_BASE,
            timeout: 1000,
            headers: {}
        });
    }

    register(username, password){
        // Front end will verify that password is confirmed validated
        this.INSTANCE.headers['username'] = username;
        this.INSTANCE.headers['password'] = password;
        this.INSTANCE.post(this.URL_REGISTER)
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

    login(username, password){
        this.INSTANCE.headers['username'] = username;
        this.INSTANCE.headers['password'] = password;
        this.INSTANCE.post(this.URL_LOGIN)
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
