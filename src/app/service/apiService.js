export const apiService = async (endpoint, options = {}) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
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
