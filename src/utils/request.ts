import Axios from 'axios';
import {loadToken} from './storage';

const token = loadToken();

const instance = Axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

instance.interceptors.request.use((config: any) => {
  if (token) {
    return {
      ...config,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return config;
});

export default instance;
