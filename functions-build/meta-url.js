/* eslint-disable */
const meta = require('page-metadata-parser');
const domino = require('domino')
const axios = require('axios')

exports.handler = async function(event, context) {
    const url = event.queryStringParameters.url
    return axios.get(url)
    .then((response) => {
        const html = response.data
        console.log(typeof html)
        const window = domino.createWindow({});
        console.log(window)
        // const meta = getMetadata(window.document, url);
        return {
            statusCode: 200,
            body: JSON.stringify({

            })
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
