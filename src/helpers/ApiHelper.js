import SessionHelper from './SessionHelper';
import axios from 'axios';
import { BASE_URL } from '../config';

/**
 * This class layer for API connection
 */
class ApiHelper {
    accessToken = null;
    defaultOption = null;

    constructor() {
        if (SessionHelper.getIsLoggedIn()) {
            this.accessToken = SessionHelper.user.accessToken;
        }
        this.defaultOption = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `bearer ${this.accessToken}`
            },
        }
    }

    /**
     * post request to API
     * @param {string} endpoint is endpoint of the service
     * @param {any} body data which is sent to API
     * @param {number} contentType content type of http request header
     */
    async post(endpoint, body, contentType) {
        const option = this.determineOption(contentType);
        console.log(option);
        try {
            const response = await axios.post(`${BASE_URL}${endpoint}`, body, option);
            console.log(response);
        } catch (e) {

        }
    }

    /**
     * Determine options of the request
     * @param {number} contentType is content type of the http request header
     * content type 2 : 'application/x-www-form-urlencoded'
     */
    determineOption(contentType){
        let option = this.defaultOption;
        if(contentType){
            if(contentType === 2) option = {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `bearer ${this.accessToken}`
                },
            }
        }
        return option;
    }



}

export default new ApiHelper();