import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.football-data.org/v2/',
  headers: {
    'X-Auth-Token': '600e8254a0cd4029b6aec28527bb55e5'
  }
});

export default api;
