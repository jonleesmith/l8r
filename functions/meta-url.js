/* eslint-disable */
const { getMetadata } = require('page-metadata-parser');
const domino = require('domino')
const axios = require('axios')

exports.handler = async function(event, context) {
    const url = event.queryStringParameters.url
    return axios.get(url)
    .then(async (response) => {
        const html = await response.text();
        const doc = domino.createWindow(html).document;
        const meta = getMetadata(doc, url);
        return {
            statusCode: 200,
            body: JSON.stringify(meta)
        }
    })
    .catch((err) => {
        console.log(err)
    })
    .catch(err => ({
        statusCode: 404,
        body: 'No meta found'
    }))
}
