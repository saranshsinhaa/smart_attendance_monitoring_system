import axios from 'axios';
import { useState } from 'react';

const instance = axios.create({
  baseURL: `${process.env.NEXT_APP_API_BASE_URL}`,
});

const ENDPOINTS = {
  CLASS_LIST: '/specific-event/participants/all?device=esp8266-1',
  SIGNIN: '/auth/signin',
  SIGNUP: '/auth/signup',
  UPDATE: '/specific-event/participants/specific/update?device=esp8266-1',
};

export const getClassData = async () => {
  const { data } = await instance.get(ENDPOINTS.CLASS_LIST);
  return data;
};

export const updateAttendance = async (updateData) => {
  console.log(updateData);
  await instance.patch(
    `https://onsite-rfid-backend.onrender.com/api/specific-event/participants/specific/update?device=esp8266-1`,
    updateData
  );
};

export const login = async (userData) => {
  //   const [userData, setUserData] = useState({
  //     email: email,
  //     password: password,
  //   });
  try {
    const response = await instance.post(ENDPOINTS.SIGNIN, userData);
    return response;
  } catch (error) {
    console.error(
      'You have an error in your code or there are Network issues.',
      error
    );

    const { response } = error;
    setUserData(
      Object.assign({}, userData, {
        error: response ? response.statusText : error.message,
      })
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setUserData(Object.assign({}, userData, { error: '' }));

    const username = userData.username;
    const url = '/api/login';

    try {
      const response = await fetch(url, {
        method: 'POST',

        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
      });
      if (response.status === 200) {
        const { token } = await response.json();
        await login({ token });
      } else {
        console.log('Login failed.');
        // https://github.com/developit/unfetch#caveats
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    } catch (error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      );

      const { response } = error;
      setUserData(
        Object.assign({}, userData, {
          error: response ? response.statusText : error.message,
        })
      );
    }
  }
};
