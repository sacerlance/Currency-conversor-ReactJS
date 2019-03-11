
export default class RequestService {

  get (url, options) {
    console.log('request service: ', url);
    return this.__request('GET', url, options);
  }

  post (url, params, options) {
    return this.__request('POST', url, options, params);
  }

  put (url, params, options) {
    return this.__request('PUT', url, options, params);
  }

  patch (url, options) {
    return this.__request('PATCH', url, {}, options);
  }

  delete (url, options) {
    return this.__request('DELETE', url, options);
  }

  head (url, options) {
    return this.__request('HEAD', url, options);
  }

  async __request (method, url, options, params) {
    const response = await fetch(url, this.__setOptions(method, options, params));
    console.log('responseeee: ', response);
    if (response.status === 200) {
      return response.json();
    } else {
      const error = await response.json();
      throw error;
    }
  }

  __setOptions (method = 'GET', options = {}, params) {
    return {
      method: method,
      headers: Object.assign({}, {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, options),
  			body: JSON.stringify(params)
  		};
  }
}
