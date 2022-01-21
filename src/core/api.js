import axios from 'axios';
import store from '../store';
import Config from './config';

const api = axios.create({
  baseURL: Config.apiURL,
});

api.interceptors.request.use(config => {
  const {token} = store.getState().auth;

  config.headers = {
    'x-access-token': token,
  };

  return config;
});

export default api;
