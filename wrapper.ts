import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

// Backend API wrapper for Pivot
export class Wrapper {

	proxyurl = "https://cors-anywhere.herokuapp.com/";
	URL_BASE = 'https://yqh898xngh.execute-api.us-east-1.amazonaws.com/api/';
	URL_REGISTER = 'register/';
	URL_LOGIN = 'login/';
	URL_HELLO = 'hello/';
	INSTANCE: any;

	constructor() {
		this.INSTANCE = axios.create({
			baseURL: this.proxyurl + this.URL_BASE,
			timeout: 10000,
			headers: {}
		});
	}

    passthrough(response, isError=false){
        return {
            response: response,
            isError: isError
        };
    }

	async register(username, password) {
		// Front end will verify that password is confirmed validated
		let data = {
			username: username,
			password: password
		}
		return this.INSTANCE.post(this.URL_REGISTER, data)
			.then(function(response) {
				return {
                    response: response,
                    isError: false
                };
			})
			.catch(function(error) {
				if (error.response) {
					// The request was made and the server responded with a status code that falls out of the range of 2xx
                    console.log('Error', error);
					return {
                        response: error,
                        isError: true
                    };
				} else if (error.request) {
					// The request was made but no response was received
                    console.log('Error', error);
                    return {
                        response: error,
                        isError: true
                    };
				} else {
					// Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    return {
                        response: error,
                        isError: true
                    };
				}
				console.log(error.config);
			});
	}

	async login(username, password) {
		let data = {
			username: username,
			password: password
		}
		return this.INSTANCE.post(this.URL_LOGIN, data)
			.then(function(response) {
				return {
                    response: response,
                    isError: false
                };
			})
			.catch(function(error) {
				if (error.response) {
					// The request was made and the server responded with a status code that falls out of the range of 2xx
                    console.log('Error', error);
					return {
                        response: error,
                        isError: true
                    };
				} else if (error.request) {
					// The request was made but no response was received
                    console.log('Error', error);
                    return {
                        response: error,
                        isError: true
                    };
				} else {
					// Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    return {
                        response: error,
                        isError: true
                    };
				}
				console.log(error.config);
			});
	}
}
