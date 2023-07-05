import axios from 'axios';
const TIMEOUT_DURATION = 15000; //15 sec
// console.log("process",process.env.BACKEND_SOCKET_URL);
const customAxios = axios.create({
  // baseURL: process.env.BACKEND_SOCKET_URL,
  // console.log('process.env.BASE_URL')
  // baseURL: process.env.BASE_URL,
  baseURL: `https://icall-socket-service-dev-ht7hh6taza-as.a.run.app`,
  timeout: TIMEOUT_DURATION,
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
      if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
        // Handle network timeout error
        return Promise.reject(new Error('Network request timed out.'));
      }
      return Promise.reject(error);
    },
  );

export default customAxios;