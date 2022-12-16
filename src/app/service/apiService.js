export const apiService = async (endpoint, options = {}) => {
  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const opts = { ...defaultOptions, ...options };
  const response = await fetch(`${endpoint}`, opts);
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
};
