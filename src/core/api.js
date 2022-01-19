import axios from 'axios';
import Config from './config';

const api = axios.create({
  baseURL: Config.apiURL,
  headers: {
    'x-access-token':
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWUwZTMxMGE4NmFmMzcxM2QyOGIyYjgiLCJpYXQiOjE2NDIxMjgxNDgsImV4cCI6MTY0MjczMjk0OH0.JwYGHXXm_J6tYL1RuBcKmr_dMrZzNkQQnAjC9tIwF3A',
  },
});

export default api;
