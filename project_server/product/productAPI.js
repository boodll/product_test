const axios = require('axios');

axios.get('https://www.nl.go.kr/NL/search/openApi')
    .then(response => {
        if (response.status === 200) {
            console.log('Success!', response.data);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });


