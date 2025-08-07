// netlify/functions/shortnerurl.js
const apikey = process.env.URL_KEY


export async function handler(event, context) {
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
            },
            body: '',
        };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: {
                Allow: 'POST',
            },
            body: JSON.stringify({ error: 'Method Not Allowed' }),
        };
    }

    const params = new URLSearchParams(event.body);
    const url = params.get('url');

    console.log('url', url);

    if (!url) {
        return {
            statusCode: 400,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ error: 'url is required' }),
        };
    }

    if (!apikey) {
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ error: 'api key is missing' }),
        };
    }

    const inputBody = JSON.stringify({
        url: url,
        expiry: '5m',
    });

    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-api-key': apikey,
    };

    try {
        const response = await fetch('https://api.manyapis.com/v1-get-currency?code=string', {
            method: 'POST',
            headers: headers,
            body: inputBody,
        });

        const data = await response.json();
        console.log(data);

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error('Error:', error);

        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ error: 'Failed to shorten URL' }),
        };
    }
};