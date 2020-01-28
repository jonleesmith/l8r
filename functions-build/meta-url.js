/* eslint-disable */
const { getMetadata } = require('page-metadata-parser');
const domino = require('domino')
const axios = require('axios')

exports.handler = async function(event, context) {
    const url = event.queryStringParameters.url
    return axios.get(url)
    .then(async (response) => {
        const html = response.data
        const doc = domino.createWindow(html).document;
        const meta = getMetadata(doc, url);
        return {
            statusCode: 200,
            body: JSON.stringify(meta)
        }
    })
    .catch((err) => {
        return {
            statusCode: 500,
            body: JSON.stringify(err.message)
        }
    })
    .catch(err => ({
        statusCode: 404,
        body: 'No meta found'
    }))
}
