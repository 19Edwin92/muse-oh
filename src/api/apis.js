import axios from "axios";
import { cookies } from "../shared/cookies";

// 토큰없이 보낼때
export const apis = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// 토큰 넣어서 보낼때
const apis_token = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

apis_token.interceptors.request.use(
  // 요청을 보내기 전 수행되는 함수
  function (config) {
    const token = cookies.get("token");
    config.headers.Authorization = `${token}`; //토큰 오는것 확인하고 수정할것
    return config;
  },

  // 오류 요청을 보내기 전 수행되는 함수
  function (error) {
    return Promise.reject(error);
    // return error X
    // return Promise.reject O
  }
);

apis.interceptors.response.use(
  // 응답을 내보내기 전 수행되는 함수
  function (response) {
    return response;
  },

  // 오류 응답을 내보내기 전 수행되는 함수
  function (error) {
    return Promise.reject(error);
  }
);

export default apis;
