'use strict'

class ApiResponse {
    constructor(code, msg, data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
}

module.exports = ApiResponse;