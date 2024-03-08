import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_ELICE_REST_API}`,
});

api.interceptors.request.use(
  async (config) => {
    if (config.headers) {
      config.headers['Access-Control-Allow-Origin'] = '*';
      config.headers['Access-Control-Allow-Methods'] =
        'GET, POST, PUT, DELETE, OPTIONS';
      config.headers['Access-Control-Allow-Headers'] =
        'Content-Type, Authorization';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
