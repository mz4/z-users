export class Request {
  constructor(data, endpoint, method) {
    this.data = data;
    this.endpoint = endpoint;
    this.method = method;
    this.settings = {
      method: this.method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.data)
    };
  }
  post = async () => {
    try {
      const response = await fetch(this.endpoint, this.settings);
      const responseJSON = await response.json();
      return responseJSON;
    } catch (e) {
      return e;
    }
  };
  get = async () => {
    try {
      const response = await fetch(this.endpoint);
      const responseJSON = await response.json();
      return responseJSON;
    } catch (e) {
      return e.message;
    }
  };
}
