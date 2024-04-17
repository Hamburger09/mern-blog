import axios from 'axios'

const API = axios.create({
    baseURL: "http://localhost:3000/api/"
})

// Add a response interceptor to handle errors
API.interceptors.response.use(
    response => response,
    error => {
      if (error.response) {
        // If the error has a response object, return response.data
        return Promise.reject(error.response.data);
      } else {
        // If the error doesn't have a response object, return the error itself
        return Promise.reject(error);
      }
    }
  );

export default API