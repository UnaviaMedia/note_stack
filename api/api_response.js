// File:	api/api_response.js
// Purpose:	Provide a standardized ApiResponse object

/**
 * Create an ApiResponse object for standardized responses
 * @param {int}     code    Status code
 * @param {string}  msg     Response message
 * @param {object}  data    Response data
 * @return {object} ApiResponse object
 */
module.exports = function(code, msg, data) {
    return { code, msg, data };
}
