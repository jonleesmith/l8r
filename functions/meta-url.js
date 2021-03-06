/* eslint-disable */
const meta = require('page-metadata-parser');
const domino = require('domino')
const axios = require('axios')

exports.handler = async function (event, context) {
    
    const url = event.queryStringParameters.url
    return axios.get(url)
        .then((response) => {
            const html = response.data
            const window = domino.createWindow(html);
            const props = meta.getMetadata(window.document, url);
            return {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                },
                statusCode: 200,
                body: JSON.stringify(props)
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
