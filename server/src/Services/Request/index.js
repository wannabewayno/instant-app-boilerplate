const axios = require('axios');

class Request {
    constructor(baseEndPoint) {
        this.baseEndPoint = baseEndPoint;
    }

    parseRes(promise) {
        return promise.then(res => res.data).catch(this.ParseError);
    }

    parseError(error) {
        console.log('\nError!');
        console.log(error.message);
    }

    parseQuery(params) {
        const queryString = Object.entries(params)
        .reduce((params,[param,value],index,allParams) => `${params}${value !== undefined ? `${param}=${value}`: ''}${index === allParams.length - 1 ? '':'&'}`,'?');
        return (queryString.length === 1 ? '' : queryString);
    }

    // Get endpoint is special, we parse the 'body' as a query
    GET(endpoint, body = {}, options) {
        return this.parseRes(axios.get(`${this.baseEndPoint}${endpoint}${this.parseQuery(body)}`, options));
    }

    POST(endpoint, body = {}, options) {
        return this.parseRes(axios.post(this.baseEndPoint + endpoint, body, options));
    }

    DELETE(endpoint, body = {}, options) {
        return this.parseRes(axios.delete(this.baseEndPoint + endpoint, body, options));
    }

    PUT(endpoint, body = {}, options) {
        return this.parseRes(axios.put(this.baseEndPoint + endpoint, body, options));
    }

    PATCH(endpoint, body = {}, options) {
        return this.parseRes(axios.patch(this.baseEndPoint + endpoint, body, options));
    }
}

module.exports = Request;