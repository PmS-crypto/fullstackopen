import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response=>response.data) 
}

const create = (personObj) => {
    const request = axios.post(baseUrl, personObj)
    return request.then(response=> response.data)
}

const deletePersonCall = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response=> response.data)
}

const updateNumber = (id, obj) => {
    const request = axios.put(`baseUrl${id}`, obj)
    return request.then(response => response.data)
}

export default {getAll, create, deletePersonCall, updateNumber}