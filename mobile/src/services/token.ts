import axios from 'axios';
import { baseAPI } from '../../credentials.json';

const deviceToken = axios.create({
  baseURL: `${baseAPI}`,
})

export { deviceToken }