import axios, {InternalAxiosRequestConfig} from 'axios';
import {getBaseUrl} from '../api/index';
import {getToken} from '../utils/util';

const apiInstance = axios.create({
  baseURL: getBaseUrl('devEnviron'),
  timeout: 3000,
});

apiInstance.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig,
  ): Promise<InternalAxiosRequestConfig> => {
    try {
      const token = await getToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      config.headers['content-type'] = 'application/json';
      return config; 
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error: any) => {
    console.log('error', error);
    Promise.reject(error);
  },
);

apiInstance.interceptors.response.use(
  (response: any) => response,
  (error: {
    response: {data: {message: any; error: any}; status: any};
    message: any;
  }) => {
    console.log('ERROR ', error);
    if (error.response) {
      let errorMessage =
        error.response.data.message ||
        error.response.data.error ||
        error.message ||
        'An error occurred';
      switch (error.response.status) {
        case 400:
          errorMessage = 'Bad Request';
          break;
        case 401:
          errorMessage = 'UnAuthorized';
          break;
        case 403:
          errorMessage = 'Forbidden';
          break;
        case 404:
          errorMessage = 'Not Found';
          break;
        case 500:
          errorMessage = 'Internal server error';
          break;
        default:
          errorMessage = 'Currently unable to process your request';
          break;
      }
      return Promise.reject(new Error(errorMessage));
    } else {
      return Promise.reject(new Error('No response from server'));
    }
  },
);
export default apiInstance;
