import axios from 'axios';
import { storage } from 'react-stax';

const api = axios.create({
  baseURL: 'http://localhost:3005/api',
  timeout: 10000,
});

if (storage.token) {
  api.defaults.headers.Authorization = `Bearer ${storage.token}`;
}

api.interceptors.request.use((config) => {
  config.intercepted = true;
  return config;
});

api.interceptors.response.use(
  resp => resp,
  (err) => {
    // const { msg } = err.response.data;
    // TODO: also display a notification here
    // if there is err.response.data.msg!
    throw err;
  },
);

export default api;
