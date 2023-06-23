import axios from 'axios';

const customAxios = axios.create({
  // baseURL: process.env.BASE_URL,
  // console.log('process.env.BASE_URL')
  // baseURL: process.env.BASE_URL,
  baseURL: `http://192.168.1.100:4000`,
})

customAxios.interceptors.request.use(
    function (request) {
      return request;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

customAxios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

export default customAxios;