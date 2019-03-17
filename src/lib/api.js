/*
    Author : Anova Fawzi (anovafawzi@gmail.com)
    Library : Api extended from Axios
    Description : Will add bearer if user is logged in
*/
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const VERSION_URL = process.env.REACT_APP_API_URL_VER;
// NOTE: user is the object for storing the user data after logged-in, change as necessary
// const secured = JSON.parse(localStorage.getItem('user'));
export const BASE_URL = API_URL + VERSION_URL;

// NOTE: use this when you have token expiration, change as necessary
// const isTokenExpired = () => {
//   try {
//       const decoded = decode(secured.token);

//       if (decoded.exp < Date.now() / 1000) {
//           localStorage.removeItem('user');
//           localStorage.removeItem('loggingIn');
//           return true;
//       }
//       return false;
//   } catch (error) {
//       return false;
//   }
// };

const Api = axios.create({
  baseURL: '', // use BASE_URL if you have any version
});

// NOTE: set auth headers, check whether user is logged-in and session not expired, change as necessary
// if (secured != null && !isTokenExpired()) {
//   // Add token bearer for authenticated request
//   Api.defaults.headers.common.Authorization = secured.token;
// }

// Add a request interceptor
Api.interceptors.request.use(
    config => {
        // Do something before request is sent
        // in redux we can call store dispatch here
        return config;
    },
    error => {
        // in redux we can call store dispatch here
        return Promise.reject(error);
    }
);

// Add a response interceptor
Api.interceptors.response.use(
    response => {
        // Do something with response data
        // in redux we can call store dispatch here
        return response;
    },
    error => {
        // in redux we can call store dispatch here
        // in redux we can call store dispatch here
        return Promise.reject(error);
    }
);

export default Api;
