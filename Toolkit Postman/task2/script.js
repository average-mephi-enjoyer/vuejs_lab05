let resultDiv = document.getElementById('result');

resultDiv.innerHTML = 'Sending request to https://vk.com...';
resultDiv.className = 'result loading';

axios.get('https://vk.com')
    .then(response => {
        console.log('Got:', response);
        resultDiv.className = 'result success';
        resultDiv.innerHTML = `
            <h2>Request Successful</h2>
            <p><strong>Status:</strong> ${response.status} ${response.statusText}</p>
            <p><strong>Response Headers:</strong></p>
            <pre>${JSON.stringify(response.headers, null, 2)}</pre>
            <pre>${response.data.substring(0, 500)}...</pre>
        `;
    })
    .catch(error => {
        console.error('Error:', error);
        resultDiv.className = 'result error';
        
        let errorMessage = '';
        if (error.response) 
            errorMessage = `Server responded with an error: ${error.response.status}`;
        else if (error.request)
            errorMessage = `Failed to receive a response from the server.`;
        else
            errorMessage = `Error occurred while setting up the request: ${error.message}`;
        
        resultDiv.innerHTML = `
            <h2>Error occurred while making the request</h2>
            <p>${errorMessage}</p>
            <p><strong>Details:</strong> ${error.message}</p>
        `;
    });