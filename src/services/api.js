import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/application/',
  headers: { 
    'Content-Type': 'multipart/x-www-form-urlencoded',
  }
})

export default api;