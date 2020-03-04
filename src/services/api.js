import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/application/api_kabum/',
  headers: { 
    'Content-Type': 'multipart/x-www-form-urlencoded',
  }
})

export default api;