import { LOGIN_ENDPOINT, POST } from '../constants/constants';

export const loginApi = async (data) => {
  const response = await fetch(`${LOGIN_ENDPOINT}`, {
    method: POST,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    const dataRes = await response.json();
    return dataRes;
  } else {
    return Promise.reject(response);
  }
};
