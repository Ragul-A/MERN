/* eslint-disable @typescript-eslint/no-unused-vars */
export const register = (reqbody: Object) => {

    // fetch('http://localhost:3000').then
    fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(reqbody)
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('Request succeeded with JSON response', data);
    })
    .catch(function(error) {
        console.log('Request failed', error);
    });
}