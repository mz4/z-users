export const apiService = async (method, data, endpoint) => {
  const response = await fetch(`${endpoint}`, {
    method: method,
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
