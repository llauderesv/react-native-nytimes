import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.nytimes.com/svc/',
});

export default instance;
