import axios from 'axios';

const api = axios.create({
  baseURL: 'https://spotifyclone-json-server.herokuapp.com',
});

export default api;
