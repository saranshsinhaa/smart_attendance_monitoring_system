import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.NEXT_APP_API_BASE_URL}`,
});

const ENDPOINTS = {
  CLASS_LIST: '/specific-event/participants/all?device=esp8266',
  SIGNIN: '/auth/signin',
  SIGNUP: '/auth/signup',
};

export const getClassData = async () => {
  const { data } = await instance.get(ENDPOINTS.CLASS_LIST);
  return data;
};
