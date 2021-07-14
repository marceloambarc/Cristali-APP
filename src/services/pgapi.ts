import axios from 'axios';

const pgapi = axios.create({
  baseURL: 'https://api.pagseguro.com/'
});

const pgTESTapi = axios.create({
  baseURL: 'https://sandbox.api.pagseguro.com/'
})

export { pgapi, pgTESTapi }