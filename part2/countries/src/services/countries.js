import axios from "axios";
const baseUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies';

const getAll = () => {
    axios
    .get(baseUrl)
    .then(response=>response.data)    
}

export default { getAll }
