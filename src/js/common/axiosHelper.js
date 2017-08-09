var axios = require('axios');

function getData(searchText) {
    return axios.get('localhost:3000/cards', searchText);
}