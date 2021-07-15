import axios from 'axios';

const pgapi = axios.create({
  baseURL: 'https://api.pagseguro.com/',
  headers: {
      'Authorization': 'E13F11634B73408382A0A8DFBD0D477D',
      'x-api-version': '4.0',
      'Content-Type': 'application/json'
    }
});

const pgTESTapi = axios.create({
  baseURL: 'https://sandbox.api.pagseguro.com/',
  headers: {
    'Authorization': 'E13F11634B73408382A0A8DFBD0D477D',
    'x-api-version': '4.0',
    'Content-Type': 'application/json'
  }
})

export { pgapi, pgTESTapi }