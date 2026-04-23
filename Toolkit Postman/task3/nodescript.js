const axios = require('axios');

console.log('Sending request to https://json.geoiplookup.io/ from Node.js...');

axios.get('https://json.geoiplookup.io/')
    .then(response => {
        console.log('Request successful!');
        console.log(`Status: ${response.status} ${response.statusText}`);
        console.log('Headers:', JSON.stringify(response.headers, null, 2));
        console.log('\nReceived data:');
        console.log(JSON.stringify(response.data, null, 2));
    })
    .catch(error => {
        console.error('Error occurred:');
        if (error.response) {
            console.error(`Server responded with error: ${error.response.status}`);
        } else if (error.request) {
            console.error('Request was sent, but no response received.');
        } else {
            console.error('Error setting up request:', error.message);
        }
    });