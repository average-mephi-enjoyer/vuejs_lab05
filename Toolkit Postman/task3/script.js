const resultDiv = document.getElementById('result');

resultDiv.innerHTML = 'Sending request to https://json.geoiplookup.io/...';
resultDiv.className = 'result loading';

axios.get('https://json.geoiplookup.io/')
    .then(response => {
        console.log('Got answer:', response);
        resultDiv.className = 'result success';
        const data = response.data;
        resultDiv.innerHTML = `
            <h2>Request succeded</h2>
            <p><strong>Status:</strong> ${response.status} ${response.statusText}</p>
            <p><strong>IP:</strong> ${data.ip}</p>
            <p><strong>Country:</strong> ${data.country_name} (${data.country_code})</p>
            <p><strong>City:</strong> ${data.city}</p>
            <p><strong>ISP:</strong> ${data.isp}</p>
            <hr>
            <p><strong>Full response (JSON):</strong></p>
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `;
    })
    .catch(error => {
        console.error('Ошибка:', error);
        resultDiv.className = 'result error';
        
        let errorMessage = '';
        if (error.response) {
            errorMessage = `Server responded with error: ${error.response.status}`;
        } else if (error.request) {
            errorMessage = 'Failed to get response from server. Possibly a CORS issue.';
        } else {
            errorMessage = `Error setting up request: ${error.message}`;
        }
        
        resultDiv.innerHTML = `
            <h2>Error occurred</h2>
            <p>${errorMessage}</p>
            <p><strong>Details:</strong> ${error.message}</p>
        `;
    });