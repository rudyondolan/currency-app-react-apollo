import axios from 'axios';

const BASEURL = 'https://exchangeratesapi.io/api/latest';

const request = axios.create({
  baseURL: BASEURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request endpoint
 * @param {String} base String currency code in 3 digits
 */
export function exchangeRatesApi(base = '') {
  if (base) {
    return request({
      method: 'get',
      params: {
        base,
      },
    });
  }

  return request({
    method: 'get',
  });
}
