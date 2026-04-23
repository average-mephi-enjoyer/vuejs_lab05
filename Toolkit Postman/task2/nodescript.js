let axios = require('axios');

console.log('Sending request to https://vk.com from Node.js...');

axios.get('https://vk.com')
    .then(response => {
        console.log('Request Successful');
        console.log(`Status: ${response.status} ${response.statusText}`);
        console.log('Response Headers:', JSON.stringify(response.headers, null, 2));
    })
    .catch(error => {
        console.error('Error:');
        if (error.response) {
            console.error(`Server responded with an error: ${error.response.status}`);
        } else if (error.request) {
            console.error('Failed to receive a response from the server.');
        } else {
            console.error('Error occurred while setting up the request:', error.message);
        }
    });